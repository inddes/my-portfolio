import { useState } from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { projects } from '../data/content';
import { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'automation', label: 'Automation' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'integration', label: 'Integration' },
  { id: 'fullstack', label: 'Full-Stack' }
];

function ProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 flex-1">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold uppercase">
            {project.category}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
          {project.shortDescription}
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-600 dark:text-emerald-400" />
            Key Impact
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {project.impact.slice(0, 4).map((impact) => (
              <div
                key={impact.metric}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3"
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {impact.value}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {impact.metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <details className="mb-6">
          <summary className="font-semibold text-slate-900 dark:text-slate-50 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            View Details
          </summary>
          <div className="mt-4 space-y-4 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                The Challenge
              </h5>
              <p className="text-slate-600 dark:text-slate-400">
                {project.problem}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                The Solution
              </h5>
              <p className="text-slate-600 dark:text-slate-400">
                {project.solution}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Key Features
              </h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, isVisible } = useIntersectionObserver();

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Real-world automation solutions delivering measurable business impact
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
