import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightKeyIcon, InsightChartIcon, InsightTargetIcon } from "../icons";

const BrandDevelopment = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Brand Development"
      titleLine1={<>WE BUILD <span style={{ color: C.gold }}>ANYTHING</span></>}
      titleLine2="YOUR BRAND NEEDS"
      subtitle="Think of it like property development — but digital. Whatever part of your brand is missing, underdeveloped, or broken, we build it. Strategy, visuals, systems, content — the full picture."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Brand development is building out everything your business needs to show up professionally and consistently — from your marketing strategy and visual aesthetics, to your content SOPs and color grading. If something in your brand is lacking, we identify it and we build it. No gaps."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Brand Development Showreel — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE BIG IDEA: Property Development, but Digital ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Big Idea</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                PROPERTY<br />
                DEVELOPMENT,<br />
                BUT <span style={{ color: C.gold }}>DIGITAL</span>.
              </BigText>
              <Line />
              <Sub>
                A property developer doesn't just paint walls. They build foundations, install plumbing, wire electricity, design layouts, and finish interiors. The building works because every part was built to work together.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                That's what we do for your brand. We audit everything — your strategy, your visuals, your content, your systems — and we build out whatever is missing. Logo needs work? We fix it. No content strategy? We create one. Posting inconsistently? We build the SOPs. Color grading is off? We lock it in.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightKeyIcon size={24} color={C.gold} />}
                  text="Most businesses don't need a full rebrand. They need a marketing generalist who can see the full picture and fill the gaps. That's us."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="Brand Ecosystem Overview" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "23%", label: "Revenue lift from brand consistency" },
      { num: "3.5×", label: "ROI on strategic marketing" },
      { num: "80%", label: "Of trust comes from visuals" },
      { num: "100%", label: "Gaps identified & filled" },
    ]} />


    {/* ── WHAT WE BUILD (the full spectrum) ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What We Build">
          THE FULL <span style={{ color: C.gold }}>SPECTRUM</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "20px",
          }}>
            Every brand has different gaps. Some need strategy. Some need visuals. Some need systems. We're marketing generalists — which means whatever your brand needs developed, we can build it.
          </p>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightChartIcon size={24} color={C.gold} />}
            text="We don't force you into a package. We audit your brand, identify what's underdeveloped, and build exactly what you need — nothing more, nothing less."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "MARKETING STRATEGY", description: "The blueprint. We map out your market position, target audience, competitive advantage, and growth plan. Without strategy, everything else is guesswork — this is where we start." },
            { number: "02", title: "VISUAL IDENTITY & AESTHETICS", description: "Logo, color palette, typography, imagery style, and overall visual direction. We build or refine the look and feel that makes people recognize your brand instantly — and trust it." },
            { number: "03", title: "CONTENT SOPs", description: "Standard operating procedures for your content across every platform. What to post, when to post, how it should look, how it should sound. Repeatable systems so your team executes consistently without you." },
            { number: "04", title: "COLOR GRADING & VISUAL STANDARDS", description: "Locked-in color grading presets, photo editing standards, and visual guidelines so every piece of content — photos, videos, graphics — feels like it came from the same brand." },
            { number: "05", title: "PLATFORM STRATEGY", description: "Each platform has different rules. We build platform-specific strategies — Instagram, TikTok, YouTube, LinkedIn, X — so your content is optimized for where your audience actually lives." },
            { number: "06", title: "BRAND COLLATERAL & ASSETS", description: "Business cards, presentations, social media templates, email signatures, proposal templates — every digital and physical asset your brand needs to operate professionally." },
            { number: "07", title: "MESSAGING & COPYWRITING", description: "Your brand voice, taglines, bios, about pages, and key messages. We define how your brand speaks — so whether it's you, your team, or an agency posting, it always sounds like you." },
            { number: "08", title: "GAP ANALYSIS & AUDIT", description: "Don't know what you need? We do a full brand audit — strategy, visuals, content, systems — and deliver a clear report showing exactly what's working, what's broken, and what's missing." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Works">
          FROM <span style={{ color: C.gold }}>AUDIT</span> TO ACTION
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightTargetIcon size={24} color={C.gold} />}
            text="We don't start with design. We start with diagnosis. Every brand development project begins with understanding what you actually need — then we build a custom scope around that."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="AUDIT & DIAGNOSE" desc="We review your entire brand presence — strategy, visuals, content, and systems. We identify every gap, inconsistency, and missed opportunity. You get a clear picture of where your brand stands today." />
          <StepItem step="02" title="SCOPE & PRIORITIZE" desc="Not everything needs to be built at once. We prioritize based on impact — what will move the needle fastest for your business? We build a custom scope and timeline around your real needs and budget." />
          <StepItem step="03" title="BUILD & DEVELOP" desc="This is where the work happens. Strategy documents, visual systems, content SOPs, platform playbooks, templates, and assets — we develop everything in your scope to a professional standard." />
          <StepItem step="04" title="IMPLEMENT & HANDOFF" desc="We don't just hand you files. We walk your team through everything, train them on the systems, and make sure they can execute independently. Your brand should run smoothly with or without us." isLast />
        </div>
      </div>
    </section>

    {/* ── WHO THIS IS FOR ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Who This Is For">
          IS YOUR BRAND <span style={{ color: C.gold }}>UNDERDEVELOPED</span>?
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "48px",
          }}>
            If any of these sound like you, brand development is what you need:
          </p>
        </R>

        <StepItem step="→" title="YOUR BRAND LOOKS DIFFERENT EVERYWHERE" desc="Your Instagram doesn't match your website. Your business cards don't match your social media. Every post looks like it was made by a different person. You need visual standards and systems." />
        <StepItem step="→" title="YOU DON'T HAVE A STRATEGY" desc="You're posting content, running ads, and doing marketing — but there's no plan behind it. No clear audience. No positioning. No competitive differentiation. You need a marketing strategy." />
        <StepItem step="→" title="YOUR TEAM CAN'T EXECUTE WITHOUT YOU" desc="Every post, every design, every decision goes through you because there are no SOPs. You need content systems and brand guidelines so your team can execute consistently." />
        <StepItem step="→" title="YOU KNOW SOMETHING IS OFF, BUT CAN'T NAME IT" desc="Your brand doesn't feel professional but you can't pinpoint why. You need a full audit — someone who can diagnose the problems and build the solutions." isLast />
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Selected Work">
          BRAND <span style={{ color: C.gold }}>PROJECTS</span>
        </SectionHead>

        <div className="grid-2-1">
          <R><ImgBlock label="Full Brand Build — Case Study" h="clamp(280px, 45vw, 500px)" /></R>
          <R delay={0.1}><ImgBlock label="Strategy + Visual System" h="clamp(280px, 45vw, 500px)" /></R>
        </div>
        <div className="grid-3" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Content SOPs" h="clamp(220px, 32vw, 320px)" /></R>
          <R delay={0.1}><ImgBlock label="Platform Strategy" h="clamp(220px, 32vw, 320px)" /></R>
          <R delay={0.2}><ImgBlock label="Brand Collateral" h="clamp(220px, 32vw, 320px)" /></R>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="LET'S DEVELOP YOUR"
      highlight="BRAND."
      subtitle="Whatever's missing, we'll build it. Whatever's broken, we'll fix it. Your brand deserves to be fully developed."
      buttonText="START YOUR PROJECT"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default BrandDevelopment;
