"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, Linkedin, Send, User, FileText, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

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
    <main className="bg-[#1B3C53] min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#234C6A]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#456882]/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#D2C1B6]/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D2C1B6] to-white bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-[#456882] rounded-full" />
            <div className="h-1 w-20 bg-[#234C6A] rounded-full" />
            <div className="h-1 w-20 bg-[#D2C1B6] rounded-full" />
          </div>
          <p className="text-[#D2C1B6]/80 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-[#D2C1B6]/80 leading-relaxed">
                Feel free to reach out through any of these channels or use the contact form. 
                I typically respond within 24-48 hours.
              </p>
            </div>

            {/* Email Card */}
            <a
              href="mailto:lathika@example.com"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#234C6A]/50 to-[#1B3C53]/50 border-2 border-[#456882]/40 hover:border-[#D2C1B6]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#456882]/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#456882] to-[#234C6A] group-hover:from-[#D2C1B6] group-hover:to-[#456882] transition-all duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <p className="text-[#D2C1B6] group-hover:text-white transition-colors">
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
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#234C6A]/50 to-[#1B3C53]/50 border-2 border-[#456882]/40 hover:border-[#D2C1B6]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#456882]/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#456882] to-[#234C6A] group-hover:from-[#D2C1B6] group-hover:to-[#456882] transition-all duration-300 shadow-lg">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">LinkedIn</h3>
                  <p className="text-[#D2C1B6] group-hover:text-white transition-colors">
                    linkedin.com/in/lathika
                  </p>
                </div>
              </div>
            </a>

            {/* Info Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#456882]/20 to-[#234C6A]/20 border border-[#D2C1B6]/30">
              <h3 className="text-white font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-[#D2C1B6]/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2C1B6]" />
                  Response time: 24-48 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2C1B6]" />
                  Open to freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2C1B6]" />
                  Available for collaborations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#234C6A]/50 to-[#1B3C53]/50 border-2 border-[#456882]/40 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
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
                <label htmlFor="name" className="block text-[#D2C1B6] font-medium mb-2 flex items-center gap-2">
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
                  className="w-full px-4 py-3 rounded-lg bg-[#1B3C53]/50 border-2 border-[#456882]/40 focus:border-[#D2C1B6] text-white placeholder-[#D2C1B6]/40 outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#D2C1B6] font-medium mb-2 flex items-center gap-2">
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
                  className="w-full px-4 py-3 rounded-lg bg-[#1B3C53]/50 border-2 border-[#456882]/40 focus:border-[#D2C1B6] text-white placeholder-[#D2C1B6]/40 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-[#D2C1B6] font-medium mb-2 flex items-center gap-2">
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
                  className="w-full px-4 py-3 rounded-lg bg-[#1B3C53]/50 border-2 border-[#456882]/40 focus:border-[#D2C1B6] text-white placeholder-[#D2C1B6]/40 outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-[#D2C1B6] font-medium mb-2 flex items-center gap-2">
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
                  className="w-full px-4 py-3 rounded-lg bg-[#1B3C53]/50 border-2 border-[#456882]/40 focus:border-[#D2C1B6] text-white placeholder-[#D2C1B6]/40 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#456882] to-[#234C6A] hover:from-[#D2C1B6] hover:to-[#456882] text-white font-semibold shadow-lg shadow-[#456882]/50 hover:shadow-xl hover:shadow-[#D2C1B6]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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

      <Footer />

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