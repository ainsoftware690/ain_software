"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconX } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "ReservationKart.com", link: "/reservationkart" },
  { name: "DigitalMarketMart.com", link: "/digitalmart" },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between w-full px-6 py-3 bg-gray-900 text-white">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-20 w-20 rounded"
            priority
          />
        </Link>

        <div className="flex space-x-6 text-lg font-medium text-zinc-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={handleItemClick}
              className="transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="w-40 text-center rounded-lg border border-gray-300 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full bg-gray-900 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-14 w-14 rounded"
              priority
            />
          </Link>

          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <IconX size={28} /> : <IconMenu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-6 shadow-md">
            <div className="flex flex-col gap-2 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={handleItemClick}
                  className="block px-4 py-2 hover:bg-gray-700 rounded transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={handleItemClick}
              className="block w-full rounded-md px-6 py-3 text-center font-semibold shadow-md hover:bg-gray-700 transition duration-300 mt-4"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
