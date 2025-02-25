import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Experiance";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}