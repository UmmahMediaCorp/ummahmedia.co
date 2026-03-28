import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA, CustomBuildSection } from "../shared";
import { SmartFunnelIcon, SmartAgentIcon, SmartSiteIcon, SmartMediaIcon, SmartPortalIcon, InsightPuzzleIcon, InsightLightbulbIcon } from "../icons";
import { useState } from "react";

// ─── Module card (unique to SmartSuite) ───
const ModuleCard = ({ icon, name, description, deliverables }: {
  icon: string; name: string; description: string; deliverables: string[];
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
      <span style={{ marginBottom: "16px", color: C.gold }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "28px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {name}
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
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", letterSpacing: "2px",
          color: C.gold, textTransform: "uppercase",
          display: "block", marginBottom: "10px",
        }}>
          Deliverables
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {deliverables.map((d, i) => (
            <span key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", color: C.textLight, lineHeight: 1.5,
            }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SmartSuite = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="SmartSuite"
      titleLine1={<>AI-POWERED <span style={{ color: C.gold }}>BUSINESS</span></>}
      titleLine2="SYSTEMS"
      subtitle="Modular, AI-driven systems that connect together — funnels, agents, websites, media, and client portals. Pick the modules you need, and we build a system that works as one."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="SmartSuite is a set of AI-powered business tools that plug into each other. Each module solves a specific problem — attracting leads, talking to visitors, converting on your website, producing content, or giving clients a dashboard. Pick one or pick all five. They're designed to work together."
    />

    {/* ── THE BIG IDEA ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Big Idea</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                MODULAR.<br />
                CONNECTED.<br />
                <span style={{ color: C.gold }}>INTELLIGENT</span>.
              </BigText>
              <Line />
              <Sub>
                Most businesses cobble together disconnected tools — a website here, a chatbot there, a funnel somewhere else. Nothing talks to anything. Data gets lost. Leads fall through cracks.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                SmartSuite is different. Each module is built to connect with the others. Your AI agent lives on your Smart Site. Your Smart Funnel feeds leads to your agent. Your Smart Portal gives clients a dashboard. It's one system, not five separate tools.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
                  text="You don't have to buy all five. Pick the modules you need now, and add more as you grow. Every module is designed to stand alone or plug into the rest."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="SmartSuite System Diagram" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "5", label: "Modular Systems" },
      { num: "24/7", label: "AI Agent Availability" },
      { num: "3×", label: "Lead Conversion Lift" },
      { num: "1", label: "Connected Ecosystem" },
    ]} />

    {/* ── THE 5 MODULES ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Modules">
          PICK WHAT YOU <span style={{ color: C.gold }}>NEED</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "20px",
          }}>
            Each SmartSuite module solves a specific business problem. Combine them for a fully connected AI-powered business system, or start with one and expand over time.
          </p>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
            text="Pricing is modular — you only pay for the modules you use. Each module has its own scope, deliverables, and timeline."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            {
              icon: <SmartFunnelIcon size={36} />,
              name: "SMART FUNNEL",
              description: "A data-driven system that attracts prospects, qualifies them, captures their info, and improves targeting over time. Your always-on lead generation machine.",
              deliverables: ["Funnel design & architecture", "Landing pages", "Lead qualification logic", "Feedback loops", "Targeting optimization"],
            },
            {
              icon: <SmartAgentIcon size={36} />,
              name: "SMART AGENT",
              description: "An AI-powered agent (Voiceflow-based) that talks to your visitors, answers questions, qualifies leads, and routes them to the right place — 24/7.",
              deliverables: ["Agent design & personality", "Voiceflow implementation", "Website integration", "Lead qualification flows", "Knowledge base setup"],
            },
            {
              icon: <SmartSiteIcon size={36} />,
              name: "SMART SITE",
              description: "A premium, conversion-focused website that integrates with your AI agent and funnel. Not just a brochure — a business tool.",
              deliverables: ["Site design & development", "AI agent integration", "Funnel integration", "Mobile-responsive build", "SEO & analytics setup"],
            },
            {
              icon: <SmartMediaIcon size={36} />,
              name: "SMART PROJECT MEDIA",
              description: "A content engine that produces videos, visuals, and media assets designed to feed your other SmartSuite systems.",
              deliverables: ["Video assets", "Campaign visuals", "Project storytelling content", "Sales-support media"],
            },
            {
              icon: <SmartPortalIcon size={36} />,
              name: "SMART PORTAL",
              description: "A client-facing dashboard where your customers can track progress, view metrics, access assets, and manage invoices.",
              deliverables: ["Portal dashboard", "Onboarding flow", "Progress tracking", "Metrics & reporting", "Asset library & payments"],
            },
          ].map((mod, i) => (
            <R key={i} delay={i * 0.08}>
              <ModuleCard {...mod} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT CONNECTS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Connects">
          ONE SYSTEM. <span style={{ color: C.gold }}>ZERO GAPS</span>.
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="When you combine modules, they share data and workflows. A lead captured by Smart Funnel gets qualified by Smart Agent, converts on Smart Site, and gets onboarded through Smart Portal — automatically."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="SMART FUNNEL CAPTURES" desc="Your funnel attracts the right prospects through targeted campaigns, landing pages, and lead magnets. Qualified leads are passed to Smart Agent automatically." />
          <StepItem step="02" title="SMART AGENT QUALIFIES" desc="Your AI agent engages every visitor, answers their questions, and qualifies them based on your criteria. Hot leads get routed to your sales process instantly." />
          <StepItem step="03" title="SMART SITE CONVERTS" desc="Your website works as a conversion tool — not just a brochure. Agent integration, funnel integration, and strategic design turn visitors into customers." />
          <StepItem step="04" title="SMART MEDIA FUELS" desc="Your content engine produces the videos, visuals, and assets that power your funnel, your site, and your social presence. Always fresh, always on-brand." />
          <StepItem step="05" title="SMART PORTAL RETAINS" desc="Once they're a client, the portal gives them a professional dashboard — progress tracking, metrics, assets, and invoices. Retention and transparency, automated." isLast />
        </div>
      </div>
    </section>

    {/* ── WHO THIS IS FOR ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Who This Is For">
          BUILT FOR <span style={{ color: C.gold }}>GROWTH</span>
        </SectionHead>

        <StepItem step="→" title="SERVICE BUSINESSES SCALING UP" desc="You're getting more leads than you can handle manually. You need systems that qualify, convert, and onboard without adding headcount." />
        <StepItem step="→" title="AGENCIES & CONSULTANCIES" desc="You want a professional client experience — from first touch to ongoing delivery. SmartSuite gives your clients a premium experience at every stage." />
        <StepItem step="→" title="BUSINESSES READY FOR AI" desc="You've heard about AI but don't know where to start. SmartSuite gives you AI-powered systems without the complexity of building from scratch." />
        <StepItem step="→" title="ANYONE TIRED OF DISCONNECTED TOOLS" desc="Your CRM doesn't talk to your website. Your chatbot doesn't know your services. Your clients have no visibility. SmartSuite connects everything." isLast />
      </div>
    </section>

    {/* ── CUSTOM BUILD ── */}
    <CustomBuildSection onContact={() => setPage("contact")} />

    {/* ── CTA ── */}
    <BottomCTA
      title="BUILD YOUR"
      highlight="SMARTSUITE."
      subtitle="Pick your modules. We'll build the system. Your business runs smarter from day one."
      buttonText="GET STARTED"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default SmartSuite;
