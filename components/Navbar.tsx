"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { cn } from "@/lib/utils";

const menuItems = [
  { en: "Home", slug: "/" },
  { en: "Apartment", slug: "/apartments" },
  { en: "Hotel", slug: "/hotels" },
  { en: "Tours", slug: "/tours" },
  { en: "Contact Us", slug: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primaryColor py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-white text-3xl font-semibold tracking-wide">
          LOGO
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-base">
          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={cn(
                "hover:text-secondaryColor transition",
                pathname === item.slug ? "text-secondaryColor" : "text-white"
              )}
            >
              {item.en}
            </Link>
          ))}
        </nav>

        {/* Right: Language, Auth Buttons */}
        <div className="hidden md:flex items-center space-x-[14px]">
          {/* Language Dropdown */}
          <Link href="/login" className="text-white text-base">
            Login
          </Link>
          <Link
            href="/registration"
            className="bg-secondaryColor text-blackColor font-medium cursor-pointer  text-base px-4 py-2 rounded-[8px]"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden px-4 mt-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={cn(
                "block text-base py-2",
                pathname === item.slug ? "text-secondaryColor" : "text-white"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {item.en}
            </Link>
          ))}

          {/* Language Dropdown (Mobile) */}
          <div className=" flex  items-center justify-between">
            <Link href="/login" className="text-white text-base">
              Login
            </Link>
            <Link
              href="/registration"
              className="bg-secondaryColor inline-block text-blackColor font-medium cursor-pointer  text-base px-4 py-2 rounded-[8px]"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
