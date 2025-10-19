"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ExternalLink, Github, X, Sparkles } from "lucide-react";
import { JSX } from "react/jsx-runtime";

type Project = {
  id: number;
  title: string;
  company: string;
  date: string;
  image?: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  links?: { demo?: string; github?: string };
  status?: string;
};

const professionalProjects: Project[] = [
  {
    id: 1,
    title: "Customer Complaint App",
    company: "Weldy Technologies India Pvt. Ltd.",
    date: "2024",
    image: "🧾",
    shortDesc: "Flutter-based complaint management system integrated with Google Sheets.",
    fullDesc:
      "Developed a professional complaint handling app for field service engineers (FSEs). It allows complaint submission with images, real-time validation, and backend sync with Google Sheets using Apps Script. Integrated automated email notifications and reference ID generation.",
    technologies: ["Flutter", "Dart", "Google Sheets API", "Firebase", "Apps Script"],
    links: {
      github: "https://github.com/example/weldy-complaint",
    },
    status: "In Use",
  },
  {
    id: 2,
    title: "Signal Mapper",
    company: "Personal Research Project / Internship Extension",
    date: "2024",
    image: "📶",
    shortDesc: "Android app to analyze Wi-Fi and cellular signal strength with ML predictions.",
    fullDesc:
      "Built a Kotlin-based Android application to map Wi-Fi and mobile signal strengths geographically. Added an ML-powered connectivity predictor and integrated Firebase for user authentication. Developed map visualization and real-time signal updates.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit", "Google Maps API"],
    links: {
      github: "https://github.com/example/signalmapper",
    },
    status: "Completed",
  },
  {
    id: 3,
    title: "SAP Business Blueprint Implementation",
    company: "Weldy Technologies India Pvt. Ltd.",
    date: "2023",
    image: "📊",
    shortDesc: "Analyzed and documented SAP Business One blueprint across departments.",
    fullDesc:
      "Collaborated with consultants and management to prepare a comprehensive SAP Business Blueprint document covering modules like Sales, Purchase, Inventory, and Finance. Conducted process gap analysis and coordinated validation meetings with stakeholders.",
    technologies: ["SAP B1", "Business Process Mapping", "Excel", "Visio"],
    status: "Documentation Complete",
  },
  {
    id: 4,
    title: "Leister Contact Form Integration",
    company: "Leister India",
    date: "2023",
    image: "📨",
    shortDesc: "Automated contact form routing for Indian region with Excel export.",
    fullDesc:
      "Created a logic layer in Apps Script that routes form submissions from Switzerland servers to Indian endpoints. Generates Excel exports and sends SMS alerts to users automatically after successful submission.",
    technologies: ["HTML", "Apps Script", "JSON API", "Excel Export", "SMS Gateway"],
    status: "Live",
  },
];

export default function ProfessionalProjectsPage(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const revealRef = useRef<HTMLDivElement | null>(null);

  // Reveal on scroll
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
            <span className="font-semibold">Professional Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F]">
            Work Experience Projects
          </h1>
          <p className="text-[#FFC29B]/80 mt-3 max-w-2xl mx-auto">
            Professional contributions built for clients, companies, and enterprise systems.
          </p>
        </header>

        <section className="space-y-14">
          {professionalProjects.map((proj) => {
            const isFlipped = flippedIds.includes(proj.id);
            return (
              <article
                key={proj.id}
                className="reveal opacity-0 transform transition-all duration-700 ease-out will-change-transform"
              >
                <div
                  onMouseEnter={() => toggleFlip(proj.id)}
                  onMouseLeave={() => toggleFlip(proj.id)}
                  onClick={() => setSelectedProject(proj)}
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
                            <p className="text-[#FFC29B] font-medium">{proj.company}</p>
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
            <p className="text-[#FFC29B] font-medium mb-2">{selectedProject.company}</p>
            <p className="text-sm text-[#FFECC0]/80 mb-4">{selectedProject.date}</p>

            <p className="text-[#FFECC0]/90 leading-relaxed mb-4">
              {selectedProject.fullDesc}
            </p>

            <div className="flex flex-wrap gap-2">
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
