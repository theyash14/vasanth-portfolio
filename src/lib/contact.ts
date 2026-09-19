export const PROJECT_TYPES = [
  'Brand film',
  'Social reel',
  'Personal brand',
  'Motion graphics',
  'AI-assisted edit',
  'Other',
] as const;

export type ContactSubmission = {
  name: string;
  email: string;
  projectType: (typeof PROJECT_TYPES)[number];
  deadline: string;
  details: string;
  turnstileToken: string;
};

type ValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasControlCharacters(value: string): boolean {
  return Array.from(value).some((character) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return codePoint <= 31 || codePoint === 127;
  });
}

function readString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContactSubmission(input: unknown): ValidationResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { success: false, message: 'Please check the form and try again.' };
  }

  const body = input as Record<string, unknown>;
  const name = readString(body.name);
  const email = readString(body.email).toLowerCase();
  const projectType = readString(body.projectType);
  const deadline = readString(body.deadline);
  const details = readString(body.details);
  const honeypot = readString(body.company);
  const turnstileToken = readString(body['cf-turnstile-response']);

  if (honeypot) {
    return { success: false, message: 'Unable to send this inquiry.' };
  }

  if (name.length < 2 || name.length > 80 || hasControlCharacters(name)) {
    return { success: false, message: 'Enter a name between 2 and 80 characters.' };
  }

  if (email.length > 254 || !EMAIL_PATTERN.test(email) || hasControlCharacters(email)) {
    return { success: false, message: 'Enter a valid email address.' };
  }

  if (!PROJECT_TYPES.includes(projectType as ContactSubmission['projectType'])) {
    return { success: false, message: 'Choose a valid project type.' };
  }

  if (deadline.length > 100 || hasControlCharacters(deadline)) {
    return { success: false, message: 'Keep the deadline under 100 characters.' };
  }

  if (details.length < 20 || details.length > 3000) {
    return { success: false, message: 'Project details must be between 20 and 3,000 characters.' };
  }

  if (!turnstileToken || turnstileToken.length > 2048) {
    return { success: false, message: 'Complete the verification and try again.' };
  }

  return {
    success: true,
    data: {
      name,
      email,
      projectType: projectType as ContactSubmission['projectType'],
      deadline,
      details,
      turnstileToken,
    },
  };
}

export function formatInquiryEmail(submission: ContactSubmission): string {
  return [
    'New portfolio inquiry',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Project type: ${submission.projectType}`,
    `Deadline: ${submission.deadline || 'Flexible'}`,
    '',
    'Project details:',
    submission.details,
  ].join('\n');
}
