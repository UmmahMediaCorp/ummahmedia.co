export interface ServiceInfo {
  id: string;
  name: string;
  tagline: string;
  route: string;
}

export const SERVICES: ServiceInfo[] = [
  { id: 'brand-development', name: 'Brand Development', tagline: 'Your marketing general contractor', route: '/brand-development' },
  { id: 'video-marketing', name: 'Video Marketing', tagline: 'Stories that move hearts', route: '/video-marketing' },
  { id: 'social-media', name: 'Social Media Marketing', tagline: 'Revenue. Not likes.', route: '/social-media' },
  { id: 'ugc-influencer', name: 'UGC & Influencer Agency', tagline: 'Real people. Real influence.', route: '/ugc-influencer' },
  { id: 'smartsuite', name: 'SmartSuite', tagline: 'AI-powered business systems', route: '/smartsuite' },
  { id: 'ai-education', name: 'AI Education', tagline: 'The future is for the prepared', route: '/ai-education' },
];
