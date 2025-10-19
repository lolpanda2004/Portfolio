"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowDown, Code, Palette, Database, Rocket, Github, Linkedin, Mail, ArrowRight, Briefcase, Star, Sparkles, X, ChevronLeft, ChevronRight, Zap, Globe } from "lucide-react";
import React from "react";

const aboutCards = [
  {
    id: 1,
    icon: Code,
    title: "Development",
    shortDesc: "Building modern web applications",
    fullDesc: "Passionate about building scalable web applications using React, Next.js, Node.js, and modern frameworks. I specialize in creating performant, accessible, and user-friendly applications that solve real-world problems. My approach combines clean code practices with innovative solutions.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
  },
  {
    id: 2,
    icon: Palette,
    title: "Design",
    shortDesc: "Crafting beautiful user experiences",
    fullDesc: "Creating intuitive user interfaces with attention to detail, accessibility, and user experience. I believe great design is invisible and makes everything feel natural. From wireframes to high-fidelity prototypes, I ensure every pixel serves a purpose.",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Design Systems", "Prototyping"]
  },
  {
    id: 3,
    icon: Database,
    title: "Backend",
    shortDesc: "Robust server-side solutions",
    fullDesc: "Expert in designing and implementing scalable backend architectures. I build RESTful APIs, manage databases, and ensure security best practices. My solutions are optimized for performance and can handle high traffic loads efficiently.",
    skills: ["REST APIs", "GraphQL", "Microservices", "AWS", "Docker", "Redis"]
  },
  {
    id: 4,
    icon: Zap,
    title: "Performance",
    shortDesc: "Optimizing for speed & efficiency",
    fullDesc: "Dedicated to creating lightning-fast applications through performance optimization, code splitting, and efficient data management. I use modern techniques like lazy loading, caching strategies, and CDN optimization to ensure the best user experience.",
    skills: ["Optimization", "SEO", "Lighthouse", "Webpack", "Performance Monitoring", "Caching"]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer at TechCorp",
    image: "SJ",
    text: "Lathika's attention to detail and problem-solving skills are exceptional. A true professional who delivers quality work consistently and goes above and beyond expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateLab",
    image: "MC",
    text: "Working with Lathika has been transformative. Their ability to understand requirements and translate them into elegant solutions is remarkable. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at Creative Studio",
    image: "ER",
    text: "Lathika brings creativity and technical excellence together seamlessly. Their collaborative approach makes every project enjoyable and the results always exceed expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO at StartupVentures",
    image: "DK",
    text: "An absolute pleasure to work with! Lathika's expertise in full-stack development helped us launch our product ahead of schedule. Their dedication is unmatched.",
    rating: 5
  },
  {
    id: 5,
    name: "David Kim",
    role: "CEO at StartupVentures",
    image: "DK",
    text: "An absolute pleasure to work with! Lathika's expertise in full-stack development helped us launch our product ahead of schedule. Their dedication is unmatched.",
    rating: 5
  }
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  
  const aboutRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      checkVisibility();
    };

    const checkVisibility = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        setAboutVisible(isVisible);
      }
      
      if (testimonialsRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        setTestimonialsVisible(isVisible);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    checkVisibility();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardFlip = (cardId: number) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Mouse follower with gradient */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(255,236,192,0.4) 0%, rgba(255,194,155,0.3) 30%, rgba(243,159,159,0.2) 60%, transparent 100%)",
            top: `${mousePosition.y - 300}px`,
            left: `${mousePosition.x - 300}px`,
          }}
        />
        
        {/* Animated orbs with parallax */}
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-[#B95E82]/20 rounded-full blur-3xl animate-float-orb"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#FFC29B]/15 rounded-full blur-3xl animate-float-orb-slow"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#FFECC0]/10 rounded-full blur-3xl animate-pulse-orb"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        
        {/* Advanced particle system */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-[#FFECC0] via-[#FFC29B] to-[#F39F9F]"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              opacity: particle.opacity,
              animation: `particleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 236, 192, 0.5)`,
            }}
          />
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          {particles.slice(0, 20).map((p1, i) => {
            const p2 = particles[(i + 5) % particles.length];
            return (
              <line
                key={`line-${i}`}
                x1={`${p1.initialX}%`}
                y1={`${p1.initialY}%`}
                x2={`${p2.initialX}%`}
                y2={`${p2.initialY}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                className="animate-pulse-line"
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFECC0" />
              <stop offset="50%" stopColor="#FFC29B" />
              <stop offset="100%" stopColor="#F39F9F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 animate-float-icon opacity-60">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#B95E82] to-[#F39F9F] shadow-lg shadow-[#B95E82]/50">
              <Code className="w-8 h-8 text-[#FFECC0]" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float-icon-delay-1 opacity-60">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFECC0] to-[#FFC29B] shadow-lg shadow-[#FFC29B]/50">
              <Palette className="w-7 h-7 text-[#B95E82]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-32 animate-float-icon-delay-2 opacity-60">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F39F9F] to-[#FFC29B] shadow-lg shadow-[#F39F9F]/50">
              <Database className="w-8 h-8 text-[#FFECC0]" />
            </div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float-icon opacity-60">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFC29B] to-[#FFECC0] shadow-lg shadow-[#FFECC0]/50">
              <Rocket className="w-7 h-7 text-[#B95E82]" />
            </div>
          </div>

          <div className="mb-8 inline-block animate-fade-in-up">
            <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/30 text-[#FFECC0] text-sm font-semibold backdrop-blur-md shadow-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse-glow" />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight leading-none animate-slide-up-hero">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent animate-gradient">
              Lathika
            </span>
          </h1>

          <div className="flex justify-center gap-2 mb-8 animate-expand-bars">
            <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full animate-shimmer" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full animate-shimmer-delay-1" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full animate-shimmer-delay-2" />
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
          <div className="flex gap-4 justify-center mb-16 animate-fade-in-delay-3">
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

          <ArrowDown className="w-6 h-6 text-[#FFECC0] mx-auto animate-bounce-smooth" />
        </div>
      </section>

      {/* About Section with Flip Cards */}
      <section 
        ref={aboutRef}
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto z-10 relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              const isFlipped = flippedCards.includes(card.id);
              
              return (
                <div
                  key={card.id}
                  className={`transition-all duration-700 ${
                    aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="relative h-80 cursor-pointer group perspective-1000"
                    onMouseEnter={() => handleCardFlip(card.id)}
                    onMouseLeave={() => handleCardFlip(card.id)}
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}>
                      {/* Front of card */}
                      <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 backdrop-blur-sm p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-[#B95E82]/40 transition-shadow">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B95E82] to-[#F39F9F] flex items-center justify-center mb-6 shadow-lg">
                          <Icon className="w-10 h-10 text-[#FFECC0]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#FFECC0] mb-3">{card.title}</h3>
                        <p className="text-[#FFC29B]/80 text-center">{card.shortDesc}</p>
                        <div className="mt-auto pt-4">
                          <p className="text-[#FFECC0]/60 text-sm">Hover to flip</p>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#FFC29B]/30 to-[#FFECC0]/30 border-2 border-[#FFC29B]/40 backdrop-blur-sm p-6 flex flex-col">
                        <h4 className="text-lg font-bold text-[#FFECC0] mb-3">Key Skills</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {card.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#B95E82]/40 to-[#F39F9F]/40 text-[#FFECC0] text-xs border border-[#F39F9F]/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <p className="text-[#FFC29B]/90 text-sm leading-relaxed mb-4 flex-1">
                          {card.fullDesc.substring(0, 120)}...
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCard(card);
                          }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#B95E82] to-[#F39F9F] text-white font-semibold text-sm hover:scale-105 transition-transform"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section 
        ref={testimonialsRef}
        className="relative py-32 px-6 pb-20"
      >
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
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

          <div className={`relative transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Carousel Container */}
            <div className="relative h-[450px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const position = (index - currentTestimonial + testimonials.length) % testimonials.length;
                const isHovered = hoveredTestimonial === index;
                
                let translateX = 0;
                let scale = 0.8;
                let opacity = 0.4;
                let zIndex = 1;

                if (position === 0) {
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 3;
                } else if (position === 1) {
                  translateX = 70;
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 2;
                } else if (position === testimonials.length - 1) {
                  translateX = -70;
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 2;
                } else {
                  translateX = position < testimonials.length / 2 ? 140 : -140;
                  scale = 0.7;
                  opacity = 0.3;
                  zIndex = 1;
                }

                if (isHovered && position !== 0) {
                  scale = 0.95;
                  zIndex = 4;
                }

                return (
                  <div
                    key={testimonial.id}
                    className="absolute w-full max-w-md transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity,
                      zIndex: isHovered ? zIndex + 10 : zIndex,
                    }}
                    onMouseEnter={() => setHoveredTestimonial(index)}
                    onMouseLeave={() => setHoveredTestimonial(null)}
                  >
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 backdrop-blur-sm shadow-2xl hover:shadow-[#B95E82]/40 transition-shadow">
                      {/* Avatar */}
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFECC0] to-[#FFC29B] flex items-center justify-center text-[#B95E82] font-bold text-xl shadow-lg">
                          {testimonial.image}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-[#FFECC0] font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-[#FFC29B]/70 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-5 h-5 text-[#FFECC0] fill-[#FFECC0]"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-[#FFC29B]/90 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-4 rounded-full bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 hover:from-[#B95E82] hover:to-[#F39F9F] text-[#FFECC0] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-4 rounded-full bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 hover:from-[#B95E82] hover:to-[#F39F9F] text-[#FFECC0] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-[#B95E82] to-[#F39F9F] w-8'
                      : 'bg-[#F39F9F]/30 hover:bg-[#F39F9F]/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for About Card Details */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-[#0a0a0a]/96 backdrop-blur-xl"
            onClick={() => setSelectedCard(null)}
          />
          <div className="relative bg-gradient-to-br from-[#B95E82]/40 to-[#F39F9F]/40 border-2 border-[#FFECC0]/50 rounded-2xl max-w-2xl w-full backdrop-blur-xl animate-scale-in shadow-2xl shadow-[#B95E82]/50">
            <div className="sticky top-0 bg-gradient-to-b from-[#B95E82]/90 to-[#F39F9F]/90 p-8 border-b border-[#FFECC0]/30 backdrop-blur-xl z-10 rounded-t-2xl">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 p-3 rounded-xl bg-[#FFECC0]/20 hover:bg-[#FFECC0]/40 border-2 border-[#FFECC0]/40 hover:border-[#FFECC0] transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-[#FFECC0] group-hover:text-white transition-colors" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFECC0] to-[#FFC29B] flex items-center justify-center shadow-lg">
                  {React.createElement(selectedCard.icon, { className: "w-8 h-8 text-[#B95E82]" })}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{selectedCard.title}</h2>
                  <p className="text-[#FFECC0]/80 text-lg mt-1">{selectedCard.shortDesc}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-xl mb-4">Overview</h3>
                <p className="text-[#FFC29B]/90 leading-relaxed text-lg">
                  {selectedCard.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="text-[#FFECC0] font-bold text-xl mb-4">Key Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCard.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FFC29B]/60 to-[#FFECC0]/60 text-[#B95E82] border-2 border-[#FFC29B]/60 font-semibold text-base hover:border-[#F39F9F]/70 hover:shadow-lg hover:shadow-[#FFC29B]/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% { 
            transform: translate(100px, -100px) rotate(90deg);
            opacity: 0.8;
          }
          50% { 
            transform: translate(200px, 0) rotate(180deg);
            opacity: 0.5;
          }
          75% { 
            transform: translate(100px, 100px) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes float-orb-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-50px) scale(1.1); }
        }

        @keyframes pulse-orb {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }

        @keyframes float-icon-delay-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-8deg); }
        }

        @keyframes float-icon-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(6deg); }
        }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up-hero {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes slide-up-delay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-delay-2 {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-delay-3 {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes expand-bars {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }

        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-float-orb {
          animation: float-orb 8s ease-in-out infinite;
        }

        .animate-float-orb-slow {
          animation: float-orb-slow 12s ease-in-out infinite;
        }

        .animate-pulse-orb {
          animation: pulse-orb 6s ease-in-out infinite;
        }

        .animate-float-icon {
          animation: float-icon 6s ease-in-out infinite;
        }

        .animate-float-icon-delay-1 {
          animation: float-icon-delay-1 7s ease-in-out infinite 1s;
        }

        .animate-float-icon-delay-2 {
          animation: float-icon-delay-2 8s ease-in-out infinite 2s;
        }

        .animate-pulse-line {
          animation: pulse-line 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-slide-up-hero {
          animation: slide-up-hero 1s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up-delay 0.8s ease-out 0.3s backwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.6s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 0.8s ease-out 0.9s backwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in-delay-3 0.8s ease-out 1.2s backwards;
        }

        .animate-expand-bars {
          animation: expand-bars 1.2s ease-out 0.4s backwards;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-shimmer-delay-1 {
          animation: shimmer 2s ease-in-out infinite 0.5s;
        }

        .animate-shimmer-delay-2 {
          animation: shimmer 2s ease-in-out infinite 1s;
        }

        .animate-bounce-smooth {
          animation: bounce-smooth 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
}