import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { contactInfo } from '../data/content';

const techStack = [
  'n8n',
  'Make',
  'Docker',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AI APIs'
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />

      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(15,23,42,0.8),rgba(15,23,42,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              AI Automation
            </span>
            <br />
            <span className="text-slate-900 dark:text-slate-50">
              That Drives Results
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            I build intelligent automation systems that save time, reduce errors,
            and scale operations through workflow orchestration and AI integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 border-2 border-slate-300 dark:border-slate-600 rounded-lg font-semibold text-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-md"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-md"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('skills');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
