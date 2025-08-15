import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {}

const Hero = (props: Props) => {
  return (
    <>
      {/* background image */}

      <section className="mt-20">
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl text-white lg:text-5xl font-bold leading-tight mb-8 text-center lg:mx-0 lg:text-left max-w-3xl">
              Healthy Smoothie
            </h1>
            <p className="text-base sm:text-lg text-white mb-10 max-w-3xl mx-auto text-center lg:text-left">
              Craving a refreshingly delicious and nutritious boost? Our healthy
              smoothies are packed with fresh fruits and wholesome ingredients,
              designed to energize your body and delight your taste buds.
            </p>
            <Button className="px-10 py-6 rounded-3xl bg-[#D8938A] hover:bg-[#BEB996] text-white cursor-pointer">
              Buy Now
            </Button>
          </div>
          <div className="relative w-[400px] h-[350px] lg:w-[600px] lg:h-[500px]">
            <Image src="/hero-image.png" fill alt="Hero Image" />
          </div>
        </div>
      </section>
      {/* left compartment */}
      {/* right compartment with image */}
    </>
  );
};

export default Hero;
