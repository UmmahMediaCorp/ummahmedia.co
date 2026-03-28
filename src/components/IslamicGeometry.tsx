import { useMemo } from 'react';

function generateStar(cx: number, cy: number, outerR: number, innerR: number, points: number) {
  const coords: [number, number][] = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    coords.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }
  return coords.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ') + 'Z';
}

function generateOctagon(cx: number, cy: number, r: number, rotation = 0) {
  const pts: [number, number][] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8 + rotation - Math.PI / 2;
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }
  return pts;
}

export function HeroPattern() {
  const size = 500;
  const c = size / 2;

  const paths = useMemo(() => {
    const outerOct = generateOctagon(c, c, 220);
    const innerOct = generateOctagon(c, c, 140, Math.PI / 8);
    const coreOct = generateOctagon(c, c, 80);

    const starPath = generateStar(c, c, 220, 90, 8);
    const innerStarPath = generateStar(c, c, 140, 60, 8);

    const octPath = (pts: [number, number][]) =>
      pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ') + 'Z';

    const radials = outerOct.map(
      (p) => `M${c},${c}L${p[0].toFixed(2)},${p[1].toFixed(2)}`
    );

    const crossLines = innerOct.map(
      (p) => `M${c},${c}L${p[0].toFixed(2)},${p[1].toFixed(2)}`
    );

    return { starPath, innerStarPath, outerOctPath: octPath(outerOct), innerOctPath: octPath(innerOct), coreOctPath: octPath(coreOct), radials, crossLines };
  }, [c]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-[min(85vw,85vh)] h-[min(85vw,85vh)] opacity-[0.035]"
        style={{ animation: 'spin-slow 240s linear infinite' }}
        fill="none"
        stroke="#D4A843"
      >
        <path d={paths.starPath} strokeWidth="0.6" />
        <path d={paths.innerStarPath} strokeWidth="0.4" />
        <path d={paths.outerOctPath} strokeWidth="0.5" />
        <path d={paths.innerOctPath} strokeWidth="0.3" />
        <path d={paths.coreOctPath} strokeWidth="0.4" />
        {paths.radials.map((d, i) => (
          <path key={`r${i}`} d={d} strokeWidth="0.2" opacity="0.6" />
        ))}
        {paths.crossLines.map((d, i) => (
          <path key={`c${i}`} d={d} strokeWidth="0.15" opacity="0.4" />
        ))}
        {[60, 100, 160, 200].map((r) => (
          <circle key={r} cx={c} cy={c} r={r} strokeWidth="0.15" opacity="0.3" />
        ))}
      </svg>
    </div>
  );
}

export function SubtlePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="subtle-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d={generateStar(40, 40, 30, 12, 8)}
            fill="none"
            stroke="#D4A843"
            strokeWidth="0.3"
          />
          <circle cx="40" cy="40" r="18" fill="none" stroke="#D4A843" strokeWidth="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#subtle-geo)" />
    </svg>
  );
}
