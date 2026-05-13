const jobs = [
  {
    company: "Apple",
    via: "via Infosys",
    role: "Software Engineer",
    location: "Austin, TX",
    period: "Oct 2023 — Present",
    color: "#a78bfa",
    highlights: [
      "Owned and evolved core Spring Boot backend services and REST APIs supporting high-throughput data synchronization; led migration from Spring Boot 2.x to 3.x.",
      "Built event-driven workflows supporting large-scale data ingestion with Kafka — 17M+ record bulk loads and improved Solr index freshness.",
      "Re-architected a legacy Java service into a stateful Flink-based processor, reducing end-to-end latency by ~70% (5s → 1.5s).",
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
    color: "#06b6d4",
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
    color: "#34d399",
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
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7c3aed" }}>
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)" }}
          />

          <div className="flex flex-col gap-10">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute hidden md:block"
                  style={{
                    left: "17px",
                    top: "24px",
                    background: job.color,
                    boxShadow: `0 0 12px ${job.color}`,
                  }}
                />

                <div className="card p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{job.company}</h3>
                        {job.via && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "#64748b" }}>
                            {job.via}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-1" style={{ color: job.color }}>
                        {job.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium" style={{ color: "#94a3b8" }}>{job.period}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{job.location}</div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.color }} />
                        {h}
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
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7c3aed" }}>
              Education
            </p>
            <h2 className="text-3xl font-bold text-white">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                school: "University of Michigan, Ann Arbor",
                degree: "M.S. in Computer Science",
                period: "Aug 2021 — May 2023",
                location: "Ann Arbor, MI",
              },
              {
                school: "University of California, Santa Barbara",
                degree: "B.S. in Computer Science",
                period: "Sep 2017 — Dec 2020",
                location: "Santa Barbara, CA",
              },
            ].map((edu, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-white mb-1">{edu.school}</h3>
                    <p className="text-sm" style={{ color: "#a78bfa" }}>{edu.degree}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-medium" style={{ color: "#64748b" }}>{edu.period}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{edu.location}</div>
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
