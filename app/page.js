import ReactiveBackground from "@/components/ReactiveBackground";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Vision from "@/components/Vision";
import HardwareCta from "@/components/HardwareCta";
import XFeed from "@/components/XFeed";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <ReactiveBackground />
      <Hero />
      <Problem />
      <Product />
      <HardwareCta />
      <Vision />
      <XFeed />
      <Contact />
    </main>
  );
}
