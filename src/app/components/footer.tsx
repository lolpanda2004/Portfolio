"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#0a0a0a] border-t border-[#F39F9F]/20 mt-auto">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B95E82] through-[#F39F9F] to-transparent" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#B95E82]/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#FFC29B]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#B95E82] to-[#F39F9F] shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFECC0] to-[#FFC29B] bg-clip-text text-transparent">
                Lathika
              </h3>
            </div>
            <p className="text-[#FFC29B]/80 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 hover:from-[#B95E82] hover:to-[#F39F9F] border border-[#B95E82]/30 hover:border-[#FFECC0]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Github className="w-5 h-5 text-[#FFECC0] group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-gradient-to-br from-[#F39F9F]/30 to-[#FFC29B]/30 hover:from-[#F39F9F] hover:to-[#FFC29B] border border-[#F39F9F]/30 hover:border-[#FFECC0]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Linkedin className="w-5 h-5 text-[#FFECC0] group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-gradient-to-br from-[#FFC29B]/30 to-[#FFECC0]/30 hover:from-[#FFC29B] hover:to-[#FFECC0] border border-[#FFC29B]/30 hover:border-[#F39F9F]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Twitter className="w-5 h-5 text-[#B95E82] group-hover:text-[#F39F9F] transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-gradient-to-br from-[#FFECC0]/30 to-[#FFC29B]/30 hover:from-[#FFECC0] hover:to-[#FFC29B] border border-[#FFECC0]/30 hover:border-[#B95E82]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Mail className="w-5 h-5 text-[#B95E82] group-hover:text-[#F39F9F] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFECC0] font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#B95E82] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#F39F9F] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/competitions"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#FFC29B] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#FFECC0] group-hover:bg-[#FFC29B] transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[#FFECC0] font-semibold mb-4 text-lg">Projects</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/projects/competitions"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#B95E82] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Competitions
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/personal"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#F39F9F] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/professional"
                  className="text-[#FFC29B]/70 hover:text-[#FFECC0] transition-colors duration-300 hover:translate-x-1 inline-block group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#FFC29B] group-hover:bg-[#FFECC0] transition-colors"></span>
                  Professional
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F39F9F]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FFC29B]/70 text-sm flex items-center gap-2">
            © 2025 Lathika. Made with <Heart className="w-4 h-4 text-[#B95E82] fill-[#B95E82] animate-pulse" /> and lots of coffee
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 hover:from-[#B95E82] hover:to-[#F39F9F] border border-[#B95E82]/30 hover:border-[#FFECC0]/50 transition-all duration-300 hover:-translate-y-2 group"
          >
            <ArrowUp className="w-5 h-5 text-[#FFECC0] group-hover:text-white group-hover:animate-bounce transition-colors" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}