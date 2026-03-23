'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { getPageConfig, type Scene } from '@/lib/scenes';
import type { ServiceInfo } from '@/lib/services';
import CinematicLayout from '@/components/layout/CinematicLayout';
import HeroIntro from '@/components/layout/HeroIntro';
import ServiceHub from '@/components/interactive/ServiceHub';
import MiniCTA from '@/components/interactive/MiniCTA';
import BookingCTA from '@/components/interactive/BookingCTA';
import PageTransition from '@/components/transitions/PageTransition';

const ScrollCanvas = dynamic(
  () => import('@/components/scroll-engine/ScrollCanvas'),
  { ssr: false }
);

interface MiniCTAConfig {
  label: string;
  route: string;
  secondaryLabel?: string;
  secondaryRoute?: string;
}

const MINI_CTA_CONFIG: Record<string, MiniCTAConfig> = {
  '4.3': {
    label: 'Explore Brand Development',
    route: '/brand-development',
  },
  '5.3': {
    label: 'Explore Video Marketing',
    route: '/video-marketing',
  },
  '6.3': {
    label: 'Explore Social Media Marketing',
    route: '/social-media',
  },
  '7.3': {
    label: 'Explore UGC & Influencer',
    route: '/ugc-influencer',
    secondaryLabel: 'Are You a Muslim Creator? Join the Roster',
    secondaryRoute: '/ugc-influencer#creators',
  },
  '8.3': {
    label: 'Explore SmartSuite',
    route: '/smartsuite',
  },
  '9.3': {
    label: 'Explore AI Education',
    route: '/ai-education',
  },
};

const CALENDLY_URL = 'https://calendly.com/ummahmedia/strategy-call';

export default function HomePage() {
  const router = useRouter();
  const config = getPageConfig('homepage');
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [showHero, setShowHero] = useState(true);
  const [showHub, setShowHub] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [targetRoute, setTargetRoute] = useState('');

  const handleSceneChange = useCallback((scene: Scene) => {
    setCurrentScene(scene);
    if (scene.id === '3.1') {
      setShowHub(true);
    } else {
      setShowHub(false);
    }
  }, []);

  const handleServiceSelect = useCallback((service: ServiceInfo) => {
    setTargetRoute(service.route);
    setTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    router.push(targetRoute);
  }, [router, targetRoute]);

  const handleContinueScrolling = useCallback(() => {
    setShowHub(false);
  }, []);

  const handleMiniCTANavigate = useCallback((route: string) => {
    setTargetRoute(route);
    setTransitioning(true);
  }, []);

  const handleBooked = useCallback(() => {
    // Phase 5 will handle the cinematic outro
    console.log('Booking scheduled — cinematic outro to be implemented in Phase 5');
  }, []);

  return (
    <CinematicLayout>
      {showHero && <HeroIntro onComplete={() => setShowHero(false)} />}
      <ScrollCanvas
        pageId={config.pageId}
        scenes={config.scenes}
        totalFrames={config.totalFrames}
        onSceneChange={handleSceneChange}
      >
        {/* Service Hub — scene 3.1 */}
        <ServiceHub
          isVisible={showHub}
          onServiceSelect={handleServiceSelect}
          onContinueScrolling={handleContinueScrolling}
        />

        {/* Mini-CTAs for each service preview — scenes 4.3 through 9.3 */}
        {Object.entries(MINI_CTA_CONFIG).map(([sceneId, cfg]) => (
          <MiniCTA
            key={sceneId}
            isVisible={
              currentScene?.id === sceneId &&
              currentScene?.interactive === 'mini-cta'
            }
            label={cfg.label}
            route={cfg.route}
            secondaryLabel={cfg.secondaryLabel}
            secondaryRoute={cfg.secondaryRoute}
            onNavigate={handleMiniCTANavigate}
          />
        ))}

        {/* Booking CTA — scene 10.2 */}
        <BookingCTA
          isVisible={
            currentScene?.id === '10.2' &&
            currentScene?.interactive === 'booking'
          }
          heading="Ready to build something that matters?"
          subheading="وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ"
          description="Free 30-minute strategy call. No pressure, no generic pitch. Just an honest conversation about where your business could be."
          calendlyUrl={CALENDLY_URL}
          onBooked={handleBooked}
        />
      </ScrollCanvas>
      <PageTransition
        isActive={transitioning}
        onComplete={handleTransitionComplete}
      />
    </CinematicLayout>
  );
}
