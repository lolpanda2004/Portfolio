"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, Code, Palette, Database, Rocket, Github, Linkedin, Mail, ArrowRight, Briefcase, Star, Sparkles } from "lucide-react";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Mouse follower with gradient */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,236,192,0.3) 0%, rgba(255,194,155,0.2) 50%, transparent 100%)",
            top: `${mousePosition.y - 300}px`,
            left: `${mousePosition.x - 300}px`,
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        
        {/* Animated orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#B95E82]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#FFC29B]/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#FFECC0]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-[#F39F9F]/15 rounded-full blur-3xl animate-float-delay-1" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFECC0] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 animate-float opacity-50">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#B95E82] to-[#F39F9F] shadow-lg">
              <Code className="w-8 h-8 text-[#FFECC0]" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float-delay-1 opacity-50">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFECC0] to-[#FFC29B] shadow-lg">
              <Palette className="w-7 h-7 text-[#B95E82]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-32 animate-float-delay-2 opacity-50">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F39F9F] to-[#FFC29B] shadow-lg">
              <Database className="w-8 h-8 text-[#FFECC0]" />
            </div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float opacity-50">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFC29B] to-[#FFECC0] shadow-lg">
              <Rocket className="w-7 h-7 text-[#B95E82]" />
            </div>
          </div>

          <div className="mb-8 inline-block animate-fade-in">
            <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/30 text-[#FFECC0] text-sm font-semibold backdrop-blur-md shadow-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight leading-none animate-slide-up">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
              Lathika
            </span>
          </h1>

          <div className="flex justify-center gap-2 mb-8 animate-expand">
            <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
          </div>

          <p className="text-2xl md:text-4xl text-[#FFECC0] mb-6 font-light animate-slide-up-delay">
            Full Stack Developer & Creative Technologist
          </p>

          <p className="text-lg text-[#FFC29B]/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
            Crafting innovative digital experiences through elegant code and thoughtful design
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-delay-2">
            <Link
              href="/experience"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#B95E82] to-[#F39F9F] hover:from-[#F39F9F] hover:to-[#B95E82] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B95E82]/50 flex items-center gap-2 border border-[#F39F9F]/50"
            >
              <Briefcase className="w-5 h-5" />
              View My Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-transparent border-2 border-[#FFECC0]/60 hover:border-[#FFECC0] hover:bg-[#FFECC0]/10 text-[#FFECC0] font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <a
              href="#"
              className="p-4 rounded-xl bg-[#B95E82]/30 hover:bg-[#B95E82] border border-[#B95E82]/40 hover:border-[#FFECC0]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#B95E82]/50 group"
            >
              <Github className="w-5 h-5 text-[#FFECC0] group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-[#F39F9F]/30 hover:bg-[#F39F9F] border border-[#F39F9F]/40 hover:border-[#FFECC0]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#F39F9F]/50 group"
            >
              <Linkedin className="w-5 h-5 text-[#FFECC0] group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-[#FFC29B]/30 hover:bg-[#FFC29B] border border-[#FFC29B]/40 hover:border-[#FFECC0]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#FFC29B]/50 group"
            >
              <Mail className="w-5 h-5 text-[#FFECC0] group-hover:text-white transition-colors" />
            </a>
          </div>

          <ArrowDown className="w-6 h-6 text-[#FFECC0] mx-auto animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#B95E82]/40 hover:border-[#FFECC0]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B95E82]/30 hover:-translate-y-3 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#B95E82] to-[#F39F9F] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <Code className="w-8 h-8 text-[#FFECC0]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFECC0] mb-4">Development</h3>
              <p className="text-[#FFC29B]/90 leading-relaxed">
                Passionate about building scalable web applications using React, Next.js, Node.js, and modern frameworks. I love turning ideas into reality through clean, efficient code.
              </p>
            </div>

            <div className="group p-10 rounded-2xl bg-gradient-to-br from-[#FFC29B]/20 to-[#FFECC0]/20 border border-[#FFC29B]/40 hover:border-[#F39F9F]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC29B]/30 hover:-translate-y-3 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC29B] to-[#FFECC0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <Palette className="w-8 h-8 text-[#B95E82]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFECC0] mb-4">Design</h3>
              <p className="text-[#FFC29B]/90 leading-relaxed">
                Creating intuitive user interfaces with attention to detail, accessibility, and user experience. I believe great design is invisible and makes everything feel natural.
              </p>
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#F39F9F]/30 to-[#B95E82]/20 border border-[#FFECC0]/30 backdrop-blur-sm shadow-xl">
            <p className="text-[#FFECC0]/95 text-lg leading-relaxed">
              I'm a creative developer with a passion for crafting exceptional digital experiences that blend functionality with aesthetics. With expertise spanning both frontend and backend development, I specialize in building modern, responsive web applications that solve real-world problems and delight users.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Developer at TechCorp",
                text: "Lathika's attention to detail and problem-solving skills are exceptional. A true professional who delivers quality work consistently.",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                text: "Working with Lathika has been transformative. Their ability to understand requirements and translate them into elegant solutions is remarkable.",
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                text: "Lathika brings creativity and technical excellence together seamlessly. Their collaborative approach makes every project enjoyable.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#F39F9F]/40 hover:border-[#FFECC0]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B95E82]/30 hover:-translate-y-3 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-[#FFECC0] fill-[#FFECC0]"
                    />
                  ))}
                </div>
                <p className="text-[#FFC29B]/90 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-[#F39F9F]/40 pt-6">
                  <p className="text-[#FFECC0] font-bold text-lg">{testimonial.name}</p>
                  <p className="text-[#FFC29B]/70 text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes expand {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 4s;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.3s backwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.5s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.7s backwards;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.4s backwards;
        }
      `}</style>
    </main>
  );
}