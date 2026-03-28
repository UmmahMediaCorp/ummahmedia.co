import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA, CustomBuildSection } from "../shared";
import { InsightLightbulbIcon, InsightPuzzleIcon } from "../icons";
import { useState } from "react";

// ─── Session card (upcoming events) ───
const SessionCard = ({ title, date, desc, onRegister }: {
  title: string; date: string; desc: string; onRegister: () => void;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        padding: "40px 32px",
        transition: "all 0.4s ease",
        boxShadow: h ? "0 8px 24px rgba(201,169,97,0.12)" : "none",
        display: "flex", flexDirection: "column",
      }}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px", letterSpacing: "3px",
        color: C.gold, textTransform: "uppercase",
        display: "block", marginBottom: "16px",
      }}>
        {date}
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
        lineHeight: 1.6, flex: 1,
      }}>
        {desc}
      </p>
      <div style={{ marginTop: "24px" }}>
        <CTA onClick={onRegister} outline>REGISTER INTEREST</CTA>
      </div>
    </div>
  );
};

// ─── Tool category card (unique to AI page) ───
const ToolCard = ({ category, tools, description }: {
  category: string; tools: string[]; description: string;
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
        transition: "all 0.4s ease",
        boxShadow: h ? "0 12px 30px rgba(201,169,97,0.12)" : "none",
      }}
    >
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "24px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {category}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px",
      }}>
        {description}
      </p>
      <div style={{
        borderTop: `1px solid ${C.goldDim}`,
        paddingTop: "16px", marginTop: "auto",
        display: "flex", flexWrap: "wrap", gap: "8px",
      }}>
        {tools.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px", letterSpacing: "1px",
            color: C.gold,
            background: C.goldDim,
            padding: "4px 10px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const AIEducation = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="AI Education"
      titleLine1="THE FUTURE IS"
      titleLine2={<>FOR THE <span style={{ color: C.gold }}>PREPARED</span></>}
      subtitle="We teach Muslim businesses and creators to harness AI practically and ethically — no jargon, no hype. Just real skills you can use today."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="AI tools can now write, design, edit video, analyze data, and automate repetitive tasks — saving you hours every week. We teach you which tools to use, how to use them, and how to think about AI so you're leading the change, not catching up."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="AI Education Overview — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── WHY THIS MATTERS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>Why This Matters</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                AI ISN'T COMING.<br />
                IT'S <span style={{ color: C.gold }}>HERE</span>.
              </BigText>
              <Line />
              <Sub>
                Businesses using AI tools are saving 12+ hours per week on average. They're producing more content, making better decisions, and serving customers faster — with smaller teams and lower costs.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                The gap between those who adopt AI and those who don't is growing every month. This isn't about replacing people — it's about giving yourself an unfair advantage. The Ummah cannot afford to be spectators.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
                  text="You don't need to become a programmer or an AI expert. You just need to know which tools exist, what they're good at, and how to tell them what you need. That's what we teach."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="AI Workshop Photo" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── QURANIC CONNECTION ── */}
    <section style={{
      background: `linear-gradient(180deg, ${C.cream}, ${C.greenLight}, ${C.cream})`,
      padding: "clamp(60px, 10vw, 100px) 20px", textAlign: "center",
    }}>
      <R>
        <p style={{
          fontFamily: "'Amiri', serif",
          fontSize: "32px", color: C.gold,
          marginBottom: "28px", direction: "rtl" as const,
        }}>
          اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
        </p>
      </R>
      <R delay={0.1}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px", color: C.textDark,
          fontWeight: 500, marginBottom: "16px",
          fontStyle: "italic",
        }}>
          "Read in the name of your Lord who created."
        </p>
      </R>
      <R delay={0.15}>
        <Sub style={{ margin: "0 auto", textAlign: "center", maxWidth: "600px" }}>
          The very first revelation was a command to learn. Seeking knowledge isn't optional in Islam — it's an obligation. AI is the knowledge frontier of our time, and the Ummah should be at its forefront.
        </Sub>
      </R>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "12+ HRS", label: "Saved per week with AI tools" },
      { num: "20%", label: "Average sales growth reported" },
      { num: "10×", label: "Faster content production" },
      { num: "73%", label: "Of companies now use AI" },
    ]} />

    {/* ── THE AI LANDSCAPE (unique to this page) ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The AI Landscape">
          WHAT'S OUT THERE AND <span style={{ color: C.gold }}>WHAT IT DOES</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "48px",
          }}>
            The AI tool landscape can feel overwhelming. Here's a simplified map of the categories that matter most for Muslim businesses and creators — and examples of tools in each.
          </p>
        </R>

        <div className="grid-cards">
          {[
            { category: "WRITING & COPYWRITING", description: "Generate marketing copy, emails, social posts, blog articles, and proposals. The AI writes a draft in seconds — you edit and refine it in minutes instead of hours.", tools: ["ChatGPT", "Claude", "Jasper"] },
            { category: "IMAGE & DESIGN", description: "Create graphics, product mockups, social media visuals, and brand assets without a designer. Describe what you want, and the AI generates it.", tools: ["Midjourney", "DALL·E", "Canva AI"] },
            { category: "VIDEO & AUDIO", description: "Edit videos, generate voiceovers, create subtitles, and produce entire video concepts. What used to take a team now takes one person with the right tools.", tools: ["Runway", "ElevenLabs", "CapCut AI"] },
            { category: "AUTOMATION", description: "Connect your apps and automate repetitive tasks — scheduling, email follow-ups, data entry, social posting. Set it up once, and it runs forever.", tools: ["Make.com", "Zapier", "n8n"] },
            { category: "RESEARCH & ANALYSIS", description: "Analyze customer data, research competitors, summarize documents, and extract insights from large datasets. AI finds patterns humans would miss.", tools: ["ChatGPT", "NotebookLM", "Perplexity"] },
            { category: "CUSTOMER SERVICE", description: "Build AI chatbots and assistants that handle common customer questions 24/7 — freeing your team to focus on complex issues that need a human touch.", tools: ["Intercom AI", "Tidio", "Custom GPTs"] },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <ToolCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROGRAMS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Our Programs">
          LEARN. BUILD. <span style={{ color: C.gold }}>LEAD</span>.
        </SectionHead>

        <div className="grid-cards">
          {[
            { number: "01", title: "AI FOR BUSINESS 101", description: "Beginner course teaching business owners AI fundamentals and practical applications. In-person or virtual, up to 20 participants. Leave with a 30-day action plan you can implement immediately." },
            { number: "02", title: "WORKFLOW AUTOMATION", description: "Learn to automate tasks using n8n, Zapier, and Make. Includes process audit, workflow design, implementation, and team training. Stop doing repetitive tasks manually." },
            { number: "03", title: "AI MARKETING MASTERY", description: "Advanced training on AI-powered content creation, targeting, optimization, and predictive analytics. Prerequisite: basic digital marketing knowledge." },
            { number: "04", title: "BUILD A CUSTOM AI TOOL", description: "We design and build a custom AI tool for your specific business needs. Includes requirements, design, development, testing, deployment, and training." },
            { number: "05", title: "AI AGENT DEVELOPMENT", description: "Build AI agents for sales, customer support, or operations. Includes agent design, development, training, integration, deployment, and monitoring." },
            { number: "06", title: "AI TRAINING & WORKSHOPS", description: "Hands-on group sessions customized to your team's skill level. Half-day, full-day, or multi-day formats. Up to 20 participants per session." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHO IT'S FOR ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Who It's For">
          BUILT FOR THE <span style={{ color: C.gold }}>UMMAH</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="Our programs are designed for people with zero technical background. If you can use a smartphone and send an email, you can learn AI. We meet you where you are."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="MUSLIM ENTREPRENEURS" desc="Solopreneurs and small business owners who want to compete with companies 10× their size. AI is the force multiplier that levels the playing field — automate what you can, so you can focus on what matters." />
          <StepItem step="02" title="COMMUNITY ORGANIZATIONS" desc="Masajid, Islamic schools, and nonprofits looking to modernize operations and maximize impact. AI can help you serve more people with less overhead — better communications, smarter scheduling, automated admin." />
          <StepItem step="03" title="CONTENT CREATORS" desc="Muslim creators who want to produce more content, faster, without sacrificing quality. AI handles the tedious parts — editing, captioning, ideation — so you can focus on the creative work that only you can do." />
          <StepItem step="04" title="PROFESSIONALS" desc="Anyone in the Muslim community who wants to future-proof their career. AI skills are becoming as essential as computer skills were 20 years ago. Get ahead of the curve now." isLast />
        </div>
      </div>
    </section>

    {/* ── UPCOMING SESSIONS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Get Involved">
          UPCOMING <span style={{ color: C.gold }}>SESSIONS</span>
        </SectionHead>

        <div className="grid-events">
          {[
            { title: "AI FOR BUSINESS 101", date: "Coming Soon — Edmonton", desc: "Beginner-friendly. 3-hour workshop. Leave with a 30-day AI action plan for your business. No technical knowledge required." },
            { title: "CONTENT CREATION WITH AI", date: "Coming Soon — Virtual", desc: "Build your AI content engine. Generate ideas, create calendars, and produce professional content 10× faster. Hands-on practice." },
            { title: "AI ETHICS & ISLAM", date: "Coming Soon — Edmonton", desc: "A deep discussion on navigating AI responsibly through an Islamic framework. Bias, privacy, and principled adoption." },
          ].map((event, i) => (
            <R key={i} delay={i * 0.1}>
              <SessionCard {...event} onRegister={() => setPage("contact")} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── CUSTOM BUILD ── */}
    <CustomBuildSection onContact={() => setPage("contact")} />

    {/* ── CTA ── */}
    <BottomCTA
      title="JOIN THE AI"
      highlight="REVOLUTION."
      subtitle="Don't let the Ummah fall behind. Equip yourself with the skills to lead in the age of AI — practically, ethically, and confidently."
      buttonText="REGISTER YOUR INTEREST"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default AIEducation;
