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
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7c3aed" }}>
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                  <div className="font-medium transition-colors duration-200 group-hover:text-purple-400" style={{ color: "#e2e8f0" }}>
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
          © 2024 Xilin Wang · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
