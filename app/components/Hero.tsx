"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      {/* Soft background orbs */}
      <div
        className="animate-float absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
          top: "5%",
          left: "0%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none" style={{ color: "#1e1b4b" }}>
              Xilin
              <br />
              <span className="gradient-text">Wang</span>
            </h1>

            <div className="h-10 flex items-center md:justify-start justify-center mb-5">
              <p
                className="text-xl md:text-2xl font-medium"
                style={{
                  color: "#6d28d9",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                {roles[roleIdx]}
              </p>
            </div>

            <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "#6b7280" }}>
              3+ years building large-scale distributed data platforms, real-time
              streaming systems, and cloud-native services at{" "}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>Apple</span>. Based in Austin, TX.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:justify-start justify-center mb-12">
              <a
                href="#experience"
                className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: "white",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#7c3aed",
                }}
              >
                Contact
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 flex-wrap md:justify-start justify-center">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "Backend", label: "& Distributed Systems" },
                { value: "Event-driven", label: "Real-time Pipelines" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "#64748b" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo side */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div
              style={{
                width: "min(280px, 60vw)",
                height: "min(280px, 60vw)",
                borderRadius: "50%",
                padding: 4,
                background: "linear-gradient(135deg, #4f46e5, #0891b2)",
                boxShadow: "0 20px 60px rgba(79,70,229,0.2)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  background: "#f1f5f9",
                }}
              >
                <Image
                  src="/xilin.jpg"
                  alt="Xilin Wang"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
