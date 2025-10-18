"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { ChevronDownIcon, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroNavbar
      shouldHideOnScroll
      maxWidth="xl"
      position="sticky"
      className={`transition-all duration-500 ${
        scrolled
          ? "bg-[#234C6A]/95 backdrop-blur-xl border-b border-[#456882]/40 shadow-lg shadow-[#1B3C53]/50"
          : "bg-[#1B3C53]/20 backdrop-blur-sm"
      }`}
    >
      {/* Brand */}
      <NavbarBrand>
        <Link
          href="/"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#456882] to-[#234C6A] group-hover:from-[#D2C1B6] group-hover:to-[#456882] transition-all duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-[#D2C1B6] via-white to-[#D2C1B6] bg-clip-text text-transparent">
            Lathika
          </span>
        </Link>
      </NavbarBrand>

      {/* Mobile Toggle */}
      <NavbarMenuToggle className="sm:hidden text-[#D2C1B6] hover:text-white" />

      {/* Desktop Links */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link
            href="/"
            className="text-[#D2C1B6] hover:text-white relative group transition-colors duration-300 font-medium px-2 py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#456882] to-[#D2C1B6] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/experience"
            className="text-[#D2C1B6] hover:text-white relative group transition-colors duration-300 font-medium px-2 py-1"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#456882] to-[#D2C1B6] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </NavbarItem>

        {/* Projects Dropdown */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <button className="text-[#D2C1B6] hover:text-white flex items-center gap-1 group transition-colors duration-300 font-medium px-2 py-1">
                Projects
                <ChevronDownIcon
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Projects"
              className="bg-[#234C6A]/98 backdrop-blur-xl border border-[#456882]/50 rounded-xl p-2 shadow-xl"
            >
              <DropdownItem
                key="competitions"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all mb-1"
              >
                <Link href="/projects/competitions" className="block w-full py-1">
                  Competitions
                </Link>
              </DropdownItem>
              <DropdownItem
                key="personal"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all mb-1"
              >
                <Link href="/projects/personal" className="block w-full py-1">
                  Personal
                </Link>
              </DropdownItem>
              <DropdownItem
                key="professional"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all"
              >
                <Link href="/projects/professional" className="block w-full py-1">
                  Professional
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#456882] to-[#234C6A] hover:from-[#D2C1B6] hover:to-[#456882] text-white font-semibold shadow-lg shadow-[#456882]/30 hover:shadow-[#D2C1B6]/30 transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#1B3C53]/98 backdrop-blur-xl border-r border-[#456882]/30 pt-6">
        <NavbarMenuItem>
          <Link
            href="/"
            className="text-[#D2C1B6] hover:text-white hover:bg-[#234C6A]/50 px-4 py-3 rounded-lg block transition-all font-medium"
          >
            Home
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            href="/experience"
            className="text-[#D2C1B6] hover:text-white hover:bg-[#234C6A]/50 px-4 py-3 rounded-lg block transition-all font-medium"
          >
            Experience
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <button className="text-[#D2C1B6] hover:text-white hover:bg-[#234C6A]/50 px-4 py-3 rounded-lg flex items-center gap-1 w-full transition-all font-medium">
                Projects <ChevronDownIcon size={16} />
              </button>
            </DropdownTrigger>
            <DropdownMenu className="bg-[#234C6A]/98 backdrop-blur-xl border border-[#456882]/50 rounded-xl p-2 shadow-xl">
              <DropdownItem
                key="competitions"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all"
              >
                <Link href="/projects/competitions" className="block w-full">
                  Competitions
                </Link>
              </DropdownItem>
              <DropdownItem
                key="personal"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all"
              >
                <Link href="/projects/personal" className="block w-full">
                  Personal
                </Link>
              </DropdownItem>
              <DropdownItem
                key="professional"
                className="text-[#D2C1B6] hover:text-white hover:bg-[#456882]/30 rounded-lg transition-all"
              >
                <Link href="/projects/professional" className="block w-full">
                  Professional
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            href="/contact"
            className="text-[#D2C1B6] hover:text-white hover:bg-[#234C6A]/50 px-4 py-3 rounded-lg block transition-all font-medium"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}