import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Background mesh */}
      <div className="mesh-gradient" />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
