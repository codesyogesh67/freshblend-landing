import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import JuicesOverview from "@/components/sections/JuicesOverview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <JuicesOverview />
      </main>
    </>
  );
}
