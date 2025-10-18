"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1B3C53] border-t border-[#456882]/30 mt-auto">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#456882] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#D2C1B6] mb-4">Lathika</h3>
            <p className="text-[#D2C1B6]/70 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-[#234C6A]/50 hover:bg-[#456882]/70 border border-[#456882]/30 hover:border-[#D2C1B6]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-[#D2C1B6]" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-[#234C6A]/50 hover:bg-[#456882]/70 border border-[#456882]/30 hover:border-[#D2C1B6]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-[#D2C1B6]" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-[#234C6A]/50 hover:bg-[#456882]/70 border border-[#456882]/30 hover:border-[#D2C1B6]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5 text-[#D2C1B6]" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-[#234C6A]/50 hover:bg-[#456882]/70 border border-[#456882]/30 hover:border-[#D2C1B6]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-[#D2C1B6]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/competitions"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Projects</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/projects/competitions"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Competitions
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/personal"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/professional"
                  className="text-[#D2C1B6]/70 hover:text-[#D2C1B6] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Professional
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#456882]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#D2C1B6]/60 text-sm flex items-center gap-2">
            © 2025 Lathika. Made with <Heart className="w-4 h-4 text-[#456882] fill-[#456882]" /> and lots of coffee
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#234C6A]/50 hover:bg-[#456882]/70 border border-[#456882]/30 hover:border-[#D2C1B6]/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <ArrowUp className="w-5 h-5 text-[#D2C1B6] group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}