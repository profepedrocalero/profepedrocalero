import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import About from "@/components/About";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <Hero />

      <Subjects />

      <About />

      <Resources />

      <Footer />

    </main>
  );
}