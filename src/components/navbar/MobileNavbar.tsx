import React from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const MobileNavbar = ({ open, setOpen }: Props) => {
  return (
    <>
      {/* overlay slides in from right to left */}

      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-[1px]",

          "transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 delay-400 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* bottom sheet menu: slides up after overlay (delay when opening) */}
      <div
        className={clsx(
          "bg-white md:hidden fixed inset-0 z-70 left-0 w-[60%] rounded-t-[2xl] shadow-xl overflow-hidden",
          "transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu",
          open ? "translate-y-0 delay-400" : "translate-y-full delay-0"
        )}
      >
        <div className="flex justify-between items-center border-b border-gray-200 px-4 mb-6 py-4">
          <h2 className="text-2xl font-bold">FreshBlend</h2>
          <XMarkIcon
            className="cursor-pointer w-6 h-6"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              className="px-2 py-1 rounded-sm hover:text-blue-500 transition-colors focus:outline-none focus-visible:bg-blue-500 focus-visible:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
