import { describe, it, expect } from 'vitest';
import { getPageConfig, getSceneAtFrame, getSceneProgress } from '../scenes';

describe('getPageConfig', () => {
  it('returns homepage config with correct total frames', () => {
    const config = getPageConfig('homepage');
    expect(config.totalFrames).toBe(1800);
    expect(config.scenes.length).toBeGreaterThan(0);
  });
  it('returns brand-development config', () => {
    const config = getPageConfig('brand-development');
    expect(config.totalFrames).toBe(500);
  });
  it('returns all 7 page configs', () => {
    const pages = ['homepage', 'brand-development', 'video-marketing', 'social-media', 'ugc-influencer', 'smartsuite', 'ai-education'] as const;
    pages.forEach(pageId => {
      const config = getPageConfig(pageId);
      expect(config.pageId).toBe(pageId);
      expect(config.totalFrames).toBeGreaterThan(0);
      expect(config.scenes.length).toBeGreaterThan(0);
    });
  });
});

describe('getSceneAtFrame', () => {
  it('returns first scene for frame 1', () => {
    const config = getPageConfig('homepage');
    const scene = getSceneAtFrame(config.scenes, 1);
    expect(scene?.id).toBe('0.1');
  });
  it('returns undefined for frame 0', () => {
    const config = getPageConfig('homepage');
    const scene = getSceneAtFrame(config.scenes, 0);
    expect(scene).toBeUndefined();
  });
  it('returns last scene for last frame', () => {
    const config = getPageConfig('homepage');
    const scene = getSceneAtFrame(config.scenes, 1800);
    expect(scene).toBeDefined();
    expect(scene?.id).toBe('10.2');
  });
});

describe('getSceneProgress', () => {
  it('returns 0 at scene start', () => {
    const config = getPageConfig('homepage');
    const scene = config.scenes[0];
    expect(getSceneProgress(scene, scene.startFrame)).toBeCloseTo(0, 1);
  });
  it('returns 1 at scene end', () => {
    const config = getPageConfig('homepage');
    const scene = config.scenes[0];
    expect(getSceneProgress(scene, scene.endFrame)).toBeCloseTo(1, 1);
  });
});
