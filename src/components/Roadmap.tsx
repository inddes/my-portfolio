import { Compass, Lightbulb, Target } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RoadmapProject {
  number: string;
  name: string;
  purpose: string;
  techFocus: string[];
}

const roadmapProjects: RoadmapProject[] = [
  {
    number: '01',
    name: 'Enterprise Knowledge Assistant',
    purpose:
      'Build a document question-answering application using Retrieval-Augmented Generation (RAG), embeddings, vector search and grounded responses with source citations.',
    techFocus: [
      'RAG',
      'Embeddings',
      'Vector Search',
      'Source Citations',
      'Python',
    ],
  },
  {
    number: '02',
    name: 'Intelligent Document Processing API',
    purpose:
      'Build an API that extracts structured information from documents using LLMs, structured outputs, Pydantic validation and robust error handling.',
    techFocus: [
      'LLM Structured Outputs',
      'Pydantic Validation',
      'FastAPI',
      'Error Handling',
      'Python',
    ],
  },
  {
    number: '03',
    name: 'LLM Evaluation & Observability Platform',
    purpose:
      'Build an evaluation and monitoring system to measure LLM response quality, latency, token usage and prompt/model regressions.',
    techFocus: [
      'LLM Evaluation',
      'Latency Monitoring',
      'Token Usage Tracking',
      'Regression Detection',
      'Python',
    ],
  },
  {
    number: '04',
    name: 'AI Incident Investigation Agent',
    purpose:
      'Build an AI agent that analyses application logs and incident information, uses tools to investigate potential causes and produces evidence-based investigation reports.',
    techFocus: [
      'Agentic AI',
      'LangGraph',
      'Tool Calling',
      'Log Analysis',
      'Python',
    ],
  },
  {
    number: '05',
    name: 'Multi-LLM Model Comparison Gateway',
    purpose:
      'Build a common API gateway that integrates multiple LLM providers and compares model responses, latency and cost.',
    techFocus: [
      'Multi-Provider Integration',
      'Model Comparison',
      'Latency & Cost Analysis',
      'FastAPI',
      'Python',
    ],
  },
  {
    number: '06',
    name: 'AI Research Assistant',
    purpose:
      'Build a multi-step AI research application that uses tools and external sources to gather information and produce structured reports with citations.',
    techFocus: [
      'Multi-Step Reasoning',
      'Tool Integration',
      'Search APIs',
      'Cited Reports',
      'LangGraph',
    ],
  },
];

function RoadmapCard({ project, index }: { project: RoadmapProject; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="p-6 sm:p-7">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          <span className="flex-shrink-0 text-3xl font-bold tabular-nums text-slate-300 dark:text-slate-700 leading-none">
            {project.number}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
              {project.name}
            </h3>
          </div>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wide border border-amber-200 dark:border-amber-800/40">
            <Lightbulb size={12} />
            Planned
          </span>
        </div>

        {/* Purpose & technical focus */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
            <Target size={16} className="text-blue-600 dark:text-blue-400" />
            Purpose &amp; Technical Focus
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.purpose}
          </p>
        </div>

        {/* Key technology areas */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Key Technology Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techFocus.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Roadmap() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="roadmap"
      className="py-20 bg-white dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Compass
              size={28}
              className="text-blue-600 dark:text-blue-400"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              AI Engineering Projects Roadmap
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            These are planned projects that demonstrate my progression in AI
            engineering -- from Retrieval-Augmented Generation and structured
            output APIs, through evaluation and observability, to autonomous
            agents and multi-step research. Each project is designed to build
            on the last, expanding depth and breadth across the Generative AI
            stack.
          </p>
        </div>

        {/* Roadmap cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {roadmapProjects.map((project, index) => (
            <RoadmapCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
