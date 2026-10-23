import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, MapPin, Mail, ExternalLink } from 'lucide-react';
import { personalData, projectsData, skillsData, experienceData, certificationsData, achievementsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFFFF] dark:bg-[#141412] text-[#171717] dark:text-[#F5F3EA] rounded-3xl border border-[#E7E3D8] dark:border-[#34332E] shadow-2xl overflow-hidden flex flex-col z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#1A1916]">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37]" />
                <span className="font-bold text-sm tracking-tight">
                  {personalData.name} — Curriculum Vitae
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-medium text-[#171717] dark:text-[#F5F3EA] transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] cursor-pointer"
                  aria-label="Close resume preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / ATS Resume Document */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans print:p-0">
              {/* Resume Header */}
              <div className="border-b border-[#E7E3D8] dark:border-[#34332E] pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
                    {personalData.name}
                  </h1>
                  <p className="text-sm font-semibold text-[#C49A2C] dark:text-[#D4AF37] mt-1">
                    {personalData.primaryTitle}
                  </p>
                  <p className="text-xs text-[#66645F] dark:text-[#B7B4AA] mt-1">
                    {personalData.location}
                  </p>
                </div>

                <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] space-y-1 text-left sm:text-right">
                  <div>Email: {personalData.email}</div>
                  <div>GitHub: {personalData.github.replace('https://', '')}</div>
                  <div>Codeforces: at241707</div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-bold mb-3 border-b border-[#E7E3D8] dark:border-[#34332E] pb-1">
                  Education
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#171717] dark:text-[#F5F3EA]">
                  <span>{personalData.education.institution}</span>
                  <span className="font-mono text-xs font-normal text-[#66645F] dark:text-[#B7B4AA]">
                    {personalData.education.duration}
                  </span>
                </div>
                <div className="text-xs text-[#66645F] dark:text-[#B7B4AA] italic mt-0.5">
                  {personalData.education.degree}
                </div>
                <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] mt-2">
                  <strong>Coursework:</strong> {personalData.education.coursework.join(', ')}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-bold mb-3 border-b border-[#E7E3D8] dark:border-[#34332E] pb-1">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 text-xs text-[#33312E] dark:text-[#DCD9CE]">
                  <div>
                    <strong>Languages:</strong> {skillsData.languages.skills.join(', ')}
                  </div>
                  <div>
                    <strong>AI & Agent Systems:</strong> {skillsData.ai.skills.join(', ')}
                  </div>
                  <div>
                    <strong>Full-Stack & Backend:</strong> {skillsData.backend.skills.join(', ')}, {skillsData.frontend.skills.join(', ')}
                  </div>
                  <div>
                    <strong>Databases & Tools:</strong> {skillsData.databases.skills.join(', ')}, {skillsData.tools.skills.join(', ')}
                  </div>
                  <div>
                    <strong>Core CS:</strong> {skillsData.core.skills.join(', ')}
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-bold mb-4 border-b border-[#E7E3D8] dark:border-[#34332E] pb-1">
                  Featured Projects
                </h2>
                <div className="space-y-5">
                  {projectsData.map((project) => (
                    <div key={project.id} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#171717] dark:text-[#F5F3EA]">
                        <span>
                          {project.name} – <span className="font-normal italic text-xs">{project.subtitle}</span>
                        </span>
                        <span className="font-mono text-[11px] font-normal text-[#C49A2C] dark:text-[#D4AF37]">
                          {project.technologies.slice(0, 4).join(', ')}
                        </span>
                      </div>
                      <p className="text-xs text-[#55524D] dark:text-[#BFBCB0] leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="list-disc list-inside text-xs text-[#44423E] dark:text-[#A7A499] space-y-1 pl-1">
                        {project.keyFeatures.slice(0, 3).map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership / Experience */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-bold mb-3 border-b border-[#E7E3D8] dark:border-[#34332E] pb-1">
                  Experience & Leadership
                </h2>
                {experienceData.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#171717] dark:text-[#F5F3EA]">
                      <span>{exp.role} — {exp.organization}</span>
                      <span className="font-mono text-xs font-normal text-[#66645F] dark:text-[#B7B4AA]">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-[#44423E] dark:text-[#A7A499] space-y-1 mt-1 pl-1">
                      {exp.achievements.slice(0, 3).map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Certifications & Achievements */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-bold mb-3 border-b border-[#E7E3D8] dark:border-[#34332E] pb-1">
                  Certifications & Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#44423E] dark:text-[#A7A499]">
                  <div>• <strong>AWS Certified Cloud Practitioner</strong> (Amazon Web Services)</div>
                  <div>• <strong>Palo Alto Networks Certified Network Security</strong></div>
                  <div>• <strong>300+ Solved LeetCode DSA</strong> (C++ Algorithms)</div>
                  <div>• <strong>Infosys HackWithInfy</strong> — Qualified for Round 2</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
