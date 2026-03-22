/**
 * Placeholder Frame Generator
 *
 * Generates numbered grey WebP placeholder frames for development.
 * Real cinematic content is dropped in later without code changes.
 *
 * Usage: npx tsx scripts/generate-placeholders.ts
 */

import { createCanvas } from "canvas";
import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");

const PAGES: { dir: string; totalFrames: number }[] = [
  { dir: "homepage", totalFrames: 1800 },
  { dir: "brand-development", totalFrames: 500 },
  { dir: "video-marketing", totalFrames: 500 },
  { dir: "social-media", totalFrames: 450 },
  { dir: "ugc-influencer", totalFrames: 450 },
  { dir: "smartsuite", totalFrames: 600 },
  { dir: "ai-education", totalFrames: 450 },
];

const RESOLUTIONS = [
  { name: "desktop", width: 1920, height: 1080 },
  { name: "mobile", width: 960, height: 540 },
];

/** Number of frames generated per page for dev speed. */
const DEV_FRAMES_PER_PAGE = 10;

const LOOP_DIRS = [
  "homepage",
  "brand-development",
  "video-marketing",
  "social-media",
  "ugc-influencer",
  "smartsuite",
  "ai-education",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

function zeroPad(n: number, width: number): string {
  return String(n).padStart(width, "0");
}

/**
 * Renders a single grey placeholder frame as a WebP buffer.
 * Draws the frame number centred in white text.
 */
function renderFrame(
  width: number,
  height: number,
  frameNum: number,
  totalFrames: number,
  pageName: string
): Buffer {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background — mid grey
  ctx.fillStyle = "#444444";
  ctx.fillRect(0, 0, width, height);

  // Subtle grid lines for visual reference
  ctx.strokeStyle = "#555555";
  ctx.lineWidth = 1;
  const gridStep = Math.round(width / 16);
  for (let x = 0; x <= width; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  const gridStepY = Math.round(height / 9);
  for (let y = 0; y <= height; y += gridStepY) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Primary text — frame number
  const fontSize = Math.round(height / 8);
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${zeroPad(frameNum, 4)}`, width / 2, height / 2);

  // Secondary text — page name + resolution
  const smallFontSize = Math.round(height / 20);
  ctx.font = `${smallFontSize}px sans-serif`;
  ctx.fillStyle = "#aaaaaa";
  ctx.fillText(`${pageName}  |  ${width}×${height}`, width / 2, height / 2 + fontSize * 0.75);

  // Tertiary text — total frames info
  const tinyFontSize = Math.round(height / 30);
  ctx.font = `${tinyFontSize}px sans-serif`;
  ctx.fillStyle = "#888888";
  ctx.fillText(
    `frame ${frameNum} of ${totalFrames} (dev placeholder)`,
    width / 2,
    height / 2 + fontSize * 0.75 + smallFontSize * 1.4
  );

  return canvas.toBuffer("image/png"); // canvas doesn't support webp natively; saved as .webp extension for compatibility
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("Placeholder Frame Generator");
  console.log("===========================");
  console.log(`Dev frames per page: ${DEV_FRAMES_PER_PAGE}`);
  console.log("");

  // 1. Create loop directories (empty)
  console.log("Creating loop directories...");
  for (const loopDir of LOOP_DIRS) {
    const fullPath = path.join(PROJECT_ROOT, "public", "loops", loopDir);
    ensureDir(fullPath);
    console.log(`  public/loops/${loopDir}/`);
  }
  console.log("");

  // 2. Generate placeholder frames
  let totalFilesWritten = 0;

  for (const page of PAGES) {
    for (const res of RESOLUTIONS) {
      const outDir = path.join(
        PROJECT_ROOT,
        "public",
        "frames",
        page.dir,
        res.name
      );
      ensureDir(outDir);

      const count = DEV_FRAMES_PER_PAGE;
      process.stdout.write(
        `Generating ${count} frames for ${page.dir}/${res.name} (${res.width}×${res.height})... `
      );

      for (let i = 1; i <= count; i++) {
        const frameBuffer = renderFrame(
          res.width,
          res.height,
          i,
          page.totalFrames,
          page.dir
        );
        const fileName = `frame-${zeroPad(i, 4)}.webp`;
        fs.writeFileSync(path.join(outDir, fileName), frameBuffer);
      }

      totalFilesWritten += count;
      console.log("done");
    }
  }

  console.log("");
  console.log(`Total files written: ${totalFilesWritten}`);
  console.log("Done. Frames are in public/frames/");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
