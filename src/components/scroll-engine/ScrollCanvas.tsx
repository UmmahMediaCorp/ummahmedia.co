'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import { useFrameLoader } from '@/hooks/useFrameLoader';
import { getLoopPath, type PageId } from '@/lib/frame-utils';
import type { Scene } from '@/lib/scenes';
import { VideoLoop } from './VideoLoop';
import SectionOverlay from './SectionOverlay';
import ScrollProgress from './ScrollProgress';
import FallbackLayout from './FallbackLayout';

interface ScrollCanvasProps {
  pageId: PageId;
  scenes: Scene[];
  totalFrames: number;
  onProgressChange?: (progress: number) => void;
  onSceneChange?: (scene: Scene) => void;
  onFallback?: () => void;
  children?: React.ReactNode;
}

export default function ScrollCanvas({
  pageId,
  scenes,
  totalFrames,
  onProgressChange,
  onSceneChange,
  onFallback,
  children,
}: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);
  const isPlayingRef = useRef(false);
  const currentSectionRef = useRef(0);
  const scrollCooldownRef = useRef(false);

  const [currentFrame, setCurrentFrame] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showLoop, setShowLoop] = useState(false);
  const [loopSrc, setLoopSrc] = useState<string | null>(null);

  const { frames, isInitialLoadComplete, isFallback, updateCurrentFrame } =
    useFrameLoader(pageId, totalFrames);

  // Trigger fallback callback
  useEffect(() => {
    if (isFallback && onFallback) onFallback();
  }, [isFallback, onFallback]);

  // Draw a frame to the canvas with cover-crop behavior (retina-aware)
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.width / dpr;
    const displayH = canvas.height / dpr;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const scale = Math.max(displayW / imgW, displayH / imgH);
    const sw = displayW / scale;
    const sh = displayH / scale;
    const sx = (imgW - sw) / 2;
    const sy = (imgH - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  }, []);

  // Draw frame at given index, falling back to nearest loaded frame
  const drawFrameAtIndex = useCallback(
    (index: number) => {
      let frameImg = frames.current[index];
      if (!frameImg) {
        for (let i = index - 1; i >= 0; i--) {
          if (frames.current[i]) {
            frameImg = frames.current[i];
            break;
          }
        }
      }
      if (frameImg) drawFrame(frameImg);
    },
    [frames, drawFrame]
  );

  // Resize canvas to match viewport
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(window.innerWidth * dpr);
    const h = Math.round(window.innerHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    drawFrameAtIndex(currentFrameRef.current);
  }, [drawFrameAtIndex]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Start video loop crossfade when a section finishes
  const startLoopCrossfade = useCallback(
    (scene: Scene) => {
      if (!scene.loopId) return;
      const src = getLoopPath(pageId, scene.loopId);
      setLoopSrc(src);
      setShowLoop(true);
    },
    [pageId]
  );

  // Stop video loop crossfade when scrolling resumes
  const stopLoopCrossfade = useCallback(() => {
    setShowLoop(false);
  }, []);

  // Play a section's frames at 24fps
  const playSection = useCallback(
    (sectionIndex: number, reverse: boolean = false): Promise<void> => {
      return new Promise((resolve) => {
        if (sectionIndex < 0 || sectionIndex >= scenes.length) {
          resolve();
          return;
        }
        if (isPlayingRef.current) {
          resolve();
          return;
        }

        stopLoopCrossfade();
        isPlayingRef.current = true;

        const scene = scenes[sectionIndex];
        const startFrame = scene.startFrame - 1; // 0-indexed
        const endFrame = scene.endFrame - 1;

        let frameIdx = reverse ? endFrame : startFrame;
        const FPS_INTERVAL = 1000 / 24;
        let lastTime = performance.now();

        // Preload frames for this section
        for (let i = startFrame; i <= endFrame; i++) {
          updateCurrentFrame(i);
        }

        const playNext = (now: number) => {
          const done = reverse ? frameIdx < startFrame : frameIdx > endFrame;
          if (done) {
            isPlayingRef.current = false;
            currentSectionRef.current = sectionIndex;

            const p = reverse
              ? (scene.startFrame - 1) / totalFrames
              : scene.endFrame / totalFrames;
            setProgress(p);
            onProgressChange?.(p);

            // Update current frame state for overlays
            const finalFrame = reverse ? scene.startFrame : scene.endFrame;
            setCurrentFrame(finalFrame);
            onSceneChange?.(scene);

            // Start video loop if scene has one
            startLoopCrossfade(scene);

            resolve();
            return;
          }

          const elapsed = now - lastTime;
          if (elapsed >= FPS_INTERVAL) {
            lastTime = now - (elapsed % FPS_INTERVAL);
            currentFrameRef.current = frameIdx;
            drawFrameAtIndex(frameIdx);

            // Update frame state for overlays mid-playback
            const frame1 = frameIdx + 1; // back to 1-indexed
            setCurrentFrame(frame1);

            const p = frameIdx / totalFrames;
            setProgress(p);
            onProgressChange?.(p);

            if (reverse) {
              frameIdx--;
            } else {
              frameIdx++;
            }
          }
          requestAnimationFrame(playNext);
        };
        requestAnimationFrame(playNext);
      });
    },
    [
      scenes,
      totalFrames,
      drawFrameAtIndex,
      updateCurrentFrame,
      onProgressChange,
      onSceneChange,
      stopLoopCrossfade,
      startLoopCrossfade,
    ]
  );

  // Scroll, touch, and keyboard input handling
  useEffect(() => {
    if (!isInitialLoadComplete) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isPlayingRef.current || scrollCooldownRef.current) return;

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (delta > 10) {
        const nextSection = currentSectionRef.current + 1;
        if (nextSection < scenes.length) {
          scrollCooldownRef.current = true;
          playSection(nextSection);
          setTimeout(() => {
            scrollCooldownRef.current = false;
          }, 300);
        }
      } else if (delta < -10) {
        const prevSection = currentSectionRef.current - 1;
        if (prevSection >= 0) {
          scrollCooldownRef.current = true;
          playSection(prevSection, true);
          setTimeout(() => {
            scrollCooldownRef.current = false;
          }, 300);
        }
      }
    };

    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isPlayingRef.current || scrollCooldownRef.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffY) > 50 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY > 0) {
          const nextSection = currentSectionRef.current + 1;
          if (nextSection < scenes.length) {
            scrollCooldownRef.current = true;
            playSection(nextSection);
            setTimeout(() => {
              scrollCooldownRef.current = false;
            }, 300);
          }
        } else {
          const prevSection = currentSectionRef.current - 1;
          if (prevSection >= 0) {
            scrollCooldownRef.current = true;
            playSection(prevSection, true);
            setTimeout(() => {
              scrollCooldownRef.current = false;
            }, 300);
          }
        }
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (isPlayingRef.current) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const nextSection = currentSectionRef.current + 1;
        if (nextSection < scenes.length) playSection(nextSection);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const prevSection = currentSectionRef.current - 1;
        if (prevSection >= 0) playSection(prevSection, true);
      }
    };

    // Lock page scroll
    document.body.style.overflow = 'hidden';

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [isInitialLoadComplete, playSection, scenes]);

  // Auto-play first section on load
  useEffect(() => {
    if (isInitialLoadComplete) {
      drawFrameAtIndex(0);
      setTimeout(() => {
        playSection(0);
      }, 500);
    }
  }, [isInitialLoadComplete, drawFrameAtIndex, playSection]);

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Fallback: reduced motion or failed frame loading
  if (prefersReducedMotion || isFallback) {
    return <FallbackLayout scenes={scenes} pageId={pageId} />;
  }

  // Loading state
  if (!isInitialLoadComplete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <div className="mb-4 text-lg font-cinzel tracking-widest">
            Loading experience...
          </div>
          <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-300"
              style={{
                width: `${Math.round(
                  (frames.current.filter(Boolean).length / 30) * 100
                )}%`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0">
      {/* Video loop layer — sits behind canvas, fades in when canvas fades out */}
      <VideoLoop src={loopSrc} isActive={showLoop} />

      {/* Canvas layer */}
      <canvas
        ref={(el) => {
          (canvasRef as React.MutableRefObject<HTMLCanvasElement | null>).current = el;
          if (el) resizeCanvas();
        }}
        className="fixed left-0 top-0 h-screen w-screen transition-opacity duration-500"
        style={{
          zIndex: 2,
          opacity: showLoop ? 0 : 1,
        }}
      />

      {/* Text overlays */}
      <SectionOverlay scenes={scenes} currentFrame={currentFrame} />

      {/* Interactive overlay children from parent page */}
      {children && (
        <div className="fixed inset-0" style={{ zIndex: 15 }}>
          {children}
        </div>
      )}

      {/* Progress bar */}
      <ScrollProgress progress={progress} />
    </div>
  );
}
