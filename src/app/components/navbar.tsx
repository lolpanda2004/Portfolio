"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#F39F9F]/20 shadow-lg shadow-[#B95E82]/10"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#B95E82] to-[#F39F9F] group-hover:from-[#FFECC0] group-hover:to-[#FFC29B] transition-all duration-300 shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
                Lathika
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-[#FFECC0] hover:text-white relative group transition-colors duration-300 font-medium px-2 py-1"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/experience"
                className="text-[#FFECC0] hover:text-white relative group transition-colors duration-300 font-medium px-2 py-1"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button className="text-[#FFECC0] hover:text-white flex items-center gap-1 group transition-colors duration-300 font-medium px-2 py-1">
                  Projects
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      projectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {projectsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl bg-[#0a0a0a]/98 backdrop-blur-xl border border-[#F39F9F]/30 shadow-xl animate-dropdown">
                    <Link
                      href="/projects/competitions"
                      className="block px-4 py-3 text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#B95E82]/20 hover:to-[#F39F9F]/20 transition-all"
                    >
                      Competitions
                    </Link>
                    <Link
                      href="/projects/personal"
                      className="block px-4 py-3 text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#F39F9F]/20 hover:to-[#FFC29B]/20 transition-all"
                    >
                      Personal
                    </Link>
                    <Link
                      href="/projects/professional"
                      className="block px-4 py-3 text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#FFC29B]/20 hover:to-[#FFECC0]/20 transition-all"
                    >
                      Professional
                    </Link>
                    <Link
                      href="/projects/playmygame"
                      className="block px-4 py-3 text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#FFC29B]/20 hover:to-[#FFECC0]/20 transition-all"
                    >
                      Play my game!
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#B95E82] to-[#F39F9F] hover:from-[#F39F9F] hover:to-[#FFC29B] text-white font-semibold shadow-lg shadow-[#B95E82]/30 hover:shadow-[#F39F9F]/30 transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#FFECC0] hover:bg-[#B95E82]/20 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-[#F39F9F]/20 shadow-2xl animate-slide-down">
            <div className="px-6 py-8 space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#B95E82]/20 hover:to-[#F39F9F]/20 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Home
              </Link>

              <Link
                href="/experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#F39F9F]/20 hover:to-[#FFC29B]/20 px-4 py-3 rounded-lg transition-all font-medium"
              >
                Experience
              </Link>

              <div className="space-y-2">
                <div className="text-[#FFC29B] px-4 py-2 text-sm font-semibold">
                  Projects
                </div>
                <Link
                  href="/projects/competitions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#B95E82]/20 hover:to-[#F39F9F]/20 px-6 py-3 rounded-lg transition-all"
                >
                  Competitions
                </Link>
                <Link
                  href="/projects/personal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#F39F9F]/20 hover:to-[#FFC29B]/20 px-6 py-3 rounded-lg transition-all"
                >
                  Personal
                </Link>
                <Link
                  href="/projects/professional"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#FFECC0] hover:text-white hover:bg-gradient-to-r hover:from-[#FFC29B]/20 hover:to-[#FFECC0]/20 px-6 py-3 rounded-lg transition-all"
                >
                  Professional
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#B95E82] to-[#F39F9F] hover:from-[#F39F9F] hover:to-[#FFC29B] text-white font-semibold shadow-lg transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
}