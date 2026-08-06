import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Subjects from "../components/Subjects";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      {/* Fondo con luces */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl"></div>

      </div>

      <Navbar />

      <Hero />

      <Subjects />

      <Features />

    </main>
  );
}