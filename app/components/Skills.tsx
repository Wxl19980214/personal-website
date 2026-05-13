const skillGroups = [
  {
    label: "Languages",
    icon: "⟨/⟩",
    skills: ["Java", "Python", "SQL", "C++"],
  },
  {
    label: "Backend & Distributed",
    icon: "⚡",
    skills: ["Spring Boot", "Kafka", "Flink", "Spark", "REST APIs", "Django", "Microservices"],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁",
    skills: ["AWS Lambda", "API Gateway", "CDK", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Databases",
    icon: "🗄",
    skills: ["Oracle DB", "Solr", "Cassandra", "DynamoDB", "MongoDB"],
  },
  {
    label: "Testing",
    icon: "✓",
    skills: ["JUnit", "TestNG", "Mockito", "pytest", "Selenium"],
  },
  {
    label: "Dev Tools",
    icon: "🛠",
    skills: ["Git", "IntelliJ", "VS Code", "Jira", "Swagger", "SonarQube", "Postman"],
  },
  {
    label: "AI Tools",
    icon: "✦",
    skills: ["Claude", "ChatGPT", "GitHub Copilot", "Cursor", "OpenAI API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7c3aed" }}>
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1e1b4b" }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-lg w-9 h-9 rounded-lg flex items-center justify-center font-mono"
                  style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                >
                  {group.icon}
                </span>
                <h3 className="font-semibold" style={{ color: "#1e1b4b" }}>{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
