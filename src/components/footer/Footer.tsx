import React from "react";
import { footerData } from "./footerData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 mx-auto max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="flex-none w-full  md:w-auto  md:max-w-xs space-y-6">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-sm text-white/80">
              6Fifth Avenue 5501, Broadway, New York Morris Street,NY, 11234
            </p>
            <p className="text-sm text-white/80">freshbledn@gmail.com</p>
            <p className="text-sm text-white/80">(423) 4567 890</p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
              {footerData.map((group) => (
                <div key={group.header} className="space-y-3">
                  <h2 className="text-lg font-bold">{group.header}</h2>
                  <ul className="text-white/80 space-y-2">
                    {group.links.map((link) => (
                      <li
                        key={link}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Subscribe</h2>
            <Input
              placeholder="Your Email"
              type="text"
              className="h-11 px-6 w-full rounded-md bg-white/10 text-white placeholder:text-white/60
              border border-white/20 shadow-none ring-0 focus:ring-0 focus-visible:ring-0
              outline-none focus-visible:outline-none max-w-xs"
            />
            <Button className="w-full max-w-xs text-white">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
