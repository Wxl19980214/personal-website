const links = [
  {
    label: "Email",
    value: "stinsionwang@gmail.com",
    href: "mailto:stinsionwang@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 734-968-8779",
    href: "tel:+17349688779",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.07 19.79 19.79 0 0 1 1.31 3.5 2 2 0 0 1 3.29 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.62-.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 16z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Austin, Texas",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "xilin-wang-37652b188",
    href: "https://www.linkedin.com/in/xilin-wang-37652b188/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Wxl19980214",
    href: "https://github.com/Wxl19980214",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7c3aed" }}>
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1e1b4b" }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="glow-line w-24 mx-auto mb-6" />
          <p className="text-lg" style={{ color: "#64748b" }}>
            Open to new opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="card p-8 md:p-12">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-5 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#a78bfa",
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: "#475569" }}>
                    {link.label}
                  </div>
                  <div className="font-medium transition-colors duration-200 group-hover:text-purple-600" style={{ color: "#1e1b4b" }}>
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="glow-line mt-10 mb-10" />

          <div className="text-center">
            <a
              href="mailto:stinsionwang@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                boxShadow: "0 0 30px rgba(124,58,237,0.3)",
              }}
            >
              Send a Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 14 0M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pb-8">
        <div className="glow-line w-full mb-8" />
        <p className="text-sm" style={{ color: "#334155" }}>
          © 2026 Xilin Wang
        </p>
      </div>
    </section>
  );
}
