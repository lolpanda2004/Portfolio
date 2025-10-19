"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ExternalLink, Github, X, Sparkles } from "lucide-react";
import { JSX } from "react/jsx-runtime";

type Project = {
  id: number;
  title: string;
  category?: string;
  date?: string;
  image?: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  links?: { demo?: string; github?: string };
  status?: string;
};

const personalProjects: Project[] = [
  {
    id: 1,
    title: "TaskMaster Pro",
    category: "Productivity",
    date: "2024",
    image: "✅",
    shortDesc: "AI-powered task manager with smart prioritization.",
    fullDesc:
      "A productivity-focused task management app that uses AI to prioritize daily tasks, deadlines, and goals automatically. It provides reminders, analytics, and smart scheduling features to boost personal efficiency.",
    technologies: ["React", "TypeScript", "OpenAI API", "Firebase", "Tailwind CSS"],
    links: {
      demo: "https://taskmaster.example.com",
      github: "https://github.com/taskmaster",
    },
    status: "Active",
  },
  {
    id: 2,
    title: "PixelArt Creator",
    category: "Creative Tools",
    date: "2024",
    image: "🎨",
    shortDesc: "Browser-based pixel art editor with animation tools.",
    fullDesc:
      "A powerful and lightweight browser-based pixel art editor. Supports layers, animation timeline, custom color palettes, and export to sprite sheets. Designed for indie game devs and artists.",
    technologies: ["Canvas API", "React", "IndexedDB", "WebGL", "PWA"],
    links: {
      demo: "https://pixelart.example.com",
      github: "https://github.com/pixelart",
    },
    status: "Active",
  },
  {
    id: 3,
    title: "MoodBoard",
    category: "Lifestyle",
    date: "2023",
    image: "😊",
    shortDesc: "Track your emotions daily and gain insights.",
    fullDesc:
      "A wellness app to track daily moods, journal thoughts, and visualize emotional patterns. Integrated AI gives suggestions for emotional balance and self-reflection.",
    technologies: ["Vue.js", "Supabase", "D3.js", "PWA"],
    links: {
      demo: "https://moodboard.example.com",
      github: "https://github.com/moodboard",
    },
    status: "Active",
  },
  {
    id: 4,
    title: "FitTrack Journey",
    category: "Health & Fitness",
    date: "2023",
    image: "💪",
    shortDesc: "Your all-in-one workout and health tracking app.",
    fullDesc:
      "A fitness companion that helps you set goals, log workouts, monitor progress, and visualize achievements. Built with beautiful UI and cross-device sync.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    links: {
      demo: "https://fittrack.example.com",
      github: "https://github.com/fittrack",
    },
    status: "Maintenance",
  },
];

export default function PersonalProjectsPage(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = revealRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((it) => observer.observe(it));
    return () => observer.disconnect();
  }, []);

  const toggleFlip = (id: number) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen text-[#FFECC0]">
      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-6 pb-32" ref={revealRef}>
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/20">
            <Sparkles className="w-5 h-5 text-[#FFECC0]" />
            <span className="font-semibold">Personal Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F]">
            My Creative Builds
          </h1>
          <p className="text-[#FFC29B]/80 mt-3 max-w-2xl mx-auto">
            Scroll through my favorite personal creations — a mix of creativity, innovation, and technology.
          </p>
        </header>

        <section className="space-y-14">
          {personalProjects.map((proj) => {
            const isFlipped = flippedIds.includes(proj.id);
            return (
              <article
                key={proj.id}
                className="reveal opacity-0 transform transition-all duration-700 ease-out will-change-transform"
              >
                <div
                  onClick={() => setSelectedProject(proj)}
                  onMouseEnter={() => toggleFlip(proj.id)}
                  onMouseLeave={() => toggleFlip(proj.id)}
                  className="relative h-80 md:h-96 perspective cursor-pointer"
                >
                  <div
                    className={`card w-full h-full rounded-3xl shadow-2xl shadow-[#B95E82]/20 transition-transform duration-700 transform-style preserve-3d ${
                      isFlipped ? "is-flipped" : ""
                    }`}
                  >
                    {/* Front */}
                    <div className="card-face card-front absolute inset-0 rounded-3xl p-8 bg-gradient-to-br from-[#B95E82]/25 to-[#F39F9F]/15 border border-[#F39F9F]/20 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                            {proj.image}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#FFECC0]">
                              {proj.title}
                            </h3>
                            <p className="text-[#FFC29B] font-medium">{proj.category}</p>
                          </div>
                        </div>

                        <p className="mt-6 text-[#FFC29B]/90 leading-relaxed">
                          {proj.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6">
                        <div className="flex gap-2 flex-wrap">
                          {proj.technologies.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full bg-[#0a0a0a]/40 border border-[#FFC29B]/30 text-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-[#FFECC0]/80">{proj.date}</div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-face card-back absolute inset-0 rounded-3xl p-8 bg-gradient-to-br from-[#F39F9F]/10 to-[#FFC29B]/10 border border-[#FFECC0]/20 flex flex-col justify-between">
                      <p className="text-[#0a0a0a] bg-white/10 p-4 rounded-lg leading-relaxed">
                        {proj.fullDesc}
                      </p>
                      <div className="flex items-center justify-between mt-6">
                        <div className="text-sm text-[#0a0a0a]/70">Status: {proj.status}</div>
                        <div className="flex items-center gap-3">
                          {proj.links?.demo && (
                            <a
                              href={proj.links.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a0a0a]/10 border border-[#0a0a0a]/20 text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" /> Demo
                            </a>
                          )}
                          {proj.links?.github && (
                            <a
                              href={proj.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a0a0a]/10 border border-[#0a0a0a]/20 text-sm font-medium"
                            >
                              <Github className="w-4 h-4" /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 max-w-3xl w-full bg-gradient-to-br from-[#B95E82]/20 to-[#F39F9F]/12 border border-[#FFECC0]/20 rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-md bg-[#FFECC0]/10"
            >
              <X className="w-5 h-5 text-[#FFECC0]" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-[#FFC29B] font-medium mb-4">{selectedProject.category}</p>

            <p className="text-[#FFECC0]/90 leading-relaxed">
              {selectedProject.fullDesc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-[#0a0a0a]/30 border border-[#FFC29B]/20 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              {selectedProject.links?.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#B95E82] to-[#F39F9F] text-white font-semibold"
                >
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              )}
              {selectedProject.links?.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B95E82]/20 border border-[#F39F9F]/30 text-[#FFECC0]"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .perspective {
          perspective: 1400px;
        }
        .card {
          height: 100%;
          transform-style: preserve-3d;
        }
        .card-face {
          backface-visibility: hidden;
        }
        .card-front {
          transform: rotateY(0deg);
        }
        .card-back {
          transform: rotateY(180deg);
        }
        .is-flipped {
          transform: rotateY(180deg);
        }
        .reveal {
          transform: translateY(20px);
          opacity: 0;
        }
        .reveal.in {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
