"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="gradient-text font-bold text-lg tracking-tight">XW</span>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
          <a
            href="mailto:stinsionwang@gmail.com"
            className="text-sm px-4 py-2 rounded-full font-medium transition-all duration-200"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#a78bfa",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
