"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin, Briefcase, BarChart2, X } from "lucide-react";

const jobs = [
  {
    title: "Full Stack Web Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Web Development",
    description:
      "Build and maintain client-facing web applications from design handoff to production deployment. You'll work across the stack — React frontends, Node.js backends — and collaborate directly with design and strategy teams.",
    responsibilities: [
      "Develop responsive, performant web applications using React and Next.js",
      "Build and maintain RESTful APIs and backend services",
      "Collaborate with designers to implement pixel-accurate UIs",
      "Participate in code reviews and maintain code quality standards",
      "Contribute to deployment pipelines and production monitoring",
    ],
    requirements: [
      "2+ years of professional web development experience",
      "Proficiency in React, TypeScript, and modern CSS",
      "Backend experience with Node.js or equivalent",
      "Familiarity with Git workflows and team collaboration",
      "Strong attention to detail and ownership mindset",
    ],
    niceToHave: [
      "Experience with Next.js, Prisma, or NeonDB",
      "Exposure to Vercel, AWS, or similar deployment platforms",
      "Prior agency or consulting background",
    ],
  },
  {
    title: "Graphic Designer",
    department: "Design",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Design",
    description:
      "Create compelling visual assets for client campaigns, brand identities, and digital platforms. You'll work closely with content and strategy teams to translate briefs into visuals that actually perform.",
    responsibilities: [
      "Design social media creatives, marketing collateral, and brand assets",
      "Collaborate with content and strategy teams on campaign visuals",
      "Maintain visual consistency across client brand guidelines",
      "Iterate quickly based on client feedback and performance data",
      "Contribute to internal design system and asset libraries",
    ],
    requirements: [
      "2+ years of graphic design experience (agency or freelance)",
      "Proficiency in Figma, Adobe Illustrator, and Photoshop",
      "Strong portfolio demonstrating range across digital and print",
      "Ability to interpret briefs and work within brand constraints",
      "Good communication and ability to present design rationale",
    ],
    niceToHave: [
      "Motion design or video editing skills",
      "Experience designing for social media platforms at scale",
      "UI/UX knowledge or cross-functional design experience",
    ],
  },
  {
    title: "Content Writer & Creator",
    department: "Content",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Content Writing & Content Creation",
    description:
      "Write clear, engaging content across formats — blog posts, ad copy, website content, email campaigns — for a diverse range of clients. You'll think editorially and understand that great content drives real outcomes.",
    responsibilities: [
      "Write SEO-optimized blog posts, landing pages, and web copy for clients",
      "Develop ad copy for Google, Meta, and LinkedIn campaigns",
      "Create email newsletters, drip sequences, and nurture content",
      "Collaborate with graphic designers and strategists on campaigns",
      "Research industries and topics quickly to write with authority",
    ],
    requirements: [
      "2+ years of professional content writing experience",
      "Strong command of written English — clarity over cleverness",
      "Understanding of SEO fundamentals and content strategy",
      "Ability to adapt tone and voice across different brands",
      "Experience writing for B2B and/or B2C audiences",
    ],
    niceToHave: [
      "Experience with video scripts or social media content creation",
      "Familiarity with tools like Surfer SEO, Semrush, or Ahrefs",
      "Prior agency experience managing multiple client accounts",
    ],
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Social Media Management",
    description:
      "Own and grow social media presence for Market Orbit clients across platforms. You'll plan content calendars, write copy, brief designers, and track performance — turning strategy into an active, engaged community.",
    responsibilities: [
      "Manage social media accounts across Instagram, LinkedIn, Twitter/X, and more",
      "Plan and execute monthly content calendars aligned to campaign goals",
      "Write platform-native copy and brief graphic designers on creatives",
      "Monitor engagement, respond to comments, and grow follower base",
      "Report on performance metrics and iterate based on data",
    ],
    requirements: [
      "2+ years managing social media for brands or clients",
      "Deep understanding of platform algorithms and content formats",
      "Strong copywriting skills with a voice that adapts to brand tone",
      "Experience with scheduling tools (Buffer, Hootsuite, or similar)",
      "Analytically minded — comfortable pulling and interpreting insights",
    ],
    niceToHave: [
      "Paid social experience (Meta Ads, LinkedIn Ads)",
      "Short-form video creation or Reels/TikTok content skills",
      "Experience growing accounts from scratch in competitive niches",
    ],
  },
  {
    title: "Marketing Strategist",
    department: "Marketing",
    location: "Remote / Hybrid",
    experience: "Mid-Senior",
    type: "Full-time",
    salary: "Competitive",
    team: "Marketing & Research",
    description:
      "Develop and execute marketing strategies that drive real business results for clients. You'll combine market research, data analysis, and channel expertise to build campaigns that go beyond vanity metrics.",
    responsibilities: [
      "Lead marketing strategy development for client engagements",
      "Conduct market research, competitor analysis, and audience segmentation",
      "Define channel mix and campaign structure across paid, owned, and earned",
      "Collaborate with content, design, and social teams on execution",
      "Track KPIs and present performance reports to client stakeholders",
    ],
    requirements: [
      "3+ years of marketing strategy experience in an agency or in-house role",
      "Strong grounding in digital marketing channels and attribution",
      "Comfortable working with data — GA4, Meta Insights, LinkedIn Analytics",
      "Excellent written and verbal communication for client-facing work",
      "Proven ability to manage multiple client accounts simultaneously",
    ],
    niceToHave: [
      "Experience with growth marketing or performance marketing",
      "Background in B2B or SaaS marketing",
      "Exposure to marketing automation tools (HubSpot, Mailchimp, etc.)",
    ],
  },
  {
    title: "Sales & Business Development Executive",
    department: "Sales",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive + Commission",
    team: "Sales & Outreach",
    description:
      "Drive new client acquisition for Market Orbit's agency services. You'll prospect, qualify, pitch, and close — working across industries to bring in businesses that need digital marketing and web solutions.",
    responsibilities: [
      "Identify and prospect potential clients through LinkedIn, cold email, and referrals",
      "Qualify inbound leads and manage the sales pipeline in CRM",
      "Conduct discovery calls to understand client needs and present tailored proposals",
      "Coordinate with strategy and delivery teams on scoping and proposals",
      "Meet monthly revenue targets and report on pipeline health",
    ],
    requirements: [
      "2+ years in sales, business development, or account management",
      "Strong communication and persuasion skills — comfortable on calls and in writing",
      "Experience selling services rather than products (agency, SaaS, consulting)",
      "Familiarity with CRM tools and structured outreach workflows",
      "Self-starter who can work independently and hit targets",
    ],
    niceToHave: [
      "Prior experience selling digital marketing or agency services",
      "Understanding of marketing concepts to hold credible client conversations",
      "LinkedIn Sales Navigator or cold email outreach experience",
    ],
  },
  {
    title: "Strategic Consultant",
    department: "Consulting",
    location: "Hybrid",
    experience: "Senior",
    type: "Full-time",
    salary: "Competitive",
    team: "Strategic Consulting",
    description:
      "Work directly with clients to diagnose business challenges and design solutions. You'll lead discovery engagements, produce strategic recommendations, and guide implementation — bringing clarity where there's confusion.",
    responsibilities: [
      "Lead client discovery sessions and strategic workshops",
      "Produce market analyses, opportunity assessments, and go-to-market plans",
      "Translate business goals into actionable strategies across marketing, operations, and growth",
      "Present findings and recommendations to senior client stakeholders",
      "Collaborate with marketing, content, and sales teams on strategy execution",
    ],
    requirements: [
      "4+ years in strategy consulting, business development, or a senior marketing role",
      "Strong analytical thinking — comfortable with data, frameworks, and ambiguity",
      "Excellent written and verbal communication for C-level audiences",
      "Proven track record of delivering strategic recommendations that drove outcomes",
      "Ability to manage multiple engagements and stakeholders simultaneously",
    ],
    niceToHave: [
      "Prior agency or consulting firm background",
      "Domain expertise in e-commerce, tech, or D2C brands",
      "Experience with digital transformation or go-to-market strategy",
    ],
  },
  {
    title: "Finance & Accounts Executive",
    department: "Finance",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Finance & Accounts",
    description:
      "Own day-to-day financial operations at Market Orbit — from client invoicing and vendor payments to MIS reporting and compliance. You'll be the backbone that keeps the business running clean.",
    responsibilities: [
      "Manage invoicing, accounts receivable, and accounts payable",
      "Prepare monthly MIS reports and financial summaries for leadership",
      "Track project-wise revenue, costs, and margins",
      "Coordinate with vendors on payment terms and reconciliations",
      "Ensure GST, TDS, and other statutory compliance requirements are met",
    ],
    requirements: [
      "2+ years in accounting or finance in a services or agency environment",
      "Proficiency in Tally, Zoho Books, or similar accounting software",
      "Working knowledge of GST, TDS, and Indian tax compliance",
      "Strong Excel skills — pivot tables, reconciliation, basic MIS",
      "Detail-oriented with high accuracy and reliability",
    ],
    niceToHave: [
      "Experience in a digital agency or startup finance team",
      "Familiarity with project-based billing models",
      "B.Com, M.Com, or CA Inter qualification",
    ],
  },
  {
    title: "Vendor Onboarding & Management Executive",
    department: "Operations",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Vendor Onboarding & Management",
    description:
      "Build and maintain the network of freelancers, agencies, and suppliers that power Market Orbit's delivery. You'll onboard, vet, and manage vendor relationships — ensuring quality, timelines, and compliance.",
    responsibilities: [
      "Identify, evaluate, and onboard freelancers and vendor partners",
      "Maintain vendor database with contracts, rates, and performance records",
      "Coordinate with delivery teams to match projects with the right vendors",
      "Track vendor deliverables, timelines, and quality against agreed standards",
      "Handle vendor queries, payments, and relationship management",
    ],
    requirements: [
      "2+ years in vendor management, procurement, or operations",
      "Strong organizational skills with attention to contracts and documentation",
      "Good interpersonal skills for managing external relationships",
      "Comfortable working cross-functionally with design, content, and dev teams",
      "Proficiency in Google Workspace and project tracking tools",
    ],
    niceToHave: [
      "Prior experience in a digital agency or marketing firm",
      "Familiarity with freelance platforms (Upwork, Toptal, etc.)",
      "Experience with NDA and vendor contract management",
    ],
  },
  {
    title: "HR & Talent Acquisition Executive",
    department: "HR",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "HR",
    description:
      "Build the team that builds Market Orbit. You'll own end-to-end hiring across functions, manage onboarding, and create people processes that scale with a fast-growing agency.",
    responsibilities: [
      "Source, screen, and coordinate interviews for open roles across departments",
      "Write job descriptions and manage postings on LinkedIn, Naukri, and other platforms",
      "Own the candidate experience from application to offer",
      "Manage onboarding for new hires and contractors",
      "Support performance review cycles, leave tracking, and HR documentation",
    ],
    requirements: [
      "2+ years of HR or talent acquisition experience",
      "Experience hiring for creative, technical, and consulting profiles",
      "Familiarity with ATS tools and structured hiring pipelines",
      "Strong communication and people skills",
      "Organized and process-driven — you'll be managing many roles at once",
    ],
    niceToHave: [
      "Prior experience in a startup or agency hiring environment",
      "Exposure to employer branding and campus recruitment",
      "Knowledge of Indian labour law and compliance basics",
    ],
  },
  {
    title: "Communication & Outreach Specialist",
    department: "Marketing",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Communication & Outreach",
    description:
      "Manage external communications and outreach campaigns for Market Orbit and its clients. You'll craft messaging, run outreach sequences, and build relationships that open doors.",
    responsibilities: [
      "Design and execute email and LinkedIn outreach campaigns",
      "Write compelling messaging for cold outreach, PR pitches, and partnership proposals",
      "Track outreach performance and iterate on messaging and targeting",
      "Coordinate with sales and strategy teams on lead generation initiatives",
      "Maintain CRM records and outreach sequences",
    ],
    requirements: [
      "2+ years in communications, PR, outreach, or growth marketing",
      "Strong written English with a knack for concise, persuasive messaging",
      "Hands-on experience with cold email tools or LinkedIn outreach",
      "Comfortable working with data to measure and improve outreach effectiveness",
      "Organized and consistent — outreach is about persistence and systems",
    ],
    niceToHave: [
      "Experience with tools like Apollo, Lemlist, or Hunter.io",
      "Background in PR, partnerships, or influencer outreach",
      "Understanding of B2B sales cycles",
    ],
  },
  {
    title: "Founder's Office Intern",
    department: "Operations",
    location: "Remote / Hybrid",
    experience: "Entry-Level",
    type: "Internship",
    salary: "Stipend + Performance Bonus",
    team: "Founder's Office Intern",
    description:
      "Work directly with the founder on high-priority initiatives spanning strategy, operations, marketing, and business development. This is a high-exposure, high-responsibility role for someone who wants to learn fast and contribute immediately.",
    responsibilities: [
      "Support the founder on research, analysis, and execution of key projects",
      "Coordinate across teams to track deliverables and flag blockers",
      "Prepare presentations, reports, and communication drafts",
      "Assist in vendor, client, and partner outreach as needed",
      "Handle ad-hoc operational tasks with speed and judgment",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree (any field)",
      "Exceptional communication skills — written and verbal",
      "High agency: you figure things out and follow through without hand-holding",
      "Comfortable with ambiguity and shifting priorities",
      "Proficient in Google Workspace (Docs, Sheets, Slides)",
    ],
    niceToHave: [
      "Prior startup internship experience",
      "Interest in marketing, strategy, or business building",
      "Familiarity with tools like Notion, Slack, or Asana",
    ],
  },
  {
    title: "Creative Writer",
    department: "Content",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "Competitive",
    team: "Creative Writing",
    description:
      "Craft brand narratives, campaign concepts, and creative copy that cut through. You'll bring a strong editorial sensibility and original voice to everything from taglines to long-form storytelling.",
    responsibilities: [
      "Write creative copy for campaigns, brand identities, and launch moments",
      "Develop brand voice guidelines and messaging frameworks for clients",
      "Collaborate with designers on concept-driven creative executions",
      "Produce scripts for videos, reels, and audio content",
      "Bring fresh ideas to briefs and push back when a brief needs pushing",
    ],
    requirements: [
      "2+ years of creative writing or copywriting experience",
      "Portfolio demonstrating range — from snappy taglines to long-form brand narrative",
      "Strong conceptual thinking — ideas first, execution second",
      "Ability to write across tones: witty, serious, authoritative, warm",
      "Collaborative and receptive to feedback without losing conviction",
    ],
    niceToHave: [
      "Experience in advertising, brand strategy, or editorial environments",
      "Script-writing or spoken word experience",
      "Comfort with briefing and directing creative teams",
    ],
  },
];

const departments = [
  "All",
  "Engineering",
  "Design",
  "Content",
  "Marketing",
  "Sales",
  "Consulting",
  "Finance",
  "Operations",
  "HR",
];
const locations = ["All", "Remote", "Hybrid", "Remote / Hybrid"];
const levels = ["All", "Entry-Level", "Mid-Level", "Mid-Senior", "Senior"];
const types = ["All", "Full-time", "Internship", "Contract"];

type Job = (typeof jobs)[0];

const JOBS_PER_PAGE = 5;

export function OpenPositions() {
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [level, setLevel] = useState("All");
  const [type, setType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [page, setPage] = useState(1);

  const filtered = jobs.filter((j) => {
    if (dept !== "All" && j.department !== dept) return false;
    if (loc !== "All" && j.location !== loc) return false;
    if (level !== "All" && j.experience !== level) return false;
    if (type !== "All" && j.type !== type) return false;
    return true;
  });


  const totalPages = Math.ceil(filtered.length / JOBS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE);
  const handleFilterChange = (setter: (v: string) => void) => (v: string) => {
    setter(v);
    setPage(1);
  };

  return (
    <>
      <section
        id="roles"
        style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
        className="py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f5f5",
                lineHeight: "1.1",
                letterSpacing: "-0.01em",
                fontWeight: "700",
              }}
              className="text-4xl md:text-[52px]"
            >
              Explore opportunities
            </h2>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                color: "#666",
                fontSize: "12px",
                paddingBottom: "8px",
              }}
            >
              {filtered.length} {filtered.length !== 1 ? "roles" : "role"} available
            </span>
          </div>

          {/* Filters */}
          {/* Filters */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
            <FilterGroup label="Department" options={departments} value={dept} onChange={handleFilterChange(setDept)} />
            <FilterGroup label="Location" options={locations} value={loc} onChange={handleFilterChange(setLoc)} />
            <FilterGroup label="Level" options={levels} value={level} onChange={handleFilterChange(setLevel)} />
            <FilterGroup label="Type" options={types} value={type} onChange={handleFilterChange(setType)} />
          </div>

          {/* Job list */}
          <div className="flex flex-col">
            {filtered.length === 0 ? (
              <div
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1a1a1a",
                  padding: "48px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#909090",
                    fontSize: "14px",
                  }}
                >
                  No roles match your filters. Try adjusting them.
                </p>
              </div>
            ) : (
              paginated.map((job, i) => (
                <JobRow
                  key={job.title}
                  job={job}
                  isLast={i === paginated.length - 1}
                  onClick={() => setSelectedJob(job)}
                />
              ))
            )}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #1a1a1a",
              }}
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: page === 1 ? "#444" : "#f5f5f5",
                  background: "transparent",
                  border: `1px solid ${page === 1 ? "#222" : "#333"}`,
                  padding: "8px 20px",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                ← Previous
              </button>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "11px",
                  color: "#666",
                  letterSpacing: "0.08em",
                }}
              >
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: page === totalPages ? "#444" : "#080808",
                  background: page === totalPages ? "transparent" : "#c8ff00",
                  border: `1px solid ${page === totalPages ? "#222" : "#c8ff00"}`,
                  padding: "8px 20px",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Next →
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Job detail drawer */}
      <JobDrawer job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
}

function JobDrawer({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const isOpen = job !== null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#080808cc",
          zIndex: 99,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          width: "600px",
          maxWidth: "100%",
          background: "#141414",
          borderLeft: "1px solid #1a1a1a",
          zIndex: 100,
          overflowY: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {job && (
          <>
            {/* Drawer header */}
            <div
              style={{
                padding: "clamp(20px, 5vw, 36px) clamp(16px, 5vw, 40px) 28px",
                borderBottom: "1px solid #1a1a1a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
                position: "sticky",
                top: 0,
                background: "#141414",
                zIndex: 2,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "10px",
                    color: "#c8ff00",
                    letterSpacing: "0.1em",
                    marginBottom: "10px",
                    margin: "0 0 10px",
                  }}
                >
                  {job.team} · {job.salary}
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5f5f5",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: "700",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.15",
                    margin: 0,
                  }}
                >
                  {job.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #333",
                  background: "#00000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              >
                <X size={14} color="#777" strokeWidth={2} />
              </button>
            </div>

            {/* Tags */}
            <div
              style={{
                padding: "18px clamp(16px, 5vw, 40px)",
                borderBottom: "1px solid #1a1a1a",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <DeptTag color="#c8ff0020" textColor="#c8ff00">{job.department}</DeptTag>
              <TagWithIcon icon={<MapPin size={10} />}>{job.location}</TagWithIcon>
              <TagWithIcon icon={<BarChart2 size={10} />}>{job.experience}</TagWithIcon>
              <TagWithIcon icon={<Briefcase size={10} />}>{job.type}</TagWithIcon>
            </div>

            {/* Body */}
            <div style={{ padding: "clamp(20px, 5vw, 36px) clamp(16px, 5vw, 40px)", flex: 1 }}>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "15px",
                  lineHeight: "1.75",
                  marginBottom: "40px",
                }}
              >
                {job.description}
              </p>

              {/* Responsibilities */}
              <DrawerSection title="What you'll do">
                {job.responsibilities.map((r) => (
                  <DrawerListItem key={r}>{r}</DrawerListItem>
                ))}
              </DrawerSection>

              {/* Requirements */}
              <DrawerSection title="What we're looking for">
                {job.requirements.map((r) => (
                  <DrawerListItem key={r}>{r}</DrawerListItem>
                ))}
              </DrawerSection>

              {/* Nice to have */}
              <DrawerSection title="Nice to have" last>
                {job.niceToHave.map((r) => (
                  <DrawerListItem key={r} muted>{r}</DrawerListItem>
                ))}
              </DrawerSection>
            </div>

            {/* Sticky apply CTA */}
            <div
              style={{
                padding: "20px clamp(16px, 5vw, 40px)",
                borderTop: "1px solid #1a1a1a",
                background: "#141414",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <button onClick={() => window.location.href = "https://forms.gle/HN5e4Y7Y3ub66wq49"}
                style={{
                  background: "#c8ff00",
                  color: "#080808",
                  border: "none",
                  padding: "13px 28px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Apply for this role
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#666",
                  fontSize: "12px",
                }}
              >
                Typically responds within 3 business days
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function DrawerSection({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : "36px" }}>
      <h3
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#d0d0d0",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "-0.01em",
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {children}
      </div>
    </div>
  );
}

function DrawerListItem({
  children,
  muted,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: muted ? "#444" : "#c8ff00",
          flexShrink: 0,
          marginTop: "8px",
        }}
      />
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: muted ? "#666" : "#909090",
          fontSize: "14px",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
      {/* Fixed label — kabhi scroll nahi karega */}
      <span
        style={{
          fontFamily: "'Geist Mono', monospace",
          color: "#666",
          fontSize: "11px",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
          flexShrink: 0,
          textTransform: "uppercase",
        }}
      >
        {label}:
      </span>

      {/* Scrollable pills wrapper */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          minWidth: 0,
          flex: 1,
        }}
      >
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: value === opt ? "600" : "400",
              color: value === opt ? "#080808" : "#909090",
              background: value === opt ? "#c8ff00" : "transparent",
              border: `1px solid ${value === opt ? "#c8ff00" : "#333"}`,
              borderRadius: "100px",
              padding: "4px 12px",
              cursor: "pointer",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function JobRow({
  job,
  isLast,
  onClick,
}: {
  job: Job;
  isLast: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        borderBottom: isLast ? "none" : "1px solid #1a1a1a",
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        cursor: "pointer",
        transition: "opacity 0.15s",
      }}
      className="group"
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.72")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
    >
      {/* Title + tags */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#f5f5f5",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "-0.01em",
          }}
        >
          {job.title}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <DeptTag color="#c8ff0020" textColor="#c8ff00">
            {job.department}
          </DeptTag>
          <TagWithIcon icon={<MapPin size={10} />}>{job.location}</TagWithIcon>
          <TagWithIcon icon={<BarChart2 size={10} />}>{job.experience}</TagWithIcon>
          <TagWithIcon icon={<Briefcase size={10} />}>{job.type}</TagWithIcon>
        </div>
      </div>

      {/* View button */}
      <button
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#f5f5f5",
          border: "1px solid #333",
          padding: "8px 18px",
          fontSize: "13px",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          background: "#00000000",
          transition: "all 0.15s",
          flexShrink: 0,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        View role
        <ArrowUpRight size={13} />
      </button>
    </div>
  );
}

function DeptTag({
  children,
  color,
  textColor,
}: {
  children: React.ReactNode;
  color: string;
  textColor: string;
}) {
  return (
    <span
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "10px",
        fontWeight: "500",
        color: textColor,
        background: color,
        padding: "2px 7px",
        letterSpacing: "0.04em",
      }}
    >
      {children}
    </span>
  );
}

function TagWithIcon({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "12px",
        color: "#777",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {icon}
      {children}
    </span>
  );
}

