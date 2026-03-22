'use client';

import type { Scene } from '@/lib/scenes';

interface SectionOverlayProps {
  scenes: Scene[];
  currentFrame: number;
}

export default function SectionOverlay({ scenes, currentFrame }: SectionOverlayProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center">
      {scenes.map((scene) => {
        if (!scene.text) return null;
        // Skip scenes with interactive overlays — they handle their own display
        if (scene.interactive) return null;

        const range = scene.endFrame - scene.startFrame;
        if (range === 0) return null;

        const progress = (currentFrame - scene.startFrame) / range;

        // Not in this scene's frame range
        if (progress < 0 || progress > 1) return null;

        // Fade: in over first 20%, full for middle 60%, out over last 20%
        let opacity = 0;
        if (progress < 0.2) {
          opacity = progress / 0.2;
        } else if (progress > 0.8) {
          opacity = (1 - progress) / 0.2;
        } else {
          opacity = 1;
        }

        if (opacity <= 0) return null;

        return (
          <div
            key={scene.id}
            className="absolute px-8 text-center"
            style={{ opacity }}
          >
            <h2
              className="font-cinzel text-4xl tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-6xl lg:text-7xl"
              style={{ fontWeight: 400 }}
            >
              {scene.text}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
