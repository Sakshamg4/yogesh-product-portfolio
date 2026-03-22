"use client";

import { motion } from "framer-motion";
import { educationData, certsData } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-dark-bg text-dark-text overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Degrees Column */}
        <div className="flex flex-col gap-14">
          <ScrollReveal y={30}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                <GraduationCap size={20} />
              </div>
              <h2 className="font-bold uppercase font-mono tracking-widest text-sm text-white">
                Academic Background
              </h2>
            </div>
            <h3 className="text-5xl font-bold tracking-tight text-white mb-12 leading-[1.1]">
              Foundation of <span className="font-fraunces italic font-bold">Knowledge</span>.
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-8 md:p-10 rounded-[40px] border border-dark-border bg-dark-card hover:border-dark-muted/40 transition-colors group flex flex-col gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-dark-muted group-hover:text-accent duration-300">
                  {edu.year}
                </span>
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-accent duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-dark-muted leading-relaxed italic">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="flex flex-col gap-14">
          <ScrollReveal y={30}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                <Award size={20} />
              </div>
              <h2 className="font-bold uppercase font-mono tracking-widest text-sm text-white">
                Professional Certs
              </h2>
            </div>
            <h3 className="text-5xl font-bold tracking-tight text-white mb-12 leading-[1.1]">
              Strategic <span className="font-fraunces italic font-bold">Growth</span>.
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {certsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="p-8 md:p-10 rounded-[40px] border border-dark-border bg-dark-card hover:border-dark-muted/40 transition-colors group flex items-start gap-8"
              >
                <div className="text-5xl opacity-40 group-hover:opacity-100 group-hover:scale-110 duration-500 transition-all pt-1">
                  {cert.icon}
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-accent duration-300">
                    {cert.name}
                    </h4>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dark-muted bg-dark-bg px-4 py-2 border border-dark-border rounded-lg group-hover:border-accent duration-300 w-fit">
                    {cert.org}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
