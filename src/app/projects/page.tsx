"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Trophy, User, Briefcase, ArrowRight, Sparkles, Code, Palette } from "lucide-react";

export default function ProjectsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const projectCategories = [
    {
      id: "competitions",
      title: "Competitions",
      icon: Trophy,
      description: "Award-winning projects from hackathons and coding competitions",
      stats: { count: "12+", label: "Wins" },
      color: "from-[#B95E82] to-[#F39F9F]",
      bgGradient: "from-[#B95E82]/20 to-[#F39F9F]/20",
      borderColor: "border-[#B95E82]/40 hover:border-[#B95E82]",
      href: "/projects/competitions",
      features: ["Hackathons", "Coding Contests", "Design Challenges"]
    },
    {
      id: "personal",
      title: "Personal",
      icon: User,
      description: "Creative side projects and experimental explorations",
      stats: { count: "25+", label: "Projects" },
      color: "from-[#FFC29B] to-[#FFECC0]",
      bgGradient: "from-[#FFC29B]/20 to-[#FFECC0]/20",
      borderColor: "border-[#FFC29B]/40 hover:border-[#FFC29B]",
      href: "/projects/personal",
      features: ["Open Source", "Experiments", "Learning Projects"]
    },
    {
      id: "professional",
      title: "Professional",
      icon: Briefcase,
      description: "Client work and professional development projects",
      stats: { count: "18+", label: "Clients" },
      color: "from-[#F39F9F] to-[#FFC29B]",
      bgGradient: "from-[#F39F9F]/20 to-[#FFC29B]/20",
      borderColor: "border-[#F39F9F]/40 hover:border-[#F39F9F]",
      href: "/projects/professional",
      features: ["Web Apps", "E-commerce", "Enterprise Solutions"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B95E82]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFC29B]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FFECC0]/10 rounded-full blur-3xl animate-float" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC29B] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#B95E82]/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#FFECC0] animate-pulse" />
              <span className="text-[#FFECC0] font-semibold">Explore My Work</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <div className="flex justify-center gap-3 mb-8 animate-expand">
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
          </div>

          <p className="text-xl text-[#FFC29B]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Dive into my portfolio of innovative solutions, creative experiments, and award-winning work. 
            Each category represents a unique journey of learning, building, and creating impact.
          </p>
        </div>

        {/* Project Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projectCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`
                  relative h-full p-8 rounded-3xl 
                  bg-gradient-to-br ${category.bgGradient}
                  border-2 ${category.borderColor}
                  backdrop-blur-md
                  transition-all duration-500
                  hover:scale-105 hover:shadow-2xl
                  overflow-hidden
                  animate-slide-up
                `}>
                  {/* Animated gradient overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${category.color} 
                    opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  `} />
                  
                  {/* Sparkle effect on hover */}
                  {hoveredCard === category.id && (
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-[#FFECC0] rounded-full animate-sparkle"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 0.5}s`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`
                      w-20 h-20 rounded-2xl mb-6
                      bg-gradient-to-br ${category.color}
                      flex items-center justify-center
                      transform group-hover:scale-110 group-hover:rotate-12
                      transition-all duration-500
                      shadow-lg group-hover:shadow-2xl
                    `}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm mb-4">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.stats.count}
                      </span>
                      <span className="text-[#FFECC0]/70 text-sm font-medium">
                        {category.stats.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#FFECC0] mb-4 group-hover:text-white transition-colors">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#FFC29B]/80 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                          <span className="text-[#FFECC0]/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`
                      flex items-center gap-2 text-[#FFECC0] font-semibold
                      group-hover:gap-4 transition-all duration-300
                    `}>
                      <span>Explore Projects</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className={`
                    absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br ${category.color}
                    opacity-20 blur-2xl rounded-full
                    transform translate-x-16 -translate-y-16
                    group-hover:scale-150 transition-transform duration-500
                  `} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-br from-[#B95E82]/10 to-[#FFC29B]/10 border border-[#F39F9F]/30 backdrop-blur-md">
          {[
            { label: "Total Projects", value: "55+", icon: Code },
            { label: "Technologies", value: "20+", icon: Palette },
            { label: "Happy Clients", value: "18", icon: Sparkles },
            { label: "Awards Won", value: "12", icon: Trophy }
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#F39F9F]/20 to-[#FFC29B]/20 mb-3 group-hover:scale-110 transition-transform">
                  <StatIcon className="w-6 h-6 text-[#FFECC0]" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FFECC0] to-[#FFC29B] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-[#FFC29B]/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes expand {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s backwards;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.4s backwards;
        }
        .animate-sparkle {
          animation: sparkle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}