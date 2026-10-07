import { useState } from 'react';
import {
  ExternalLink,
  Github,
  TrendingUp,
  FileText,
  Layers,
  AlertTriangle,
  Wrench,
  ShieldCheck,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { projects } from '../data/content';
import { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'automation', label: 'Automation' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'integration', label: 'Integration' },
  { id: 'fullstack', label: 'Full-Stack' },
];

const flagshipCapabilities = [
  'LLM Integration',
  'Prompt Engineering',
  'Structured Outputs',
  'AI Evaluation',
  'API Integration',
];

const flagshipActions = [
  { label: 'Live Demo', icon: ExternalLink, href: '#', available: false },
  { label: 'GitHub', icon: Github, href: '#', available: false },
  { label: 'Architecture', icon: Layers, href: '#', available: false },
  { label: 'Technical Case Study', icon: FileText, href: '#', available: false },
];

const upcomingProjects = [
  {
    title: 'Enterprise RAG Knowledge Assistant',
    subtitle: 'Retrieval-augmented generation over internal knowledge bases',
    description:
      'A RAG system that grounds LLM responses in enterprise documentation, with chunking strategies, hybrid search, and citation tracking.',
  },
  {
    title: 'Agentic AI Engineering Assistant',
    subtitle: 'Multi-step reasoning agent for engineering workflows',
    description:
      'An AI agent that decomposes engineering tasks into steps, uses tools, and produces reviewable outputs with transparent reasoning traces.',
  },
];

function FlagshipProject() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-blue-800/60 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500" />

      {/* Flagship badge */}
      <div className="absolute top-6 right-6 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wide shadow-lg">
          <TrendingUp size={14} />
          Flagship
        </span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        {/* Title block */}
        <div className="mb-6 pr-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-2">
            TEST COPILOT
          </h3>
          <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            AI-Powered Software Testing Assistant
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            An AI application that converts software requirements into structured
            testing assets, helping engineers accelerate test design while
            maintaining human review and engineering judgement.
          </p>
        </div>

        {/* Capability tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {flagshipCapabilities.map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              {cap}
            </span>
          ))}
        </div>

        {/* Three compact insight areas */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                <AlertTriangle size={16} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-50">
                Problem
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Requirement analysis and test design are repetitive, time-consuming
              and inconsistent across engineering teams.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Wrench size={16} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-50">
                Engineering Approach
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Structured prompt orchestration transforms requirements into
              consistent testing recommendations while keeping the workflow
              modular and extensible.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck size={16} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-50">
                Production Thinking
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Designed with future considerations for evaluation, guardrails,
              observability, model abstraction, authentication and scalable
              deployment.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {flagshipActions.map((action) => {
            const Icon = action.icon;
            return (
              <span
                key={action.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium border border-slate-200 dark:border-slate-700 cursor-not-allowed"
                title="Link will be available soon"
              >
                <Icon size={16} />
                {action.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function UpcomingProjectCard({
  title,
  subtitle,
  description,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`relative bg-slate-50 dark:bg-slate-800/40 rounded-xl p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wide">
          <Clock size={12} />
          In Development
        </span>
      </div>

      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
        {title}
      </h4>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
        {subtitle}
      </p>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500 font-medium">
        <ArrowUpRight size={16} />
        Coming soon
      </div>
    </div>
  );
}

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
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Featured AI Engineering Projects
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            AI products engineered with a production mindset -- structured prompt
            orchestration, model integration, and thinking designed for scale.
          </p>
        </div>

        {/* Flagship project */}
        <div className="mb-14">
          <FlagshipProject />
        </div>

        {/* Upcoming projects */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
            On the Roadmap
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((proj, index) => (
              <UpcomingProjectCard
                key={proj.title}
                title={proj.title}
                subtitle={proj.subtitle}
                description={proj.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Earlier work */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Earlier Work
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    activeCategory === category.id
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
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
      </div>
    </section>
  );
}
