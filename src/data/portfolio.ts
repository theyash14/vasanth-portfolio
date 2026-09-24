export const profile = {
  name: 'Vasanth Srinivas',
  email: 'vasanthramesh.che@gmail.com',
  calUrl: 'https://cal.com/your-name/intro',
  linkedin: 'https://www.linkedin.com/invasanth-srinivas07/',
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
  bunnyVideoId: 'fdea8a89-0387-4869-812b-7be2f848c679',
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
    duration: string;
    format: 'video' | 'reel';
    aspect: 'landscape' | 'portrait' | 'square';
  }>;
};

export const clients = [
  {
    id: 'bharath-benz',
    tab: 'Bharath Benz',
    name: 'Bharath Benz',
    summary: 'Two selected video edits created for Bharath Benz.',
    videos: [
      {
        bunnyVideoId: 'fdea8a89-0387-4869-812b-7be2f848c679',
        duration: '00:39',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: 'c7432a3d-380a-4dd8-95c6-e337a4564c5f',
        duration: '04:10',
        format: 'video',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'mrf',
    tab: 'MRF',
    name: 'MRF',
    summary: 'Four selected video edits created for MRF.',
    videos: [
      {
        bunnyVideoId: 'ea117203-c1ba-4684-8f75-ac9397528001',
        duration: '00:25',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '9dc12266-3f32-4163-be45-89f95fe8c7e5',
        duration: '00:21',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '4d1bfdb9-6fb6-452d-8fd1-bac003ab5bfe',
        duration: '00:32',
        format: 'video',
        aspect: 'square',
      },
      {
        bunnyVideoId: '73883c79-df22-4750-a9b7-b0601450c290',
        duration: '01:25',
        format: 'video',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'marina-mall',
    tab: 'Marina Mall',
    name: 'Marina Mall',
    summary: 'Four selected video edits created for Marina Mall.',
    videos: [
      {
        bunnyVideoId: '8501e128-0047-4647-88ca-36c1a00a7a00',
        duration: '00:26',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '64c69c3c-938c-4b67-8fde-6d206f3a8426',
        duration: '00:20',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'cfbd3d39-d56c-4697-a2b6-e4c96b4bfd3d',
        duration: '00:26',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '7e7e803e-e712-4f56-934e-307dd1aa565e',
        duration: '00:21',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'sims',
    tab: 'SIMS',
    name: 'SIMS',
    summary: 'Four selected video edits created for SIMS.',
    videos: [
      {
        bunnyVideoId: '897864d1-b541-4179-88a9-f9edd728d42e',
        duration: '00:33',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '6ef45598-7b4d-4b10-86c6-317554be1853',
        duration: '00:34',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '9cda2eb4-4e11-4e10-a4e8-ead87aeb5ee5',
        duration: '00:30',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'd65b7069-103b-4b58-b074-d23025f08cd4',
        duration: '00:33',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'fanly',
    tab: 'Fanly',
    name: 'Fanly',
    summary: 'Four selected video edits created for Fanly.',
    videos: [
      {
        bunnyVideoId: '7f8c574e-01ef-42a6-8be4-604ac47632f4',
        duration: '00:41',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '3b4586ae-d88e-47b5-a484-5ca6c86d04c5',
        duration: '00:14',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '16b8eb17-e5b8-4e9f-bc40-dafe8690e074',
        duration: '00:13',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'e030a181-1672-418b-92fb-ece2e5f28142',
        duration: '00:13',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'restaurant',
    tab: 'Restaurant',
    name: 'Restaurant edits',
    summary: 'Six food and hospitality video edits.',
    videos: [
      {
        bunnyVideoId: 'edf76f8b-d5de-4a73-ae12-04b247b18dcf',
        duration: '00:49',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'aed133d6-7a97-4807-b92f-76e7561fe293',
        duration: '00:24',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'b6b8f1a1-0b5e-4ded-b255-673b37cee676',
        duration: '00:18',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'aad682b5-bfd8-446a-b47f-4396a938d254',
        duration: '00:34',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'd17243af-cbc6-4b6b-8c49-cc4da4d72422',
        duration: '00:22',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '01735fb2-812c-450e-b0ac-32da27e4f297',
        duration: '00:17',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'celebrities',
    tab: 'Celebrities',
    name: 'Celebrity edits',
    summary: 'Four selected personality-led video edits.',
    videos: [
      {
        bunnyVideoId: 'aea4689d-6c46-42c1-b62e-df7ec698c8b9',
        duration: '01:01',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '33401354-3497-455a-8690-e2c9d15ea1d3',
        duration: '01:04',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '073dc9c5-88cc-42bd-ae68-7c75fd95bca6',
        duration: '01:12',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '583423a5-b921-410b-8e49-d26e99bc3858',
        duration: '00:35',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'personal-branding',
    tab: 'Personal branding',
    name: 'Personal branding',
    summary: 'Four videos shaped for personal brands.',
    videos: [
      {
        bunnyVideoId: 'd1dfbebf-3699-4df1-8279-dbad25b1cb3a',
        duration: '00:52',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '0c3a8251-cc85-4fd6-89e2-22e5efcdc325',
        duration: '00:35',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '86a3f443-daed-48cd-83b5-b1d6f69eac64',
        duration: '01:01',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: '8285d60c-689a-482a-9bd3-3375902b4f60',
        duration: '00:47',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'ai-works',
    tab: 'AI works',
    name: 'AI works',
    summary: 'Three edits exploring AI-assisted visual storytelling.',
    videos: [
      {
        bunnyVideoId: 'c9b4453b-866f-4bff-bcaf-d9833f99a9e4',
        duration: '01:19',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: 'b71e030a-b1bc-4335-80ea-83529974c99a',
        duration: '00:42',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'c0c105b0-3b12-4b58-8143-c36ee72d3d9d',
        duration: '00:23',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'more-works',
    tab: 'More work',
    name: 'More client work',
    summary: 'Three additional edits from recent projects.',
    videos: [
      {
        bunnyVideoId: '3ea399f5-fb7d-4029-848e-33e1f560ecd1',
        duration: '00:25',
        format: 'video',
        aspect: 'landscape',
      },
      {
        bunnyVideoId: '7a086fbd-cb15-4ca0-a6d7-a9ecabe39962',
        duration: '00:39',
        format: 'reel',
        aspect: 'portrait',
      },
      {
        bunnyVideoId: 'fbd6c6ff-fa3b-4a24-a3de-ad49962faf61',
        duration: '00:22',
        format: 'reel',
        aspect: 'portrait',
      },
    ],
  },
] satisfies PortfolioClient[];
