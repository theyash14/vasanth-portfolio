import {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  RESEND_API_KEY,
  TURNSTILE_SECRET_KEY,
} from 'astro:env/server';
import type { APIRoute } from 'astro';
import { formatInquiryEmail, validateContactSubmission } from '@/lib/contact';

export const prerender = false;

const JSON_HEADERS = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
};

type TurnstileResult = {
  success: boolean;
  action?: string;
  hostname?: string;
};

function json(message: string, status: number): Response {
  return new Response(JSON.stringify({ message }), { status, headers: JSON_HEADERS });
}

function isConfigured(value: string | undefined): value is string {
  return Boolean(value?.trim());
}

export const POST: APIRoute = async ({ request }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json('Please submit the contact form from the website.', 415);
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > 16_384) {
    return json('That inquiry is too large to send.', 413);
  }

  if (
    !isConfigured(RESEND_API_KEY) ||
    !isConfigured(TURNSTILE_SECRET_KEY) ||
    !isConfigured(CONTACT_FROM_EMAIL) ||
    !isConfigured(CONTACT_TO_EMAIL)
  ) {
    console.error('Contact endpoint is missing required environment variables.');
    return json('Email is temporarily unavailable. Please use the Gmail link instead.', 503);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json('Please check the form and try again.', 400);
  }

  const validation = validateContactSubmission(body);
  if (!validation.success) {
    return json(validation.message, 400);
  }

  const submission = validation.data;
  const requestHostname = new URL(request.url).hostname;
  let turnstileResult: TurnstileResult;

  try {
    const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET_KEY,
        response: submission.turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP') ?? undefined,
        idempotency_key: crypto.randomUUID(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!verification.ok) throw new Error(`Turnstile returned ${verification.status}`);
    turnstileResult = (await verification.json()) as TurnstileResult;
  } catch (error) {
    console.error('Turnstile verification failed.', error);
    return json('Verification is unavailable right now. Please try again.', 502);
  }

  const hostnameMatches =
    !turnstileResult.hostname ||
    requestHostname === 'localhost' ||
    requestHostname === '127.0.0.1' ||
    turnstileResult.hostname === requestHostname;

  if (!turnstileResult.success || turnstileResult.action !== 'contact' || !hostnameMatches) {
    return json('Verification failed. Please try again.', 403);
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: submission.email,
        subject: `Portfolio inquiry: ${submission.projectType} from ${submission.name}`,
        text: formatInquiryEmail(submission),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected a contact email.', resendResponse.status);
      return json('The message could not be sent. Please try again or use the Gmail link.', 502);
    }
  } catch (error) {
    console.error('Resend request failed.', error);
    return json('The message could not be sent. Please try again or use the Gmail link.', 502);
  }

  return json('Thanks - your project details are on their way.', 200);
};

export const ALL: APIRoute = () => json('Method not allowed.', 405);
