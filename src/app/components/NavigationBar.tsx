"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconX, IconChevronDown } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "/about",
    submenu: [
      { name: "Who We Are", link: "/about/who-we-are" },
      { name: "Contact", link: "/contact" },
    ],
  },
  { name: "Services", link: "/services" },
  { name: "ReservationKart.com", link: "/reservationkart" },
  { name: "DigitalMarketMart.com", link: "/digitalmart" },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // for mobile

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsAboutDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-gray-900 text-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between mx-12 py-3">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="h-20 w-20 rounded" priority />
        </Link>

        <div className="flex space-x-6 text-lg font-medium">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className="flex items-center gap-1 hover:text-white"
                >
                  {item.name}
                  <IconChevronDown size={16} className={`${activeDropdown === item.name ? "rotate-180" : ""} transition`} />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-40 rounded-md bg-gray-800 shadow-lg z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm hover:bg-gray-700"
                        onClick={handleItemClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-white"
                onClick={handleItemClick}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <Link
          href="/contact"
          className="w-40 text-center rounded-lg border border-gray-300 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="h-14 w-14 rounded" priority />
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
          <div className="mt-4 rounded-lg bg-gray-900 px-4 py-6 shadow-md">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 rounded hover:bg-gray-700"
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <IconChevronDown size={18} className={`${isAboutDropdownOpen ? "rotate-180" : ""} transition`} />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            onClick={handleItemClick}
                            className="block rounded px-4 py-2 text-sm hover:bg-gray-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={handleItemClick}
                    className="block px-4 py-2 rounded hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={handleItemClick}
                className="mt-4 block w-full rounded-md bg-gray-800 px-6 py-3 text-center font-semibold hover:bg-gray-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
