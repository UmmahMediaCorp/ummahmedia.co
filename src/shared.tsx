import { useState, useEffect, useRef } from "react";
import { IslamicPattern, GoldRays } from "./backgrounds";

// ─── Logo ───
export const LOGO_URL = "/ummah-media-logo-v2.png";

// ─── Palette ───
export const C = {
  cream: "#FAF8F3",
  lightCream: "#FEFDFB",
  white: "#FFFFFF",
  gold: "#C9A961",
  goldLight: "#E8D9B8",
  goldDim: "rgba(201,169,97,0.15)",
  green: "#1A5E51",
  greenLight: "#D4E8E3",
  greenDim: "rgba(26,94,81,0.08)",
  textDark: "#2C3E37",
  textMid: "#5A6B63",
  textLight: "#8A9B93",
  card: "#FFFFFF",
  overlay: "rgba(26,94,81,0.05)",
};

// ─── Scroll reveal ───
export const R = ({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) => {
  const [v, setV] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const fallback = setTimeout(() => setV(true), 400);
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); clearTimeout(fallback); } }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => { clearTimeout(fallback); o.disconnect(); };
  }, []);
  return (
    <div ref={ref} style={{
      height: "100%",
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
      transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      willChange: "opacity, transform",
      ...style,
    }}>
      {children}
    </div>
  );
};

// ─── Video block (Mux player or placeholder) ───
export const VideoBlock = ({ label, aspect = "56.25%", playbackId }: { label: string; aspect?: string; playbackId?: string }) => {
  if (playbackId) {
    return (
      <div style={{
        position: "relative", width: "100%",
        overflow: "hidden", border: `1px solid ${C.goldDim}`,
        background: "#000",
      }}>
        <mux-player
          playback-id={playbackId}
          metadata-video-title={label}
          accent-color={C.gold}
          style={{
            width: "100%",
            aspectRatio: "16/9",
            display: "block",
            // @ts-ignore
            "--controls": "auto",
          } as React.CSSProperties}
        />
      </div>
    );
  }

  return (
    <div style={{
      position: "relative",
      width: "100%",
      paddingBottom: aspect,
      background: `linear-gradient(135deg, ${C.greenLight}, ${C.goldLight})`,
      overflow: "hidden",
      border: `1px solid ${C.goldDim}`,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: "12px",
      }}>
        <div style={{
          width: "72px", height: "72px", borderRadius: "50%",
          border: `2px solid ${C.gold}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: "12px solid transparent",
            borderBottom: "12px solid transparent",
            borderLeft: `20px solid ${C.gold}`,
            marginLeft: "4px",
          }} />
        </div>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          letterSpacing: "3px",
          color: C.gold,
          textTransform: "uppercase",
        }}>
          {label}
        </span>
      </div>
      <div style={{ position: "absolute", top: "16px", left: "16px", width: "24px", height: "24px", borderTop: `2px solid ${C.gold}`, borderLeft: `2px solid ${C.gold}` }} />
      <div style={{ position: "absolute", bottom: "16px", right: "16px", width: "24px", height: "24px", borderBottom: `2px solid ${C.gold}`, borderRight: `2px solid ${C.gold}` }} />
    </div>
  );
};

// ─── Image placeholder block ───
export const ImgBlock = ({ label, h = "400px" }: { label: string; h?: string }) => (
  <div style={{
    width: "100%", height: h,
    background: `linear-gradient(160deg, ${C.goldLight}, ${C.greenLight})`,
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
    border: `1px solid ${C.goldDim}`,
  }}>
    <span style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "13px", letterSpacing: "3px",
      color: C.gold, textTransform: "uppercase",
    }}>
      {label}
    </span>
    <div style={{ position: "absolute", top: "12px", left: "12px", width: "20px", height: "20px", borderTop: `2px solid ${C.gold}`, borderLeft: `2px solid ${C.gold}` }} />
    <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "20px", height: "20px", borderBottom: `2px solid ${C.gold}`, borderRight: `2px solid ${C.gold}` }} />
  </div>
);

// ─── Big headline text ───
export const BigText = ({ children, size = "clamp(48px, 10vw, 120px)", color = C.textDark, style = {} }: { children: React.ReactNode; size?: string; color?: string; style?: React.CSSProperties }) => (
  <h1 style={{
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: size,
    fontWeight: 400,
    color,
    lineHeight: 0.95,
    letterSpacing: "-1px",
    textTransform: "uppercase",
    ...style,
  }}>
    {children}
  </h1>
);

// ─── Sub text ───
export const Sub = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <p style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: C.textMid,
    lineHeight: 1.6,
    maxWidth: "480px",
    ...style,
  }}>
    {children}
  </p>
);

// ─── Label tag ───
export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: C.gold,
    display: "inline-block",
    marginBottom: "16px",
  }}>
    {children}
  </span>
);

// ─── Gold divider ───
export const Line = ({ w = "60px" }: { w?: string }) => (
  <div style={{
    width: w, height: "1px",
    background: `linear-gradient(90deg, ${C.gold}, transparent)`,
    margin: "20px 0",
  }} />
);

// ─── CTA Button ───
export const CTA = ({ children, onClick, outline = false }: { children: React.ReactNode; onClick: () => void; outline?: boolean }) => {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: outline ? "transparent" : h ? "#B8945A" : C.gold,
        color: outline ? C.gold : C.white,
        border: outline ? `2px solid ${C.gold}` : "none",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(14px, 3vw, 16px)", letterSpacing: "3px",
        padding: "14px 36px", cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: h ? "translateY(-3px)" : "translateY(0)",
        boxShadow: h && !outline ? "0 12px 28px rgba(201,169,97,0.3)" : "0 2px 8px rgba(201,169,97,0.08)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
};

// ─── Film grain overlay ───
export const Grain = () => (
  <div style={{
    position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none",
    opacity: 0.015,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: "128px 128px",
  }} />
);

// ─── Service page hero (standardized across all pages) ───
export const ServiceHero = ({ tag, titleLine1, titleLine2, subtitle }: { tag: string; titleLine1: React.ReactNode; titleLine2: React.ReactNode; subtitle: string }) => {
  return (
    <section style={{
      minHeight: "85vh", display: "flex", alignItems: "flex-end",
      background: `radial-gradient(ellipse at 25% 35%, ${C.greenDim}, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(201,169,97,0.04), transparent 40%), ${C.lightCream}`,
      padding: "60px 20px 60px", position: "relative", overflow: "hidden",
    }}>
      <IslamicPattern opacity={0.04} />
      <GoldRays opacity={0.06} />
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <R>
          <Tag>{tag}</Tag>
          <BigText size="clamp(42px, 11vw, 130px)">
            {titleLine1}<br />
            {titleLine2}
          </BigText>
        </R>
        <R delay={0.15}>
          <Sub style={{ marginTop: "24px", maxWidth: "560px", fontSize: "clamp(14px, 3.5vw, 16px)" }}>{subtitle}</Sub>
        </R>
      </div>
    </section>
  );
};

// ─── "In Simple Terms" definition bar ───
export const Definition = ({ term, definition }: { term: string; definition: string }) => (
  <section style={{
    background: C.white,
    borderTop: `1px solid ${C.goldDim}`,
    borderBottom: `1px solid ${C.goldDim}`,
    padding: "36px 20px",
  }}>
    <div style={{
      maxWidth: "1000px", margin: "0 auto",
      display: "flex", flexDirection: "column", gap: "16px",
    }}>
      <R>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px", letterSpacing: "3px",
          color: C.gold, textTransform: "uppercase",
        }}>
          {term}
        </span>
      </R>
      <R delay={0.1}>
        <div style={{ width: "40px", height: "1px", background: C.goldDim }} />
      </R>
      <R delay={0.15}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(14px, 3.5vw, 16px)", color: C.textDark,
          lineHeight: 1.7, maxWidth: "700px",
          fontWeight: 500,
        }}>
          {definition}
        </p>
      </R>
    </div>
  </section>
);

// ─── Standardized section header ───
export const SectionHead = ({ tag, children }: { tag: string; children: React.ReactNode }) => (
  <R>
    <Tag>{tag}</Tag>
    <BigText size="clamp(32px, 6vw, 72px)" style={{ marginBottom: "48px" }}>
      {children}
    </BigText>
  </R>
);

// ─── Stat bar ───
export const StatBar = ({ stats }: { stats: { num: string; label: string }[] }) => (
  <section style={{
    background: C.white,
    borderTop: `1px solid ${C.goldDim}`,
    borderBottom: `1px solid ${C.goldDim}`,
    padding: "52px 24px",
  }}>
    <div style={{
      maxWidth: "1100px", margin: "0 auto",
      display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "36px",
      textAlign: "center",
    }}>
      {stats.map((s, i) => (
        <R key={i} delay={i * 0.08}>
          <div>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px", color: C.gold, letterSpacing: "2px",
              display: "block",
            }}>
              {s.num}
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", color: C.textLight, letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}>
              {s.label}
            </span>
          </div>
        </R>
      ))}
    </div>
  </section>
);

// ─── Process / numbered step item ───
export const StepItem = ({ step, title, desc, isLast = false }: { step: string; title: string; desc: string; isLast?: boolean }) => (
  <R delay={parseInt(step) * 0.08}>
    <div style={{
      display: "flex", gap: "20px", alignItems: "flex-start",
      padding: "28px 0",
      borderBottom: isLast ? "none" : `1px solid ${C.goldDim}`,
    }}>
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(36px, 8vw, 52px)", color: C.gold,
        lineHeight: 1, minWidth: "48px", flexShrink: 0,
      }}>
        {step}
      </span>
      <div style={{ minWidth: 0 }}>
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(20px, 4vw, 26px)", letterSpacing: "2px",
          color: C.textDark, marginBottom: "10px",
        }}>
          {title}
        </h3>
        <Sub>{desc}</Sub>
      </div>
    </div>
  </R>
);

// ─── Insight callout ───
export const Insight = ({ emoji, text }: { emoji: React.ReactNode; text: string }) => (
  <div style={{
    display: "flex", gap: "16px", alignItems: "flex-start",
    padding: "20px 24px",
    background: C.goldDim,
    borderLeft: `3px solid ${C.gold}`,
  }}>
    <span style={{ fontSize: "20px", lineHeight: 1, flexShrink: 0 }}>{emoji}</span>
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "14px", color: C.textDark,
      lineHeight: 1.6, fontWeight: 500,
    }}>
      {text}
    </p>
  </div>
);

// ─── Bottom CTA section (standardized) ───
export const BottomCTA = ({ title, highlight, subtitle, buttonText, onButtonClick }: {
  title: string; highlight: string; subtitle: string; buttonText: string; onButtonClick: () => void;
}) => {
  return (
    <section style={{
      background: `linear-gradient(180deg, ${C.lightCream}, ${C.greenLight}, ${C.lightCream})`,
      padding: "clamp(80px, 15vw, 140px) 20px", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <IslamicPattern opacity={0.03} />
      <GoldRays opacity={0.04} />
      <R>
        <BigText size="clamp(28px, 7vw, 80px)" style={{ marginBottom: "20px" }}>
          {title} <span style={{ color: C.gold }}>{highlight}</span>
        </BigText>
      </R>
      <R delay={0.15}>
        <Sub style={{ margin: "0 auto 36px", textAlign: "center", maxWidth: "480px" }}>{subtitle}</Sub>
      </R>
      <R delay={0.25}>
        <CTA onClick={onButtonClick}>{buttonText}</CTA>
      </R>
    </section>
  );
};

// ─── Tier card for service pages (Foundation / Signature / Flagship) ───
export const TierCard = ({ tier, label, items, highlight = false }: {
  tier: string; label?: string; items: { name: string; detail?: string }[]; highlight?: boolean;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column",
        background: highlight ? (h ? "#FBF7EE" : "#FAF5E8") : (h ? C.white : C.card),
        border: `2px solid ${highlight ? C.gold : (h ? C.gold : C.goldDim)}`,
        padding: "40px 28px",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: h ? "0 16px 40px rgba(201,169,97,0.18)" : "0 2px 10px rgba(0,0,0,0.03)",
        transform: h ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {highlight && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${C.gold}, ${C.green}, ${C.gold})`,
        }} />
      )}
      {label && (
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px", letterSpacing: "2px",
          color: C.white, textTransform: "uppercase",
          background: C.gold, padding: "4px 12px",
          display: "inline-block", alignSelf: "flex-start",
          marginBottom: "16px",
        }}>
          {label}
        </span>
      )}
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "32px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "20px",
      }}>
        {tier}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: "10px",
            padding: "8px 0",
            borderBottom: i < items.length - 1 ? `1px solid ${C.goldDim}` : "none",
          }}>
            <span style={{ color: C.gold, fontSize: "14px", lineHeight: 1.6, flexShrink: 0 }}>&#10003;</span>
            <div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px", color: C.textDark, fontWeight: 600, lineHeight: 1.6,
              }}>
                {item.name}
              </span>
              {item.detail && (
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px", color: C.textLight,
                  display: "block", lineHeight: 1.5,
                }}>
                  {item.detail}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Add-Ons bar for tiered service pages ───
export const AddOnsBar = ({ addOns }: { addOns: string[] }) => (
  <div style={{
    marginTop: "24px",
    padding: "24px 28px",
    background: C.white,
    border: `1px solid ${C.goldDim}`,
  }}>
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "11px", letterSpacing: "2px",
      color: C.gold, textTransform: "uppercase",
      display: "block", marginBottom: "14px",
    }}>
      Available Add-Ons
    </span>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {addOns.map((a, i) => (
        <span key={i} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px", color: C.textMid,
          background: C.goldDim,
          padding: "6px 14px",
        }}>
          {a}
        </span>
      ))}
    </div>
  </div>
);

// ─── Custom Build section (shared across all service pages) ───
export const CustomBuildSection = ({ onContact }: { onContact: () => void }) => {
  return (
  <section style={{
    background: `linear-gradient(180deg, ${C.cream}, ${C.greenLight}, ${C.cream})`,
    padding: "clamp(60px, 10vw, 100px) 20px", textAlign: "center",
    position: "relative", overflow: "hidden",
  }}>
    <IslamicPattern opacity={0.035} />
    <R>
      <Tag>Across All Services</Tag>
      <BigText size="clamp(28px, 6vw, 64px)" style={{ marginBottom: "20px" }}>
        CUSTOM <span style={{ color: C.gold }}>BUILD</span>
      </BigText>
    </R>
    <R delay={0.1}>
      <Sub style={{ margin: "0 auto 16px", textAlign: "center", maxWidth: "600px" }}>
        Not sure which tier fits? Our AI-powered package builder discovers your needs, suggests the right packages, compares pricing, and advocates for you — so you get exactly what your business needs, nothing more.
      </Sub>
    </R>
    <R delay={0.2}>
      <CTA onClick={onContact}>BUILD YOUR CUSTOM PACKAGE</CTA>
    </R>
  </section>
  );
};

// ─── Feature card for service pages ───
export const FeatureCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        padding: "40px 32px",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: h ? "0 16px 40px rgba(201,169,97,0.18)" : "0 2px 10px rgba(0,0,0,0.03)",
        transform: h ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        opacity: h ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }} />
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "48px", color: "rgba(201,169,97,0.2)",
        display: "block", marginBottom: "8px",
      }}>
        {number}
      </span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "28px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid,
        lineHeight: 1.6,
        marginTop: "auto",
      }}>
        {description}
      </p>
    </div>
  );
};
