"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowDown, Code, Palette, Database, Rocket, Github, Linkedin, Mail, ArrowRight, Briefcase, Star } from "lucide-react";

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
    <main className="bg-[#1B3C53] min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Mouse follower with gradient */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(69,104,130,0.4) 0%, rgba(35,76,106,0.2) 50%, transparent 100%)",
            top: `${mousePosition.y - 300}px`,
            left: `${mousePosition.x - 300}px`,
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        
        {/* Animated orbs with different colors */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#234C6A]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#456882]/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#D2C1B6]/8 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Animated waves */}
        <svg className="absolute bottom-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path fill="#456882" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
        </svg>
        <svg className="absolute bottom-0 w-full opacity-5" viewBox="0 0 1440 320">
          <path fill="#234C6A" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave-slow"></path>
        </svg>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center z-10">
          {/* Floating decorative elements with color variety */}
          <div className="absolute top-20 left-10 animate-float opacity-40">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#456882] to-[#234C6A] shadow-lg">
              <Code className="w-8 h-8 text-[#D2C1B6]" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float-delay-1 opacity-40">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
              <Palette className="w-7 h-7 text-[#1B3C53]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-32 animate-float-delay-2 opacity-40">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#234C6A] to-[#1B3C53] shadow-lg">
              <Database className="w-8 h-8 text-[#D2C1B6]" />
            </div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float opacity-40">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#456882] to-[#D2C1B6] shadow-lg">
              <Rocket className="w-7 h-7 text-white" />
            </div>
          </div>

          <div className="mb-8 inline-block animate-fade-in">
            <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#234C6A]/50 to-[#456882]/50 border border-[#D2C1B6]/30 text-[#D2C1B6] text-sm font-semibold backdrop-blur-md shadow-lg">
              ✨ Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-[#D2C1B6] via-white to-[#D2C1B6] bg-clip-text text-transparent tracking-tight leading-none animate-slide-up">
            Lathika
          </h1>

          <div className="flex justify-center gap-2 mb-8 animate-expand">
            <div className="h-1 w-20 bg-[#456882] rounded-full" />
            <div className="h-1 w-20 bg-[#234C6A] rounded-full" />
            <div className="h-1 w-20 bg-[#D2C1B6] rounded-full" />
          </div>

          <p className="text-2xl md:text-4xl text-white mb-6 font-light animate-slide-up-delay">
            Full Stack Developer & Creative Technologist
          </p>

          <p className="text-lg text-[#D2C1B6]/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
            Crafting innovative digital experiences through elegant code and thoughtful design
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-delay-2">
            <Link
              href="/experience"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#456882] to-[#234C6A] hover:from-[#234C6A] hover:to-[#456882] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#456882]/40 flex items-center gap-2 border border-[#456882]/50"
            >
              <Briefcase className="w-5 h-5" />
              View My Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-transparent border-2 border-[#D2C1B6]/60 hover:border-[#D2C1B6] hover:bg-[#D2C1B6]/10 text-[#D2C1B6] font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <a
              href="#"
              className="p-4 rounded-xl bg-[#234C6A]/40 hover:bg-[#456882] border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#456882]/50 group"
            >
              <Github className="w-5 h-5 text-[#D2C1B6] group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-[#234C6A]/40 hover:bg-[#456882] border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#456882]/50 group"
            >
              <Linkedin className="w-5 h-5 text-[#D2C1B6] group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-[#234C6A]/40 hover:bg-[#456882] border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-[#456882]/50 group"
            >
              <Mail className="w-5 h-5 text-[#D2C1B6] group-hover:text-white transition-colors" />
            </a>
          </div>

          <ArrowDown className="w-6 h-6 text-[#D2C1B6] mx-auto animate-bounce" />
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D2C1B6] to-white bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-20 bg-[#456882] rounded-full" />
              <div className="h-1 w-20 bg-[#234C6A] rounded-full" />
              <div className="h-1 w-20 bg-[#D2C1B6] rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-[#234C6A]/40 to-[#1B3C53]/40 border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#456882]/30 hover:-translate-y-3 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#456882] to-[#234C6A] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <Code className="w-8 h-8 text-[#D2C1B6]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-[#D2C1B6]/90 leading-relaxed">
                Passionate about building scalable web applications using React, Next.js, Node.js, and modern frameworks. I love turning ideas into reality through clean, efficient code that makes a difference.
              </p>
            </div>

            <div className="group p-10 rounded-2xl bg-gradient-to-br from-[#234C6A]/40 to-[#1B3C53]/40 border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2C1B6]/30 hover:-translate-y-3 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D2C1B6] to-[#456882] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <Palette className="w-8 h-8 text-[#1B3C53]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
              <p className="text-[#D2C1B6]/90 leading-relaxed">
                Creating intuitive user interfaces with attention to detail, accessibility, and user experience. I believe great design is invisible and makes everything feel effortless and natural.
              </p>
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#234C6A]/50 to-[#456882]/30 border border-[#D2C1B6]/30 backdrop-blur-sm shadow-xl">
            <p className="text-[#D2C1B6]/95 text-lg leading-relaxed">
              I'm a creative developer with a passion for crafting exceptional digital experiences that blend functionality with aesthetics. With expertise spanning both frontend and backend development, I specialize in building modern, responsive web applications that solve real-world problems and delight users. When I'm not coding, you'll find me exploring emerging technologies, contributing to open source projects, or sharing knowledge and insights with the vibrant developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D2C1B6] to-white bg-clip-text text-transparent">
              Testimonials
            </h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-20 bg-[#456882] rounded-full" />
              <div className="h-1 w-20 bg-[#234C6A] rounded-full" />
              <div className="h-1 w-20 bg-[#D2C1B6] rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Developer at TechCorp",
                text: "Lathika's attention to detail and problem-solving skills are exceptional. A true professional who delivers quality work consistently and exceeds expectations.",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                text: "Working with Lathika has been transformative. Their ability to understand requirements and translate them into elegant solutions is truly remarkable.",
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                text: "Lathika brings creativity and technical excellence together seamlessly. Their collaborative approach makes every project not just successful, but enjoyable.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#234C6A]/40 to-[#1B3C53]/40 border border-[#456882]/40 hover:border-[#D2C1B6]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#456882]/30 hover:-translate-y-3 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-[#D2C1B6] fill-[#D2C1B6]"
                    />
                  ))}
                </div>
                <p className="text-[#D2C1B6]/90 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-[#456882]/40 pt-6">
                  <p className="text-white font-bold text-lg">{testimonial.name}</p>
                  <p className="text-[#D2C1B6]/70 text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

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
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        @keyframes wave-slow {
          0% { transform: translateX(0); }
          50% { transform: translateX(-15%); }
          100% { transform: translateX(0); }
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
        .animate-wave {
          animation: wave 10s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: wave-slow 15s ease-in-out infinite;
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