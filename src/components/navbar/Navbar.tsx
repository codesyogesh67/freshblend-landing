"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import MobileNavbar from "./MobileNavbar";
import clsx from "clsx";

interface Props {}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 64;
      if (window.scrollY === 0) return setIsSticky(true);
      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 bg-black/80 md:bg-background transition-shadow",
          isSticky ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 h-24 md:h-16 flex items-center justify-between"
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-semibold [font-family:var(--font-serif)] text-2xl text-secondary"
          >
            FreshBlend
          </Link>

          {/* Desktop Links */}

          <ul className="hidden md:flex items-center gap-6 text-md">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-3 items-center">
            <MagnifyingGlassIcon className="size-6 text-white cursor-pointer" />
            <Bars3Icon
              className="md:hidden size-6 text-white cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            <UserCircleIcon className="size-8 text-white hidden md:block" />
          </div>
          {/* Mobile Hamburger */}
        </nav>
      </header>
      <MobileNavbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
