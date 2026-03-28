import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { C, LOGO_URL, R, BigText, Sub, Tag, Line, CTA, VideoBlock, ImgBlock, Grain } from "./shared";
import BrandDevelopment from "./pages/BrandDevelopment";
import VideoMarketing from "./pages/VideoMarketing";
import UGC from "./pages/UGC";
import AIEducation from "./pages/AIEducation";
import SocialMedia from "./pages/SocialMedia";
import SmartSuite from "./pages/SmartSuite";
import { BrandDevIcon, VideoMarketingIcon, SocialMediaIcon, UgcInfluencerIcon, SmartSuiteIcon, AiEducationIcon, JustStartingIcon, GrowingIcon, RebuildingIcon, AsapIcon, MonthsIcon, FlexibleIcon, Budget1Icon, Budget2Icon, Budget3Icon, Budget4Icon } from "./icons";

const PartnerGlobe = lazy(() => import("./components/PartnerGlobe"));

// ─── Nav ───
const Nav = ({ page, setPage }: { page: string; setPage: (p: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    setTimeout(() => document.addEventListener("click", handleClick), 0);
    return () => document.removeEventListener("click", handleClick);
  }, [servicesOpen]);

  const openDropdown = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  const servicePages = [
    { id: "brand", label: "Brand Development" },
    { id: "video", label: "Video Marketing" },
    { id: "social", label: "Social Media Marketing" },
    { id: "ugc", label: "UGC & Influencer Agency" },
    { id: "smartsuite", label: "SmartSuite" },
    { id: "ai", label: "AI Education" },
  ];

  const isServicePage = servicePages.some(s => s.id === page);

  const go = (id: string) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setPage(id);
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
    color: active ? C.gold : C.textMid,
    transition: "color 0.3s",
    padding: 0,
  });

  return (
    <nav style={{
      position: "relative", zIndex: 1000,
      background: C.lightCream,
      padding: "18px 0",
      borderBottom: `1px solid ${C.goldDim}`,
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Left — Logo + UMMAH MEDIA (desktop: row, mobile: column) */}
        <div onClick={() => go("home")} className="nav-brand" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", minWidth: "180px" }}>
          <img src="/ummah-media-logo-v2.png" alt="Ummah Media" className="nav-logo" style={{
            height: "36px", width: "36px", objectFit: "contain",
          }} />
          <span className="nav-brand-text" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "18px",
            letterSpacing: "3px",
            color: C.textDark,
          }}>
            UMMAH MEDIA
          </span>
        </div>

        {/* Center — Bismillah (desktop: center, mobile: center below brand) */}
        <div className="nav-bismillah" style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          pointerEvents: "none",
        }}>
          <span style={{
            fontFamily: "'Amiri', serif",
            fontSize: "22px",
            fontWeight: "bold",
            color: C.gold,
            whiteSpace: "nowrap",
          }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>
        </div>

        {/* Right — Desktop Nav */}
        <div className="dsk-nav" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <button onClick={() => go("home")} style={navLinkStyle(page === "home")}>Home</button>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setServicesOpen(prev => !prev)}
              style={{
                ...navLinkStyle(isServicePage),
                display: "flex", alignItems: "center", gap: "4px",
                padding: "8px 0",
              }}
            >
              Services
              <span style={{
                fontSize: "8px",
                transition: "transform 0.3s",
                transform: servicesOpen ? "rotate(180deg)" : "rotate(0)",
              }}>▼</span>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-16px",
                  zIndex: 1001,
                }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div style={{
                  background: "rgba(250,248,243,0.98)",
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${C.goldDim}`,
                  padding: "8px 0",
                  minWidth: "220px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                }}>
                  {servicePages.map(s => (
                    <button key={s.id} onClick={() => go(s.id)} style={{
                      display: "block", width: "100%",
                      background: page === s.id ? C.goldDim : "transparent",
                      border: "none", cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
                      color: page === s.id ? C.gold : C.textMid,
                      padding: "14px 20px",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                      onMouseEnter={e => { (e.currentTarget).style.background = C.goldDim; (e.currentTarget).style.color = C.gold; }}
                      onMouseLeave={e => { if (page !== s.id) { (e.currentTarget).style.background = "transparent"; (e.currentTarget).style.color = C.textMid; } }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button onClick={() => go("work")} style={navLinkStyle(page === "work")}>Work</button>
          <button onClick={() => go("about")} style={navLinkStyle(page === "about")}>About</button>
          <button onClick={() => go("contact")} style={navLinkStyle(page === "contact")}>Contact</button>
        </div>

        {/* Mobile hamburger */}
        <button className="mob-btn" onClick={() => setOpen(!open)} style={{
          display: "none", background: "none", border: "none",
          color: C.gold, fontSize: "24px", cursor: "pointer",
        }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mob-menu" style={{
          background: "rgba(250,248,243,0.98)", padding: "24px 32px",
          display: "flex", flexDirection: "column", gap: "20px",
          borderBottom: `1px solid ${C.goldDim}`,
        }}>
          <button onClick={() => go("home")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: page === "home" ? C.gold : C.textDark,
            textAlign: "left", padding: 0,
          }}>
            Home
          </button>

          {/* Mobile Services — each item is a direct link */}
          {servicePages.map(s => (
            <button key={s.id} onClick={() => go(s.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "28px", letterSpacing: "3px",
              color: page === s.id ? C.gold : C.textDark,
              textAlign: "left", padding: 0,
            }}>
              {s.label}
            </button>
          ))}

          <button onClick={() => go("work")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: page === "work" ? C.gold : C.textDark,
            textAlign: "left", padding: 0,
          }}>
            Work
          </button>
          <button onClick={() => go("about")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: page === "about" ? C.gold : C.textDark,
            textAlign: "left", padding: 0,
          }}>
            About
          </button>
          <button onClick={() => go("contact")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: page === "contact" ? C.gold : C.textDark,
            textAlign: "left", padding: 0,
          }}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

// ─── Service Tile (for Home page) ───
const ServiceTile = ({ title, sub, onClick }: { title: string; sub: string; onClick: () => void }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative",
        minHeight: "260px",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end",
        padding: "32px",
        cursor: "pointer",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        overflow: "hidden",
        boxShadow: h ? "0 16px 40px rgba(201,169,97,0.18)" : "0 2px 10px rgba(0,0,0,0.03)",
        transform: h ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        opacity: h ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }} />
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "36px",
        color: C.textDark,
        lineHeight: 1,
        letterSpacing: "2px",
        whiteSpace: "pre-line",
        marginBottom: "12px",
        transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: h ? "translateY(-6px)" : "translateY(0)",
      }}>
        {title}
      </h3>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        color: h ? C.textMid : C.textLight,
        letterSpacing: "1px",
        transition: "color 0.4s",
      }}>
        {sub}
      </span>
      <span style={{
        position: "absolute", top: "28px", right: "28px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "20px", color: C.gold,
        opacity: h ? 1 : 0,
        transform: h ? "translateX(0)" : "translateX(-8px)",
        transition: "all 0.3s ease",
      }}>
        →
      </span>
    </div>
  );
};

// ═══════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════
const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: C.lightCream,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 0 60px",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse at 30% 40%, rgba(26,94,81,0.06), transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(201,169,97,0.08), transparent 40%),
          linear-gradient(180deg, rgba(250,248,243,0.5), rgba(250,248,243,1))
        `,
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        background: `linear-gradient(45deg, ${C.greenLight} 25%, ${C.goldLight} 50%, ${C.greenLight} 75%)`,
        backgroundSize: "400% 400%",
        animation: "shimmer 8s ease infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px", maxWidth: "900px" }}>
        <R>
          <BigText size="clamp(36px, 9vw, 100px)" style={{ marginBottom: "0", lineHeight: 1 }}>
            CRAFTING
          </BigText>
        </R>
        <R delay={0.15}>
          <img src={LOGO_URL} alt="Ummah Media" style={{
            height: "clamp(140px, 30vw, 260px)", width: "clamp(140px, 30vw, 260px)", objectFit: "contain",
            margin: "20px auto",
            display: "block",
            filter: "drop-shadow(0 0 80px rgba(201,169,97,0.3))",
          }} />
        </R>
        <R delay={0.3}>
          <BigText size="clamp(36px, 9vw, 100px)" style={{ lineHeight: 1 }}>
            <span style={{ color: C.gold }}>MUSLIM</span> EXCELLENCE
          </BigText>
        </R>
        <R delay={0.45}>
          <div style={{ margin: "32px auto 0", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <CTA onClick={() => setPage("contact")}>START A PROJECT</CTA>
            <CTA onClick={() => setPage("work")} outline>SEE OUR WORK</CTA>
          </div>
        </R>
      </div>
    </section>

    <section style={{ background: C.cream, padding: "0 0 60px 0" }}>
      <R>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
          <VideoBlock label="Your Showreel — Replace with actual video" aspect="56.25%" />
        </div>
      </R>
    </section>

    {/* Services — now links to individual pages */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <Tag>What We Do</Tag>
          <BigText size="clamp(36px, 8vw, 90px)" style={{ marginBottom: "40px" }}>
            OUR <span style={{ color: C.gold }}>SERVICES</span>
          </BigText>
        </R>

        <div className="grid-services">
          {[
            { title: "BRAND\nDEVELOPMENT", sub: "Identity systems that inspire trust and command respect.", page: "brand" },
            { title: "VIDEO\nMARKETING", sub: "Cinematic storytelling that moves hearts and drives results.", page: "video" },
          ].map((s, i) => (
            <R key={i} delay={i * 0.1}>
              <ServiceTile title={s.title} sub={s.sub} onClick={() => setPage(s.page)} />
            </R>
          ))}
        </div>

        <div className="grid-services" style={{ marginTop: "4px" }}>
          {[
            { title: "SOCIAL MEDIA\nMARKETING", sub: "Revenue-driven. Partnership-focused. Not just posting.", page: "social" },
            { title: "UGC &\nINFLUENCER", sub: "Muslim creators. Authentic content. Real influence.", page: "ugc" },
          ].map((s, i) => (
            <R key={i} delay={i * 0.1}>
              <ServiceTile title={s.title} sub={s.sub} onClick={() => setPage(s.page)} />
            </R>
          ))}
        </div>

        <div className="grid-services" style={{ marginTop: "4px" }}>
          {[
            { title: "SMART\nSUITE", sub: "AI-powered funnels, agents, sites, media & portals.", page: "smartsuite" },
            { title: "AI\nEDUCATION", sub: "Empowering the Ummah with future-proof skills.", page: "ai" },
          ].map((s, i) => (
            <R key={i} delay={i * 0.1}>
              <ServiceTile title={s.title} sub={s.sub} onClick={() => setPage(s.page)} />
            </R>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: C.cream, padding: "0 20px clamp(60px, 12vw, 120px)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <Tag>Selected Work</Tag>
          <BigText size="clamp(32px, 7vw, 80px)" style={{ marginBottom: "48px" }}>
            THE <span style={{ color: C.gold }}>PORTFOLIO</span>
          </BigText>
        </R>

        <div className="grid-2-1">
          <R><ImgBlock label="Project Showcase 1" h="clamp(250px, 40vw, 500px)" /></R>
          <R delay={0.1}><ImgBlock label="Project Showcase 2" h="clamp(250px, 40vw, 500px)" /></R>
        </div>
        <div className="grid-3" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Brand Work" h="clamp(200px, 30vw, 320px)" /></R>
          <R delay={0.1}><ImgBlock label="Event Coverage" h="clamp(200px, 30vw, 320px)" /></R>
          <R delay={0.2}><ImgBlock label="Social Campaign" h="clamp(200px, 30vw, 320px)" /></R>
        </div>
        <div className="grid-1-2" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Behind the Scenes" h="clamp(250px, 35vw, 400px)" /></R>
          <R delay={0.1}><VideoBlock label="Highlight Reel" aspect="44%" /></R>
        </div>
      </div>
    </section>

    <section style={{
      background: `linear-gradient(180deg, ${C.lightCream}, ${C.greenLight}, ${C.lightCream})`,
      padding: "clamp(80px, 15vw, 140px) 20px",
      textAlign: "center",
      position: "relative",
    }}>
      <R>
        <p style={{
          fontFamily: "'Amiri', serif",
          fontSize: "32px",
          color: C.gold,
          marginBottom: "40px",
          direction: "rtl",
        }}>
          بسم الله الرحمن الرحيم
        </p>
      </R>
      <R delay={0.15}>
        <BigText size="clamp(32px, 6vw, 72px)">
          MUSLIM OWNED.<br />
          PURPOSE DRIVEN.<br />
          <span style={{ color: C.gold }}>EXCELLENCE</span> ALWAYS.
        </BigText>
      </R>
      <R delay={0.3}>
        <Sub style={{ margin: "32px auto 0", textAlign: "center", maxWidth: "500px" }}>
          We serve Edmonton's Muslim community with professional media that reflects our values. Every project is an amanah.
        </Sub>
      </R>
    </section>

    <section style={{ background: C.cream, padding: "100px 24px", textAlign: "center" }}>
      <R>
        <BigText size="clamp(36px, 7vw, 80px)" style={{ marginBottom: "32px" }}>
          LET'S <span style={{ color: C.gold }}>BUILD</span>
        </BigText>
      </R>
      <R delay={0.15}>
        <CTA onClick={() => setPage("contact")}>GET IN TOUCH</CTA>
      </R>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// WORK
// ═══════════════════════════════════════════
const Work = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    <section style={{
      minHeight: "80vh", display: "flex", alignItems: "flex-end",
      background: `radial-gradient(ellipse at 60% 40%, ${C.greenDim}, transparent 50%), ${C.lightCream}`,
      padding: "60px 20px 60px",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        <R>
          <Tag>Portfolio</Tag>
          <BigText size="clamp(42px, 10vw, 120px)">
            OUR BEST<br />
            <span style={{ color: C.gold }}>WORK</span>
          </BigText>
        </R>
      </div>
    </section>

    <section style={{ background: C.cream, padding: "0 20px 60px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R><VideoBlock label="Featured Project Reel" aspect="56.25%" /></R>
      </div>
    </section>

    <section style={{ background: C.cream, padding: "0 20px clamp(60px, 12vw, 120px)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div>
          <R><VideoBlock label="Event Coverage" aspect="42%" /></R>
        </div>
        <div className="grid-2" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Project 1" h="clamp(220px, 35vw, 400px)" /></R>
          <R delay={0.1}><ImgBlock label="Project 2" h="clamp(220px, 35vw, 400px)" /></R>
        </div>
        <div className="grid-3" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Frame 1" h="clamp(180px, 28vw, 300px)" /></R>
          <R delay={0.1}><ImgBlock label="Frame 2" h="clamp(180px, 28vw, 300px)" /></R>
          <R delay={0.2}><ImgBlock label="Frame 3" h="clamp(180px, 28vw, 300px)" /></R>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <R><CTA onClick={() => setPage("contact")}>START YOUR PROJECT</CTA></R>
        </div>
      </div>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════
const About = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    <section style={{
      minHeight: "80vh", display: "flex", alignItems: "flex-end",
      background: `radial-gradient(ellipse at 40% 50%, ${C.goldDim}, transparent 40%), ${C.lightCream}`,
      padding: "60px 20px 60px",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        <R>
          <Tag>About Us</Tag>
          <BigText size="clamp(42px, 10vw, 120px)">
            BUILDING<br />
            <span style={{ color: C.gold }}>COMMUNITY</span>
          </BigText>
        </R>
      </div>
    </section>

    <section style={{ background: C.white, padding: "48px 20px", borderTop: `1px solid ${C.goldDim}`, borderBottom: `1px solid ${C.goldDim}` }}>
      <div style={{
        maxWidth: "1000px", margin: "0 auto",
        display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "32px",
        textAlign: "center",
      }}>
        {[
          { num: "HALAL", label: "Values-aligned" },
          { num: "LOCAL", label: "Edmonton based" },
          { num: "QUALITY", label: "Professional grade" },
          { num: "TRUST", label: "Community first" },
        ].map((s, i) => (
          <R key={i} delay={i * 0.08}>
            <div>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28px", color: C.gold, letterSpacing: "3px",
                display: "block",
              }}>
                {s.num}
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px", color: C.textLight, letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                {s.label}
              </span>
            </div>
          </R>
        ))}
      </div>
    </section>

    {/* ── PARTNER GLOBE ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <Tag>Our Global Network</Tag>
          <BigText size="clamp(32px, 6vw, 72px)" style={{ marginBottom: "12px" }}>
            PARTNERS ACROSS THE <span style={{ color: C.gold }}>UMMAH</span>
          </BigText>
        </R>
        <R delay={0.1}>
          <Sub style={{ marginBottom: "48px" }}>
            We work with talented Muslims around the world. Our network spans continents — united by purpose, connected by faith.
          </Sub>
        </R>
        <R delay={0.2}>
          <Suspense fallback={
            <div style={{
              width: "100%", height: "500px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px", color: C.textLight, letterSpacing: "2px",
              }}>
                LOADING GLOBE...
              </span>
            </div>
          }>
            <PartnerGlobe />
          </Suspense>
        </R>
        <R delay={0.3}>
          <div style={{
            display: "flex", justifyContent: "center", gap: "40px",
            flexWrap: "wrap", marginTop: "40px",
          }}>
            {[
              { city: "Edmonton", country: "Canada" },
              { city: "Red Deer", country: "Canada" },
              { city: "Halifax", country: "Canada" },
              { city: "Gujranwala", country: "Pakistan" },
              { city: "Toba Tek Singh", country: "Pakistan" },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "24px", letterSpacing: "2px",
                  color: C.gold, display: "block",
                }}>
                  {p.city}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px", letterSpacing: "1.5px",
                  color: C.textLight, textTransform: "uppercase",
                }}>
                  {p.country}
                </span>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>

    {/* ── SERVING THE UMMAH ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split">
          <R>
            <div>
              <BigText size="clamp(28px, 4vw, 48px)" style={{ marginBottom: "20px" }}>
                SERVING THE<br />
                <span style={{ color: C.gold }}>UMMAH.</span>
              </BigText>
              <Line />
              <Sub>
                We're Edmonton's go-to media company for Muslim businesses, organizations, and community leaders who refuse to compromise on quality or values.
              </Sub>
              <div style={{ marginTop: "32px" }}>
                <CTA onClick={() => setPage("contact")}>WORK WITH US</CTA>
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <div className="grid-2">
              <ImgBlock label="Team Photo 1" h="clamp(160px, 25vw, 240px)" />
              <ImgBlock label="Team Photo 2" h="clamp(160px, 25vw, 240px)" />
              <ImgBlock label="Team Photo 3" h="clamp(160px, 25vw, 240px)" />
              <ImgBlock label="Team Photo 4" h="clamp(160px, 25vw, 240px)" />
            </div>
          </R>
        </div>
      </div>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// CONTACT — Interactive Project Builder
// ═══════════════════════════════════════════
const ChoiceCard = ({ label, desc, selected, onClick, icon }: {
  label: string; desc: string; selected: boolean; onClick: () => void; icon: React.ReactNode;
}) => (
  <button onClick={onClick} style={{
    background: selected ? C.gold : C.white,
    border: `2px solid ${selected ? C.gold : C.goldDim}`,
    padding: "24px 20px",
    cursor: "pointer",
    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    textAlign: "left",
    display: "flex", flexDirection: "column", gap: "8px",
    boxShadow: selected ? "0 12px 32px rgba(201,169,97,0.25)" : "0 2px 8px rgba(0,0,0,0.03)",
    transform: selected ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
    width: "100%",
  }}>
    <span style={{ color: selected ? C.white : C.gold }}>{icon}</span>
    <span style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "20px", letterSpacing: "2px",
      color: selected ? C.white : C.textDark,
    }}>
      {label}
    </span>
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "13px",
      color: selected ? "rgba(255,255,255,0.8)" : C.textLight,
      lineHeight: 1.5,
    }}>
      {desc}
    </span>
  </button>
);

const Contact = ({ preselectedService = "" }: { preselectedService?: string }) => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(preselectedService);
  const [stage, setStage] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!stage;
    if (step === 2) return !!timeline;
    if (step === 3) return !!budget;
    if (step === 4) return !!name && !!email;
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, stage, timeline, budget, name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: C.lightCream, padding: "60px 20px 60px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>

          {!submitted ? (
            <>
              {/* Progress bar */}
              <div style={{ marginBottom: "48px" }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: "12px",
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px", letterSpacing: "2px",
                    color: C.gold, textTransform: "uppercase",
                  }}>
                    STEP {step + 1} OF {totalSteps}
                  </span>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px", letterSpacing: "2px",
                    color: C.textLight,
                  }}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <div style={{
                  width: "100%", height: "4px",
                  background: C.goldDim, overflow: "hidden",
                }}>
                  <div style={{
                    width: `${progress}%`, height: "100%",
                    background: `linear-gradient(90deg, ${C.green}, ${C.gold})`,
                    transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }} />
                </div>
              </div>

              {/* Step 0: What do you need? */}
              {step === 0 && (
                <div key="s0" style={{ animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <Tag>Let's Build Something</Tag>
                  <BigText size="clamp(32px, 7vw, 64px)" style={{ marginBottom: "12px" }}>
                    WHAT DO YOU <span style={{ color: C.gold }}>NEED</span>?
                  </BigText>
                  <Sub style={{ marginBottom: "36px" }}>Pick the service that best matches your project. Don't worry — we can always adjust later.</Sub>
                  <div className="grid-choices">
                    <ChoiceCard icon={<BrandDevIcon size={28} />} label="BRAND DEVELOPMENT" desc="Strategy, visuals, systems — build what's missing." selected={service === "brand"} onClick={() => setService("brand")} />
                    <ChoiceCard icon={<VideoMarketingIcon size={28} />} label="VIDEO MARKETING" desc="Videos that move hearts and drive results." selected={service === "video"} onClick={() => setService("video")} />
                    <ChoiceCard icon={<SocialMediaIcon size={28} />} label="SOCIAL MEDIA MARKETING" desc="Revenue-driven social. Partnerships & growth." selected={service === "social"} onClick={() => setService("social")} />
                    <ChoiceCard icon={<UgcInfluencerIcon size={28} />} label="UGC & INFLUENCER" desc="Muslim creators. Real influence. Real results." selected={service === "ugc"} onClick={() => setService("ugc")} />
                    <ChoiceCard icon={<SmartSuiteIcon size={28} />} label="SMARTSUITE" desc="AI-powered funnels, agents, sites & portals." selected={service === "smartsuite"} onClick={() => setService("smartsuite")} />
                    <ChoiceCard icon={<AiEducationIcon size={28} />} label="AI EDUCATION" desc="Practical AI skills for your team." selected={service === "ai"} onClick={() => setService("ai")} />
                  </div>
                </div>
              )}

              {/* Step 1: What stage? */}
              {step === 1 && (
                <div key="s1" style={{ animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <Tag>About Your Brand</Tag>
                  <BigText size="clamp(32px, 7vw, 64px)" style={{ marginBottom: "12px" }}>
                    WHERE ARE YOU <span style={{ color: C.gold }}>NOW</span>?
                  </BigText>
                  <Sub style={{ marginBottom: "36px" }}>No judgment — just helps us understand where to start.</Sub>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <ChoiceCard icon={<JustStartingIcon size={28} />} label="JUST STARTING" desc="I have an idea or a new business and need to build from scratch." selected={stage === "starting"} onClick={() => setStage("starting")} />
                    <ChoiceCard icon={<GrowingIcon size={28} />} label="GROWING" desc="I have a business running but need to level up my brand and marketing." selected={stage === "growing"} onClick={() => setStage("growing")} />
                    <ChoiceCard icon={<RebuildingIcon size={28} />} label="REBUILDING" desc="My brand exists but needs a serious overhaul — something feels off." selected={stage === "rebuilding"} onClick={() => setStage("rebuilding")} />
                  </div>
                </div>
              )}

              {/* Step 2: Timeline */}
              {step === 2 && (
                <div key="s2" style={{ animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <Tag>Timeline</Tag>
                  <BigText size="clamp(32px, 7vw, 64px)" style={{ marginBottom: "12px" }}>
                    WHEN DO YOU <span style={{ color: C.gold }}>NEED IT</span>?
                  </BigText>
                  <Sub style={{ marginBottom: "36px" }}>This helps us plan capacity. We'll always confirm exact timelines later.</Sub>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <ChoiceCard icon={<AsapIcon size={28} />} label="ASAP" desc="I need this done as soon as possible — days to 2 weeks." selected={timeline === "asap"} onClick={() => setTimeline("asap")} />
                    <ChoiceCard icon={<MonthsIcon size={28} />} label="1–3 MONTHS" desc="I have some time — let's do it properly." selected={timeline === "1-3"} onClick={() => setTimeline("1-3")} />
                    <ChoiceCard icon={<FlexibleIcon size={28} />} label="FLEXIBLE" desc="No rush — I want to take the time to get it right." selected={timeline === "flexible"} onClick={() => setTimeline("flexible")} />
                  </div>
                </div>
              )}

              {/* Step 3: Budget */}
              {step === 3 && (
                <div key="s3" style={{ animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <Tag>Investment</Tag>
                  <BigText size="clamp(32px, 7vw, 64px)" style={{ marginBottom: "12px" }}>
                    WHAT'S YOUR <span style={{ color: C.gold }}>RANGE</span>?
                  </BigText>
                  <Sub style={{ marginBottom: "36px" }}>Be honest — we work with real budgets. We'll always find a way to make it work In Shaa Allah.</Sub>
                  <div className="grid-choices">
                    <ChoiceCard icon={<Budget1Icon size={28} />} label="$500 – $2K" desc="Small but mighty. Let's make it count." selected={budget === "500-2k"} onClick={() => setBudget("500-2k")} />
                    <ChoiceCard icon={<Budget2Icon size={28} />} label="$2K – $5K" desc="Room to build something solid." selected={budget === "2k-5k"} onClick={() => setBudget("2k-5k")} />
                    <ChoiceCard icon={<Budget3Icon size={28} />} label="$5K – $15K" desc="Full scope. Full quality." selected={budget === "5k-15k"} onClick={() => setBudget("5k-15k")} />
                    <ChoiceCard icon={<Budget4Icon size={28} />} label="$15K+" desc="Let's build something exceptional." selected={budget === "15k+"} onClick={() => setBudget("15k+")} />
                  </div>
                </div>
              )}

              {/* Step 4: Contact details */}
              {step === 4 && (
                <div key="s4" style={{ animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <Tag>Almost Done</Tag>
                  <BigText size="clamp(32px, 7vw, 64px)" style={{ marginBottom: "12px" }}>
                    WHO ARE <span style={{ color: C.gold }}>YOU</span>?
                  </BigText>
                  <Sub style={{ marginBottom: "36px" }}>Last step — tell us how to reach you and anything else on your mind.</Sub>

                  <div style={{
                    background: C.white,
                    border: `2px solid ${C.goldDim}`,
                    padding: "clamp(24px, 5vw, 40px)",
                    boxShadow: "0 8px 30px rgba(201,169,97,0.1)",
                  }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                      {[
                        { label: "YOUR NAME", value: name, setter: setName, type: "text" },
                        { label: "YOUR EMAIL", value: email, setter: setEmail, type: "email" },
                      ].map((f, i) => (
                        <div key={i}>
                          <label style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px", letterSpacing: "3px",
                            color: C.gold, display: "block", marginBottom: "10px",
                          }}>
                            {f.label}
                          </label>
                          <input type={f.type} value={f.value} onChange={e => f.setter(e.target.value)} style={{
                            width: "100%", background: C.lightCream,
                            border: `1px solid ${C.goldDim}`,
                            borderBottom: `2px solid ${C.gold}`,
                            color: C.textDark,
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "16px", padding: "14px 12px",
                            outline: "none", boxSizing: "border-box",
                          }} />
                        </div>
                      ))}
                      <div>
                        <label style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px", letterSpacing: "3px",
                          color: C.gold, display: "block", marginBottom: "10px",
                        }}>
                          ANYTHING ELSE? (OPTIONAL)
                        </label>
                        <textarea rows={3} value={message} onChange={e => setMessage(e.target.value)} style={{
                          width: "100%", background: C.lightCream,
                          border: `1px solid ${C.goldDim}`,
                          borderBottom: `2px solid ${C.gold}`,
                          color: C.textDark,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "16px", padding: "14px 12px",
                          outline: "none", resize: "vertical", boxSizing: "border-box",
                        }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginTop: "36px", gap: "16px",
              }}>
                {step > 0 ? (
                  <button onClick={() => setStep(step - 1)} style={{
                    background: "none", border: `2px solid ${C.goldDim}`,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px", letterSpacing: "3px",
                    color: C.textMid, padding: "14px 32px",
                    cursor: "pointer", transition: "all 0.3s",
                  }}>
                    ← BACK
                  </button>
                ) : <div />}

                {step < totalSteps - 1 ? (
                  <button onClick={() => canNext() && setStep(step + 1)} style={{
                    background: canNext() ? C.gold : C.goldDim,
                    border: "none",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px", letterSpacing: "3px",
                    color: canNext() ? C.white : C.textLight,
                    padding: "14px 40px",
                    cursor: canNext() ? "pointer" : "default",
                    transition: "all 0.3s",
                  }}>
                    NEXT →
                  </button>
                ) : (
                  <button onClick={() => canNext() && handleSubmit()} style={{
                    background: canNext() ? C.gold : C.goldDim,
                    border: "none",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px", letterSpacing: "3px",
                    color: canNext() ? C.white : C.textLight,
                    padding: "14px 40px",
                    cursor: canNext() ? "pointer" : "default",
                    transition: "all 0.3s",
                    boxShadow: canNext() ? "0 8px 20px rgba(201,169,97,0.25)" : "none",
                  }}>
                    {loading ? "SUBMITTING..." : "SUBMIT PROJECT →"}
                  </button>
                )}
              </div>

              {error && (
                <div style={{
                  marginTop: "20px", padding: "16px 20px",
                  background: "rgba(200,60,60,0.08)",
                  borderLeft: "3px solid #C93C3C",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px", color: "#C93C3C",
                    lineHeight: 1.5,
                  }}>
                    {error}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* ── SUCCESS STATE ── */
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <R>
                <p style={{
                  fontFamily: "'Amiri', serif",
                  fontSize: "clamp(24px, 5vw, 36px)", color: C.gold,
                  marginBottom: "32px", direction: "rtl" as const,
                }}>
                  بارك الله فيك
                </p>
              </R>
              <R delay={0.15}>
                <BigText size="clamp(36px, 8vw, 80px)" style={{ marginBottom: "20px" }}>
                  YOUR PROJECT IS <span style={{ color: C.gold }}>SUBMITTED</span>
                </BigText>
              </R>
              <R delay={0.25}>
                <Sub style={{ margin: "0 auto 16px", textAlign: "center", maxWidth: "480px" }}>
                  JazakAllahu Khairan, {name}. We've received your brief and will be in touch within 24 hours In Shaa Allah.
                </Sub>
              </R>
              <R delay={0.35}>
                <div style={{
                  background: C.white, border: `2px solid ${C.goldDim}`,
                  padding: "32px", marginTop: "40px", textAlign: "left",
                  maxWidth: "500px", margin: "40px auto 0",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                    letterSpacing: "2px", color: C.gold, textTransform: "uppercase",
                    marginBottom: "20px",
                  }}>YOUR PROJECT SUMMARY</p>
                  {[
                    { label: "Service", value: service === "brand" ? "Brand Development" : service === "video" ? "Video Marketing" : service === "social" ? "Social Media Marketing" : service === "ugc" ? "UGC & Influencer" : service === "smartsuite" ? "SmartSuite" : "AI Education" },
                    { label: "Stage", value: stage === "starting" ? "Just Starting" : stage === "growing" ? "Growing" : "Rebuilding" },
                    { label: "Timeline", value: timeline === "asap" ? "ASAP" : timeline === "1-3" ? "1-3 Months" : "Flexible" },
                    { label: "Budget", value: budget },
                    { label: "Email", value: email },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: i < 4 ? `1px solid ${C.goldDim}` : "none",
                    }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: C.textLight }}>{item.label}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: C.textDark, fontWeight: 600 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </R>

              <R delay={0.3}>
                <div style={{ marginTop: "48px" }}>
                  <p style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "18px", letterSpacing: "3px",
                    color: C.textLight,
                  }}>
                    UMMAHMEDIA.CA — EDMONTON, AB
                  </p>
                </div>
              </R>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
const Footer = ({ setPage }: { setPage: (p: string) => void }) => (
  <footer style={{
    background: C.white,
    borderTop: `2px solid ${C.goldDim}`,
    padding: "40px 20px",
  }}>
    <div style={{
      maxWidth: "1400px", margin: "0 auto",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: "20px",
    }}>
      <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={LOGO_URL} alt="" style={{ height: "32px", width: "32px", objectFit: "contain" }} />
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "16px", letterSpacing: "3px", color: C.textLight,
        }}>
          UMMAH MEDIA
        </span>
      </div>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {[
          { id: "brand", label: "Brand" },
          { id: "video", label: "Video" },
          { id: "social", label: "Social" },
          { id: "ugc", label: "UGC" },
          { id: "smartsuite", label: "SmartSuite" },
          { id: "ai", label: "AI" },
          { id: "work", label: "Work" },
          { id: "about", label: "About" },
          { id: "contact", label: "Contact" },
        ].map(p => (
          <button key={p.id} onClick={() => setPage(p.id)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
            color: C.textMid, padding: 0,
          }}>
            {p.label}
          </button>
        ))}
      </div>
      <span style={{
        fontFamily: "'Amiri', serif",
        fontSize: "18px", color: "#9E8345",
        width: "100%", textAlign: "center", display: "block",
      }}>
        الحمد لله رب العالمين
      </span>
    </div>
  </footer>
);

// ═══════════════════════════════════════════
// APP
// ═══════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");
  const [preselectedService, setPreselectedService] = useState("");

  const setPageWithService = useCallback((p: string, svc?: string) => {
    if (svc) setPreselectedService(svc);
    setPage(p);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "u") ||
        (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) ||
        (e.metaKey && e.key === "u") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    const blockDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("dragstart", blockDrag);
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return (
    <div style={{ background: C.lightCream, minHeight: "100vh", color: C.textDark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=Amiri:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; scroll-padding-top: 80px; }
        body { overflow-x: hidden; background: #FAF8F3; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::selection { background: rgba(201,169,97,0.3); color: #2C3E37; }
        input, textarea { font-size: 16px !important; }
        input:focus, textarea:focus { border-color: #C9A961 !important; }
        img { max-width: 100%; height: auto; -webkit-user-drag: none; user-select: none; pointer-events: none; }
        body { -webkit-user-select: none; -moz-user-select: none; user-select: none; }
        input, textarea { -webkit-user-select: text; -moz-user-select: text; user-select: text; pointer-events: auto; }
        button { -webkit-tap-highlight-color: transparent; }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .grid-2-1 { display: grid; grid-template-columns: 2fr 1fr; gap: 4px; }
        .grid-1-2 { display: grid; grid-template-columns: 1fr 2fr; gap: 4px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
        .grid-split { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 48px; align-items: center; }
        .grid-services { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4px; }
        .grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 4px; }
        .grid-cards-sm { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 4px; }
        .grid-events { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4px; }
        .grid-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        @media (max-width: 768px) {
          .dsk-nav { display: none !important; }
          .mob-btn { display: block !important; }
          .dsk-nav { display: none !important; }
          .grid-2-1, .grid-1-2, .grid-3, .grid-2 { grid-template-columns: 1fr !important; }
          .grid-split { grid-template-columns: 1fr !important; gap: 32px !important; }
          .grid-services { grid-template-columns: 1fr !important; }
          .grid-cards { grid-template-columns: 1fr !important; }
          .grid-cards-sm { grid-template-columns: 1fr !important; }
          .grid-events { grid-template-columns: 1fr !important; }
          .grid-choices { grid-template-columns: 1fr !important; }
          .mob-pad { padding-left: 16px !important; padding-right: 16px !important; }
          .nav-logo { height: 44px !important; width: 44px !important; }
          .nav-brand { flex-direction: column !important; gap: 4px !important; min-width: auto !important; align-items: center !important; }
          .nav-brand-text { display: none !important; }
          .nav-bismillah { position: static !important; transform: none !important; text-align: center !important; flex: 1 !important; }
          .nav-bismillah span { font-size: 14px !important; }
        }
        @media (min-width: 769px) {
          .mob-menu { display: none !important; }
        }
      `}</style>

      <Grain />
      <Nav page={page} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "brand" && <BrandDevelopment setPage={(p: string) => setPageWithService(p, p === "contact" ? "brand" : "")} />}
      {page === "video" && <VideoMarketing setPage={(p: string) => setPageWithService(p, p === "contact" ? "video" : "")} />}
      {page === "social" && <SocialMedia setPage={(p: string) => setPageWithService(p, p === "contact" ? "social" : "")} />}
      {page === "ugc" && <UGC setPage={(p: string) => setPageWithService(p, p === "contact" ? "ugc" : "")} />}
      {page === "smartsuite" && <SmartSuite setPage={(p: string) => setPageWithService(p, p === "contact" ? "smartsuite" : "")} />}
      {page === "ai" && <AIEducation setPage={(p: string) => setPageWithService(p, p === "contact" ? "ai" : "")} />}
      {page === "work" && <Work setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "contact" && <Contact preselectedService={preselectedService} />}

      <Footer setPage={setPage} />
    </div>
  );
}
