import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    // Simulate send & trigger celebratory confetti
    setTimeout(() => {
      setSending(false);
      setSent(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#C49A2C', '#CE8946', '#F5F3EA']
      });

      setTimeout(() => {
        setSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] mt-2 max-w-xl">
            I'm currently open to full-stack engineering internships, AI developer roles, and high-impact software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct info & social channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email card with copy button */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#171614]/70 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-sm shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-[#171717] dark:text-[#F5F3EA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#10B981]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg">
                  Copied email address to clipboard!
                </div>
              )}
            </div>

            {/* Location card */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#171614]/70 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-sm shadow-sm flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] uppercase block">
                  Location
                </span>
                <span className="text-sm font-semibold text-[#171717] dark:text-[#F5F3EA]">
                  {personalData.location}
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#171614]/70 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-sm shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold block mb-4">
                Online Profiles & Handles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-medium text-[#2C2B27] dark:text-[#ECEAE1] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalData.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-medium text-[#2C2B27] dark:text-[#ECEAE1] transition-colors"
                >
                  <Code2 className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>Codeforces</span>
                </a>

                <a
                  href={personalData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-medium text-[#2C2B27] dark:text-[#ECEAE1] transition-colors"
                >
                  <Terminal className="w-4 h-4 text-[#CE8946]" />
                  <span>LeetCode</span>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-medium text-[#2C2B27] dark:text-[#ECEAE1] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF8] dark:from-[#171614] dark:to-[#0F0F0E] border border-[#E7E3D8] dark:border-[#34332E] shadow-sm relative">
              <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F3EA] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#66645F] dark:text-[#B7B4AA] mb-6">
                Fill out the details below, and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#66645F] dark:text-[#B7B4AA] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#1A1916] text-[#171717] dark:text-[#F5F3EA] text-sm focus:outline-none focus:border-[#C49A2C] dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#66645F] dark:text-[#B7B4AA] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aryan@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#1A1916] text-[#171717] dark:text-[#F5F3EA] text-sm focus:outline-none focus:border-[#C49A2C] dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#66645F] dark:text-[#B7B4AA] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#1A1916] text-[#171717] dark:text-[#F5F3EA] text-sm focus:outline-none focus:border-[#C49A2C] dark:focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#66645F] dark:text-[#B7B4AA] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Anup, I'd like to discuss an opportunity regarding..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#1A1916] text-[#171717] dark:text-[#F5F3EA] text-sm focus:outline-none focus:border-[#C49A2C] dark:focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                {sent && (
                  <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-medium text-[#10B981] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Message received! Thank you for reaching out, Anup will respond shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer bg-[#C49A2C] hover:bg-[#CE8946] text-white dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717] shadow-sm hover:scale-[1.01] disabled:opacity-50"
                >
                  {sending ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/60 dark:border-black/60 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
