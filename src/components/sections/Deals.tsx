import React from "react";
import { Input } from "@/components/ui/input";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

interface Props {}

const Deals = (props: Props) => {
  return (
    <section
      className="bg-center md:bg-fixed bg-cover"
      style={{
        backgroundImage: "url('/smoothie-bg.jpg')",
      }}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 mx-auto max-w-7xl py-20">
        <div className="w-full md:max-w-xl md:mr-auto">
          <div
            //   className="w-[clamp(16rem,60vw,40rem)] aspect-square rounded-full bg-primary text-white flex flex-col items-center justify-center overflow-hidden"
            className="
                    mx-auto md:mx-0 mt-6
                    bg-primary text-white overflow-hidden
                    rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 md:gap-2 py-6
                    md:p-0 md:rounded-full md:w-[clamp(16rem,60vw,40rem)] md:aspect-square
                  
                  "
          >
            <p>30% off for the juice</p>
            <h2 className="text-2xl md:text-4xl font-bold lg:mb-6">
              Big Deals of the Week
            </h2>
            <p className="max-w-[400px] lg:max-w-[500px] text-center lg:mb-6 text-md md:text-lg">
              From green detox to tropical mango, every bottle is 30% off this
              week. Drink clean, feel great, spend less.
            </p>
            <p className="font-bold mb-2 lg:mb-8 text-sm md:text-md">
              To Get New Of Our Deals
            </p>
            <div className="mb-6 flex gap-2 items-center border border-white/70 pl-6 pr-2 rounded-4xl py-1 md:py-2 backdroup-blur-sm">
              <Input
                type="email"
                placeholder="Type your email"
                className="flex-1 bg-transparent border-0 shadow-none max-w-[150px] lg:max-w-2xl placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-0"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="shrink-0 grid size-7 md:size-9 place-items-center rounded-full bg-white text-gray-200 rotate-[-50deg]
               hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <PaperAirplaneIcon className="size-4 md:size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
