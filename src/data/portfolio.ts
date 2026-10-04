export const profile = {
  name: 'Vasanth Srinivas',
  email: 'vasanthramesh.che@gmail.com',
  calUrl: 'https://cal.com/vasanth/30min',
  linkedin: 'https://www.linkedin.com/in/vasanth-srinivas07/',
  whatsapp: '#',
  instagram: 'https://www.instagram.com/meisvasanth/',
  introduction:
    'I’m Vasanth, a video editor specialising in high-impact edits, motion graphics, colour, and AI-assisted post-production. I work across brand content, social campaigns, personal branding, and digital ads, shaping raw footage into clear, engaging videos. My toolkit includes DaVinci Resolve, Premiere Pro, After Effects, Photoshop, and Blender 3D.',
};

export const tools = [
  {
    name: 'DaVinci Resolve',
    icon: 'thesvg-color:davinci-resolve',
  },
  {
    name: 'Premiere Pro',
    icon: 'thesvg-color:premierepro',
  },
  {
    name: 'After Effects',
    icon: 'thesvg-color:after-effects',
  },
  {
    name: 'Photoshop',
    icon: 'thesvg-color:photoshop',
  },
  {
    name: 'Blender 3D',
    icon: 'thesvg-color:blender',
  },
];

export const bunnyStreamLibraryId = '754279';

export const showreel = {
  bunnyVideoId: 'eb71f265-d61a-4581-bbe2-4907c183be93',
  title: "Vasanth's showreel",
};

export const personalVideos = [
  {
    bunnyVideoId: '6ae89f68-9db6-4137-98fd-42b5c2c586ff',
  },
  {
    bunnyVideoId: '51d01f72-23a9-4e93-813e-df12f618c204',
  },
  {
    bunnyVideoId: 'e2f37657-4410-4d24-bc50-bd5cf61fe7a6',
  },
];

type PortfolioClient = {
  id: string;
  tab: string;
  name: string;
  summary: string;
  videos: Array<{
    bunnyVideoId: string;
    format: 'video' | 'reel';
    aspect: 'landscape' | 'portrait' | 'square';
  }>;
};

export const clients = [
  {
    id: 'bharath-benz',
    tab: 'Bharath Benz',
    name: 'Bharath Benz',
    summary: 'Kilometer Millionaire is a 10-episode series for BharatBenz (Daimler Truck), celebrating drivers and their remarkable milestones. I served as the Editor for the complete series, handling storytelling, pacing, sound design, transitions, and colour grading.',
    videos: [
      {
        bunnyVideoId: 'fdea8a89-0387-4869-812b-7be2f848c679',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: 'c7432a3d-380a-4dd8-95c6-e337a4564c5f',
        format: 'video',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'mrf',
    tab: 'MRF',
    name: 'MRF',
    summary: 'MRF Racing & Tyres is a high-energy motorsport project showcasing racing, performance, and tyre technology. I worked on crafting dynamic visuals through creative editing, pacing, sound design, transitions, and colour grading.',
    videos: [
      {
        bunnyVideoId: 'ea117203-c1ba-4684-8f75-ac9397528001',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '9dc12266-3f32-4163-be45-89f95fe8c7e5',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '4d1bfdb9-6fb6-452d-8fd1-bac003ab5bfe',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '3687933c-c5ac-4ea8-ab79-d483417f3821',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: '40998bfb-660e-4523-adad-58aa3e3505b3',
        format: 'video',
        aspect: 'square',
      },
    ],
  },
  {
    id: 'marina-mall',
    tab: 'Marina Mall',
    name: 'Marina Mall',
    summary: 'Marina Mall is a lifestyle and entertainment project where I worked closely with the client, translating their ideas and requirements into engaging visual content while ensuring each deliverable aligned with the brand’s identity and communication goals.',
    videos: [
      {
        bunnyVideoId: '8501e128-0047-4647-88ca-36c1a00a7a00',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '64c69c3c-938c-4b67-8fde-6d206f3a8426',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'cfbd3d39-d56c-4697-a2b6-e4c96b4bfd3d',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '7e7e803e-e712-4f56-934e-307dd1aa565e',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '0d656352-f69a-4187-8989-c98d06637048',
        format: 'reel',
        aspect: 'portrait'
      },
      {
        bunnyVideoId: '13e7da23-0b4f-4bf9-bf57-5a26052f7527',
        format: 'reel',
        aspect: 'portrait'
      },
    ],
  },
  {
    id: 'sims',
    tab: 'SIMS',
    name: 'SIMS',
    summary: 'SIMS Hospital is a healthcare content project focused on communicating medical services and patient experiences through engaging visual storytelling. The content was crafted to maintain a professional, informative, and approachable tone while making complex healthcare subjects easy for audiences to understand.',
    videos: [
      {
        bunnyVideoId: '897864d1-b541-4179-88a9-f9edd728d42e',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '6ef45598-7b4d-4b10-86c6-317554be1853',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '9cda2eb4-4e11-4e10-a4e8-ead87aeb5ee5',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'fanly',
    tab: 'Fanly',
    name: 'Fanly',
    summary: 'Fanly is a fan engagement app designed to connect fans with their favourite creators and personalities. I worked on creating engaging content that showcased the platform’s interactive experience, features, and community-driven concept through a modern digital approach.',
    videos: [
      {
        bunnyVideoId: '7f8c574e-01ef-42a6-8be4-604ac47632f4',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '16b8eb17-e5b8-4e9f-bc40-dafe8690e074',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'e030a181-1672-418b-92fb-ece2e5f28142',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'restaurant',
    tab: 'Restaurant',
    name: 'Restaurant edits',
    summary: 'Worked on content for Aladipatiyan, Thenmanam, Filli Café, and Fuel, creating engaging visuals that showcased their food, ambience, and unique brand experiences through creative storytelling tailored to each restaurant.',
    videos: [
      {
        bunnyVideoId: 'edf76f8b-d5de-4a73-ae12-04b247b18dcf',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'aed133d6-7a97-4807-b92f-76e7561fe293',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'b6b8f1a1-0b5e-4ded-b255-673b37cee676',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'aad682b5-bfd8-446a-b47f-4396a938d254',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'd17243af-cbc6-4b6b-8c49-cc4da4d72422',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '01735fb2-812c-450e-b0ac-32da27e4f297',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'celebrities',
    tab: 'Celebrities',
    name: 'Celebrity edits',
    summary: 'Worked across celebrity events and entertainment projects featuring Soori, Mamitha, Suriya, Atharvaa, Kayadu, Nani, and Jason Vijay, handling event management, on-ground coordination, and video production to capture and deliver engaging event content.',
    videos: [
      {
        bunnyVideoId: 'aea4689d-6c46-42c1-b62e-df7ec698c8b9',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '33401354-3497-455a-8690-e2c9d15ea1d3',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '073dc9c5-88cc-42bd-ae68-7c75fd95bca6',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'personal-branding',
    tab: 'Personal branding',
    name: 'Personal branding',
    summary: 'Worked on personal branding projects for clients, creating content that reflected their personality, profession, and individual identity. Focused on developing a consistent visual presence and engaging storytelling tailored to each client’s audience and personal brand.',
    videos: [
      {
        bunnyVideoId: '0c3a8251-cc85-4fd6-89e2-22e5efcdc325',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '86a3f443-daed-48cd-83b5-b1d6f69eac64',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '8285d60c-689a-482a-9bd3-3375902b4f60',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'ai-works',
    tab: 'AI works',
    name: 'AI works',
    summary: 'Explored AI-powered creative projects, using generative AI to develop unique visuals, concepts, and video elements. Combined emerging AI tools with creative workflows to experiment with new styles and innovative approaches to visual storytelling.',
    videos: [
      {
        bunnyVideoId: 'c9b4453b-866f-4bff-bcaf-d9833f99a9e4',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: 'b71e030a-b1bc-4335-80ea-83529974c99a',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'c0c105b0-3b12-4b58-8143-c36ee72d3d9d',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '3b7ac186-9d37-49a8-befb-acddadc48162',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'a167675b-5976-4455-94e1-a1fec8dccaba',
        format: 'video',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'more-works',
    tab: 'More work',
    name: 'More client work',
    summary: 'Here are some of my other works',
    videos: [
      {
        bunnyVideoId: '3ea399f5-fb7d-4029-848e-33e1f560ecd1',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: '7a086fbd-cb15-4ca0-a6d7-a9ecabe39962',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'fbd6c6ff-fa3b-4a24-a3de-ad49962faf61',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '583423a5-b921-410b-8e49-d26e99bc3858',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
] satisfies PortfolioClient[];
