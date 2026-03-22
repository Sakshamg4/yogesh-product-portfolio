"use client";

import { motion } from "framer-motion";
import { heroData } from "@/lib/data";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-100">
        {/* Left Side: Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={itemVariants}
            className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-accent-border bg-accent-bg"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent">
              {heroData.badge}
            </span>
          </motion.div>

          <div className="flex flex-col gap-1">
            {heroData.titleLines.map((line, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`text-[clamp(3.2rem,6.5vw,5.4rem)] font-bold tracking-[-0.045em] leading-[1.05] ${
                  index === 2 ? "font-fraunces text-accent italic" : ""
                }`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={itemVariants}
            className="max-w-[480px] text-lg sm:text-xl text-ink-500 leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-accent/10"
            >
              View Projects
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white border border-borderLight text-ink-900 rounded-full font-bold hover:bg-offWhite transition-all"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Stats & Companies */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-10"
        >
          {/* Stats Card */}
          <div className="bg-offWhite p-10 sm:p-14 rounded-[40px] border border-borderLight grid grid-cols-2 gap-y-12 gap-x-8">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-ink-900">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-ink-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Company Pills */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 ml-2">
              Trusted by leading teams
            </span>
            <div className="flex flex-wrap gap-3">
              {heroData.companies.map((company, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-cream rounded-2xl border border-borderLight text-ink-700 font-bold transition-all hover:-translate-y-1 hover:border-ink-300"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
