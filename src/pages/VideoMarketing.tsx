import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightLightbulbIcon, InsightTargetIcon } from "../icons";
import { useState } from "react";

// ─── Funnel stage card ───
const FunnelStage = ({ stage, label, color, formats, goal }: {
  stage: string; label: string; color: string; formats: string[]; goal: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        borderTop: `4px solid ${color}`,
        padding: "36px 28px",
        transition: "all 0.4s ease",
        boxShadow: h ? "0 12px 30px rgba(201,169,97,0.12)" : "none",
      }}
    >
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "14px", letterSpacing: "3px",
        color, display: "block", marginBottom: "8px",
      }}>
        {stage}
      </span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "32px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "16px", lineHeight: 1,
      }}>
        {label}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px",
      }}>
        {goal}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {formats.map((f, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px", letterSpacing: "1px",
            color: C.textLight, textTransform: "uppercase",
            padding: "6px 0",
            borderBottom: i < formats.length - 1 ? `1px solid ${C.goldDim}` : "none",
          }}>
            {f}
          </span>
        ))}
      </div>
    </div>
  );
};

const VideoMarketing = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Video Marketing"
      titleLine1="STORIES THAT"
      titleLine2={<><span style={{ color: C.gold }}>MOVE</span> HEARTS</>}
      subtitle="We don't just make videos. We build video systems — content engineered to reach the right people, at the right stage, with the right message."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Video marketing is using video strategically to grow your business — not just making something that looks nice, but creating the right type of video for each stage of your customer's journey, from first discovering you to choosing to buy."
    />

    {/* ── FEATURED REEL ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Video Marketing Showreel — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE VIDEO FUNNEL (unique to this page — the core concept) ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Video Funnel">
          THE RIGHT VIDEO AT THE <span style={{ color: C.gold }}>RIGHT TIME</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "20px",
          }}>
            Most businesses make the mistake of creating one video and hoping it does everything. It won't. Different people need different videos depending on where they are in their decision journey.
          </p>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
            text="Think of it like a conversation. You wouldn't propose marriage on a first date. Short videos introduce you (TOFU). Medium videos build trust (MOFU). Long videos close the deal (BOFU)."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          <R>
            <FunnelStage
              stage="TOP OF FUNNEL"
              label="DISCOVERY"
              color={C.green}
              goal="Goal: Get seen. Stop the scroll. Make people aware your brand exists. This is about reach and first impressions."
              formats={["Instagram Reels (15-60s)", "TikTok Videos (15-90s)", "YouTube Shorts (< 60s)", "Social Media Clips"]}
            />
          </R>
          <R delay={0.1}>
            <FunnelStage
              stage="MIDDLE OF FUNNEL"
              label="CONSIDERATION"
              color={C.gold}
              goal="Goal: Build trust. Educate. Show expertise. The viewer knows you exist — now convince them you're the right choice."
              formats={["Explainer Videos (3-8 min)", "Behind-the-Scenes", "Educational Content", "Podcast / Interview Clips"]}
            />
          </R>
          <R delay={0.2}>
            <FunnelStage
              stage="BOTTOM OF FUNNEL"
              label="DECISION"
              color="#C94A4A"
              goal="Goal: Convert. Remove doubt. Give them the final push. These videos directly drive sales, sign-ups, and bookings."
              formats={["Client Testimonials", "Case Study Films", "Product Demos", "Personalized Video Messages"]}
            />
          </R>
        </div>
      </div>
    </section>

    {/* ── THE HOOK SCIENCE ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The First 2 Seconds</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOUR HOOK<br />
                IS <span style={{ color: C.gold }}>EVERYTHING</span>.
              </BigText>
              <Line />
              <Sub>
                You have less than 2 seconds to stop someone from scrolling past your video. That's not an opinion — it's what the data shows. The hook is the single most important frame in your entire video.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                A strong hook creates an "open loop" — a question or tension that the viewer needs to resolve. We engineer every video to grab attention immediately, then structure the content to maintain retention throughout.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightTargetIcon size={24} color={C.gold} />}
                  text={"Great hooks signal value instantly. \"Here's how we doubled our client's revenue\" beats \"Hey everyone, welcome to our video\" every single time."}
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <VideoBlock label="Hook Breakdown — Replace with example" aspect="130%" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "2 SEC", label: "To capture attention" },
      { num: "91%", label: "Of businesses use video" },
      { num: "87%", label: "Say video increased sales" },
      { num: "12×", label: "More shares than text+image" },
    ]} />


    {/* ── SERVICES GRID ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What We Create">
          VIDEO <span style={{ color: C.gold }}>SERVICES</span>
        </SectionHead>

        <div className="grid-cards">
          {[
            { number: "01", title: "BRAND FILMS", description: "Cinematic brand stories that showcase your mission and values. The kind of video that makes people feel something — and remember you for it." },
            { number: "02", title: "SHORT-FORM CONTENT", description: "Scroll-stopping videos optimized for each platform's algorithm. Reels, Shorts, TikToks — engineered for reach, retention, and engagement." },
            { number: "03", title: "EVENT COVERAGE", description: "Multi-camera event production for conferences, fundraisers, and community events. Professional documentation that extends your event's impact." },
            { number: "04", title: "DOCUMENTARY STYLE", description: "Long-form storytelling that builds deep trust — community stories, organizational profiles, and impact films that educate and inspire." },
            { number: "05", title: "PRODUCT VIDEOS", description: "Clean, compelling product showcases designed to remove doubt and drive purchase decisions. Features, benefits, and social proof combined." },
            { number: "06", title: "VIDEO STRATEGY", description: "The plan behind the production — content calendars, platform selection, distribution strategy, and analytics. We build the system, not just the video." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Our Process">
          FROM CONCEPT TO <span style={{ color: C.gold }}>SCREEN</span>
        </SectionHead>

        <StepItem step="01" title="PRE-PRODUCTION" desc="We start with strategy — not cameras. Creative brief, scripting, storyboarding, location scouting, and a detailed production plan. Every second of your video is mapped out before we press record." />
        <StepItem step="02" title="PRODUCTION" desc="Professional crew, cinema-grade equipment, and directed shoots. We control lighting, audio, framing, and performance to capture exactly what your story needs." />
        <StepItem step="03" title="POST-PRODUCTION" desc="This is where the magic happens. Expert editing, color grading, motion graphics, sound design, and music selection — every frame polished to a professional standard." />
        <StepItem step="04" title="OPTIMIZE & DISTRIBUTE" desc="We don't just hand you a file. We export optimized versions for every platform, design thumbnails, write captions, and plan your release strategy to maximize reach and impact." isLast />
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Recent Work">
          FEATURED <span style={{ color: C.gold }}>PROJECTS</span>
        </SectionHead>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px" }}>
          <R><VideoBlock label="Featured Video Project" aspect="56.25%" /></R>
        </div>
        <div className="grid-2" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Brand Film — Thumbnail" h="clamp(250px, 40vw, 400px)" /></R>
          <R delay={0.1}><ImgBlock label="Event Coverage — Thumbnail" h="clamp(250px, 40vw, 400px)" /></R>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="READY TO TELL YOUR"
      highlight="STORY?"
      subtitle="Let's create video content engineered for impact — from the first frame to the final conversion."
      buttonText="START YOUR PROJECT"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default VideoMarketing;
