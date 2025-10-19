"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Wrench, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlayMyGamePage() {
  const [dots, setDots] = useState("");

  // Simple animation for the "..." after Renovation
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen text-[#FFECC0] flex flex-col">
      <Navbar />

      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/20 mb-6 animate-pulse">
          <Sparkles className="w-5 h-5 text-[#FFECC0]" />
          <span className="font-semibold">Play My Game</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent mb-4">
          Under Renovation{dots}
        </h1>

        <p className="text-[#FFC29B]/80 text-lg max-w-xl leading-relaxed">
          🎮 We’re upgrading this page to bring you something fun and interactive!  
          Check back soon to experience the new **Play My Game** project.
        </p>

        <div className="mt-10 animate-bounce">
          <Wrench className="w-12 h-12 text-[#F39F9F]" />
        </div>
      </div>

      <Footer />

      <style jsx>{`
        main {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
