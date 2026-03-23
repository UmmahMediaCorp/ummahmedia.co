// src/lib/scenes.ts
import { PageId } from './frame-utils';

export interface Scene {
  id: string;
  name: string;
  startFrame: number;
  endFrame: number;
  text: string | null;
  loopId: string | null;
  interactive: string | null;
}

export interface PageConfig {
  pageId: PageId;
  title: string;
  totalFrames: number;
  scenes: Scene[];
}

const PAGE_CONFIGS: Record<PageId, PageConfig> = {
  homepage: {
    pageId: 'homepage',
    title: 'Homepage',
    totalFrames: 1800,
    scenes: [
      { id: '0.1', name: 'Darkness', startFrame: 1, endFrame: 73, text: null, loopId: null, interactive: null },
      { id: '1.1', name: 'Bismillah', startFrame: 74, endFrame: 173, text: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ', loopId: 'scene-1-1', interactive: null },
      { id: '1.2', name: 'The Desert Awakens', startFrame: 101, endFrame: 200, text: '1400 years ago, a revolution began.', loopId: 'scene-1-2', interactive: null },
      { id: '1.3', name: 'The Traders', startFrame: 201, endFrame: 350, text: "The first Muslims didn't conquer Indonesia. They traded with it. Excellence was their dawah.", loopId: 'scene-1-3', interactive: null },
      { id: '1.4', name: 'The Inventors', startFrame: 351, endFrame: 500, text: 'They built the first camera. Mapped the stars. Invented algebra.', loopId: 'scene-1-4', interactive: null },
      { id: '1.5', name: 'The Golden Age', startFrame: 501, endFrame: 650, text: 'For 800 years, Muslim civilization led the world.', loopId: 'scene-1-5', interactive: null },
      { id: '1.6', name: 'The Torch', startFrame: 651, endFrame: 800, text: 'The torch was carried. Generation after generation. Excellence as ibadah.', loopId: 'scene-1-6', interactive: null },
      { id: '2.1', name: 'The Shift', startFrame: 801, endFrame: 900, text: "Now it's our turn.", loopId: 'scene-2-1', interactive: null },
      { id: '2.2', name: 'Ummah Media Reveal', startFrame: 901, endFrame: 950, text: 'UMMAH MEDIA', loopId: 'scene-2-2', interactive: null },
      { id: '2.3', name: 'The Proof', startFrame: 951, endFrame: 1000, text: '42 Masjid Partners | 100K+ Community Reach | 10x Faster Production | 5x Avg. ROAS', loopId: 'scene-2-3', interactive: null },
      { id: '3.1', name: 'The Invitation', startFrame: 1001, endFrame: 1050, text: 'Which service benefits your organization the most?', loopId: 'scene-3-1', interactive: 'hub' },
      { id: '4.1', name: 'The Wasm', startFrame: 1051, endFrame: 1100, text: 'Muslim merchants were the first to brand. Your mark was your oath.', loopId: null, interactive: null },
      { id: '4.2', name: 'Modern Brand', startFrame: 1101, endFrame: 1150, text: 'WE BUILD ANYTHING YOUR BRAND NEEDS', loopId: null, interactive: null },
      { id: '4.3', name: 'What We Build', startFrame: 1151, endFrame: 1200, text: '23% Revenue lift | 3.5x ROI | 80% Trust from visuals', loopId: 'scene-4-3', interactive: 'mini-cta' },
      { id: '5.1', name: 'Camera Obscura', startFrame: 1201, endFrame: 1250, text: 'Ibn al-Haytham captured light itself. We carry that science forward.', loopId: null, interactive: null },
      { id: '5.2', name: 'Modern Production', startFrame: 1251, endFrame: 1300, text: 'STORIES THAT MOVE HEARTS', loopId: null, interactive: null },
      { id: '5.3', name: 'The Funnel', startFrame: 1301, endFrame: 1350, text: 'YOUR HOOK IS EVERYTHING.', loopId: 'scene-5-3', interactive: 'mini-cta' },
      { id: '6.1', name: 'The Hajj Network', startFrame: 1351, endFrame: 1400, text: 'The hajj was the original social network.', loopId: null, interactive: null },
      { id: '6.2', name: 'Modern Social', startFrame: 1401, endFrame: 1450, text: 'REVENUE. NOT LIKES. THAT\'S THE DIFFERENCE.', loopId: null, interactive: null },
      { id: '6.3', name: 'The Engine', startFrame: 1451, endFrame: 1500, text: 'Your social media should be a revenue engine.', loopId: 'scene-6-3', interactive: 'mini-cta' },
      { id: '7.1', name: 'The Isnad', startFrame: 1501, endFrame: 1530, text: 'The isnad — the original influencer verification.', loopId: null, interactive: null },
      { id: '7.2', name: 'Modern Creators', startFrame: 1531, endFrame: 1560, text: 'REAL PEOPLE. REAL INFLUENCE.', loopId: null, interactive: null },
      { id: '7.3', name: 'The Roster', startFrame: 1561, endFrame: 1590, text: '79% say UGC impacts decisions | 12x more engagement', loopId: 'scene-7-3', interactive: 'mini-cta' },
      { id: '8.1', name: 'The Mudaraba', startFrame: 1591, endFrame: 1620, text: 'Muslims pioneered systematic business.', loopId: null, interactive: null },
      { id: '8.2', name: 'Modern Systems', startFrame: 1621, endFrame: 1650, text: 'AI-POWERED BUSINESS SYSTEMS', loopId: null, interactive: null },
      { id: '8.3', name: 'The 5 Modules', startFrame: 1651, endFrame: 1680, text: 'One system. Zero gaps.', loopId: 'scene-8-3', interactive: 'mini-cta' },
      { id: '9.1', name: 'Iqra', startFrame: 1681, endFrame: 1710, text: 'اقْرَأْ — Read. The first revelation was a command to learn.', loopId: null, interactive: null },
      { id: '9.2', name: 'Modern AI', startFrame: 1711, endFrame: 1740, text: 'THE FUTURE IS FOR THE PREPARED', loopId: null, interactive: null },
      { id: '9.3', name: 'The Programs', startFrame: 1741, endFrame: 1760, text: '12+ hrs saved per week | 10x faster production', loopId: 'scene-9-3', interactive: 'mini-cta' },
      { id: '10.1', name: 'Convergence', startFrame: 1761, endFrame: 1780, text: 'The torch has been carried for 1400 years.', loopId: null, interactive: null },
      { id: '10.2', name: 'Your Turn', startFrame: 1781, endFrame: 1800, text: 'Ready to build something that matters?', loopId: 'scene-10-2', interactive: 'booking' },
    ],
  },

  'brand-development': {
    pageId: 'brand-development',
    title: 'Brand Development',
    totalFrames: 500,
    scenes: [
      { id: '1.1', name: 'Entry', startFrame: 1, endFrame: 70, text: 'BRAND DEVELOPMENT', loopId: 'scene-1-1', interactive: null },
      { id: '1.2', name: 'The Metaphor', startFrame: 71, endFrame: 150, text: 'Property development, but digital.', loopId: 'scene-1-2', interactive: null },
      { id: '1.3', name: 'The Audit', startFrame: 151, endFrame: 220, text: 'We audit everything — your strategy, your visuals, your content, your systems.', loopId: 'scene-1-3', interactive: null },
      { id: '1.4', name: 'The 8 Components', startFrame: 221, endFrame: 300, text: "Most businesses don't need a full rebrand.", loopId: 'scene-1-4', interactive: 'cards' },
      { id: '1.5', name: 'The Process', startFrame: 301, endFrame: 370, text: 'Audit & Diagnose | Scope & Prioritize | Build & Develop | Implement & Handoff', loopId: 'scene-1-5', interactive: null },
      { id: '1.6', name: 'The Proof', startFrame: 371, endFrame: 430, text: '23% Revenue lift | 3.5x ROI | 80% Trust from visuals | 100% Gaps filled', loopId: 'scene-1-6', interactive: null },
      { id: '1.7', name: 'The Close', startFrame: 431, endFrame: 500, text: "LET'S DEVELOP YOUR BRAND.", loopId: 'scene-1-7', interactive: 'booking' },
    ],
  },

  'video-marketing': {
    pageId: 'video-marketing',
    title: 'Video Marketing',
    totalFrames: 500,
    scenes: [
      { id: '2.1', name: 'Entry', startFrame: 1, endFrame: 70, text: 'VIDEO MARKETING', loopId: 'scene-2-1', interactive: null },
      { id: '2.2', name: 'The Hook', startFrame: 71, endFrame: 150, text: 'YOUR HOOK IS EVERYTHING.', loopId: 'scene-2-2', interactive: null },
      { id: '2.3', name: 'The Funnel', startFrame: 151, endFrame: 250, text: 'The right video at the right time.', loopId: 'scene-2-3', interactive: 'accordion' },
      { id: '2.4', name: 'The Craft', startFrame: 251, endFrame: 320, text: 'Pre-Production | Production | Post-Production | Optimize & Distribute', loopId: 'scene-2-4', interactive: null },
      { id: '2.5', name: 'The Arsenal', startFrame: 321, endFrame: 390, text: 'Cinematic brand films, short-form content, and event coverage.', loopId: 'scene-2-5', interactive: 'cards' },
      { id: '2.6', name: 'The Impact', startFrame: 391, endFrame: 440, text: '2 SEC attention | 91% use video | 87% increased sales | 12x more shares', loopId: 'scene-2-6', interactive: null },
      { id: '2.7', name: 'The Close', startFrame: 441, endFrame: 500, text: 'READY TO TELL YOUR STORY?', loopId: 'scene-2-7', interactive: 'booking' },
    ],
  },

  'social-media': {
    pageId: 'social-media',
    title: 'Social Media Marketing',
    totalFrames: 450,
    scenes: [
      { id: '3.1', name: 'Entry', startFrame: 1, endFrame: 70, text: 'SOCIAL MEDIA MARKETING', loopId: 'scene-3-1', interactive: null },
      { id: '3.2', name: 'The Problem', startFrame: 71, endFrame: 150, text: "REVENUE. NOT LIKES. THAT'S THE DIFFERENCE.", loopId: 'scene-3-2', interactive: null },
      { id: '3.3', name: 'The Engine', startFrame: 151, endFrame: 230, text: 'Your social media should be a revenue engine.', loopId: 'scene-3-3', interactive: null },
      { id: '3.4', name: 'The 8 Services', startFrame: 231, endFrame: 330, text: null, loopId: 'scene-3-4', interactive: 'cards' },
      { id: '3.5', name: 'The Process', startFrame: 331, endFrame: 390, text: 'Business Audit | Social Strategy | Execute & Engage | Measure & Optimize', loopId: 'scene-3-5', interactive: null },
      { id: '3.6', name: 'The Close', startFrame: 391, endFrame: 450, text: "LET'S MAKE SOCIAL MEDIA PAY.", loopId: 'scene-3-6', interactive: 'booking' },
    ],
  },

  'ugc-influencer': {
    pageId: 'ugc-influencer',
    title: 'UGC & Influencer Agency',
    totalFrames: 450,
    scenes: [
      { id: '4.1', name: 'Entry', startFrame: 1, endFrame: 70, text: 'UGC & INFLUENCER AGENCY', loopId: 'scene-4-1', interactive: null },
      { id: '4.2', name: 'The Psychology', startFrame: 71, endFrame: 150, text: 'PEOPLE TRUST PEOPLE. NOT BRANDS.', loopId: 'scene-4-2', interactive: null },
      { id: '4.3', name: 'The Roster', startFrame: 151, endFrame: 220, text: 'MUSLIM CREATORS. CURATED.', loopId: 'scene-4-3', interactive: null },
      { id: '4.4', name: 'The Formats', startFrame: 221, endFrame: 300, text: null, loopId: 'scene-4-4', interactive: 'cards' },
      { id: '4.5', name: 'The Services', startFrame: 301, endFrame: 380, text: null, loopId: 'scene-4-5', interactive: 'cards' },
      { id: '4.6', name: 'The Close', startFrame: 381, endFrame: 450, text: 'LET REAL VOICES SELL.', loopId: 'scene-4-6', interactive: 'booking' },
    ],
  },

  smartsuite: {
    pageId: 'smartsuite',
    title: 'SmartSuite',
    totalFrames: 600,
    scenes: [
      { id: '5.1', name: 'Entry', startFrame: 1, endFrame: 80, text: 'SMARTSUITE', loopId: 'scene-5-1', interactive: null },
      { id: '5.2', name: 'The Problem', startFrame: 81, endFrame: 170, text: 'MODULAR. CONNECTED. INTELLIGENT.', loopId: 'scene-5-2', interactive: null },
      { id: '5.3', name: 'The 5 Modules', startFrame: 171, endFrame: 280, text: null, loopId: 'scene-5-3', interactive: 'module-explorer' },
      { id: '5.4', name: 'Smart Site Deep Dive', startFrame: 281, endFrame: 380, text: 'A team of AI agents studies your business.', loopId: 'scene-5-4', interactive: null },
      { id: '5.5', name: 'The Flow', startFrame: 381, endFrame: 450, text: 'ONE SYSTEM. ZERO GAPS.', loopId: 'scene-5-5', interactive: null },
      { id: '5.6', name: 'Custom Build', startFrame: 451, endFrame: 520, text: 'Not sure which modules?', loopId: 'scene-5-6', interactive: null },
      { id: '5.7', name: 'The Close', startFrame: 521, endFrame: 600, text: 'BUILD YOUR SMARTSUITE.', loopId: 'scene-5-7', interactive: 'booking' },
    ],
  },

  'ai-education': {
    pageId: 'ai-education',
    title: 'AI Education',
    totalFrames: 450,
    scenes: [
      { id: '6.1', name: 'Entry', startFrame: 1, endFrame: 70, text: 'AI EDUCATION', loopId: 'scene-6-1', interactive: null },
      { id: '6.2', name: 'The Revelation', startFrame: 71, endFrame: 160, text: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', loopId: 'scene-6-2', interactive: null },
      { id: '6.3', name: 'The Landscape', startFrame: 161, endFrame: 260, text: "AI ISN'T COMING. IT'S HERE.", loopId: 'scene-6-3', interactive: 'accordion' },
      { id: '6.4', name: 'The Programs', startFrame: 261, endFrame: 350, text: null, loopId: 'scene-6-4', interactive: 'cards' },
      { id: '6.5', name: "Who It's For", startFrame: 351, endFrame: 400, text: 'Muslim Entrepreneurs | Community Organizations | Content Creators | Professionals', loopId: 'scene-6-5', interactive: null },
      { id: '6.6', name: 'The Close', startFrame: 401, endFrame: 450, text: 'JOIN THE AI REVOLUTION.', loopId: 'scene-6-6', interactive: 'booking' },
    ],
  },
};

export function getPageConfig(pageId: PageId): PageConfig {
  return PAGE_CONFIGS[pageId];
}

export function getSceneAtFrame(scenes: Scene[], frame: number): Scene | undefined {
  if (frame < 1) return undefined;
  return scenes.find(scene => frame >= scene.startFrame && frame <= scene.endFrame);
}

export function getSceneProgress(scene: Scene, frame: number): number {
  const range = scene.endFrame - scene.startFrame;
  if (range === 0) return 0;
  return (frame - scene.startFrame) / range;
}
