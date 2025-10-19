"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Trophy, Calendar, Users, Award, ExternalLink, Github, X, Sparkles } from "lucide-react";

const competitionProjects = [
  {
    id: 1,
    title: "AI Healthcare Assistant",
    event: "Global Hackathon 2024",
    position: "1st Place",
    date: "March 2024",
    image: "🏥",
    shortDesc: "AI-powered healthcare diagnosis and recommendation system",
    fullDesc: "Developed an innovative AI-powered healthcare assistant that uses machine learning to provide preliminary diagnoses and health recommendations. The system analyzes symptoms, medical history, and vital signs to suggest potential conditions and recommend appropriate actions.",
    technologies: ["Python", "TensorFlow", "React", "Flask", "MongoDB"],
    achievements: [
      "Won 1st place among 500+ teams",
      "Achieved 94% accuracy in diagnosis predictions",
      "Secured $50,000 in funding",
      "Featured in Tech Innovation Magazine"
    ],
    team: "4 members",
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 2,
    title: "EcoTrack - Carbon Footprint Tracker",
    event: "Climate Tech Challenge 2024",
    position: "Winner",
    date: "January 2024",
    image: "🌍",
    shortDesc: "Real-time carbon footprint tracking and reduction platform",
    fullDesc: "Created a comprehensive platform that tracks individual and corporate carbon footprints in real-time. Users can monitor their environmental impact, receive personalized reduction suggestions, and participate in community challenges to promote sustainable living.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    achievements: [
      "First place in sustainability category",
      "10,000+ beta users within first month",
      "Partnership with 5 major corporations",
      "Reduced average user carbon footprint by 23%"
    ],
    team: "5 members",
    links: {
      demo: "https://ecotrack.example.com",
      github: "https://github.com/ecotrack"
    }
  },
  {
    id: 3,
    title: "CodeCollab - Real-time IDE",
    event: "DevFest Hackathon 2023",
    position: "2nd Place",
    date: "November 2023",
    image: "💻",
    shortDesc: "Collaborative coding platform with real-time editing",
    fullDesc: "Built a powerful real-time collaborative IDE that allows multiple developers to code together seamlessly. Features include live cursor tracking, integrated video chat, code review tools, and AI-powered code suggestions. Perfect for remote pair programming and technical interviews.",
    technologies: ["React", "WebRTC", "Socket.io", "Monaco Editor", "Docker"],
    achievements: [
      "Second place among 300 participants",
      "5,000+ active users",
      "Featured on Product Hunt - #3 of the day",
      "Adopted by 10+ coding bootcamps"
    ],
    team: "3 members",
    links: {
      demo: "https://codecollab.example.com",
      github: "https://github.com/codecollab"
    }
  },
  {
    id: 4,
    title: "SmartCity Dashboard",
    event: "Urban Innovation Summit 2023",
    position: "Grand Prize",
    date: "September 2023",
    image: "🏙️",
    shortDesc: "IoT-based city management and monitoring system",
    fullDesc: "Designed an comprehensive IoT-based dashboard for smart city management. The platform integrates data from traffic sensors, weather stations, public transportation, and emergency services to provide real-time insights and predictive analytics for city planners and administrators.",
    technologies: ["Vue.js", "Python", "InfluxDB", "Grafana", "MQTT"],
    achievements: [
      "Grand prize winner",
      "Implemented in 2 pilot cities",
      "$100,000 grant awarded",
      "Improved traffic flow efficiency by 35%"
    ],
    team: "6 members",
    links: {
      demo: "https://smartcity.example.com",
      github: "https://github.com/smartcity"
    }
  },
  {
    id: 5,
    title: "MindfulAI - Mental Health Companion",
    event: "Health Tech Innovation 2023",
    position: "Winner",
    date: "July 2023",
    image: "🧠",
    shortDesc: "AI chatbot for mental health support and wellness",
    fullDesc: "Developed an empathetic AI-powered mental health companion that provides 24/7 support, mood tracking, and personalized wellness recommendations. Uses natural language processing to detect emotional states and provide appropriate interventions while maintaining user privacy and security.",
    technologies: ["Python", "GPT-4", "React Native", "Firebase", "TensorFlow"],
    achievements: [
      "First place in healthcare category",
      "50,000+ downloads in first 3 months",
      "4.8/5 star rating",
      "Partnership with mental health organizations"
    ],
    team: "4 members",
    links: {
      demo: "https://mindfulai.example.com",
      github: "https://github.com/mindfulai"
    }
  }
];

export default function CompetitionsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleCardFlip = (projectId: number) => {
    setFlippedCards((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="pt-28"></div>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#B95E82]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#FFC29B]/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FFECC0]/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/30 backdrop-blur-sm">
              <Trophy className="w-5 h-5 text-[#FFECC0] animate-pulse" />
              <span className="text-[#FFECC0] font-semibold">Competition Projects</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
              Award-Winning Projects
            </span>
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
          </div>
          <p className="text-[#FFC29B]/80 text-lg max-w-2xl mx-auto">
            Explore my competition-winning projects from hackathons and coding challenges
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {competitionProjects.map((project, index) => {
            const isFlipped = flippedCards.includes(project.id);
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div
                  className="perspective-1000 cursor-pointer"
                  onMouseEnter={() => handleCardFlip(project.id)}
                  onMouseLeave={() => handleCardFlip(project.id)}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`relative w-full h-[400px] transition-transform duration-700 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-[#B95E82]/40 transition-shadow">
                      <div className="flex items-start gap-6 h-full">
                        {/* Icon */}
                        <div className="text-8xl">{project.image}</div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-3xl font-bold text-[#FFECC0] mb-2">
                                {project.title}
                              </h3>
                              <p className="text-[#FFC29B] font-semibold">
                                {project.event}
                              </p>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FFECC0]/20 to-[#FFC29B]/20 border border-[#FFECC0]/40">
                              <Award className="w-6 h-6 text-[#FFECC0]" />
                            </div>
                          </div>

                          <p className="text-[#FFC29B]/80 leading-relaxed mb-6">
                            {project.shortDesc}
                          </p>

                          <div className="flex flex-wrap gap-3 mb-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B95E82]/30 border border-[#F39F9F]/50">
                              <Trophy className="w-4 h-4 text-[#FFECC0]" />
                              <span className="text-[#FFECC0] text-sm font-medium">
                                {project.position}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F39F9F]/30 border border-[#FFC29B]/50">
                              <Calendar className="w-4 h-4 text-[#FFECC0]" />
                              <span className="text-[#FFECC0] text-sm font-medium">
                                {project.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFC29B]/30 border border-[#FFECC0]/50">
                              <Users className="w-4 h-4 text-[#B95E82]" />
                              <span className="text-[#B95E82] text-sm font-medium">
                                {project.team}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#FFC29B]/40 to-[#FFECC0]/40 text-[#B95E82] text-sm border border-[#FFC29B]/50 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#B95E82]/30 to-[#F39F9F]/30 text-[#FFECC0] text-sm border border-[#F39F9F]/50 font-medium">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          <p className="text-[#FFC29B]/60 text-sm mt-4">
                            Hover to flip • Click for details
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#FFC29B]/30 to-[#FFECC0]/30 border-2 border-[#FFC29B]/40 backdrop-blur-sm p-8">
                      <h4 className="text-2xl font-bold text-[#FFECC0] mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {project.achievements.slice(0, 3).map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[#FFC29B]/90"
                          >
                            <Sparkles className="w-5 h-5 text-[#B95E82] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#B95E82] to-[#F39F9F] text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-[#0a0a0a]/96 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-gradient-to-br from-[#B95E82]/40 to-[#F39F9F]/40 border-2 border-[#FFECC0]/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl animate-scale-in shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-b from-[#B95E82]/90 to-[#F39F9F]/90 p-8 border-b border-[#FFECC0]/30 backdrop-blur-xl z-10">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-xl bg-[#FFECC0]/20 hover:bg-[#FFECC0]/40 border-2 border-[#FFECC0]/40 hover:border-[#FFECC0] transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-[#FFECC0] group-hover:text-white transition-colors" />
              </button>

              <div className="flex items-start gap-6">
                <div className="text-7xl">{selectedProject.image}</div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[#FFECC0] text-xl mb-4">
                    {selectedProject.event}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-lg bg-black/30 border border-[#FFECC0]/40">
                      <span className="text-white font-semibold">
                        🏆 {selectedProject.position}
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-black/30 border border-[#FFECC0]/40">
                      <span className="text-white font-semibold">
                        📅 {selectedProject.date}
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-black/30 border border-[#FFECC0]/40">
                      <span className="text-white font-semibold">
                        👥 {selectedProject.team}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-2xl mb-4">
                  Project Description
                </h3>
                <p className="text-[#FFC29B]/90 leading-relaxed text-lg">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-2xl mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {selectedProject.achievements.map((achievement: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[#FFC29B]/90 bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 p-4 rounded-xl border border-[#F39F9F]/40"
                    >
                      <Award className="w-5 h-5 text-[#FFECC0] flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-2xl mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FFC29B]/60 to-[#FFECC0]/60 text-[#B95E82] border-2 border-[#FFC29B]/60 font-semibold hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#B95E82] to-[#F39F9F] text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] text-[#B95E82] font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
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
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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