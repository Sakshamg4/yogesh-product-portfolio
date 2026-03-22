import { siteConfig } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-white border-t border-borderLight text-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold tracking-tight text-ink-900">
            {siteConfig.name}
          </span>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-ink-300">
            {siteConfig.role}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <a
            href="mailto:yogeshgpt036@gmail.com"
            className="text-sm font-semibold text-ink-500 hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-gupta-b3161737/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink-500 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-mono text-ink-300 tracking-widest">
            © {currentYear} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-ink-300/50 uppercase tracking-[0.3em] font-bold mt-4">
            Designed for Impact.
          </p>
        </div>
      </div>
    </footer>
  );
};
