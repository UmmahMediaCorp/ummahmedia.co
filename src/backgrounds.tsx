import React from "react";

// Inline brand colors to avoid circular dependency with shared.tsx
const GOLD = "#C9A961";

// ═══════════════════════════════════════════
// ISLAMIC GEOMETRIC PATTERN (tileable SVG)
// ═══════════════════════════════════════════
export const IslamicPattern = ({
  opacity = 0.04,
  color = GOLD,
  style = {},
}: {
  opacity?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      opacity,
      overflow: "hidden",
      ...style,
    }}
  >
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <pattern
          id="islamic-geo"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* 8-pointed star pattern — angular, geometric */}
          <path
            d="M40 0L48 16L64 8L56 24L80 24L64 32L72 48L56 40L64 56L48 48L40 64L32 48L16 56L24 40L8 48L16 32L0 24L16 24L8 8L24 16Z"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />
          {/* Inner octagon */}
          <path
            d="M28 16H52L64 28V52L52 64H28L16 52V28Z"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            transform="scale(0.5) translate(40, 40)"
          />
          {/* Cross accents */}
          <line x1="40" y1="20" x2="40" y2="60" stroke={color} strokeWidth="0.3" />
          <line x1="20" y1="40" x2="60" y2="40" stroke={color} strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-geo)" />
    </svg>
  </div>
);

// ═══════════════════════════════════════════
// GOLD LIGHT RAYS
// ═══════════════════════════════════════════
export const GoldRays = ({
  opacity = 0.06,
  position = "50% 0%",
}: {
  opacity?: number;
  position?: string;
}) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      opacity,
      overflow: "hidden",
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <linearGradient id="ray-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.4" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Light rays radiating from top center */}
      <polygon points="600,0 520,800 480,800" fill="url(#ray-fade)" />
      <polygon points="600,0 680,800 720,800" fill="url(#ray-fade)" />
      <polygon points="600,0 350,800 300,800" fill="url(#ray-fade)" opacity="0.6" />
      <polygon points="600,0 850,800 900,800" fill="url(#ray-fade)" opacity="0.6" />
      <polygon points="600,0 150,800 80,800" fill="url(#ray-fade)" opacity="0.3" />
      <polygon points="600,0 1050,800 1120,800" fill="url(#ray-fade)" opacity="0.3" />
    </svg>
  </div>
);

// ═══════════════════════════════════════════
// WAVE DIVIDER (inline SVG replacement)
// ═══════════════════════════════════════════
export const WaveDivider = ({
  color = GOLD,
  opacity = 0.3,
  style = {},
}: {
  color?: string;
  opacity?: number;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      overflow: "hidden",
      opacity,
      ...style,
    }}
  >
    <svg
      viewBox="0 0 600 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "min(80%, 500px)", height: "auto" }}
    >
      <path
        d="M0 20C50 20 80 8 120 8C160 8 180 32 220 32C260 32 280 12 320 12C360 12 380 28 420 28C460 28 480 8 520 8C560 8 580 20 600 20"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  </div>
);

// ═══════════════════════════════════════════
// GRAIN TEXTURE OVERLAY
// ═══════════════════════════════════════════
const GrainOverlay = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      opacity: 0.02,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "128px 128px",
    }}
  />
);

// ═══════════════════════════════════════════
// CINEMATIC SECTION WRAPPER
// ═══════════════════════════════════════════
export const CinematicSection = ({
  variant = "section",
  children,
  style = {},
}: {
  variant?: "hero" | "section" | "cta";
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  const configs = {
    hero: {
      patternOpacity: 0.05,
      raysOpacity: 0.08,
      showRays: true,
    },
    section: {
      patternOpacity: 0.03,
      raysOpacity: 0,
      showRays: false,
    },
    cta: {
      patternOpacity: 0.04,
      raysOpacity: 0.05,
      showRays: true,
    },
  };

  const config = configs[variant];

  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      <IslamicPattern opacity={config.patternOpacity} />
      {config.showRays && <GoldRays opacity={config.raysOpacity} />}
      <GrainOverlay />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};
