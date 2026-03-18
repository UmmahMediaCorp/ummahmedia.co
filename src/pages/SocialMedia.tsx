import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightMoneyIcon, InsightTargetIcon, InsightChartIcon } from "../icons";

const SocialMedia = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Social Media Marketing"
      titleLine1={<>REVENUE. NOT <span style={{ color: C.gold }}>LIKES</span>.</>}
      titleLine2="THAT'S THE DIFFERENCE."
      subtitle="We don't post to fill a content calendar. We build social media systems that generate revenue, create business partnerships, and open real opportunities — inside the Ummah and beyond."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Social media marketing isn't about pretty posts and follower counts. It's about using social platforms strategically to drive real business results — revenue, partnerships, leads, and opportunities. We manage your social media like a business development channel, not a diary."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Social Media Marketing Overview — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE BIG IDEA ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>Our Approach</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOUR SOCIAL MEDIA<br />
                SHOULD BE A<br />
                <span style={{ color: C.gold }}>REVENUE ENGINE</span>.
              </BigText>
              <Line />
              <Sub>
                Most social media managers focus on aesthetics and engagement metrics. We focus on what actually moves the needle — revenue, partnerships, and business opportunities.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                Every post, every story, every DM strategy is designed with one question in mind: does this create business value? We build partnerships with both the Ummah and the broader market because opportunity doesn't have borders.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightMoneyIcon size={24} color={C.gold} />}
                  text="We measure success in dollars generated and partnerships formed — not likes, comments, or follower count. Those are byproducts, not goals."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="Social Media Strategy Dashboard" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "78%", label: "Of salespeople using social outsell peers" },
      { num: "3.5×", label: "More leads from strategic social" },
      { num: "40%", label: "Of B2B revenue influenced by social" },
      { num: "24/7", label: "Your brand working while you sleep" },
    ]} />


    {/* ── WHAT WE DO (not what typical SMMs do) ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What We Actually Do">
          NOT YOUR TYPICAL <span style={{ color: C.gold }}>SMM</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "20px",
          }}>
            We're not here to make your feed look pretty and call it a day. We're here to make your social media a business development machine.
          </p>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightTargetIcon size={24} color={C.gold} />}
            text="We don't do: random motivational quotes, posting for the sake of posting, vanity metric reports, or generic content calendars. We do: strategy that generates revenue."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "REVENUE-DRIVEN STRATEGY", description: "Every social media plan starts with your business goals — revenue targets, partnership goals, lead generation numbers. We reverse-engineer the content from what you need to achieve, not what looks nice." },
            { number: "02", title: "PARTNERSHIP DEVELOPMENT", description: "We use social media as a networking and partnership tool — connecting your brand with businesses, organizations, and leaders in both the Ummah and the broader market. DMs that lead to deals." },
            { number: "03", title: "CONTENT THAT CONVERTS", description: "Posts designed with conversion in mind — strategic CTAs, funnel-aware content, and messaging that moves followers from awareness to inquiry to paying customer." },
            { number: "04", title: "COMMUNITY AS CURRENCY", description: "Building an engaged community isn't the goal — it's the tool. We build communities that trust you enough to buy from you, refer you, and partner with you." },
            { number: "05", title: "PLATFORM-SPECIFIC EXECUTION", description: "Instagram, TikTok, LinkedIn, X, YouTube — each platform has different rules and different audiences. We build platform-specific strategies, not copy-paste the same content everywhere." },
            { number: "06", title: "DAWAH-INTEGRATED OUTREACH", description: "For Muslim organizations, we integrate dawah principles into social strategy — reaching both Muslim and non-Muslim audiences with content that educates, inspires, and opens doors for the deen." },
            { number: "07", title: "PAID SOCIAL ADVERTISING", description: "Strategic ad campaigns on Meta, TikTok, and LinkedIn — targeted, optimized, and measured against real business outcomes. Not boosted posts, but engineered campaigns." },
            { number: "08", title: "ANALYTICS & REPORTING", description: "Monthly reports that show what matters — revenue attributed to social, partnerships formed, leads generated, cost per acquisition. Not just impressions and reach." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How We Work">
          FROM AUDIT TO <span style={{ color: C.gold }}>REVENUE</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightChartIcon size={24} color={C.gold} />}
            text="We start by understanding your business — not your Instagram. Social media is a channel, not a strategy. The strategy comes from your revenue goals."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="BUSINESS AUDIT" desc="We learn your business inside out — revenue model, target customers, partnership opportunities, competitive landscape. We need to understand where the money is before we touch your social media." />
          <StepItem step="02" title="SOCIAL STRATEGY" desc="We build a social media strategy mapped to your business goals. Content pillars, platform selection, posting cadence, DM strategy, partnership outreach plan — all tied to revenue outcomes." />
          <StepItem step="03" title="EXECUTE & ENGAGE" desc="Our team creates content, manages posting, engages with your audience, initiates partnership conversations, and runs paid campaigns — all while you focus on running your business." />
          <StepItem step="04" title="MEASURE & OPTIMIZE" desc="Monthly reviews focused on business metrics — not vanity metrics. Revenue generated, partnerships formed, leads captured, cost per result. We optimize based on what's actually making money." isLast />
        </div>
      </div>
    </section>

    {/* ── WHO THIS IS FOR ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Who This Is For">
          BUILT FOR <span style={{ color: C.gold }}>BUSINESSES</span>
        </SectionHead>

        <StepItem step="→" title="MUSLIM BUSINESSES READY TO GROW" desc="You have a product or service that works. Now you need social media to bring in consistent leads and revenue — not just followers." />
        <StepItem step="→" title="ORGANIZATIONS BUILDING PARTNERSHIPS" desc="You want to connect with other businesses, sponsors, and community leaders through social. We make your DMs a business development channel." />
        <StepItem step="→" title="BRANDS EXPANDING BEYOND THE UMMAH" desc="You're ready to reach the broader market while staying rooted in your values. We bridge both worlds — Ummah partnerships and mainstream opportunities." />
        <StepItem step="→" title="DAWAH ORGANIZATIONS" desc="You want to reach non-Muslim audiences with authentic, respectful content that opens hearts and minds. Social media as a dawah tool, done professionally." isLast />
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="LET'S MAKE SOCIAL MEDIA"
      highlight="PAY."
      subtitle="Stop posting for the sake of posting. Start building a social media system that generates real revenue and real partnerships."
      buttonText="START YOUR PROJECT"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default SocialMedia;
