'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { getPageConfig, type Scene } from '@/lib/scenes';
import type { PageId } from '@/lib/frame-utils';
import CinematicLayout from '@/components/layout/CinematicLayout';
import InfoCards from '@/components/interactive/InfoCards';
import InfoAccordion from '@/components/interactive/InfoAccordion';
import ModuleExplorer, { type ModuleTile } from '@/components/interactive/ModuleExplorer';
import BookingCTA from '@/components/interactive/BookingCTA';

const ScrollCanvas = dynamic(
  () => import('@/components/scroll-engine/ScrollCanvas'),
  { ssr: false }
);

// ---------------------------------------------------------------------------
// Content data types
// ---------------------------------------------------------------------------

interface CardItem {
  title: string;
  description: string;
  icon?: string;
}

interface AccordionItem {
  title: string;
  description: string;
  icon?: string;
}

// Re-export ModuleTile shape as ModuleItem for caller convenience
type ModuleItem = ModuleTile;

interface InteractiveContent {
  sceneId: string;
  type: 'cards' | 'accordion' | 'module-explorer';
  items: CardItem[] | AccordionItem[] | ModuleItem[];
  columns?: 2 | 3 | 4;
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ServiceFunnelPageProps {
  pageId: PageId;
  interactiveContent: InteractiveContent[];
  bookingHeadline: string;
  bookingSubheadline?: string;
  calendlyUrl?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const DEFAULT_CALENDLY_URL = 'https://calendly.com/ummahmedia/strategy-call';

export default function ServiceFunnelPage({
  pageId,
  interactiveContent,
  bookingHeadline,
  bookingSubheadline,
  calendlyUrl = DEFAULT_CALENDLY_URL,
}: ServiceFunnelPageProps) {
  const config = getPageConfig(pageId);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);

  const handleSceneChange = useCallback((scene: Scene) => {
    setCurrentScene(scene);
  }, []);

  // Called when the user completes booking — could trigger an outro in future
  const handleBooked = useCallback(() => {
    // No-op for now; cinematic outro can be wired here later
  }, []);

  const isBookingScene = currentScene?.interactive === 'booking';

  return (
    <CinematicLayout>
      <ScrollCanvas
        pageId={config.pageId}
        scenes={config.scenes}
        totalFrames={config.totalFrames}
        onSceneChange={handleSceneChange}
      >
        {/* Interactive overlays — one per scene entry in interactiveContent */}
        {interactiveContent.map((entry) => {
          const isVisible = currentScene?.id === entry.sceneId;

          if (entry.type === 'cards') {
            return (
              <InfoCards
                key={entry.sceneId}
                isVisible={isVisible}
                items={entry.items as CardItem[]}
                columns={entry.columns}
              />
            );
          }

          if (entry.type === 'accordion') {
            return (
              <InfoAccordion
                key={entry.sceneId}
                isVisible={isVisible}
                items={entry.items as AccordionItem[]}
              />
            );
          }

          if (entry.type === 'module-explorer') {
            return (
              <ModuleExplorer
                key={entry.sceneId}
                isVisible={isVisible}
                modules={entry.items as ModuleItem[]}
              />
            );
          }

          return null;
        })}

        {/* Booking CTA — always the last scene of any service page */}
        <BookingCTA
          isVisible={isBookingScene}
          heading={bookingHeadline}
          subheading={bookingSubheadline}
          calendlyUrl={calendlyUrl}
          onBooked={handleBooked}
        />
      </ScrollCanvas>
    </CinematicLayout>
  );
}
