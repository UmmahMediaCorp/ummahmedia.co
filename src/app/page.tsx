'use client';

import dynamic from 'next/dynamic';
import { getPageConfig } from '@/lib/scenes';

const ScrollCanvas = dynamic(
  () => import('@/components/scroll-engine/ScrollCanvas'),
  { ssr: false }
);

export default function HomePage() {
  const config = getPageConfig('homepage');
  return (
    <ScrollCanvas
      pageId={config.pageId}
      scenes={config.scenes}
      totalFrames={config.totalFrames}
    />
  );
}
