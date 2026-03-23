// src/lib/frame-utils.ts

export type ResolutionTier = 'desktop' | 'mobile';
export type PageId =
  | 'homepage'
  | 'brand-development'
  | 'video-marketing'
  | 'social-media'
  | 'ugc-influencer'
  | 'smartsuite'
  | 'ai-education';

const MOBILE_BREAKPOINT = 768;

export function getResolutionTier(viewportWidth: number): ResolutionTier {
  return viewportWidth < MOBILE_BREAKPOINT ? 'mobile' : 'desktop';
}

export function getFramePath(
  pageId: PageId,
  frameNumber: number,
  tier: ResolutionTier
): string {
  const padded = String(frameNumber).padStart(4, '0');
  return `/frames/${pageId}/${tier}/frame-${padded}.png`;
}

export function getLoopPath(pageId: PageId, loopId: string): string {
  return `/loops/${pageId}/${loopId}.mp4`;
}

export function progressToFrame(progress: number, totalFrames: number): number {
  const clamped = Math.max(0, Math.min(1, progress));
  return Math.max(1, Math.round(clamped * (totalFrames - 1)) + 1);
}

export function frameToProgress(frame: number, totalFrames: number): number {
  return (frame - 1) / (totalFrames - 1);
}
