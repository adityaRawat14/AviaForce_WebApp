import Credibility from "@/components/Credibility";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Credibility />
      <Services />
    </main>
  );
}
