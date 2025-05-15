"use client";
import {
  NavItems,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
} from "../components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "ReservationKart.com", link: "/reservationkart" },
  { name: "DigitalMarketMart.com", link: "/digitalmart" },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-gray-900 text-white">
      <div className="sticky top-0 z-40 w-full">
        {/* Desktop Navigation */}
        <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-sm dark:bg-neutral-950/80 px-4 py-2 lg:flex">
          <Link href="/" passHref>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-20 w-20 rounded-sm mix-blend-multiply opacity-80"
            />
          </Link>

          <NavItems
            className="absolute inset-0 flex-1 flex-row items-center justify-center space-x-2 text-lg font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 mt-2 shadow-lg rounded-lg"
            items={navItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="flex items-center gap-4">
            <Link href="/contact" passHref>
              <button className="w-40 transform rounded-lg border border-gray-300 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white/80 dark:bg-neutral-950/80 px-4 py-2 lg:hidden rounded-md">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          {isMobileMenuOpen && (
            <div className="mt-4 w-full rounded-lg bg-white px-4 py-6 shadow-md dark:bg-neutral-950">
              <NavItems
                items={navItems}
                onItemClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col gap-2 text-white mt-2 shadow-lg rounded-lg"
              />
              <Link
                href="/contact"
                className="w-full rounded-md bg-gray-800 px-6 py-3 text-white text-center font-semibold shadow-md hover:bg-gray-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
