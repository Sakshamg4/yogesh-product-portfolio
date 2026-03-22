"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import { Zap, Users, Target, BarChart2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const iconMap = [Zap, Users, Target, BarChart2];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Side: Bio Content */}
        <div className="flex flex-col gap-10">
          <ScrollReveal y={30}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4 block">
              Experience Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink-900 mb-8 max-w-[500px] leading-[1.1]">
              Product First. <span className="font-fraunces text-accent italic">Business</span> Driven.
            </h2>
            <div className="flex flex-col gap-6">
              {aboutData.paragraphs.map((p, index) => (
                <p
                  key={index}
                  className="text-lg sm:text-xl text-ink-500 leading-relaxed max-w-[540px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {aboutData.highlights.map((highlight, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(20, 20, 19, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-[32px] border border-borderLight bg-white flex flex-col gap-6 group hover:border-ink-700 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-bg flex items-center justify-center text-accent transition-transform duration-500 group-hover:scale-110">
                  <Icon size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-ink-900">
                    {highlight.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed text-base">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
