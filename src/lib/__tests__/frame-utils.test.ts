import { describe, it, expect } from 'vitest';
import {
  getResolutionTier,
  getFramePath,
  getLoopPath,
  progressToFrame,
  frameToProgress,
} from '../frame-utils';

describe('getResolutionTier', () => {
  it('returns mobile below 768px', () => {
    expect(getResolutionTier(767)).toBe('mobile');
  });
  it('returns desktop at 768px and above', () => {
    expect(getResolutionTier(768)).toBe('desktop');
  });
});

describe('getFramePath', () => {
  it('generates correct path for homepage desktop frame', () => {
    expect(getFramePath('homepage', 1, 'desktop'))
      .toBe('/frames/homepage/desktop/frame-0001.webp');
  });
  it('generates correct path for service page mobile frame', () => {
    expect(getFramePath('brand-development', 42, 'mobile'))
      .toBe('/frames/brand-development/mobile/frame-0042.webp');
  });
  it('pads frame numbers to 4 digits', () => {
    expect(getFramePath('homepage', 1200, 'desktop'))
      .toBe('/frames/homepage/desktop/frame-1200.webp');
  });
});

describe('getLoopPath', () => {
  it('generates correct loop video path', () => {
    expect(getLoopPath('homepage', 'scene-1-1'))
      .toBe('/loops/homepage/scene-1-1.mp4');
  });
});

describe('progressToFrame / frameToProgress', () => {
  it('maps 0 progress to frame 1', () => {
    expect(progressToFrame(0, 1800)).toBe(1);
  });
  it('maps 1.0 progress to last frame', () => {
    expect(progressToFrame(1, 1800)).toBe(1800);
  });
  it('round trips correctly', () => {
    const frame = 900;
    const total = 1800;
    const progress = frameToProgress(frame, total);
    expect(progressToFrame(progress, total)).toBe(frame);
  });
});
