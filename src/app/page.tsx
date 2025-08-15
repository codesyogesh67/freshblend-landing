import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import JuicesOverview from "@/components/sections/JuicesOverview";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <JuicesOverview />
        <Products />
      </main>
    </>
  );
}
