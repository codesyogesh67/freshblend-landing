import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {}

const JuicesOverview = (props: Props) => {
  return (
    <div className="mt-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div className="relative w-[600px] h-[450px] lg:h-[500px]">
          <Image src="/juices-overview.png" fill alt="Juices Overview" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-1 text-primary font-bold">Drink for Health</p>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
            Fresh Fruit <span className="text-secondary">Juices</span>
          </h2>
          <p className="text-base sm:text-lg mb-10 max-w-3xl text-center lg:text-left">
            Nourish your day with fresh, cold-pressed fruit juices made from
            whole ingredients. Rich in vitamins, antioxidants, and natural
            electrolytes, our blends support energy, immunity, and
            hydration—without added sugar or artificial flavors. Sip clean, feel
            good.
          </p>
          <Button className="px-10 py-6 rounded-3xl bg-white hover:bg-secondary border border-secondary hover:text-white  cursor-pointer">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JuicesOverview;
