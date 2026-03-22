'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { getPageConfig, type Scene } from '@/lib/scenes';
import CinematicLayout from '@/components/layout/CinematicLayout';
import ServiceHub from '@/components/interactive/ServiceHub';
import type { ServiceInfo } from '@/lib/services';

const ScrollCanvas = dynamic(
  () => import('@/components/scroll-engine/ScrollCanvas'),
  { ssr: false }
);

export default function HomePage() {
  const config = getPageConfig('homepage');
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);

  const handleSceneChange = useCallback((scene: Scene) => {
    setCurrentScene(scene);
  }, []);

  // TODO Task 3.x: route to service page on select
  const handleServiceSelect = useCallback((_service: ServiceInfo) => {
    // service routing will be wired in a later task
  }, []);

  // TODO Task 3.x: programmatically advance scroll on continue
  const handleContinueScrolling = useCallback(() => {
    // will trigger ScrollCanvas to advance to next section
  }, []);

  return (
    <CinematicLayout>
      <ScrollCanvas
        pageId={config.pageId}
        scenes={config.scenes}
        totalFrames={config.totalFrames}
        onSceneChange={handleSceneChange}
      >
        {/* Service Hub — appears at scene 3.1 when interactive === 'hub' */}
        <ServiceHub
          isVisible={currentScene?.interactive === 'hub'}
          onServiceSelect={handleServiceSelect}
          onContinueScrolling={handleContinueScrolling}
        />
      </ScrollCanvas>
    </CinematicLayout>
  );
}
