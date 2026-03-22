"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  getFramePath,
  getResolutionTier,
  type PageId,
  type ResolutionTier,
} from "@/lib/frame-utils";

const INITIAL_BATCH_SIZE = 30;
const BATCH_SIZE = 30;
const LOOK_AHEAD = 60;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 500;
const FALLBACK_TIMEOUT_MS = 10_000;

export interface UseFrameLoaderReturn {
  frames: React.MutableRefObject<(HTMLImageElement | null)[]>;
  loadingProgress: number;
  isInitialLoadComplete: boolean;
  isFallback: boolean;
  updateCurrentFrame: (frameIndex: number) => void;
}

function loadImageWithRetry(
  src: string,
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY_MS
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => {
      if (retries > 0) {
        setTimeout(() => {
          loadImageWithRetry(src, retries - 1, delay).then(resolve).catch(reject);
        }, delay);
      } else {
        reject(new Error(`Failed to load: ${src}`));
      }
    };
    img.src = src;
  });
}

export function useFrameLoader(pageId: PageId, totalFrames: number): UseFrameLoaderReturn {
  const frames = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
  const loadedBatches = useRef<Set<number>>(new Set());
  const [loadedCount, setLoadedCount] = useState(0);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  const tier = useRef<ResolutionTier>("desktop");

  const loadBatch = useCallback(
    async (batchIndex: number) => {
      if (loadedBatches.current.has(batchIndex)) return;
      loadedBatches.current.add(batchIndex);

      const startFrame = batchIndex * BATCH_SIZE + 1;
      const endFrame = Math.min(startFrame + BATCH_SIZE - 1, totalFrames);

      const promises = [];
      for (let i = startFrame; i <= endFrame; i++) {
        const idx = i - 1;
        promises.push(
          loadImageWithRetry(getFramePath(pageId, i, tier.current))
            .then((img) => {
              frames.current[idx] = img;
              setLoadedCount((prev) => prev + 1);
            })
            .catch(() => {})
        );
      }

      await Promise.allSettled(promises);
    },
    [pageId, totalFrames]
  );

  const updateCurrentFrame = useCallback(
    (frameIndex: number) => {
      const currentBatch = Math.floor(frameIndex / BATCH_SIZE);
      const lookAheadBatch = Math.floor((frameIndex + LOOK_AHEAD) / BATCH_SIZE);

      for (let b = currentBatch; b <= lookAheadBatch; b++) {
        if (b * BATCH_SIZE < totalFrames) {
          loadBatch(b);
        }
      }
    },
    [loadBatch, totalFrames]
  );

  useEffect(() => {
    tier.current = getResolutionTier(window.innerWidth);

    const fallbackTimer = setTimeout(() => {
      setIsFallback(true);
    }, FALLBACK_TIMEOUT_MS);

    // Load initial batch; mark complete (or trigger fallback) when done
    loadBatch(0).then(() => {
      setIsInitialLoadComplete(true);
      clearTimeout(fallbackTimer);
    });

    return () => clearTimeout(fallbackTimer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    frames,
    loadingProgress: loadedCount / totalFrames,
    isInitialLoadComplete,
    isFallback,
    updateCurrentFrame,
  };
}
