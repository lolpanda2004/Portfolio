"use client";
import { useState } from "react";
import { Mail, Linkedin, Send, User, FileText, MessageSquare, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    description: ""
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          description: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#B95E82]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#FFC29B]/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FFECC0]/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#B95E82]/20 to-[#F39F9F]/20 border border-[#FFECC0]/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#FFECC0] animate-pulse" />
              <span className="text-[#FFECC0] font-semibold">Let's Connect</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FFECC0] via-[#FFC29B] to-[#F39F9F] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#B95E82] to-[#F39F9F] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#F39F9F] to-[#FFC29B] rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC29B] to-[#FFECC0] rounded-full" />
          </div>
          <p className="text-[#FFC29B]/80 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#FFECC0] mb-4">Let's Connect</h2>
              <p className="text-[#FFC29B]/80 leading-relaxed">
                Feel free to reach out through any of these channels or use the contact form. 
                I typically respond within 24-48 hours.
              </p>
            </div>

            {/* Email Card */}
            <a
              href="mailto:lathika@example.com"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 hover:border-[#FFECC0]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#B95E82]/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#B95E82] to-[#F39F9F] group-hover:from-[#FFECC0] group-hover:to-[#FFC29B] transition-all duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-white group-hover:text-[#B95E82] transition-colors" />
                </div>
                <div>
                  <h3 className="text-[#FFECC0] font-semibold text-lg mb-1">Email</h3>
                  <p className="text-[#FFC29B] group-hover:text-[#FFECC0] transition-colors">
                    lathika@example.com
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/lathika"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#F39F9F]/30 to-[#FFC29B]/30 border-2 border-[#FFC29B]/40 hover:border-[#FFECC0]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#F39F9F]/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#F39F9F] to-[#FFC29B] group-hover:from-[#FFECC0] group-hover:to-[#FFC29B] transition-all duration-300 shadow-lg">
                  <Linkedin className="w-7 h-7 text-white group-hover:text-[#F39F9F] transition-colors" />
                </div>
                <div>
                  <h3 className="text-[#FFECC0] font-semibold text-lg mb-1">LinkedIn</h3>
                  <p className="text-[#FFC29B] group-hover:text-[#FFECC0] transition-colors">
                    linkedin.com/in/lathika
                  </p>
                </div>
              </div>
            </a>

            {/* Info Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFC29B]/20 to-[#FFECC0]/20 border border-[#FFECC0]/30">
              <h3 className="text-[#FFECC0] font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-[#FFC29B]/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B95E82]" />
                  Response time: 24-48 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F39F9F]" />
                  Open to freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC29B]" />
                  Available for collaborations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#B95E82]/30 to-[#F39F9F]/30 border-2 border-[#F39F9F]/40 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#FFECC0] mb-6">Send a Message</h2>
            
            {formStatus.type && (
              <div className={`mb-6 p-4 rounded-xl border-2 ${
                formStatus.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/50 text-green-300' 
                  : 'bg-red-500/10 border-red-500/50 text-red-300'
              }`}>
                <div className="flex items-center gap-3">
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#FFECC0] font-medium mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border-2 border-[#F39F9F]/40 focus:border-[#FFECC0] text-[#FFECC0] placeholder-[#FFC29B]/40 outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#FFECC0] font-medium mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border-2 border-[#F39F9F]/40 focus:border-[#FFECC0] text-[#FFECC0] placeholder-[#FFC29B]/40 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-[#FFECC0] font-medium mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border-2 border-[#F39F9F]/40 focus:border-[#FFECC0] text-[#FFECC0] placeholder-[#FFC29B]/40 outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-[#FFECC0] font-medium mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border-2 border-[#F39F9F]/40 focus:border-[#FFECC0] text-[#FFECC0] placeholder-[#FFC29B]/40 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#B95E82] to-[#F39F9F] hover:from-[#F39F9F] hover:to-[#FFC29B] text-white font-semibold shadow-lg shadow-[#B95E82]/50 hover:shadow-xl hover:shadow-[#F39F9F]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}