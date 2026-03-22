"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Mail, Phone, Linkedin, MoveUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const contacts = [
  {
    name: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    name: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    name: "LinkedIn",
    value: "Yogesh Gupta",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-offWhite overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-20">
        <ScrollReveal y={40} width="100%">
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="px-6 py-2 rounded-full border border-accent/20 bg-accent/5 font-mono text-xs uppercase tracking-widest text-accent font-bold"
            >
              Get in Touch
            </motion.div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink-900 leading-[1.05] max-w-[1000px]">
              Building / <span className="font-fraunces text-accent italic">tomorrow</span> / together.
            </h2>
            <p className="max-w-[600px] text-xl md:text-2xl text-ink-500 leading-relaxed font-medium">
              Open for strategic product roles, leadership opportunities, and complex digital transformation projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-4xl">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.name === "LinkedIn" ? "_blank" : undefined}
                rel={contact.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-8 md:p-10 rounded-[40px] bg-white border border-borderLight flex flex-col items-center gap-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 min-w-[300px] flex-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-offWhite flex items-center justify-center text-ink-900 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <Icon size={28} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-300 group-hover:text-accent font-bold transition-colors">
                    {contact.name}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink-900 group-hover:translate-x-1 duration-300 transition-transform flex items-center gap-2">
                    {contact.value}
                    <MoveUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 duration-300 transition-all text-accent" />
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
