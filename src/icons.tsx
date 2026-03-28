import React from "react";

// ─── Shared props for all brand icons ───
interface IconProps {
  size?: number;
  style?: React.CSSProperties;
  color?: string;
}

const defaults = (size: number, color: string, style?: React.CSSProperties): React.SVGAttributes<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style,
  stroke: color,
  strokeWidth: 1.8,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
});

// ═══════════════════════════════════════════
// 6 SERVICE ICONS
// ═══════════════════════════════════════════

export const BrandDevIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Diamond frame */}
    <path d="M24 4L44 24L24 44L4 24Z" strokeWidth={1.4} />
    {/* Inner pen nib */}
    <path d="M24 14L30 24L24 34L18 24Z" />
    {/* Horizontal line through center */}
    <line x1="14" y1="24" x2="34" y2="24" />
    {/* Small accent marks */}
    <line x1="24" y1="18" x2="24" y2="14" />
    <line x1="24" y1="34" x2="24" y2="30" />
  </svg>
);

export const VideoMarketingIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Camera body - angular rectangle */}
    <path d="M6 14H34V34H6V14Z" />
    {/* Lens triangle */}
    <path d="M34 18L44 14V34L34 30" />
    {/* Play triangle inside */}
    <path d="M16 20L26 24L16 28Z" fill={color} fillOpacity={0.15} />
    {/* Film strip accents top */}
    <line x1="10" y1="10" x2="10" y2="14" />
    <line x1="16" y1="10" x2="16" y2="14" />
    <line x1="22" y1="10" x2="22" y2="14" />
    {/* Base line */}
    <line x1="6" y1="38" x2="34" y2="38" strokeWidth={1.2} />
  </svg>
);

export const SocialMediaIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Central node */}
    <rect x="20" y="20" width="8" height="8" fill={color} fillOpacity={0.15} />
    {/* Top node */}
    <rect x="20" y="6" width="8" height="8" />
    {/* Bottom node */}
    <rect x="20" y="34" width="8" height="8" />
    {/* Left node */}
    <rect x="6" y="20" width="8" height="8" />
    {/* Right node */}
    <rect x="34" y="20" width="8" height="8" />
    {/* Connection lines */}
    <line x1="24" y1="14" x2="24" y2="20" />
    <line x1="24" y1="28" x2="24" y2="34" />
    <line x1="14" y1="24" x2="20" y2="24" />
    <line x1="28" y1="24" x2="34" y2="24" />
    {/* Diagonal connections */}
    <line x1="14" y1="14" x2="20" y2="20" strokeWidth={1.2} strokeDasharray="2 2" />
    <line x1="28" y1="28" x2="34" y2="34" strokeWidth={1.2} strokeDasharray="2 2" />
  </svg>
);

export const UgcInfluencerIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Person head - angular */}
    <path d="M20 8H28V16H20V8Z" />
    {/* Person body - angular */}
    <path d="M16 18H32V30H16V18Z" />
    {/* Broadcast lines - right */}
    <line x1="36" y1="16" x2="42" y2="12" />
    <line x1="36" y1="22" x2="44" y2="22" />
    <line x1="36" y1="28" x2="42" y2="32" />
    {/* Broadcast lines - left */}
    <line x1="12" y1="16" x2="6" y2="12" />
    <line x1="12" y1="22" x2="4" y2="22" />
    <line x1="12" y1="28" x2="6" y2="32" />
    {/* Base platform */}
    <line x1="12" y1="36" x2="36" y2="36" />
    <line x1="20" y1="30" x2="20" y2="36" />
    <line x1="28" y1="30" x2="28" y2="36" />
  </svg>
);

export const SmartSuiteIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Octagonal frame */}
    <path d="M18 4H30L44 18V30L30 44H18L4 30V18Z" strokeWidth={1.4} />
    {/* Inner circuit lines */}
    <line x1="18" y1="16" x2="30" y2="16" />
    <line x1="18" y1="24" x2="30" y2="24" />
    <line x1="18" y1="32" x2="30" y2="32" />
    {/* Vertical connectors */}
    <line x1="22" y1="16" x2="22" y2="32" />
    <line x1="26" y1="16" x2="26" y2="32" />
    {/* Corner nodes */}
    <rect x="16" y="14" width="4" height="4" fill={color} fillOpacity={0.2} />
    <rect x="28" y="14" width="4" height="4" fill={color} fillOpacity={0.2} />
    <rect x="16" y="30" width="4" height="4" fill={color} fillOpacity={0.2} />
    <rect x="28" y="30" width="4" height="4" fill={color} fillOpacity={0.2} />
  </svg>
);

export const AiEducationIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Open book */}
    <path d="M6 10H24V38H6V10Z" />
    <path d="M24 10H42V38H24V10Z" />
    {/* Spine */}
    <line x1="24" y1="10" x2="24" y2="38" strokeWidth={2} />
    {/* Circuit traces on right page */}
    <line x1="28" y1="16" x2="38" y2="16" />
    <line x1="28" y1="22" x2="36" y2="22" />
    <line x1="36" y1="16" x2="36" y2="22" />
    {/* Node dots on circuit */}
    <rect x="35" y="15" width="3" height="3" fill={color} fillOpacity={0.3} />
    {/* Text lines on left page */}
    <line x1="10" y1="16" x2="20" y2="16" strokeWidth={1.2} />
    <line x1="10" y1="20" x2="18" y2="20" strokeWidth={1.2} />
    <line x1="10" y1="24" x2="20" y2="24" strokeWidth={1.2} />
    <line x1="10" y1="28" x2="16" y2="28" strokeWidth={1.2} />
    {/* Base */}
    <line x1="4" y1="40" x2="44" y2="40" strokeWidth={1.2} />
  </svg>
);

// ═══════════════════════════════════════════
// 5 SMARTSUITE MODULE ICONS
// ═══════════════════════════════════════════

export const SmartFunnelIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Funnel shape - angular */}
    <path d="M6 8H42L30 24V38H18V24Z" />
    {/* Data flow dots */}
    <rect x="14" y="12" width="3" height="3" fill={color} fillOpacity={0.3} />
    <rect x="22" y="12" width="3" height="3" fill={color} fillOpacity={0.3} />
    <rect x="30" y="12" width="3" height="3" fill={color} fillOpacity={0.3} />
    {/* Output arrow */}
    <line x1="24" y1="38" x2="24" y2="44" />
    <line x1="20" y1="42" x2="24" y2="46" />
    <line x1="28" y1="42" x2="24" y2="46" />
  </svg>
);

export const SmartAgentIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Head - angular */}
    <path d="M14 8H34V28H14V8Z" />
    {/* Eyes */}
    <rect x="18" y="14" width="4" height="4" fill={color} fillOpacity={0.3} />
    <rect x="26" y="14" width="4" height="4" fill={color} fillOpacity={0.3} />
    {/* Mouth line */}
    <line x1="20" y1="22" x2="28" y2="22" />
    {/* Chat bubble */}
    <path d="M34 16H44V26H38L34 30V26" strokeWidth={1.4} />
    {/* Antenna */}
    <line x1="24" y1="4" x2="24" y2="8" />
    <line x1="22" y1="4" x2="26" y2="4" />
    {/* Body */}
    <path d="M18 28H30V38H18V28Z" />
    {/* Base */}
    <line x1="14" y1="40" x2="34" y2="40" />
  </svg>
);

export const SmartSiteIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Browser window */}
    <path d="M4 8H44V40H4V8Z" />
    {/* Title bar */}
    <line x1="4" y1="14" x2="44" y2="14" />
    {/* Title bar dots */}
    <rect x="7" y="10" width="2" height="2" fill={color} fillOpacity={0.4} />
    <rect x="11" y="10" width="2" height="2" fill={color} fillOpacity={0.4} />
    <rect x="15" y="10" width="2" height="2" fill={color} fillOpacity={0.4} />
    {/* Code brackets */}
    <path d="M14 22L10 26L14 30" fill="none" />
    <path d="M34 22L38 26L34 30" fill="none" />
    {/* Cursor line */}
    <line x1="22" y1="20" x2="26" y2="32" strokeWidth={1.4} />
  </svg>
);

export const SmartMediaIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Film strip */}
    <path d="M8 6H40V42H8V6Z" />
    {/* Sprocket holes left */}
    <rect x="10" y="10" width="4" height="4" />
    <rect x="10" y="20" width="4" height="4" />
    <rect x="10" y="30" width="4" height="4" />
    {/* Sprocket holes right */}
    <rect x="34" y="10" width="4" height="4" />
    <rect x="34" y="20" width="4" height="4" />
    <rect x="34" y="30" width="4" height="4" />
    {/* Play triangle center */}
    <path d="M20 18L30 24L20 30Z" fill={color} fillOpacity={0.15} />
  </svg>
);

export const SmartPortalIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Dashboard frame */}
    <path d="M4 6H44V42H4V6Z" />
    {/* Grid dividers */}
    <line x1="4" y1="14" x2="44" y2="14" />
    <line x1="24" y1="14" x2="24" y2="42" />
    <line x1="4" y1="28" x2="24" y2="28" />
    {/* Top bar accent */}
    <rect x="8" y="8" width="12" height="4" fill={color} fillOpacity={0.15} />
    {/* Chart bars in bottom-left */}
    <line x1="8" y1="38" x2="8" y2="32" strokeWidth={2.5} />
    <line x1="13" y1="38" x2="13" y2="34" strokeWidth={2.5} />
    <line x1="18" y1="38" x2="18" y2="30" strokeWidth={2.5} />
    {/* Metric in top-right */}
    <line x1="28" y1="18" x2="40" y2="18" strokeWidth={1.2} />
    <line x1="28" y1="22" x2="36" y2="22" strokeWidth={1.2} />
    {/* List items in bottom-right */}
    <line x1="28" y1="32" x2="40" y2="32" strokeWidth={1.2} />
    <line x1="28" y1="36" x2="38" y2="36" strokeWidth={1.2} />
  </svg>
);

// ═══════════════════════════════════════════
// 5 UGC FORMAT ICONS
// ═══════════════════════════════════════════

export const ProblemSolutionIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* X mark (problem) */}
    <line x1="8" y1="12" x2="18" y2="22" strokeWidth={2.2} />
    <line x1="18" y1="12" x2="8" y2="22" strokeWidth={2.2} />
    {/* Arrow */}
    <line x1="20" y1="24" x2="28" y2="24" />
    <line x1="26" y1="20" x2="30" y2="24" />
    <line x1="26" y1="28" x2="30" y2="24" />
    {/* Checkmark (solution) */}
    <path d="M32 22L36 28L44 14" strokeWidth={2.2} fill="none" />
    {/* Ground line */}
    <line x1="4" y1="38" x2="44" y2="38" strokeWidth={1.2} />
  </svg>
);

export const TestimonialIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Quote mark - large angular */}
    <path d="M8 10H20V22L14 32H8L14 22H8V10Z" fill={color} fillOpacity={0.1} />
    <path d="M26 10H38V22L32 32H26L32 22H26V10Z" fill={color} fillOpacity={0.1} />
    {/* Star below */}
    <path d="M24 36L20 42H28Z" fill={color} fillOpacity={0.2} />
    <line x1="24" y1="34" x2="24" y2="36" />
  </svg>
);

export const UnboxingIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Box body */}
    <path d="M8 20H40V42H8V20Z" />
    {/* Box flaps open */}
    <path d="M8 20L4 12H20L24 20" />
    <path d="M40 20L44 12H28L24 20" />
    {/* Reveal lines */}
    <line x1="24" y1="8" x2="24" y2="4" />
    <line x1="18" y1="8" x2="16" y2="4" />
    <line x1="30" y1="8" x2="32" y2="4" />
    {/* Inner line */}
    <line x1="16" y1="28" x2="32" y2="28" strokeWidth={1.2} />
  </svg>
);

export const HowToIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Step 1 */}
    <rect x="6" y="6" width="10" height="10" fill={color} fillOpacity={0.15} />
    <text x="11" y="14" textAnchor="middle" fill={color} fontSize="8" fontFamily="'Bebas Neue', sans-serif" stroke="none">1</text>
    <line x1="20" y1="11" x2="42" y2="11" strokeWidth={1.2} />
    {/* Step 2 */}
    <rect x="6" y="20" width="10" height="10" fill={color} fillOpacity={0.15} />
    <text x="11" y="28" textAnchor="middle" fill={color} fontSize="8" fontFamily="'Bebas Neue', sans-serif" stroke="none">2</text>
    <line x1="20" y1="25" x2="38" y2="25" strokeWidth={1.2} />
    {/* Step 3 */}
    <rect x="6" y="34" width="10" height="10" fill={color} fillOpacity={0.15} />
    <text x="11" y="42" textAnchor="middle" fill={color} fontSize="8" fontFamily="'Bebas Neue', sans-serif" stroke="none">3</text>
    <line x1="20" y1="39" x2="36" y2="39" strokeWidth={1.2} />
  </svg>
);

export const DayInLifeIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Sun arc */}
    <path d="M8 32C8 18 40 18 40 32" fill="none" />
    {/* Sun rays */}
    <line x1="24" y1="14" x2="24" y2="8" />
    <line x1="14" y1="18" x2="10" y2="14" />
    <line x1="34" y1="18" x2="38" y2="14" />
    {/* Horizon */}
    <line x1="4" y1="32" x2="44" y2="32" strokeWidth={1.4} />
    {/* Clock face below horizon */}
    <rect x="18" y="34" width="12" height="10" />
    <line x1="24" y1="36" x2="24" y2="39" strokeWidth={1.4} />
    <line x1="24" y1="39" x2="27" y2="39" strokeWidth={1.4} />
  </svg>
);

// ═══════════════════════════════════════════
// CONTACT FORM ICONS
// ═══════════════════════════════════════════

// Business Stage
export const JustStartingIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Seedling stem */}
    <line x1="24" y1="38" x2="24" y2="20" strokeWidth={2} />
    {/* Leaves - angular */}
    <path d="M24 24L16 16H24V24Z" fill={color} fillOpacity={0.1} />
    <path d="M24 20L32 12H24V20Z" fill={color} fillOpacity={0.1} />
    {/* Ground */}
    <line x1="12" y1="38" x2="36" y2="38" strokeWidth={1.4} />
    {/* Root lines */}
    <line x1="24" y1="38" x2="20" y2="44" strokeWidth={1.2} />
    <line x1="24" y1="38" x2="28" y2="44" strokeWidth={1.2} />
  </svg>
);

export const GrowingIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Ascending bars */}
    <rect x="8" y="30" width="6" height="12" fill={color} fillOpacity={0.1} />
    <rect x="17" y="24" width="6" height="18" fill={color} fillOpacity={0.15} />
    <rect x="26" y="18" width="6" height="24" fill={color} fillOpacity={0.2} />
    <rect x="35" y="10" width="6" height="32" fill={color} fillOpacity={0.25} />
    {/* Arrow trending up */}
    <path d="M8 28L20 20L30 14L42 6" fill="none" strokeWidth={1.8} />
    <path d="M36 6H42V12" fill="none" />
    {/* Base */}
    <line x1="6" y1="42" x2="44" y2="42" strokeWidth={1.2} />
  </svg>
);

export const RebuildingIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Circular arrows - angular style */}
    <path d="M24 8L36 14L36 22" fill="none" />
    <path d="M36 22L42 18L36 14" fill="none" />
    <path d="M36 22L24 28L12 22" fill="none" />
    <path d="M12 22L12 14L24 8" fill="none" />
    {/* Inner rebuild blocks */}
    <rect x="18" y="30" width="12" height="10" />
    <line x1="24" y1="30" x2="24" y2="40" strokeWidth={1.2} />
    <line x1="18" y1="35" x2="30" y2="35" strokeWidth={1.2} />
    {/* Arrow pointing up from blocks */}
    <line x1="24" y1="30" x2="24" y2="26" />
  </svg>
);

// Timeline
export const AsapIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Lightning bolt - angular */}
    <path d="M28 4L14 24H22L18 44L36 20H26Z" fill={color} fillOpacity={0.1} />
    <path d="M28 4L14 24H22L18 44L36 20H26Z" />
  </svg>
);

export const MonthsIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Calendar frame */}
    <path d="M6 12H42V42H6V12Z" />
    {/* Top bar */}
    <line x1="6" y1="18" x2="42" y2="18" />
    {/* Calendar hooks */}
    <line x1="14" y1="8" x2="14" y2="14" strokeWidth={2} />
    <line x1="34" y1="8" x2="34" y2="14" strokeWidth={2} />
    {/* Date range highlight */}
    <rect x="10" y="22" width="8" height="6" fill={color} fillOpacity={0.2} />
    <rect x="20" y="22" width="8" height="6" fill={color} fillOpacity={0.15} />
    <rect x="30" y="22" width="8" height="6" fill={color} fillOpacity={0.1} />
    {/* Grid dots */}
    <rect x="12" y="32" width="3" height="3" fill={color} fillOpacity={0.1} />
    <rect x="22" y="32" width="3" height="3" fill={color} fillOpacity={0.1} />
    <rect x="32" y="32" width="3" height="3" fill={color} fillOpacity={0.1} />
  </svg>
);

export const FlexibleIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Zigzag flexible lines */}
    <path d="M8 16L16 24L8 32" fill="none" />
    <path d="M16 16L24 24L16 32" fill="none" />
    <path d="M24 16L32 24L24 32" fill="none" />
    <path d="M32 16L40 24L32 32" fill="none" />
    {/* Horizontal center */}
    <line x1="4" y1="24" x2="44" y2="24" strokeWidth={1} strokeDasharray="2 3" />
  </svg>
);

// Budget
export const Budget1Icon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    <rect x="16" y="28" width="16" height="12" fill={color} fillOpacity={0.1} />
    <rect x="16" y="28" width="16" height="12" />
    <line x1="24" y1="32" x2="24" y2="36" strokeWidth={2} />
    <line x1="12" y1="40" x2="36" y2="40" strokeWidth={1.2} />
  </svg>
);

export const Budget2Icon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    <rect x="16" y="22" width="16" height="12" fill={color} fillOpacity={0.1} />
    <rect x="16" y="22" width="16" height="12" />
    <rect x="12" y="28" width="16" height="12" fill={color} fillOpacity={0.08} />
    <rect x="12" y="28" width="16" height="12" />
    <line x1="24" y1="26" x2="24" y2="30" strokeWidth={2} />
    <line x1="8" y1="40" x2="36" y2="40" strokeWidth={1.2} />
  </svg>
);

export const Budget3Icon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    <rect x="16" y="16" width="16" height="10" fill={color} fillOpacity={0.1} />
    <rect x="16" y="16" width="16" height="10" />
    <rect x="12" y="22" width="16" height="10" fill={color} fillOpacity={0.08} />
    <rect x="12" y="22" width="16" height="10" />
    <rect x="18" y="28" width="16" height="10" fill={color} fillOpacity={0.06} />
    <rect x="18" y="28" width="16" height="10" />
    <line x1="8" y1="40" x2="40" y2="40" strokeWidth={1.2} />
  </svg>
);

export const Budget4Icon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Ascending stack + rocket */}
    <rect x="10" y="28" width="8" height="10" fill={color} fillOpacity={0.1} />
    <rect x="10" y="28" width="8" height="10" />
    <rect x="20" y="22" width="8" height="16" fill={color} fillOpacity={0.12} />
    <rect x="20" y="22" width="8" height="16" />
    <rect x="30" y="14" width="8" height="24" fill={color} fillOpacity={0.15} />
    <rect x="30" y="14" width="8" height="24" />
    {/* Rocket arrow at top */}
    <line x1="34" y1="14" x2="34" y2="6" strokeWidth={1.8} />
    <line x1="30" y1="10" x2="34" y2="4" />
    <line x1="38" y1="10" x2="34" y2="4" />
    <line x1="6" y1="40" x2="42" y2="40" strokeWidth={1.2} />
  </svg>
);

// ═══════════════════════════════════════════
// INSIGHT CALLOUT ICONS
// ═══════════════════════════════════════════

export const InsightKeyIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    <rect x="8" y="16" width="12" height="12" />
    <line x1="20" y1="22" x2="38" y2="22" />
    <line x1="34" y1="22" x2="34" y2="28" />
    <line x1="38" y1="22" x2="38" y2="28" />
  </svg>
);

export const InsightLightbulbIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Bulb - angular */}
    <path d="M18 6H30L36 18L28 30H20L12 18Z" fill={color} fillOpacity={0.08} />
    <path d="M18 6H30L36 18L28 30H20L12 18Z" />
    {/* Filament */}
    <line x1="22" y1="18" x2="26" y2="14" />
    <line x1="26" y1="14" x2="22" y2="10" />
    {/* Base */}
    <rect x="20" y="30" width="8" height="6" />
    <line x1="20" y1="33" x2="28" y2="33" />
    {/* Rays */}
    <line x1="24" y1="2" x2="24" y2="4" />
    <line x1="40" y1="12" x2="38" y2="14" />
    <line x1="8" y1="12" x2="10" y2="14" />
  </svg>
);

export const InsightTargetIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Concentric squares */}
    <rect x="4" y="4" width="40" height="40" />
    <rect x="12" y="12" width="24" height="24" />
    <rect x="20" y="20" width="8" height="8" fill={color} fillOpacity={0.15} />
    {/* Crosshair */}
    <line x1="24" y1="4" x2="24" y2="12" strokeWidth={1.2} />
    <line x1="24" y1="36" x2="24" y2="44" strokeWidth={1.2} />
    <line x1="4" y1="24" x2="12" y2="24" strokeWidth={1.2} />
    <line x1="36" y1="24" x2="44" y2="24" strokeWidth={1.2} />
  </svg>
);

export const InsightMoneyIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Dollar sign angular */}
    <line x1="24" y1="8" x2="24" y2="40" strokeWidth={2} />
    <path d="M32 14H20L18 18H30L32 22H16" fill="none" />
    <path d="M16 26H32L30 30H18L16 34H32" fill="none" />
    {/* Corner accents */}
    <line x1="10" y1="10" x2="14" y2="10" />
    <line x1="10" y1="10" x2="10" y2="14" />
    <line x1="38" y1="38" x2="34" y2="38" />
    <line x1="38" y1="38" x2="38" y2="34" />
  </svg>
);

export const InsightChartIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Axes */}
    <line x1="8" y1="40" x2="42" y2="40" />
    <line x1="8" y1="8" x2="8" y2="40" />
    {/* Ascending line */}
    <path d="M12 34L20 26L28 30L36 16L42 12" fill="none" strokeWidth={2} />
    {/* Data points */}
    <rect x="19" y="25" width="3" height="3" fill={color} fillOpacity={0.3} />
    <rect x="35" y="15" width="3" height="3" fill={color} fillOpacity={0.3} />
  </svg>
);

export const InsightPuzzleIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Four puzzle pieces - angular */}
    <rect x="6" y="6" width="16" height="16" fill={color} fillOpacity={0.08} />
    <rect x="6" y="6" width="16" height="16" />
    <rect x="26" y="6" width="16" height="16" fill={color} fillOpacity={0.12} />
    <rect x="26" y="6" width="16" height="16" />
    <rect x="6" y="26" width="16" height="16" fill={color} fillOpacity={0.06} />
    <rect x="6" y="26" width="16" height="16" />
    <rect x="26" y="26" width="16" height="16" fill={color} fillOpacity={0.1} />
    <rect x="26" y="26" width="16" height="16" />
    {/* Connection notches */}
    <rect x="20" y="14" width="8" height="4" fill={color} fillOpacity={0.15} />
    <rect x="14" y="20" width="4" height="8" fill={color} fillOpacity={0.15} />
  </svg>
);

export const InsightBrainIcon = ({ size = 48, color = "currentColor", style }: IconProps) => (
  <svg {...defaults(size, color, style)}>
    {/* Brain halves - angular */}
    <path d="M24 8L14 12L10 22L14 32L20 36L24 40" fill="none" />
    <path d="M24 8L34 12L38 22L34 32L28 36L24 40" fill="none" />
    {/* Center line */}
    <line x1="24" y1="8" x2="24" y2="40" strokeDasharray="3 2" strokeWidth={1.2} />
    {/* Left connections */}
    <line x1="14" y1="18" x2="20" y2="22" strokeWidth={1.2} />
    <line x1="16" y1="28" x2="22" y2="24" strokeWidth={1.2} />
    {/* Right connections */}
    <line x1="34" y1="18" x2="28" y2="22" strokeWidth={1.2} />
    <line x1="32" y1="28" x2="26" y2="24" strokeWidth={1.2} />
    {/* Nodes */}
    <rect x="22" y="22" width="4" height="4" fill={color} fillOpacity={0.2} />
  </svg>
);
