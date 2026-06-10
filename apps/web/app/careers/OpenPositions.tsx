"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin, Briefcase, BarChart2, X } from "lucide-react";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    experience: "Senior",
    type: "Full-time",
    salary: "$140k – $180k",
    team: "Core Platform",
    description:
      "Lead development on our client-facing platforms, shipping features across the full stack — from pixel-perfect React interfaces to resilient Node.js services. You'll work directly with clients and take ownership of production systems that handle real scale.",
    responsibilities: [
      "Lead design and implementation of full-stack features from spec to production",
      "Mentor junior and mid-level engineers through code review and pair programming",
      "Collaborate with product and design to shape technical direction",
      "Own performance, reliability, and scalability of key services",
      "Drive internal tooling improvements and documentation culture",
    ],
    requirements: [
      "5+ years of professional full-stack development experience",
      "Deep expertise in React, TypeScript, and modern CSS",
      "Solid backend experience with Node.js or equivalent (Go, Python)",
      "Familiarity with cloud platforms — AWS, GCP, or Azure",
      "Track record of shipping production software at scale",
    ],
    niceToHave: [
      "Experience with distributed systems or microservices architecture",
      "Prior startup or consulting background",
      "Open source contributions to widely-used projects",
    ],
  },
  {
    title: "AI / ML Engineer",
    department: "Engineering",
    location: "Remote",
    experience: "Mid-Senior",
    type: "Full-time",
    salary: "$150k – $190k",
    team: "AI & Automation",
    description:
      "Build and deploy machine learning systems that power critical decisions for enterprise clients. You'll work on the full lifecycle — from data pipelines and model training to production inference and monitoring.",
    responsibilities: [
      "Design, train, and deploy ML models across supervised and generative paradigms",
      "Build robust data pipelines and feature engineering workflows",
      "Collaborate with client teams to translate business problems into ML solutions",
      "Monitor model performance in production and drive continuous improvement",
      "Stay ahead of the field and evaluate emerging approaches for practical application",
    ],
    requirements: [
      "3+ years of applied ML engineering in production environments",
      "Proficiency in Python and ML frameworks (PyTorch, TensorFlow, or JAX)",
      "Experience with LLMs, RAG systems, or fine-tuning foundation models",
      "Strong understanding of MLOps, experiment tracking, and model serving",
      "Ability to communicate technical concepts clearly to non-technical stakeholders",
    ],
    niceToHave: [
      "Published research or patents in ML/AI",
      "Contribution to open-source ML tooling",
      "Experience with vector databases and embedding pipelines",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    experience: "Mid-Senior",
    type: "Full-time",
    salary: "$120k – $155k",
    team: "Infrastructure",
    description:
      "Own the infrastructure that keeps our systems reliable, fast, and secure. You'll automate everything, eliminate toil, and build platforms other engineers actually enjoy working with.",
    responsibilities: [
      "Design and maintain CI/CD pipelines across multiple client environments",
      "Manage cloud infrastructure using IaC tools (Terraform, Pulumi, or CDK)",
      "Implement observability stacks — logging, tracing, alerting",
      "Drive security hardening and compliance requirements across deployments",
      "Collaborate with engineering teams to improve developer experience and deployment velocity",
    ],
    requirements: [
      "3+ years of DevOps or platform engineering experience",
      "Expertise with Kubernetes and container orchestration",
      "Strong command of Terraform or equivalent IaC tooling",
      "Hands-on experience with AWS, GCP, or Azure in production",
      "Solid understanding of networking, security groups, and IAM",
    ],
    niceToHave: [
      "Experience supporting SOC 2 or ISO 27001 compliance",
      "Background building self-service developer platforms",
      "Contributions to open source DevOps tooling",
    ],
  },
  {
    title: "Cloud Architect",
    department: "Engineering",
    location: "Hybrid",
    experience: "Senior",
    type: "Full-time",
    salary: "$160k – $200k",
    team: "Solutions Architecture",
    description:
      "Design and lead cloud migrations and greenfield architectures for enterprise clients. You'll be the person clients trust to make high-stakes infrastructure decisions — and the person who makes sure those decisions are right.",
    responsibilities: [
      "Lead cloud architecture design for large-scale enterprise transformation projects",
      "Conduct architecture reviews and produce well-documented design artefacts",
      "Advise clients on build vs. buy decisions, vendor selection, and migration strategy",
      "Mentor engineering teams on cloud best practices and architecture patterns",
      "Own technical pre-sales engagements and solution scoping",
    ],
    requirements: [
      "7+ years of software engineering with 3+ in cloud architecture roles",
      "Deep expertise in at least one major cloud (AWS, GCP, or Azure)",
      "Experience designing distributed systems for high availability and fault tolerance",
      "Strong grasp of FinOps, governance, and security at enterprise scale",
      "Excellent written and verbal communication — you'll present to C-suite",
    ],
    niceToHave: [
      "Certifications: AWS Solutions Architect Professional or equivalent",
      "Experience with multi-cloud or hybrid-cloud architectures",
      "Background in financial services, healthcare, or regulated industries",
    ],
  },
  {
    title: "UI / UX Designer",
    department: "Design",
    location: "Remote",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "$100k – $130k",
    team: "Design",
    description:
      "Craft user experiences that are both beautiful and genuinely functional. You'll work closely with engineering and product to shape how our clients' users interact with complex systems — and make hard problems feel simple.",
    responsibilities: [
      "Lead end-to-end UX design from discovery through handoff",
      "Conduct user research, interviews, and usability testing",
      "Build and maintain design systems used across client projects",
      "Partner with engineers to ensure implementation fidelity",
      "Present design decisions with clear rationale to client stakeholders",
    ],
    requirements: [
      "3+ years of product design experience with a strong portfolio",
      "Proficiency in Figma, including auto-layout, components, and variables",
      "Experience designing complex, data-dense enterprise interfaces",
      "Strong grasp of accessibility standards (WCAG 2.1 AA)",
      "Ability to prototype ideas quickly and communicate concepts visually",
    ],
    niceToHave: [
      "Front-end development skills (HTML/CSS, basic React)",
      "Motion design or prototyping experience",
      "Design system contributions at scale",
    ],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Hybrid",
    experience: "Senior",
    type: "Full-time",
    salary: "$130k – $165k",
    team: "Product",
    description:
      "Define, prioritize, and ship product experiences that matter. You'll translate client needs into roadmaps, work across engineering and design to deliver outcomes — not just outputs — and be accountable for the results.",
    responsibilities: [
      "Own the product roadmap for one or more platform areas",
      "Gather requirements through structured client discovery and internal research",
      "Write crisp, unambiguous product specs and acceptance criteria",
      "Drive sprint planning, backlog grooming, and release ceremonies",
      "Track key metrics and use data to inform prioritization decisions",
    ],
    requirements: [
      "4+ years of product management in a software company or consultancy",
      "Strong experience with Agile/Scrum methodology in cross-functional teams",
      "Demonstrated ability to say no — and explain why — under stakeholder pressure",
      "Comfort working with engineering on technical trade-offs and feasibility",
      "Excellent communication skills, both written and in live stakeholder settings",
    ],
    niceToHave: [
      "Experience with B2B enterprise software or platform products",
      "Technical background or ability to read basic code",
      "Prior experience in digital transformation consulting",
    ],
  },
  {
    title: "Business Analyst",
    department: "Consulting",
    location: "Remote / Hybrid",
    experience: "Mid-Level",
    type: "Full-time",
    salary: "$90k – $115k",
    team: "Strategy & Consulting",
    description:
      "Bridge the gap between business problems and technical solutions. You'll surface requirements, model processes, and turn ambiguity into clarity — working directly with client stakeholders across multiple engagements.",
    responsibilities: [
      "Lead requirements discovery workshops with client teams",
      "Produce detailed business requirements documents, user stories, and process maps",
      "Identify gaps between current and target-state operating models",
      "Support solution design by translating business needs to technical teams",
      "Track engagement progress and produce clear status reporting for clients",
    ],
    requirements: [
      "3+ years of business analysis experience in a consulting or software environment",
      "Proficiency in process modelling (BPMN, flowcharts, swim-lane diagrams)",
      "Experience with requirements management tools (Jira, Confluence, or similar)",
      "Strong analytical thinking — comfortable with data, Excel, and basic SQL",
      "Clear, precise written English and confident stakeholder-facing communication",
    ],
    niceToHave: [
      "Domain experience in financial services, logistics, or healthcare",
      "CBAP, PMI-PBA, or equivalent certification",
      "Exposure to ERP or CRM implementation projects",
    ],
  },
  {
    title: "Technical Consultant",
    department: "Consulting",
    location: "Hybrid",
    experience: "Senior",
    type: "Contract",
    salary: "$120k – $150k + project bonus",
    team: "Consulting",
    description:
      "Embed with client teams to solve their hardest technical challenges. You'll need both the depth to understand complex systems and the communication skills to guide senior stakeholders — sometimes in the same meeting.",
    responsibilities: [
      "Act as technical lead on client engagements from scoping through delivery",
      "Assess existing systems and architectures, producing actionable recommendations",
      "Facilitate technical workshops and executive-level presentations",
      "Coordinate cross-functional delivery teams including client-side staff",
      "Manage project risks, dependencies, and stakeholder expectations",
    ],
    requirements: [
      "6+ years of software engineering or technical consulting experience",
      "Proven ability to lead technical discussions with C-level and VP audiences",
      "Breadth across cloud, software architecture, and enterprise integration",
      "Experience delivering projects under fixed-scope or fixed-price contracts",
      "Strong written communication — proposals, SOWs, and exec summaries",
    ],
    niceToHave: [
      "Big-4 or top-tier consulting firm background",
      "PMP, PRINCE2, or SAFe certification",
      "Domain expertise in digital transformation or cloud modernisation",
    ],
  },
];

const departments = ["All", "Engineering", "Design", "Product", "Consulting"];
const locations = ["All", "Remote", "Hybrid", "Remote / Hybrid"];
const levels = ["All", "Mid-Level", "Mid-Senior", "Senior"];
const types = ["All", "Full-time", "Contract"];

type Job = (typeof jobs)[0];

export function OpenPositions() {
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
          <div className="flex flex-wrap gap-3 mb-10">
            <FilterGroup label="Department" options={departments} value={dept} onChange={setDept} />
            <FilterGroup label="Location" options={locations} value={loc} onChange={setLoc} />
            <FilterGroup label="Level" options={levels} value={level} onChange={setLevel} />
            <FilterGroup label="Type" options={types} value={type} onChange={setType} />
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
              filtered.map((job, i) => (
                <JobRow
                  key={job.title}
                  job={job}
                  isLast={i === filtered.length - 1}
                  onClick={() => setSelectedJob(job)}
                />
              ))
            )}
          </div>
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
                padding: "36px 40px 28px",
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
                padding: "18px 40px",
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
            <div style={{ padding: "36px 40px", flex: 1 }}>

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
                padding: "24px 40px",
                borderTop: "1px solid #1a1a1a",
                background: "#141414",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <button
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
    <div className="flex items-center gap-1.5">
      <span
        style={{
          fontFamily: "'Geist Mono', monospace",
          color: "#666",
          fontSize: "11px",
          letterSpacing: "0.1em",
        }}
        className="uppercase mr-1"
      >
        {label}:
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: value === opt ? "600" : "400",
            color: value === opt ? "#080808" : "#909090",
            background: value === opt ? "#c8ff00" : "#00000000",
            border: `1px solid ${value === opt ? "#c8ff00" : "#333"}`,
            borderRadius: "100px",
            padding: "4px 12px",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          {opt}
        </button>
      ))}
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


// function DeptTag({ children, color, textColor }: { children: React.ReactNode; color: string; textColor: string }) {
//   return <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", fontWeight: "500", color: textColor, background: color, padding: "2px 7px", letterSpacing: "0.04em" }}>{children}</span>;
// }

// function MetaTag({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
//   return <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#777", display: "inline-flex", alignItems: "center", gap: "4px" }}>{icon}{children}</span>;
// }

// function DrawerSection({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
//   return (
//     <div style={{ marginBottom: last ? 0 : "36px" }}>
//       <h3 style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "14px", fontWeight: "600", letterSpacing: "-0.01em", marginBottom: "14px" }}>{title}</h3>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{children}</div>
//     </div>
//   );
// }

// function DrawerListItem({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
//   return (
//     <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
//       <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: muted ? "#444" : "#c8ff00", flexShrink: 0, marginTop: "8px" }} />
//       <p style={{ fontFamily: "'DM Sans', sans-serif", color: muted ? "#666" : "#909090", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>{children}</p>
//     </div>
//   );
// }

// function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
//   return (
//     <div className="flex items-center gap-1.5">
//       <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "11px", letterSpacing: "0.1em" }} className="uppercase mr-1">{label}:</span>
//       {options.map((opt) => (
//         <button key={opt} onClick={() => onChange(opt)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: value === opt ? "600" : "400", color: value === opt ? "#080808" : "#909090", background: value === opt ? "#c8ff00" : "#00000000", borderWidth: "1px", borderStyle: "solid", borderColor: value === opt ? "#c8ff00" : "#333", borderRadius: "100px", padding: "4px 12px", cursor: "pointer", transition: "all 0.15s" }}>{opt}</button>
//       ))}
//     </div>
//   );
// }

// function JobDrawer({ job, onClose }: { job: Job | null; onClose: () => void }) {
//   const isOpen = job !== null;
//   return (
//     <>
//       <div onClick={onClose} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "#080808cc", zIndex: 99, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity 0.3s ease" }} />
//       <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: "600px", maxWidth: "100%", background: "#141414", borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "#1a1a1a", zIndex: 100, overflowY: "auto", transform: isOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column" }}>
//         {job && (
//           <>
//             <div style={{ padding: "36px 40px 28px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", position: "sticky", top: 0, background: "#141414", zIndex: 2 }}>
//               <div>
//                 <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "0.1em", margin: "0 0 10px" }}>{job.team} · {job.salary}</p>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.15", margin: 0 }}>{job.title}</h2>
//               </div>
//               <button onClick={onClose} style={{ width: "32px", height: "32px", borderRadius: "50%", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", background: "#00000000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, marginTop: "4px" }}>
//                 <X size={14} color="#777" strokeWidth={2} />
//               </button>
//             </div>
//             <div style={{ padding: "18px 40px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", display: "flex", flexWrap: "wrap", gap: "8px" }}>
//               <DeptTag color="#c8ff0020" textColor="#c8ff00">{job.department}</DeptTag>
//               <MetaTag icon={<MapPin size={10} />}>{job.location}</MetaTag>
//               <MetaTag icon={<BarChart2 size={10} />}>{job.experience}</MetaTag>
//               <MetaTag icon={<Briefcase size={10} />}>{job.type}</MetaTag>
//             </div>
//             <div style={{ padding: "36px 40px", flex: 1 }}>
//               <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "15px", lineHeight: "1.75", marginBottom: "40px" }}>{job.description}</p>
//               <DrawerSection title="What you'll do">{job.responsibilities.map((r) => <DrawerListItem key={r}>{r}</DrawerListItem>)}</DrawerSection>
//               <DrawerSection title="What we're looking for">{job.requirements.map((r) => <DrawerListItem key={r}>{r}</DrawerListItem>)}</DrawerSection>
//               <DrawerSection title="Nice to have" last>{job.niceToHave.map((r) => <DrawerListItem key={r} muted>{r}</DrawerListItem>)}</DrawerSection>
//             </div>
//             <div style={{ padding: "24px 40px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", background: "#141414", display: "flex", alignItems: "center", gap: "16px" }}>
//               <button style={{ background: "#c8ff00", color: "#080808", borderWidth: 0, borderStyle: "none", boxShadow: "none", outline: "none", padding: "13px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
//                 Apply for this role <ArrowUpRight size={15} strokeWidth={2.5} />
//               </button>
//               <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px" }}>Typically responds within 3 business days</span>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }


// function OpenPositions() {
//   const [dept, setDept] = useState("All");
//   const [loc, setLoc] = useState("All");
//   const [level, setLevel] = useState("All");
//   const [type, setType] = useState("All");
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const filtered = jobs.filter((j) => {
//     if (dept !== "All" && j.department !== dept) return false;
//     if (loc !== "All" && j.location !== loc) return false;
//     if (level !== "All" && j.experience !== level) return false;
//     if (type !== "All" && j.type !== type) return false;
//     return true;
//   });
//   return (
//     <>
//       <section id="roles" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
//             <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }} className="text-4xl md:text-[52px]">Explore opportunities</h2>
//             <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "12px", paddingBottom: "8px" }}>{filtered.length} {filtered.length !== 1 ? "roles" : "role"} available</span>
//           </div>
//           <div className="flex flex-wrap gap-3 mb-10">
//             <FilterGroup label="Department" options={depts} value={dept} onChange={setDept} />
//             <FilterGroup label="Location" options={locs} value={loc} onChange={setLoc} />
//             <FilterGroup label="Level" options={levels} value={level} onChange={setLevel} />
//             <FilterGroup label="Type" options={types} value={type} onChange={setType} />
//           </div>
//           <div className="flex flex-col">
//             {filtered.length === 0 ? (
//               <div style={{ background: "#0f0f0f", borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", padding: "48px", textAlign: "center" }}>
//                 <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px" }}>No roles match your filters. Try adjusting them.</p>
//               </div>
//             ) : (
//               filtered.map((job, i) => (
//                 <div key={job.title} onClick={() => setSelectedJob(job)} style={{ borderBottomWidth: i === filtered.length - 1 ? "0" : "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a", padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", transition: "opacity 0.15s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.72")} onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}>
//                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
//                     <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#f5f5f5", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>{job.title}</span>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <DeptTag color="#c8ff0020" textColor="#c8ff00">{job.department}</DeptTag>
//                       <MetaTag icon={<MapPin size={10} />}>{job.location}</MetaTag>
//                       <MetaTag icon={<BarChart2 size={10} />}>{job.experience}</MetaTag>
//                       <MetaTag icon={<Briefcase size={10} />}>{job.type}</MetaTag>
//                     </div>
//                   </div>
//                   <button style={{ fontFamily: "'DM Sans', sans-serif", color: "#f5f5f5", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", padding: "8px 18px", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", background: "#00000000", flexShrink: 0, whiteSpace: "nowrap", pointerEvents: "none" }}>View role <ArrowUpRight size={13} /></button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </section>
//       <JobDrawer job={selectedJob} onClose={() => setSelectedJob(null)} />
//     </>
//   );
// }