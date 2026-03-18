import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { ProblemSolutionIcon, TestimonialIcon, UnboxingIcon, HowToIcon, DayInLifeIcon, InsightBrainIcon, InsightPuzzleIcon } from "../icons";
import { useState } from "react";

// ─── Format card ───
const FormatCard = ({ icon, title, description, bestFor }: {
  icon: React.ReactNode; title: string; description: string; bestFor: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        padding: "36px 28px",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: h ? "0 16px 40px rgba(201,169,97,0.18)" : "0 2px 10px rgba(0,0,0,0.03)",
        transform: h ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <span style={{ marginBottom: "16px", color: C.gold }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "26px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px", flex: 1,
      }}>
        {description}
      </p>
      <div style={{ borderTop: `1px solid ${C.goldDim}`, paddingTop: "16px" }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", letterSpacing: "2px",
          color: C.gold, textTransform: "uppercase",
        }}>
          Best for: {bestFor}
        </span>
      </div>
    </div>
  );
};

const UGC = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="UGC & Influencer Agency"
      titleLine1="REAL PEOPLE."
      titleLine2={<><span style={{ color: C.gold }}>REAL</span> INFLUENCE.</>}
      subtitle="UGC content and a full Muslim influencer agency — we connect brands with authentic creators from the Ummah who are specialists in their fields and drive real results."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="We run two things under one roof. First: UGC content — real people creating authentic content for your brand that converts better than any ad. Second: an influencer agency — a curated roster of Muslim creators and specialists who partner with businesses to promote products and services they genuinely believe in."
    />

    {/* ── FEATURED REEL ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="UGC & Influencer Showcase — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── WHY UGC + INFLUENCER ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Psychology</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                PEOPLE TRUST<br />
                <span style={{ color: C.gold }}>PEOPLE</span>.<br />
                NOT BRANDS.
              </BigText>
              <Line />
              <Sub>
                79% of consumers say user-generated content directly impacts their purchase decisions. When a real person — someone your audience recognizes and trusts — recommends your product, it bypasses the brain's ad filter entirely.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                That's why we built both a UGC production system and a full influencer agency. UGC gives you the content. Our influencer roster gives you the reach. Together, they give you conversions.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightBrainIcon size={24} color={C.gold} />}
                  text="The brain processes UGC and influencer recommendations in its 'trust' network — the same circuitry as personal recommendations from friends. Ads go through the 'skepticism' filter. That's the difference."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <div className="grid-2">
              <ImgBlock label="Creator Content 1" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 2" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 3" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 4" h="clamp(200px, 28vw, 280px)" />
            </div>
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "79%", label: "Say UGC impacts purchase decisions" },
      { num: "12×", label: "More engagement than brand content" },
      { num: "75%", label: "Lower cost per acquisition" },
      { num: "91%", label: "Higher view rates on TikTok" },
    ]} />


    {/* ── THE INFLUENCER AGENCY ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Influencer Agency">
          MUSLIM CREATORS. <span style={{ color: C.gold }}>CURATED</span>.
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "20px",
          }}>
            We're building the first Muslim influencer agency in Edmonton — a curated roster of creators from the Ummah who are specialists in their fields. Whether it's fitness, food, tech, fashion, business, or lifestyle — our creators are authentic voices with real audiences.
          </p>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="For businesses: we match you with the right creators for your brand. For creators: we get you paid partnerships with businesses that align with your values. Everyone wins."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "CURATED CREATOR ROSTER", description: "A vetted network of Muslim influencers across Edmonton and Canada — each with a real audience, real engagement, and real expertise in their niche. Not bought followers. Real influence." },
            { number: "02", title: "BRAND-CREATOR MATCHING", description: "We don't just connect any creator with any brand. We match based on audience overlap, values alignment, content style, and campaign goals. The right voice for the right message." },
            { number: "03", title: "CAMPAIGN MANAGEMENT", description: "End-to-end campaign management — creative briefs, contract negotiation, content review, posting schedules, and performance reporting. We handle the logistics so both sides can focus on creating." },
            { number: "04", title: "CREATOR DEVELOPMENT", description: "We help Muslim creators grow — content strategy, brand positioning, rate negotiations, and portfolio building. If you're a creator in the Ummah, we want to hear from you." },
            { number: "05", title: "MULTI-PLATFORM CAMPAIGNS", description: "Instagram, TikTok, YouTube, X, LinkedIn — we plan campaigns across the platforms where your audience actually lives, with content optimized for each platform's algorithm." },
            { number: "06", title: "PERFORMANCE & ROI", description: "Every campaign is measured against real business outcomes — not just impressions. Sales attributed, leads generated, engagement rates, and ROAS. We prove the value." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── UGC FORMATS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="UGC Content">
          FORMATS THAT <span style={{ color: C.gold }}>CONVERT</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "48px",
          }}>
            Beyond the influencer partnerships, we produce UGC content at scale — real people creating ad-ready content for your brand. These are the formats that consistently outperform everything else.
          </p>
        </R>

        <div className="grid-cards-sm">
          {[
            { icon: <ProblemSolutionIcon size={32} />, title: "PROBLEM → SOLUTION", description: "Start with a pain point, reveal the solution. The most powerful UGC format because it mirrors the viewer's own thought process.", bestFor: "Products that solve clear problems" },
            { icon: <TestimonialIcon size={32} />, title: "TESTIMONIAL", description: "Real customers sharing genuine experiences. Unscripted authenticity is what makes this convert — you can't fake real satisfaction.", bestFor: "Services & high-trust purchases" },
            { icon: <UnboxingIcon size={32} />, title: "UNBOXING / FIRST LOOK", description: "The excitement of receiving and trying something for the first time. Viewers experience the product vicariously through someone they trust.", bestFor: "Physical products & e-commerce" },
            { icon: <HowToIcon size={32} />, title: "HOW-TO / TUTORIAL", description: "Real users demonstrating your product in their daily life. Builds credibility through demonstrated knowledge, not scripted claims.", bestFor: "Products with learning curves" },
            { icon: <DayInLifeIcon size={32} />, title: "DAY-IN-THE-LIFE", description: "Lifestyle content where your brand appears naturally in someone's routine. Not the focus — part of a life the viewer aspires to.", bestFor: "Lifestyle brands & recurring purchases" },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FormatCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Works">
          FROM BRIEF TO <span style={{ color: C.gold }}>RESULTS</span>
        </SectionHead>

        <StepItem step="01" title="DISCOVERY & MATCHING" desc="We learn your brand, your audience, and your goals. Then we match you with the right creators from our roster — or source new UGC creators specifically for your campaign." />
        <StepItem step="02" title="STRATEGY & BRIEFING" desc="Creative briefs, talking points, and campaign frameworks. Enough guidance to hit key messages, enough freedom for creators to sound like themselves." />
        <StepItem step="03" title="PRODUCTION & REVIEW" desc="Creators produce content in their natural environment. We review, give feedback, and ensure quality — while keeping the authentic feel that makes this work." />
        <StepItem step="04" title="LAUNCH & OPTIMIZE" desc="Content goes live across platforms — organic posts, paid ads, or both. We track performance, optimize in real-time, and scale what's working." isLast />
      </div>
    </section>

    {/* ── FOR CREATORS ── */}
    <section style={{
      background: `linear-gradient(180deg, ${C.lightCream}, ${C.greenLight}, ${C.lightCream})`,
      padding: "clamp(60px, 12vw, 100px) 20px", textAlign: "center",
    }}>
      <R>
        <Tag>For Creators</Tag>
        <BigText size="clamp(28px, 6vw, 64px)" style={{ marginBottom: "20px" }}>
          ARE YOU A MUSLIM <span style={{ color: C.gold }}>CREATOR</span>?
        </BigText>
      </R>
      <R delay={0.1}>
        <Sub style={{ margin: "0 auto 16px", textAlign: "center", maxWidth: "560px" }}>
          If you're a Muslim content creator, influencer, or specialist with a real audience — we want to connect you with paid brand partnerships that align with your values. Join our roster.
        </Sub>
      </R>
      <R delay={0.2}>
        <CTA onClick={() => setPage("contact")}>JOIN THE ROSTER</CTA>
      </R>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="LET REAL VOICES"
      highlight="SELL."
      subtitle="UGC content and influencer partnerships — the most trusted form of marketing, powered by the Ummah."
      buttonText="GET STARTED"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default UGC;
