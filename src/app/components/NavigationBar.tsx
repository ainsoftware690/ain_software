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
  {
    name: "ReservationKart.com",
    link: "/reservationkart",
    // logo: "/images/reservationkart_logo.webp",
  },
  {
    name: "DigitalMarketMart.com",
    link: "/digitalmart",
    // logo: "/images/reservationkart_logo.webp",
  },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsAboutDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-gray-900 text-white shadow-md">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto py-3 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="h-16 w-16 rounded"
            priority
          />
        </Link>

        {/* Menu */}
        <div className="flex space-x-6 text-base font-medium items-center">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className="flex items-center gap-1 hover:text-gray-300"
                >
                  {item.name}
                  <IconChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.link}
                        onClick={handleItemClick}
                        className="block px-4 py-2 text-sm hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.name} className="flex flex-col items-center">
                <Link
                  href={item.link}
                  onClick={handleItemClick}
                  className="hover:text-gray-300"
                >
                  {item.name}
                </Link>
                {/* {item.logo && (
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={100}
                    height={100}
                    className="mt-1"
                  />
                )} */}
              </div>
            )
          )}
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="ml-6 rounded-lg border border-white px-6 py-2 font-medium hover:bg-gray-800 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-3">
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
          <div className="mt-4 rounded-lg bg-gray-900 px-4 py-6 shadow-md">
            <div className="flex flex-col gap-3">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 rounded hover:bg-gray-700"
                      onClick={() =>
                        setIsAboutDropdownOpen((prev) => !prev)
                      }
                    >
                      <span>{item.name}</span>
                      <IconChevronDown
                        size={18}
                        className={`transition-transform ${
                          isAboutDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
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
                  <div
                    key={item.name}
                    className="flex flex-col items-start px-4 py-2"
                  >
                    <Link
                      href={item.link}
                      onClick={handleItemClick}
                      className="hover:text-white"
                    >
                      {item.name}
                    </Link>
                    {/* {item.logo && (
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={28}
                        height={28}
                        className="mt-1"
                      />
                    )} */}
                  </div>
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
