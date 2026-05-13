const jobs = [
  {
    company: "Apple",
    via: "via Infosys",
    role: "Software Engineer",
    location: "Austin, TX",
    period: "Oct 2023 — Present",
    color: "#4f46e5",
    highlights: [
      "Owned and evolved core Spring Boot backend services and REST APIs supporting high-throughput data synchronization; led migration from Spring Boot 2.x to 3.x.",
      "Built event-driven workflows supporting large-scale data ingestion with Kafka — 17M+ record bulk loads and improved Solr index freshness.",
      "Re-architected a legacy Java migration service into a stateful Flink-based streaming pipeline with checkpointing and restart recovery, reducing end-to-end latency by ~50% and cutting CPU usage by ~90% through improved parallelism, backpressure handling, and stateful processing.",
      "Built a unified integration testing framework for Spring Boot services with containerized dependencies and isolated data.",
      "Implemented end-to-end observability using OpenTelemetry and Micrometer, reducing MTTR for production pipelines.",
      "Improved CI/CD with enforced quality gates and staged deployment workflows, reducing production regressions.",
    ],
  },
  {
    company: "Ploomber",
    via: "",
    role: "Software Engineer Intern",
    location: "New York, USA",
    period: "May 2022 — Aug 2022",
    color: "#0891b2",
    highlights: [
      "Designed AWS infrastructure with CDK — reusable stacks, Lambda event-driven functions, and ECS services with autoscaling.",
      "Decomposed a monolithic 30-minute GitHub Actions workflow into 6 parallelized pipelines (~3 min each) across Linux, macOS, Windows.",
      "Deployed Pytest unit and integration suites with isolated test environments, significantly increasing coverage.",
    ],
  },
  {
    company: "Inceptio Technology",
    via: "",
    role: "Backend Engineer Intern",
    location: "Shanghai, China",
    period: "Jan 2021 — Jun 2021",
    color: "#059669",
    highlights: [
      "Built high-performance API endpoints with optimized queries, validation, and formatting.",
      "Tuned Kubernetes pods through monitoring for resource efficiency.",
      "Automated QA data workflows with Python, improving data speed and accuracy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#4f46e5" }}>
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0f172a" }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #4f46e5, #0891b2, transparent)" }}
          />

          <div className="flex flex-col gap-10">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-16 relative">
                <div
                  className="timeline-dot absolute hidden md:block"
                  style={{ left: "17px", top: "24px", background: job.color, boxShadow: `0 0 12px ${job.color}` }}
                />
                <div className="card p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold" style={{ color: "#0f172a" }}>{job.company}</h3>
                        {job.via && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#f1f5f9", color: "#64748b" }}>
                            {job.via}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-1" style={{ color: job.color }}>{job.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium" style={{ color: "#475569" }}>{job.period}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{job.location}</div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {job.highlights.map((text, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.color }} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#4f46e5" }}>
              Education
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "#0f172a" }}>
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { school: "University of Michigan, Ann Arbor", degree: "M.S. in Computer Science", period: "Aug 2021 — May 2023", location: "Ann Arbor, MI", gpa: "3.85 / 4.0" },
              { school: "University of California, Santa Barbara", degree: "B.S. in Computer Science", period: "Sep 2017 — Dec 2020", location: "Santa Barbara, CA", gpa: "3.91 / 4.0" },
              { school: "Chaminade College Preparatory School", degree: "College-Preparatory", period: "2014 — 2017", location: "Creve Coeur, MO", gpa: "" },
            ].map((edu, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#0f172a" }}>{edu.school}</h3>
                    <p className="text-sm" style={{ color: "#4f46e5" }}>{edu.degree}</p>
                    {edu.gpa && (
                      <p className="text-xs mt-1 font-semibold" style={{ color: "#0891b2" }}>GPA {edu.gpa}</p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-medium" style={{ color: "#64748b" }}>{edu.period}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{edu.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
