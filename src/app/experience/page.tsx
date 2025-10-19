"use client";
import { useState } from "react";
import { Monitor, PenTool, X, MapPin, Calendar, Award, Briefcase, Sparkles } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const techInternships = [
  {
    id: 1,
    company: "TechVision Inc.",
    role: "Full Stack Development Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "San Francisco, CA",
    shortDesc: "Developed scalable web applications using React and Node.js",
    description: "Worked on building and maintaining enterprise-level web applications using modern tech stack. Collaborated with cross-functional teams including designers, product managers, and senior developers to implement new features. Focused on writing clean, maintainable code and following best practices for software development.",
    achievements: [
      "Built a real-time dashboard that increased user engagement by 40%",
      "Optimized database queries, reducing load times by 60%",
      "Implemented automated testing suite, improving code coverage to 85%",
      "Mentored 2 junior developers in React best practices"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"]
  },
  {
    id: 2,
    company: "DataFlow Systems",
    role: "Backend Engineering Intern",
    duration: "Jan 2024 - May 2024",
    location: "Austin, TX",
    shortDesc: "Focused on backend architecture and API development",
    description: "Specialized in backend development and microservices architecture. Worked extensively with Python and Django to build robust APIs. Implemented caching strategies and optimized database queries for high-traffic applications. Participated in system design discussions and contributed to architectural decisions.",
    achievements: [
      "Designed RESTful APIs handling 10K+ requests per minute",
      "Reduced server response time by 45% through caching strategies",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Created comprehensive API documentation used by frontend teams"
    ],
    technologies: ["Python", "Django", "Redis", "MongoDB", "Kubernetes", "Jenkins"]
  },
  {
    id: 3,
    company: "CloudNine Solutions",
    role: "Frontend Development Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Seattle, WA",
    shortDesc: "Created responsive and accessible user interfaces",
    description: "Developed modern, responsive user interfaces for enterprise applications. Worked closely with UX designers to implement pixel-perfect designs. Focused on web accessibility and performance optimization. Built reusable component library that improved development efficiency across multiple projects.",
    achievements: [
      "Developed component library used across 5+ projects",
      "Improved website accessibility score from 72% to 98%",
      "Reduced bundle size by 35% through code optimization",
      "Implemented lazy loading improving initial page load by 50%"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Storybook"]
  },
  {
    id: 4,
    company: "InnovateLab",
    role: "Software Engineering Intern",
    duration: "Jan 2023 - May 2023",
    location: "Boston, MA",
    shortDesc: "Full-stack development of SaaS platform",
    description: "Contributed to the development of a comprehensive SaaS platform serving thousands of users. Worked on both frontend and backend features. Participated in agile ceremonies including sprint planning, daily standups, and retrospectives. Engaged in code reviews and pair programming sessions with senior engineers.",
    achievements: [
      "Implemented authentication system supporting 50K+ users",
      "Created admin dashboard with advanced analytics features",
      "Fixed 100+ bugs and improved overall system stability",
      "Integrated payment gateway processing $1M+ in transactions"
    ],
    technologies: ["Vue.js", "Express", "MySQL", "GraphQL", "Jest", "Stripe"]
  }
];

const creativeInternships = [
  {
    id: 1,
    company: "Creative Studio Pro",
    role: "UI/UX Design Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "New York, NY",
    shortDesc: "Designed user-centered interfaces for mobile and web",
    description: "Led design initiatives for multiple client projects, focusing on user research and creating intuitive interfaces. Conducted usability testing sessions and gathered feedback to iterate on designs. Created comprehensive design systems that ensured consistency across different products and platforms.",
    achievements: [
      "Designed 20+ user interfaces for various client projects",
      "Created comprehensive design system adopted company-wide",
      "Improved user satisfaction scores by 35% through redesigns",
      "Conducted 15+ user research sessions informing design decisions"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Protopie", "Miro"]
  },
  {
    id: 2,
    company: "BrandCraft Agency",
    role: "Content Design Intern",
    duration: "Jan 2024 - May 2024",
    location: "Los Angeles, CA",
    shortDesc: "Developed engaging content strategies and visual storytelling",
    description: "Crafted compelling visual and written content for diverse brand campaigns. Collaborated with marketing teams to develop content calendars and campaign strategies. Created engaging social media content that resonated with target audiences and drove meaningful engagement metrics.",
    achievements: [
      "Created content for 15+ brand campaigns reaching 2M+ users",
      "Designed social media graphics with 50% higher engagement",
      "Developed brand guidelines for 5 major clients",
      "Produced video content generating 500K+ views"
    ],
    technologies: ["Canva", "Photoshop", "InDesign", "After Effects", "Premiere Pro", "Final Cut"]
  },
  {
    id: 3,
    company: "PixelPerfect Studios",
    role: "Graphic Design Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Portland, OR",
    shortDesc: "Created visual assets for digital and print media",
    description: "Produced high-quality visual designs for both digital and print mediums. Worked with creative directors on branding projects for major clients. Developed unique visual identities that effectively communicated brand messages. Managed multiple projects simultaneously while meeting tight deadlines.",
    achievements: [
      "Designed 50+ marketing materials and brand assets",
      "Won internal design competition with innovative poster series",
      "Contributed to rebranding project for Fortune 500 client",
      "Created packaging design featured in national retail stores"
    ],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Procreate", "Cinema 4D", "Blender"]
  },
  {
    id: 4,
    company: "Story & Motion",
    role: "Creative Writing Intern",
    duration: "Jan 2023 - May 2023",
    location: "Chicago, IL",
    shortDesc: "Crafted compelling narratives for brand stories",
    description: "Specialized in creating engaging written content for various marketing channels. Developed content strategies that aligned with brand voice and business objectives. Wrote blog posts, email campaigns, and social media copy that drove engagement and conversions. Analyzed content performance metrics to optimize future content.",
    achievements: [
      "Wrote 30+ articles generating 100K+ views",
      "Created email campaigns with 28% open rate (industry avg: 18%)",
      "Developed storytelling framework adopted across departments",
      "Ghostwrote thought leadership pieces for C-suite executives"
    ],
    technologies: ["WordPress", "Grammarly", "Hemingway", "Google Analytics", "Mailchimp", "HubSpot"]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"tech" | "creative">("tech");
  const [selectedIntern, setSelectedIntern] = useState<any>(null);

  const internships = activeTab === "tech" ? techInternships : creativeInternships;

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen relative overflow-hidden">
      <Navbar/>
      <div className="pt-28"></div> 
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#B95E82]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#FFC29B]/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#F39F9F]/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#FFECC0] animate-pulse" />
              <span className="text-[#FFECC0] font-semibold">My Journey</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
              My Experience
            </span>
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
          </div>
          <p className="text-[#FFC29B]/80 text-lg">
            A journey through my professional and creative endeavors
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex rounded-2xl bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border-2 border-[#F39F9F]/30 p-2 backdrop-blur-md shadow-2xl">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "tech"
                  ? "bg-gradient-to-r from-[#B95E82] to-[#F39F9F] text-white shadow-xl shadow-[#B95E82]/60 scale-105"
                  : "text-[#FFECC0] hover:text-white hover:bg-[#B95E82]/20"
              }`}
            >
              <Monitor className="w-6 h-6" />
              <span>Tech</span>
            </button>
            <button
              onClick={() => setActiveTab("creative")}
              className={`flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "creative"
                  ? "bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] text-[#B95E82] shadow-xl shadow-[#FFC29B]/60 scale-105"
                  : "text-[#FFECC0] hover:text-white hover:bg-[#FFC29B]/20"
              }`}
            >
              <PenTool className="w-6 h-6" />
              <span>Creative</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#F39F9F]/60 to-transparent hidden md:block" />

          <div className="space-y-20">
            {internships.map((intern, index) => (
              <div
                key={intern.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B95E82] to-[#F39F9F] border-4 border-[#0a0a0a] shadow-lg shadow-[#B95E82]/50 animate-pulse" />
                  <div className="absolute w-12 h-12 rounded-full bg-[#F39F9F]/20 animate-ping" />
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    onClick={() => setSelectedIntern(intern)}
                    className="group p-8 rounded-2xl bg-gradient-to-br from-[#B95E82]/20 to-[#F39F9F]/20 border-2 border-[#F39F9F]/40 hover:border-[#FFECC0]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B95E82]/40 hover:-translate-y-3 cursor-pointer backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#B95E82]/50 to-[#F39F9F]/50 group-hover:from-[#FFECC0]/50 group-hover:to-[#FFC29B]/50 transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-[#FFECC0] group-hover:text-[#B95E82] transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FFECC0] mb-2 group-hover:text-white transition-colors">
                          {intern.role}
                        </h3>
                        <p className="text-[#FFC29B] font-semibold text-lg">
                          {intern.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 text-[#FFECC0]/90 bg-[#B95E82]/30 px-4 py-2 rounded-lg border border-[#F39F9F]/50">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{intern.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#FFECC0]/90 bg-[#F39F9F]/30 px-4 py-2 rounded-lg border border-[#FFC29B]/50">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{intern.location}</span>
                      </div>
                    </div>

                    <p className="text-[#FFC29B]/85 leading-relaxed mb-5">
                      {intern.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {intern.technologies.slice(0, 3).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFC29B]/40 to-[#FFECC0]/40 text-[#B95E82] text-sm border border-[#FFC29B]/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {intern.technologies.length > 3 && (
                        <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#B95E82]/30 to-[#F39F9F]/30 text-[#FFECC0] text-sm border border-[#F39F9F]/50 font-medium">
                          +{intern.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-6 text-[#FFC29B]/60 text-sm font-medium flex items-center gap-2 group-hover:text-[#FFECC0] transition-colors">
                      <span>Click to view details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedIntern && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-[#0a0a0a]/96 backdrop-blur-xl"
            onClick={() => setSelectedIntern(null)}
          />
          <div className="relative bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#FFECC0]/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl animate-scale-in shadow-2xl shadow-[#B95E82]/50">
            <div className="sticky top-0 bg-gradient-to-b from-[#B95E82]/90 to-[#F39F9F]/90 p-8 border-b border-[#FFECC0]/30 backdrop-blur-xl z-10">
              <button
                onClick={() => setSelectedIntern(null)}
                className="absolute top-6 right-6 p-3 rounded-xl bg-[#FFECC0]/20 hover:bg-[#FFECC0]/40 border-2 border-[#FFECC0]/40 hover:border-[#FFECC0] transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-[#FFECC0] group-hover:text-white transition-colors" />
              </button>

              <h2 className="text-4xl font-bold text-white mb-3 pr-16">
                {selectedIntern.role}
              </h2>
              <p className="text-[#FFECC0] font-bold text-2xl mb-6">
                {selectedIntern.company}
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-white bg-black/30 px-5 py-2.5 rounded-lg border border-[#FFECC0]/40">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{selectedIntern.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-black/30 px-5 py-2.5 rounded-lg border border-[#FFECC0]/40">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">{selectedIntern.location}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-xl mb-4">Description</h3>
                <p className="text-[#FFC29B]/90 leading-relaxed text-lg">
                  {selectedIntern.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-[#FFECC0] font-bold text-2xl mb-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#FFECC0] to-[#FFC29B]">
                    <Award className="w-6 h-6 text-[#B95E82]" />
                  </div>
                  Key Achievements
                </h3>
                <ul className="space-y-4">
                  {selectedIntern.achievements.map((achievement: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[#FFC29B]/90 bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 p-5 rounded-xl border border-[#F39F9F]/40 hover:border-[#FFECC0]/50 transition-all duration-300"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFECC0] to-[#FFC29B] mt-2 flex-shrink-0" />
                      <span className="leading-relaxed text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#FFECC0] font-bold text-2xl mb-5">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedIntern.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FFC29B]/60 to-[#FFECC0]/60 text-[#B95E82] border-2 border-[#FFC29B]/60 font-semibold text-base hover:border-[#F39F9F]/70 hover:shadow-lg hover:shadow-[#FFC29B]/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
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
      `}</style>
      <Footer />
    </main>
  );
}