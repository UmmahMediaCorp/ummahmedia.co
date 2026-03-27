'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoCards from '@/components/interactive/InfoCards';

const BRAND_COMPONENTS = [
  { title: 'Consulting & Audit', description: 'Weekly strategy sessions to assess your brand and guide the entire build-out.', icon: '🎯' },
  { title: 'Custom Video', description: 'Short-form videos filmed, edited, and color-graded specifically for your brand.', icon: '🎬' },
  { title: 'Filming Days', description: 'On-location shoot days to capture video and photo content for your brand.', icon: '📷' },
  { title: 'Photography', description: 'Professional branded photos for social media, marketing, and your website.', icon: '🖼️' },
  { title: 'Branded IG Posts', description: 'Designed Instagram posts with your brand identity, colors, and typography.', icon: '📱' },
  { title: 'Landing Pages', description: 'High-converting pages built to capture leads or drive sales.', icon: '🌐' },
  { title: 'Social Media Mgmt', description: 'Dedicated management of your accounts — posting, engagement, and growth.', icon: '📊' },
  { title: 'Extras', description: 'Lead magnets, email sequences, and more — added to any package as needed.', icon: '✨' },
];

export default function BrandDevelopmentClient() {
  return (
    <ServiceFunnelPage
      pageId="brand-development"
      interactiveContent={{
        '1.4': <InfoCards items={BRAND_COMPONENTS} columns={4} isVisible />,
      }}
    />
  );
}
