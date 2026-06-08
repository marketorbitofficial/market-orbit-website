import { useState, useRef } from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import { Check, ArrowUpRight, MapPin, Briefcase, BarChart2, X } from "lucide-react";
import { ImageWithFallback } from "./imgFallback/ImageWithFallback";

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "94%", label: "Would recommend" },
  { value: "3+", label: "Avg years tenure" },
  { value: "12+", label: "Countries represented" },
];

const techItems = [
  "React", "TypeScript", "Node.js", "AWS", "Kubernetes",
  "Python", "AI / ML", "Next.js", "Terraform", "PostgreSQL",
  "Docker", "Go", "GraphQL", "Azure", "CI/CD",
  "React", "TypeScript", "Node.js", "AWS", "Kubernetes",
  "Python", "AI / ML", "Next.js", "Terraform", "PostgreSQL",
  "Docker", "Go", "GraphQL", "Azure", "CI/CD",
];

const techValues = [
  "Move fast, break nothing", "Ownership over permission",
  "Curiosity is a job requirement", "Ship real value, daily",
  "Strong opinions, loosely held", "Results over presence",
  "Move fast, break nothing", "Ownership over permission",
  "Curiosity is a job requirement", "Ship real value, daily",
  "Strong opinions, loosely held", "Results over presence",
];

const whyReasons = [
  { number: "01", title: "Global Impact", tag: "Impact", description: "Your code runs in production environments that matter — at companies across industries that depend on what you build.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
  { number: "02", title: "Innovation First", tag: "Technology", description: "We adopt modern architectures before they become trends. You'll work with tools worth knowing — not legacy stacks kept alive by inertia.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
  { number: "03", title: "Ownership Culture", tag: "Culture", description: "You own your work end to end. No layers of sign-off, no diluted responsibility. If you built it, your name is on it.", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
  { number: "04", title: "Continuous Learning", tag: "Growth", description: "Mentorship, certifications, and a real learning budget. Growth here isn't a promise buried in an onboarding deck.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
  { number: "05", title: "Flexible Work", tag: "Lifestyle", description: "Results over presence. Work from wherever you think best, set your own pace, and skip the performative productivity.", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
  { number: "06", title: "Accelerated Growth", tag: "Career", description: "You'll take on real responsibility early. Careers move faster here because there's no artificial ceiling holding talent back.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" },
];

const benefits = [
  { id: 0, number: "01", title: "Competitive\nCompensation", short: "Paid above market, always.", description: "We run bi-annual market benchmarking against companies at our stage and above. Salary, equity, and bonuses are all part of the conversation — not afterthoughts handed down after the fact.", highlight: "Above-market compensation reviewed every 6 months.", tag: "Finance" },
  { id: 1, number: "02", title: "Flexible\nWork", short: "No mandatory office days.", description: "Results are what matter. Teams set their own rhythm, async communication is a first-class citizen, and no one's tracking when you log in — only what you ship.", highlight: "Remote-first. Hybrid where it makes sense.", tag: "Lifestyle" },
  { id: 2, number: "03", title: "Career\nMentorship", short: "Learn from people who've shipped.", description: "Structured 1:1 mentorship with senior engineers and leaders. Quarterly growth reviews, clear promotion tracks, and honest feedback — not the performative annual kind.", highlight: "Dedicated mentor from your first week.", tag: "Growth" },
  { id: 3, number: "04", title: "Global\nExposure", short: "Work without borders.", description: "You'll collaborate with clients and teams across multiple continents. Cross-functional and cross-timezone work is the norm here — it broadens your perspective faster than anything else.", highlight: "Projects spanning multiple industries and geographies.", tag: "Opportunity" },
];

const testimonials = [
  { name: "Aisha T.", role: "Senior Engineer · 2 yrs", quote: "I joined as a mid-level engineer. Twelve months later I was leading a team of five. That kind of trajectory doesn't happen at most places.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Marcus R.", role: "Product Lead · 3 yrs", quote: "What I didn't expect was the level of trust from day one. No hand-holding. You're treated like an adult who knows their craft.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Priya L.", role: "DevOps Engineer · 18 months", quote: "The flexible work policy isn't just a line in the offer letter. I've worked from three countries this year. Results are all that matter.", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

const cultureValues = ["Collaboration", "Innovation", "Curiosity", "Accountability", "Growth Mindset"];

const internshipPerks = [
  { number: "01", title: "Real Projects", description: "You'll work on actual client deliverables — not internal tools that nobody ships." },
  { number: "02", title: "Mentorship", description: "Paired with someone who's shipped in production and knows where the bodies are buried." },
  { number: "03", title: "Learning Environment", description: "Hands-on with modern cloud, AI tooling, and engineering practices used by real teams." },
  { number: "04", title: "Growth Pathway", description: "Strong performers get real consideration for full-time roles. We've converted most." },
];

const hiringSteps = [
  { number: "01", title: "Application", duration: "5 min", description: "Submit your profile, portfolio, or CV. We read every submission — no automated rejections before human eyes.", tip: "Tailor your portfolio to show relevant work, not just volume. Quality of thinking matters more than quantity of projects." },
  { number: "02", title: "Initial Screening", duration: "30 min call", description: "A relaxed conversation with someone from the team — not HR. We want to understand what you're looking for and share what we're building.", tip: "Come with questions about our current challenges. Candidates who've done their homework stand out immediately." },
  { number: "03", title: "Technical Evaluation", duration: "2–3 hrs", description: "A practical, role-relevant assessment. No whiteboard theatre. We test for how you actually work — thinking, communication, and craft.", tip: "Ask clarifying questions throughout. How you approach ambiguity tells us more than whether you get the right answer." },
  { number: "04", title: "Team Interview", duration: "1 hr", description: "Meet the people you'd work with day to day. This is as much about you evaluating us as the other way around.", tip: "Be honest about what you don't know. Curiosity and intellectual honesty beat bluffing every time." },
  { number: "05", title: "Offer", duration: "1–2 days", description: "We move fast. You'll receive a transparent, itemised offer — salary, equity, benefits — with no pressure tactics.", tip: "All numbers are negotiable. We actively encourage the conversation and won't penalise you for asking." },
  { number: "06", title: "Day One", duration: "Week 1", description: "Structured onboarding, access to everything you need, and a manager who has your first 30 days mapped out before you arrive.", tip: "Your first real challenge starts in week one. Not busywork — actual work that matters to the team." },
];

const jobs = [
  { title: "Senior Full Stack Engineer", department: "Engineering", location: "Remote / Hybrid", experience: "Senior", type: "Full-time", salary: "$140k – $180k", team: "Core Platform", description: "Lead development on our client-facing platforms, shipping features across the full stack — from pixel-perfect React interfaces to resilient Node.js services. You'll work directly with clients and take ownership of production systems that handle real scale.", responsibilities: ["Lead design and implementation of full-stack features from spec to production", "Mentor junior and mid-level engineers through code review and pair programming", "Collaborate with product and design to shape technical direction", "Own performance, reliability, and scalability of key services", "Drive internal tooling improvements and documentation culture"], requirements: ["5+ years of professional full-stack development experience", "Deep expertise in React, TypeScript, and modern CSS", "Solid backend experience with Node.js or equivalent (Go, Python)", "Familiarity with cloud platforms — AWS, GCP, or Azure", "Track record of shipping production software at scale"], niceToHave: ["Experience with distributed systems or microservices architecture", "Prior startup or consulting background", "Open source contributions to widely-used projects"] },
  { title: "AI / ML Engineer", department: "Engineering", location: "Remote", experience: "Mid-Senior", type: "Full-time", salary: "$150k – $190k", team: "AI & Automation", description: "Build and deploy machine learning systems that power critical decisions for enterprise clients. You'll work on the full lifecycle — from data pipelines and model training to production inference and monitoring.", responsibilities: ["Design, train, and deploy ML models across supervised and generative paradigms", "Build robust data pipelines and feature engineering workflows", "Collaborate with client teams to translate business problems into ML solutions", "Monitor model performance in production and drive continuous improvement", "Stay ahead of the field and evaluate emerging approaches for practical application"], requirements: ["3+ years of applied ML engineering in production environments", "Proficiency in Python and ML frameworks (PyTorch, TensorFlow, or JAX)", "Experience with LLMs, RAG systems, or fine-tuning foundation models", "Strong understanding of MLOps, experiment tracking, and model serving", "Ability to communicate technical concepts clearly to non-technical stakeholders"], niceToHave: ["Published research or patents in ML/AI", "Contribution to open-source ML tooling", "Experience with vector databases and embedding pipelines"] },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote / Hybrid", experience: "Mid-Senior", type: "Full-time", salary: "$120k – $155k", team: "Infrastructure", description: "Own the infrastructure that keeps our systems reliable, fast, and secure. You'll automate everything, eliminate toil, and build platforms other engineers actually enjoy working with.", responsibilities: ["Design and maintain CI/CD pipelines across multiple client environments", "Manage cloud infrastructure using IaC tools (Terraform, Pulumi, or CDK)", "Implement observability stacks — logging, tracing, alerting", "Drive security hardening and compliance requirements across deployments", "Collaborate with engineering teams to improve developer experience and deployment velocity"], requirements: ["3+ years of DevOps or platform engineering experience", "Expertise with Kubernetes and container orchestration", "Strong command of Terraform or equivalent IaC tooling", "Hands-on experience with AWS, GCP, or Azure in production", "Solid understanding of networking, security groups, and IAM"], niceToHave: ["Experience supporting SOC 2 or ISO 27001 compliance", "Background building self-service developer platforms", "Contributions to open source DevOps tooling"] },
  { title: "Cloud Architect", department: "Engineering", location: "Hybrid", experience: "Senior", type: "Full-time", salary: "$160k – $200k", team: "Solutions Architecture", description: "Design and lead cloud migrations and greenfield architectures for enterprise clients. You'll be the person clients trust to make high-stakes infrastructure decisions — and the person who makes sure those decisions are right.", responsibilities: ["Lead cloud architecture design for large-scale enterprise transformation projects", "Conduct architecture reviews and produce well-documented design artefacts", "Advise clients on build vs. buy decisions, vendor selection, and migration strategy", "Mentor engineering teams on cloud best practices and architecture patterns", "Own technical pre-sales engagements and solution scoping"], requirements: ["7+ years of software engineering with 3+ in cloud architecture roles", "Deep expertise in at least one major cloud (AWS, GCP, or Azure)", "Experience designing distributed systems for high availability and fault tolerance", "Strong grasp of FinOps, governance, and security at enterprise scale", "Excellent written and verbal communication — you'll present to C-suite"], niceToHave: ["Certifications: AWS Solutions Architect Professional or equivalent", "Experience with multi-cloud or hybrid-cloud architectures", "Background in financial services, healthcare, or regulated industries"] },
  { title: "UI / UX Designer", department: "Design", location: "Remote", experience: "Mid-Level", type: "Full-time", salary: "$100k – $130k", team: "Design", description: "Craft user experiences that are both beautiful and genuinely functional. You'll work closely with engineering and product to shape how our clients' users interact with complex systems — and make hard problems feel simple.", responsibilities: ["Lead end-to-end UX design from discovery through handoff", "Conduct user research, interviews, and usability testing", "Build and maintain design systems used across client projects", "Partner with engineers to ensure implementation fidelity", "Present design decisions with clear rationale to client stakeholders"], requirements: ["3+ years of product design experience with a strong portfolio", "Proficiency in Figma, including auto-layout, components, and variables", "Experience designing complex, data-dense enterprise interfaces", "Strong grasp of accessibility standards (WCAG 2.1 AA)", "Ability to prototype ideas quickly and communicate concepts visually"], niceToHave: ["Front-end development skills (HTML/CSS, basic React)", "Motion design or prototyping experience", "Design system contributions at scale"] },
  { title: "Product Manager", department: "Product", location: "Hybrid", experience: "Senior", type: "Full-time", salary: "$130k – $165k", team: "Product", description: "Define, prioritize, and ship product experiences that matter. You'll translate client needs into roadmaps, work across engineering and design to deliver outcomes — not just outputs — and be accountable for the results.", responsibilities: ["Own the product roadmap for one or more platform areas", "Gather requirements through structured client discovery and internal research", "Write crisp, unambiguous product specs and acceptance criteria", "Drive sprint planning, backlog grooming, and release ceremonies", "Track key metrics and use data to inform prioritization decisions"], requirements: ["4+ years of product management in a software company or consultancy", "Strong experience with Agile/Scrum methodology in cross-functional teams", "Demonstrated ability to say no — and explain why — under stakeholder pressure", "Comfort working with engineering on technical trade-offs and feasibility", "Excellent communication skills, both written and in live stakeholder settings"], niceToHave: ["Experience with B2B enterprise software or platform products", "Technical background or ability to read basic code", "Prior experience in digital transformation consulting"] },
  { title: "Business Analyst", department: "Consulting", location: "Remote / Hybrid", experience: "Mid-Level", type: "Full-time", salary: "$90k – $115k", team: "Strategy & Consulting", description: "Bridge the gap between business problems and technical solutions. You'll surface requirements, model processes, and turn ambiguity into clarity — working directly with client stakeholders across multiple engagements.", responsibilities: ["Lead requirements discovery workshops with client teams", "Produce detailed business requirements documents, user stories, and process maps", "Identify gaps between current and target-state operating models", "Support solution design by translating business needs to technical teams", "Track engagement progress and produce clear status reporting for clients"], requirements: ["3+ years of business analysis experience in a consulting or software environment", "Proficiency in process modelling (BPMN, flowcharts, swim-lane diagrams)", "Experience with requirements management tools (Jira, Confluence, or similar)", "Strong analytical thinking — comfortable with data, Excel, and basic SQL", "Clear, precise written English and confident stakeholder-facing communication"], niceToHave: ["Domain experience in financial services, logistics, or healthcare", "CBAP, PMI-PBA, or equivalent certification", "Exposure to ERP or CRM implementation projects"] },
  { title: "Technical Consultant", department: "Consulting", location: "Hybrid", experience: "Senior", type: "Contract", salary: "$120k – $150k + project bonus", team: "Consulting", description: "Embed with client teams to solve their hardest technical challenges. You'll need both the depth to understand complex systems and the communication skills to guide senior stakeholders — sometimes in the same meeting.", responsibilities: ["Act as technical lead on client engagements from scoping through delivery", "Assess existing systems and architectures, producing actionable recommendations", "Facilitate technical workshops and executive-level presentations", "Coordinate cross-functional delivery teams including client-side staff", "Manage project risks, dependencies, and stakeholder expectations"], requirements: ["6+ years of software engineering or technical consulting experience", "Proven ability to lead technical discussions with C-level and VP audiences", "Breadth across cloud, software architecture, and enterprise integration", "Experience delivering projects under fixed-scope or fixed-price contracts", "Strong written communication — proposals, SOWs, and exec summaries"], niceToHave: ["Big-4 or top-tier consulting firm background", "PMP, PRINCE2, or SAFe certification", "Domain expertise in digital transformation or cloud modernisation"] },
];

const depts = ["All", "Engineering", "Design", "Product", "Consulting"];
const locs = ["All", "Remote", "Hybrid", "Remote / Hybrid"];
const levels = ["All", "Mid-Level", "Mid-Senior", "Senior"];
const types = ["All", "Full-time", "Contract"];
type Job = (typeof jobs)[0];

// ─── Shared component ─────────────────────────────────────────────────────────

function MovingBorderButton({ children, href, className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Tag = href ? "a" : "button";
  return (
    <div ref={containerRef} className={`relative inline-flex p-px overflow-hidden ${className}`} style={{ cursor: "pointer" }}>
      <style>{`@keyframes spin-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .mbb-spin { animation: spin-border 3s linear infinite; }`}</style>
      <div className="mbb-spin absolute" style={{ width: "200%", height: "200%", top: "-50%", left: "-50%", background: "conic-gradient(from 0deg, transparent 0deg, #c8ff00 60deg, transparent 120deg)", opacity: 0.7 }} />
      <Tag {...(href ? { href } : {})} style={{ fontFamily: "'DM Sans', sans-serif", background: "#c8ff00", color: "#080808", fontSize: "14px", fontWeight: "600", padding: "13px 28px", position: "relative", zIndex: 1, display: "inline-block", textDecoration: "none", borderWidth: 0, borderStyle: "none", boxShadow: "none", outline: "none", cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
        {children}
      </Tag>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function CareerHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Market Orbit team" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #080808f0 0%, #080808d1 50%, #08080894 100%)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-32">
        <div className="max-w-2xl">
          <p style={{ fontFamily: "'Geist Mono', monospace", color: "#c8ff00", fontSize: "11px", marginBottom: "28px", letterSpacing: "3.2px", textTransform: "uppercase" }}>Careers at Market Orbit</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.06", letterSpacing: "-0.015em", fontWeight: "700" }} className="text-5xl md:text-[68px] mb-7">
            Build Technology<br />That Shapes the Future
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "16px", maxWidth: "480px", marginBottom: "36px" }}>
            Join a team of engineers, designers, and strategists building solutions that help businesses transform and scale in a digital-first world.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#roles" style={{ fontFamily: "'DM Sans', sans-serif", background: "#c8ff00", color: "#080808", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", display: "inline-block", transition: "opacity 0.15s", textDecoration: "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}>Explore Opportunities</a>
            <a href="#culture" style={{ fontFamily: "'DM Sans', sans-serif", color: "#767676", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", display: "inline-block", transition: "color 0.15s, border-color 0.15s", textDecoration: "none" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#f5f5f5"; el.style.borderColor = "#6b6b6b"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#767676"; el.style.borderColor = "#333"; }}>Life at Market Orbit</a>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#505050", fontSize: "13px", marginTop: "36px", letterSpacing: "0.01em" }}>8 open roles across Engineering, Design, Product & Consulting — remote friendly.</p>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 translate-y-1/4 max-w-[300px]" style={{ background: "#0f0f0fe6", backdropFilter: "blur(20px)", borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", padding: "24px 26px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#888", lineHeight: "1.65", fontSize: "13px", fontStyle: "italic", marginBottom: "16px" }}>"We don't just build software. We build solutions that create measurable impact."</p>
          <span style={{ fontFamily: "'Geist Mono', monospace", color: "#505050", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Market Orbit Vision</span>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function TechMarquee() {
  return (
    <div style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", overflow: "hidden", padding: "16px 0" }}>
      <style>{`@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } } @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } } .mq-left { display: flex; width: max-content; animation: marquee-left 28s linear infinite; } .mq-right { display: flex; width: max-content; animation: marquee-right 36s linear infinite; } .mq-left:hover, .mq-right:hover { animation-play-state: paused; }`}</style>
      <div className="mq-left" style={{ marginBottom: "10px" }}>
        {techItems.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: i % 5 === 0 ? "#c8ff00" : "#444", letterSpacing: "0.12em", marginRight: "40px", whiteSpace: "nowrap", textTransform: "uppercase" }}>{item}</span>
        ))}
      </div>
      <div className="mq-right">
        {techValues.map((val, i) => (
          <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#505050", letterSpacing: "0.06em", marginRight: "48px", whiteSpace: "nowrap" }}>
            {val}<span style={{ color: "#c8ff00", margin: "0 24px 0 0" }}> ·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Why Join Us ──────────────────────────────────────────────────────────────

function WhyJoinUs() {
  const [active, setActive] = useState(0);
  const r = whyReasons[active];
  return (
    <section id="why" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", overflow: "hidden", minHeight: "600px" }}>
          <div style={{ background: "#0f0f0f", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "#1a1a1a", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "40px 40px 32px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700", fontSize: "clamp(26px, 3vw, 36px)", margin: 0 }}>Why exceptional people<br />choose Market Orbit</h2>
            </div>
            <div style={{ flex: 1 }}>
              {whyReasons.map((reason, i) => {
                const isActive = active === i;
                return (
                  <button key={reason.number} onClick={() => setActive(i)} style={{ width: "100%", display: "grid", gridTemplateColumns: "44px 1fr", gap: "16px", padding: "20px 40px", background: isActive ? "#141414" : "#00000000", borderBottomWidth: i < whyReasons.length - 1 ? "1px" : 0, borderBottomStyle: "solid", borderBottomColor: "#222", borderTopWidth: 0, borderTopStyle: "none", borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: isActive ? "#c8ff00" : "#00000000", borderRightWidth: 0, borderRightStyle: "none", boxShadow: "none", outline: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s, border-left-color 0.2s" }}>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: isActive ? "#c8ff00" : "#2a2a2a", letterSpacing: "0.08em", paddingTop: "3px", transition: "color 0.2s" }}>{reason.number}</span>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: isActive ? "#f5f5f5" : "#666", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em", lineHeight: "1.3", margin: 0, transition: "color 0.2s" }}>{reason.title}</p>
                      <div style={{ maxHeight: isActive ? "100px" : "0", overflow: "hidden", opacity: isActive ? 1 : 0, transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease", marginTop: isActive ? "8px" : "0" }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "12px", lineHeight: "1.7", margin: 0 }}>{reason.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block" style={{ background: "#080808", position: "relative", overflow: "hidden" }}>
            <style>{`@keyframes wj-fade { from { opacity: 0; } to { opacity: 1; } }`}</style>
            <div key={active} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, animation: "wj-fade 0.45s ease forwards" }}>
              <ImageWithFallback src={r.image} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.45) saturate(0.6)" }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, #080808e6 0%, #08080833 50%, #08080800 100%)" }} />
              <div style={{ position: "absolute", bottom: "36px", left: "36px", right: "36px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "3.2px", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{r.tag}</span>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.25", margin: 0 }}>{r.title}</p>
              </div>
              <div style={{ position: "absolute", top: "28px", right: "28px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "#ffffff40", letterSpacing: "0.08em" }}>{r.number} / 06</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────

function BenefitsBento() {
  const [active, setActive] = useState(0);
  const current = benefits[active];
  return (
    <section id="benefits" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.12", letterSpacing: "-0.01em", fontWeight: "700" }} className="text-4xl md:text-[52px]">Benefits designed<br />around people</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "15px", maxWidth: "380px" }}>Click any benefit to read what it actually means in practice — no corporate fluff.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", overflow: "hidden" }}>
          <div className="grid grid-cols-2">
            {benefits.map((b, i) => {
              const isActive = active === i;
              return (
                <button key={b.id} onClick={() => setActive(i)} style={{ background: isActive ? "#141414" : "#0f0f0f", borderRightWidth: i % 2 === 0 ? "1px" : 0, borderRightStyle: "solid", borderRightColor: "#222", borderBottomWidth: i < 2 ? "1px" : 0, borderBottomStyle: "solid", borderBottomColor: "#222", borderTopWidth: 0, borderTopStyle: "none", borderLeftWidth: 0, borderLeftStyle: "none", boxShadow: "none", outline: "none", padding: "36px 32px", textAlign: "left", cursor: "pointer", transition: "background 0.2s", display: "flex", flexDirection: "column", gap: "12px", width: "100%" }} onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "#141414"; }} onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "#0f0f0f"; }}>
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: isActive ? "#c8ff00" : "#2a2a2a", letterSpacing: "0.08em", transition: "color 0.2s" }}>{b.number}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: isActive ? "#f5f5f5" : "#666", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.25", whiteSpace: "pre-line", transition: "color 0.2s", margin: 0 }}>{b.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: isActive ? "#888" : "#444", fontSize: "12px", lineHeight: "1.5", margin: 0, transition: "color 0.2s" }}>{b.short}</p>
                  <div style={{ height: "1px", background: "#c8ff00", width: isActive ? "24px" : "0px", transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)", marginTop: "4px" }} />
                </button>
              );
            })}
          </div>
          <div className="hidden lg:flex flex-col justify-between" style={{ borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "#1a1a1a", padding: "48px 44px", background: "#141414", minHeight: "380px" }}>
            <div key={current.id} style={{ animation: "fadeUp 0.3s ease forwards" }}>
              <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "#c8ff00", letterSpacing: "0.1em", display: "block", marginBottom: "20px" }}>{current.number} / {current.tag}</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.2", marginBottom: "20px", whiteSpace: "pre-line" }}>{current.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.75", marginBottom: "28px" }}>{current.description}</p>
              <div style={{ borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: "#c8ff00", paddingLeft: "16px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "13px", fontStyle: "italic", lineHeight: "1.6" }}>{current.highlight}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {benefits.map((b) => (
                <button key={b.id} onClick={() => setActive(b.id)} style={{ height: "2px", width: active === b.id ? "24px" : "8px", background: active === b.id ? "#c8ff00" : "#333", borderWidth: 0, borderStyle: "none", boxShadow: "none", outline: "none", cursor: "pointer", padding: 0, transition: "width 0.3s ease, background 0.3s ease" }} />
              ))}
            </div>
          </div>
          <div className="lg:hidden col-span-2">
            {benefits.map((b) => active === b.id ? (
              <div key={b.id} style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", background: "#141414", padding: "28px 24px", animation: "fadeUp 0.25s ease forwards" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.75", marginBottom: "16px" }}>{b.description}</p>
                <div style={{ borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: "#c8ff00", paddingLeft: "14px" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px", fontStyle: "italic" }}>{b.highlight}</p>
                </div>
              </div>
            ) : null)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Culture ──────────────────────────────────────────────────────────────────

function CultureSection() {
  return (
    <section id="culture" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div style={{ position: "relative", overflow: "hidden", marginBottom: "80px" }}>
          <ImageWithFallback src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600" alt="Market Orbit team" style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.4) saturate(0.5)", display: "block" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, #080808 0%, #08080860 60%, #08080800 100%)" }} />
          <div style={{ position: "absolute", bottom: "48px", left: "48px", right: "48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.2", maxWidth: "600px", margin: 0, fontStyle: "italic" }}>"Built by people who love<br />solving hard problems."</p>
            <div style={{ display: "flex", gap: "40px", flexShrink: 0 }}>
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: "#c8ff00", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Geist Mono', monospace", color: "#c8ff00", fontSize: "11px", letterSpacing: "3.2px", textTransform: "uppercase", margin: 0 }}>From the people who work here</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.1", margin: 0 }}>Don't take our word for it</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "#0f0f0f", borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.75", fontStyle: "italic", flex: 1, margin: 0 }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "20px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, borderWidth: "1px", borderStyle: "solid", borderColor: "#222" }}>
                  <ImageWithFallback src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "13px", fontWeight: "600", margin: 0, letterSpacing: "-0.01em" }}>{t.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", margin: "2px 0 0" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", paddingTop: "32px" }}>
          <style>{`@keyframes vals-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
          <span style={{ fontFamily: "'Geist Mono', monospace", color: "#888", fontSize: "10px", letterSpacing: "3.2px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>Our values</span>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #080808, #08080800)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #080808, #08080800)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ display: "flex", gap: "10px", width: "max-content", animation: "vals-scroll 22s linear infinite" }}>
              {[...Array(8)].flatMap(() => cultureValues).map((v, i) => (
                <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "12px", fontWeight: "500", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", padding: "5px 14px", whiteSpace: "nowrap" }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Internships ──────────────────────────────────────────────────────────────

function InternshipSection() {
  return (
    <section id="internships" style={{ background: "#0f0f0f", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p style={{ fontFamily: "'Geist Mono', monospace", color: "#c8ff00", fontSize: "11px", letterSpacing: "3.2px", textTransform: "uppercase", marginBottom: "20px" }}>Internships</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700", marginBottom: "20px" }} className="text-4xl md:text-[52px]">Launch your career<br />with Market Orbit</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "15px", marginBottom: "36px", maxWidth: "420px" }}>Structured programs for students and fresh graduates who want real technology experience — not coffee fetching.</p>
            <a href="#roles" style={{ fontFamily: "'DM Sans', sans-serif", background: "#c8ff00", color: "#080808", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", display: "inline-block", transition: "opacity 0.15s", textDecoration: "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}>Apply for Internship</a>
          </div>
          <div className="flex flex-col">
            {internshipPerks.map((perk) => (
              <div key={perk.number} style={{ paddingTop: "24px", paddingBottom: "24px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", color: "#383838", fontSize: "11px", paddingTop: "3px", flexShrink: 0, letterSpacing: "0.05em" }}>{perk.number}</span>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em", marginBottom: "6px" }}>{perk.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.65" }}>{perk.description}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Open Positions ───────────────────────────────────────────────────────────

function DeptTag({ children, color, textColor }: { children: React.ReactNode; color: string; textColor: string }) {
  return <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", fontWeight: "500", color: textColor, background: color, padding: "2px 7px", letterSpacing: "0.04em" }}>{children}</span>;
}

function MetaTag({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#777", display: "inline-flex", alignItems: "center", gap: "4px" }}>{icon}{children}</span>;
}

function DrawerSection({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : "36px" }}>
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "14px", fontWeight: "600", letterSpacing: "-0.01em", marginBottom: "14px" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{children}</div>
    </div>
  );
}

function DrawerListItem({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: muted ? "#444" : "#c8ff00", flexShrink: 0, marginTop: "8px" }} />
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: muted ? "#666" : "#909090", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>{children}</p>
    </div>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-1.5">
      <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "11px", letterSpacing: "0.1em" }} className="uppercase mr-1">{label}:</span>
      {options.map((opt) => (
        <button key={opt} onClick={() => onChange(opt)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: value === opt ? "600" : "400", color: value === opt ? "#080808" : "#909090", background: value === opt ? "#c8ff00" : "#00000000", borderWidth: "1px", borderStyle: "solid", borderColor: value === opt ? "#c8ff00" : "#333", borderRadius: "100px", padding: "4px 12px", cursor: "pointer", transition: "all 0.15s" }}>{opt}</button>
      ))}
    </div>
  );
}

function JobDrawer({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const isOpen = job !== null;
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "#080808cc", zIndex: 99, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity 0.3s ease" }} />
      <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: "600px", maxWidth: "100%", background: "#141414", borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "#1a1a1a", zIndex: 100, overflowY: "auto", transform: isOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column" }}>
        {job && (
          <>
            <div style={{ padding: "36px 40px 28px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", position: "sticky", top: 0, background: "#141414", zIndex: 2 }}>
              <div>
                <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "0.1em", margin: "0 0 10px" }}>{job.team} · {job.salary}</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.15", margin: 0 }}>{job.title}</h2>
              </div>
              <button onClick={onClose} style={{ width: "32px", height: "32px", borderRadius: "50%", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", background: "#00000000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, marginTop: "4px" }}>
                <X size={14} color="#777" strokeWidth={2} />
              </button>
            </div>
            <div style={{ padding: "18px 40px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <DeptTag color="#c8ff0020" textColor="#c8ff00">{job.department}</DeptTag>
              <MetaTag icon={<MapPin size={10} />}>{job.location}</MetaTag>
              <MetaTag icon={<BarChart2 size={10} />}>{job.experience}</MetaTag>
              <MetaTag icon={<Briefcase size={10} />}>{job.type}</MetaTag>
            </div>
            <div style={{ padding: "36px 40px", flex: 1 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "15px", lineHeight: "1.75", marginBottom: "40px" }}>{job.description}</p>
              <DrawerSection title="What you'll do">{job.responsibilities.map((r) => <DrawerListItem key={r}>{r}</DrawerListItem>)}</DrawerSection>
              <DrawerSection title="What we're looking for">{job.requirements.map((r) => <DrawerListItem key={r}>{r}</DrawerListItem>)}</DrawerSection>
              <DrawerSection title="Nice to have" last>{job.niceToHave.map((r) => <DrawerListItem key={r} muted>{r}</DrawerListItem>)}</DrawerSection>
            </div>
            <div style={{ padding: "24px 40px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", background: "#141414", display: "flex", alignItems: "center", gap: "16px" }}>
              <button style={{ background: "#c8ff00", color: "#080808", borderWidth: 0, borderStyle: "none", boxShadow: "none", outline: "none", padding: "13px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Apply for this role <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px" }}>Typically responds within 3 business days</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function OpenPositions() {
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [level, setLevel] = useState("All");
  const [type, setType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const filtered = jobs.filter((j) => {
    if (dept !== "All" && j.department !== dept) return false;
    if (loc !== "All" && j.location !== loc) return false;
    if (level !== "All" && j.experience !== level) return false;
    if (type !== "All" && j.type !== type) return false;
    return true;
  });
  return (
    <>
      <section id="roles" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }} className="text-4xl md:text-[52px]">Explore opportunities</h2>
            <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "12px", paddingBottom: "8px" }}>{filtered.length} {filtered.length !== 1 ? "roles" : "role"} available</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-10">
            <FilterGroup label="Department" options={depts} value={dept} onChange={setDept} />
            <FilterGroup label="Location" options={locs} value={loc} onChange={setLoc} />
            <FilterGroup label="Level" options={levels} value={level} onChange={setLevel} />
            <FilterGroup label="Type" options={types} value={type} onChange={setType} />
          </div>
          <div className="flex flex-col">
            {filtered.length === 0 ? (
              <div style={{ background: "#0f0f0f", borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", padding: "48px", textAlign: "center" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px" }}>No roles match your filters. Try adjusting them.</p>
              </div>
            ) : (
              filtered.map((job, i) => (
                <div key={job.title} onClick={() => setSelectedJob(job)} style={{ borderBottomWidth: i === filtered.length - 1 ? "0" : "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", transition: "opacity 0.15s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.72")} onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#f5f5f5", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>{job.title}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <DeptTag color="#c8ff0020" textColor="#c8ff00">{job.department}</DeptTag>
                      <MetaTag icon={<MapPin size={10} />}>{job.location}</MetaTag>
                      <MetaTag icon={<BarChart2 size={10} />}>{job.experience}</MetaTag>
                      <MetaTag icon={<Briefcase size={10} />}>{job.type}</MetaTag>
                    </div>
                  </div>
                  <button style={{ fontFamily: "'DM Sans', sans-serif", color: "#f5f5f5", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", padding: "8px 18px", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", background: "#00000000", flexShrink: 0, whiteSpace: "nowrap", pointerEvents: "none" }}>View role <ArrowUpRight size={13} /></button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <JobDrawer job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
}

// ─── Hiring Journey ───────────────────────────────────────────────────────────

const STEP_H = 80;
const PT = 48;

function PersonSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="3" r="2.5" fill="#080808" />
      <path d="M7.5 5.5 L7.5 10" stroke="#080808" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.5 8 L10.5 8" stroke="#080808" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 14 L7.5 10 L9.5 14" stroke="#080808" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HiringJourney() {
  const [open, setOpen] = useState<string | null>("01");
  const activeIdx = Math.max(0, hiringSteps.findIndex(s => s.number === open));
  const current = hiringSteps[activeIdx];
  return (
    <section style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto" style={{ position: "relative" }}>

        {/* Aceternity Background Beams — full-bleed behind all content */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100vw", zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
          <BackgroundBeams />
        </div>

        {/* Content sits above bg */}
        <div style={{ position: "relative", zIndex: 1 }}>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }} className="text-4xl md:text-[52px]">What to expect</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "13px", maxWidth: "220px", lineHeight: "1.6", paddingBottom: "8px" }} className="hidden md:block">From first click to first day — typically 2–3 weeks.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", overflow: "hidden" }}>
            <div style={{ background: "#0f0f0f", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "#1a1a1a", position: "relative", padding: `${PT}px 28px` }}>
              <div style={{ position: "absolute", left: "44px", top: `${PT + STEP_H / 2}px`, width: "1px", height: `${(hiringSteps.length - 1) * STEP_H}px`, background: "#222" }} />
              <div style={{ position: "absolute", left: "44px", top: `${PT + STEP_H / 2}px`, width: "1px", height: `${activeIdx * STEP_H}px`, background: "#c8ff00", transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)" }} />
              {hiringSteps.map((step, i) => {
                const isActive = open === step.number;
                const isDone = i < activeIdx;
                return (
                  <button key={step.number} onClick={() => setOpen(step.number)} style={{ width: "100%", height: `${STEP_H}px`, display: "flex", alignItems: "center", gap: "14px", background: "#00000000", borderWidth: 0, borderStyle: "none", boxShadow: "none", outline: "none", cursor: "pointer", textAlign: "left", padding: 0, position: "relative" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: isActive ? "#c8ff00" : isDone ? "#0f1a00" : "#141414", borderWidth: "1px", borderStyle: "solid", borderColor: isActive ? "#c8ff00" : isDone ? "#c8ff0033" : "#333", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 2, position: "relative", transition: "background 0.35s, border-color 0.35s" }}>
                      {isActive ? <PersonSVG /> : isDone ? <Check size={11} color="#c8ff00" strokeWidth={2.5} /> : <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "9px", color: "#505050", letterSpacing: "0.05em" }}>{step.number}</span>}
                    </div>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: isActive ? "#f5f5f5" : "#666", fontSize: "13px", fontWeight: isActive ? "600" : "400", letterSpacing: "-0.01em", margin: 0, transition: "color 0.2s", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{step.title}</p>
                      <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: isActive ? "#666" : "#505050", margin: "2px 0 0", transition: "color 0.2s" }}>{step.duration}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ background: "#080808", padding: "48px 44px", display: "flex", flexDirection: "column", minHeight: "480px", position: "relative", overflow: "hidden" }}>
              {/* Step background image — fades in on step change */}
              <div key={"bg-" + current.number} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, animation: "hj-bg-fade 0.7s ease forwards" }}>
                <style>{`@keyframes hj-bg-fade { from { opacity:0; } to { opacity:1; } }`}</style>
                <img src={({ "01": "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "02": "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "03": "https://images.unsplash.com/photo-1597043899890-ef89b6cf45f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "04": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "05": "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "06": "https://images.unsplash.com/photo-1707904112316-b7abe18a0abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" } as Record<string, string>)[current.number]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", opacity: 0.55 }} />
                {/* Gradient overlay: left half dark for text legibility, right half mostly clear */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, #080808 0%, #08080888 40%, #08080830 100%)" }} />
              </div>
              <div key={current.number} style={{ flex: 1, animation: "hj-in 0.3s ease forwards", position: "relative", zIndex: 1 }}>
                <style>{`@keyframes hj-in { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`}</style>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "#c8ff00", letterSpacing: "0.1em" }}>{current.number}</span>
                  <span style={{ width: "1px", height: "10px", background: "#333", display: "inline-block" }} />
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "#666", letterSpacing: "0.05em" }}>{current.duration}</span>
                  <span style={{ marginLeft: "auto", fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#444" }}>{activeIdx + 1} / {hiringSteps.length}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.1", marginBottom: "20px" }}>{current.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "15px", lineHeight: "1.75", marginBottom: "32px", maxWidth: "500px" }}>{current.description}</p>
                <div style={{ background: "#00000000", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", padding: "20px 22px", display: "flex", gap: "14px", maxWidth: "520px" }}>
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "9px", color: "#c8ff00", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "2px", flexShrink: 0 }}>Tip</span>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: "13px", lineHeight: "1.7", fontStyle: "italic", margin: 0 }}>{current.tip}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", paddingTop: "36px", position: "relative", zIndex: 1 }}>
                <button onClick={() => activeIdx > 0 && setOpen(hiringSteps[activeIdx - 1].number)} disabled={activeIdx === 0} style={{ background: "#00000000", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", boxShadow: "none", outline: "none", padding: "10px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: activeIdx === 0 ? "#444" : "#888", cursor: activeIdx === 0 ? "default" : "pointer", transition: "color 0.2s" }}>← Prev</button>
                <button onClick={() => activeIdx < hiringSteps.length - 1 && setOpen(hiringSteps[activeIdx + 1].number)} disabled={activeIdx === hiringSteps.length - 1} style={{ background: activeIdx < hiringSteps.length - 1 ? "#c8ff00" : "#00000000", borderWidth: "1px", borderStyle: "solid", borderColor: activeIdx < hiringSteps.length - 1 ? "#c8ff00" : "#333", boxShadow: "none", outline: "none", padding: "10px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: "600", color: activeIdx < hiringSteps.length - 1 ? "#080808" : "#444", cursor: activeIdx < hiringSteps.length - 1 ? "pointer" : "default", transition: "background 0.2s, color 0.2s", letterSpacing: "0.04em" }}>Next →</button>
              </div>
            </div>
          </div>
        </div>{/* end content wrapper */}
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", position: "relative", overflow: "hidden" }} className="py-36 px-6">
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", width: "700px", height: "350px", background: "radial-gradient(ellipse, #c8ff000a 0%, #08080800 65%)", pointerEvents: "none" }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <style>{`@keyframes cta-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }`}</style>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginBottom: "36px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8ff00", display: "inline-block", animation: "cta-pulse 1.8s ease-in-out infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "0.12em", textTransform: "uppercase" }}>8 roles open right now</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.04", letterSpacing: "-0.015em", fontWeight: "700", marginBottom: "36px" }} className="text-5xl md:text-[76px]">Work on things<br />that matter.</h2>
          <div style={{ borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "#333", paddingLeft: "22px", marginBottom: "32px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "15px", lineHeight: "1.75", fontStyle: "italic", margin: "0 0 10px" }}>"Every person we've hired has raised the bar. We're not looking for a resource — we're looking for someone who'll push us."</p>
            <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>— Head of Engineering</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "15px", maxWidth: "460px", marginBottom: "32px" }}>We build systems people depend on, with a team that takes the craft seriously. Remote-first, no politics, real ownership from day one.</p>
          <div style={{ display: "flex", gap: "32px", marginBottom: "44px", flexWrap: "wrap" }}>
            {[{ value: "94%", label: "Would recommend us" }, { value: "3+ yrs", label: "Average tenure" }, { value: "12+", label: "Countries represented" }].map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.02em", margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", margin: "5px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "18px" }}>
            <MovingBorderButton href="#roles">Apply Now</MovingBorderButton>
            <a href="mailto:careers@marketorbit.io" style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", fontSize: "14px", fontWeight: "500", padding: "13px 28px", display: "inline-block", transition: "color 0.15s, border-color 0.15s", textDecoration: "none" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#f5f5f5"; el.style.borderColor = "#666"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#909090"; el.style.borderColor = "#333"; }}>Contact Recruitment</a>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px", lineHeight: "1.6" }}>Every application is read by a person. We reply within 3 business days — no exceptions.</p>
        </div>
        <div style={{ marginTop: "80px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", paddingTop: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", color: "#505050", fontSize: "11px", letterSpacing: "0.08em" }}>© 2026 MARKET ORBIT</span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "LinkedIn"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "'DM Sans', sans-serif", color: "#505050", fontSize: "12px", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#909090")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#505050")}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────

export function CareersPage() {
  return (
    <>
      <CareerHero />
      <TechMarquee />
      <WhyJoinUs />
      <BenefitsBento />
      <CultureSection />
      <InternshipSection />
      <OpenPositions />
      <HiringJourney />
      <FinalCTA />
    </>
  );
}
