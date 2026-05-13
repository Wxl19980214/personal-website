"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Backend Specialist",
  "Distributed Systems",
  "Cloud Architect",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated orbs */}
      <div
        className="animate-float absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          bottom: "15%",
          right: "8%",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm"
          style={{
            background: "rgba(6,182,212,0.08)",
            border: "1px solid rgba(6,182,212,0.25)",
            color: "#06b6d4",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
            }}
          />
          Available for opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-none">
          Xilin
          <br />
          <span className="gradient-text">Wang</span>
        </h1>

        {/* Animated role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p
            className="text-xl md:text-2xl font-medium"
            style={{
              color: "#94a3b8",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {roles[roleIdx]}
          </p>
        </div>

        <p
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#64748b" }}
        >
          3+ years building large-scale distributed data platforms, real-time
          streaming systems, and cloud-native services at{" "}
          <span style={{ color: "#a78bfa" }}>Apple</span>. Based in Austin, TX.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <a
            href="#experience"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              color: "white",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0",
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "17M+", label: "Records Processed" },
            { value: "~70%", label: "Latency Reduction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold gradient-text"
                style={{ animationDelay: "0.5s" }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "#475569" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#334155" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
