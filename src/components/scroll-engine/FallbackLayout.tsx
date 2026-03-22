'use client';

import type { Scene } from '@/lib/scenes';
import type { PageId } from '@/lib/frame-utils';

interface FallbackLayoutProps {
  scenes: Scene[];
  pageId: PageId;
}

export default function FallbackLayout({ scenes }: FallbackLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {scenes.map((scene) => {
        if (!scene.text) return null;

        return (
          <section
            key={scene.id}
            className="flex min-h-[50vh] items-center justify-center px-8"
          >
            <h2 className="font-cinzel max-w-3xl text-center text-3xl leading-relaxed tracking-[0.1em] text-white/90 uppercase md:text-5xl">
              {scene.text}
            </h2>
          </section>
        );
      })}
    </div>
  );
}
