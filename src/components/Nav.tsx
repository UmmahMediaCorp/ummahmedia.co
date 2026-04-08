import { useState, useEffect, useRef, useCallback } from "react";
import { C, LOGO_URL } from "../shared";

const Nav = ({ currentPath = "/" }: { currentPath?: string }) => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { href: "/services/brand-development", label: "Brand Development" },
    { href: "/services/video-marketing", label: "Video Marketing" },
    { href: "/services/social-media", label: "Social Media Marketing" },
    { href: "/services/ugc-influencer", label: "UGC & Influencer Agency" },
    { href: "/services/smartsuite", label: "SmartSuite" },
    { href: "/services/ai-education", label: "AI Education" },
  ];

  const isServicePage = servicePages.some(s => currentPath.startsWith(s.href));

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
    color: active ? C.gold : C.textMid,
    transition: "color 0.3s",
    padding: 0,
    textDecoration: "none",
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
        {/* Left — Logo + UMMAH MEDIA */}
        <a href="/" className="nav-brand" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", minWidth: "180px", textDecoration: "none" }}>
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
        </a>

        {/* Center — Bismillah */}
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
          <a href="/" style={navLinkStyle(currentPath === "/")}>Home</a>

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
                    <a key={s.href} href={s.href} style={{
                      display: "block", width: "100%",
                      background: currentPath === s.href ? C.goldDim : "transparent",
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
                      color: currentPath === s.href ? C.gold : C.textMid,
                      padding: "14px 20px",
                      textAlign: "left",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                      onMouseEnter={e => { (e.currentTarget).style.background = C.goldDim; (e.currentTarget).style.color = C.gold; }}
                      onMouseLeave={e => { if (currentPath !== s.href) { (e.currentTarget).style.background = "transparent"; (e.currentTarget).style.color = C.textMid; } }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/work" style={navLinkStyle(currentPath === "/work")}>Work</a>
          <a href="/about" style={navLinkStyle(currentPath === "/about")}>About</a>
          <a href="/contact" style={navLinkStyle(currentPath === "/contact")}>Contact</a>
          <a href="https://umti.ummahmedia.co" target="_blank" rel="noopener" style={{
            ...navLinkStyle(false),
            color: C.gold,
            background: "transparent",
            border: `1px solid ${C.gold}`,
            padding: "6px 14px",
            letterSpacing: "2px",
            transition: "background 0.3s, color 0.3s",
          }}
            onMouseEnter={e => { (e.currentTarget).style.background = C.gold; (e.currentTarget).style.color = C.textDark; }}
            onMouseLeave={e => { (e.currentTarget).style.background = "transparent"; (e.currentTarget).style.color = C.gold; }}
          >Training</a>
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
          <a href="/" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: currentPath === "/" ? C.gold : C.textDark,
            textAlign: "left", padding: 0, textDecoration: "none",
          }}>
            Home
          </a>

          {servicePages.map(s => (
            <a key={s.href} href={s.href} style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "28px", letterSpacing: "3px",
              color: currentPath === s.href ? C.gold : C.textDark,
              textAlign: "left", padding: 0, textDecoration: "none",
            }}>
              {s.label}
            </a>
          ))}

          <a href="/work" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: currentPath === "/work" ? C.gold : C.textDark,
            textAlign: "left", padding: 0, textDecoration: "none",
          }}>
            Work
          </a>
          <a href="/about" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: currentPath === "/about" ? C.gold : C.textDark,
            textAlign: "left", padding: 0, textDecoration: "none",
          }}>
            About
          </a>
          <a href="/contact" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: currentPath === "/contact" ? C.gold : C.textDark,
            textAlign: "left", padding: 0, textDecoration: "none",
          }}>
            Contact
          </a>
          <a href="https://umti.ummahmedia.co" target="_blank" rel="noopener" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px", letterSpacing: "3px",
            color: C.gold,
            textAlign: "left", padding: "6px 14px",
            textDecoration: "none",
            border: `1px solid ${C.gold}`,
            alignSelf: "flex-start",
          }}>
            Training
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
