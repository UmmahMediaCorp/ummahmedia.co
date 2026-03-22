'use client';

import { useRef, useState, useCallback } from 'react';

export function useVideoLoop(src: string | null) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  }, []);

  const fadeIn = useCallback(() => {
    setOpacity(1);
  }, []);

  const fadeOut = useCallback(() => {
    setOpacity(0);
  }, []);

  return {
    videoRef,
    isReady,
    play,
    pause,
    opacity,
    fadeIn,
    fadeOut,
  };
}
