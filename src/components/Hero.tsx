import { ArrowDown, Github, FolderGit2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { contactInfo } from '../data/content';

const specialties = [
  'Generative AI',
  'RAG',
  'Agentic AI',
  'Python',
  'APIs',
];



export function Hero() {
  const { ref, isVisible } = useIntersectionObserver();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20"
    >
      {/* Subtle background — clean, no gradients */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Availability badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" style={{ animationDuration: '2.5s' }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Generative AI &amp; AI Engineering opportunities
            </span>
          </div>

          {/* Main headline — dominant visual element */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-slate-50 mb-4">
            AI Engineer
          </h1>

          {/* Supporting technical headline */}
          <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400">
            {specialties.map((spec, index) => (
              <span key={spec} className="flex items-center gap-x-2.5">
                <span className="font-medium text-slate-600 dark:text-slate-300">{spec}</span>
                {index < specialties.length - 1 && (
                  <span className="text-blue-500 dark:text-blue-500/70 select-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Professional tagline */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
            Building reliable AI products with a production engineering mindset.
          </p>

          {/* Introduction */}
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I am a software and automation engineer with{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-300">12+ years of experience</span>{' '}
              building enterprise software solutions, API integrations, automation frameworks and reliable engineering systems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I am now focused on developing Generative AI applications, intelligent workflows and production-oriented AI solutions, combining modern AI technologies with strong software engineering principles.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-16">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-slate-50 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-semibold text-sm sm:text-base transition-colors"
            >
              <FolderGit2 size={18} />
              View AI Projects
            </button>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg font-semibold text-sm sm:text-base transition-colors"
            >
              <Github size={18} />
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
