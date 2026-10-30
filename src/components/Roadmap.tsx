import { Compass, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RoadmapProject {
  number: string;
  name: string;
  description: string;
  techFocus: string[];
  problem: string;
}

const roadmapProjects: RoadmapProject[] = [
  {
    number: '01',
    name: 'Enterprise Knowledge Assistant',
    description:
      'An AI-powered document knowledge assistant that allows users to ask questions about documents and receive context-aware answers with supporting source citations.',
    techFocus: [
      'Python',
      'LangChain',
      'FastAPI',
      'RAG',
      'Embeddings',
      'Vector Database',
      'LLM APIs',
    ],
    problem:
      'Organisations hold large volumes of internal documentation that is hard to search and navigate. Users waste time manually reading through documents to find answers. This project aims to provide a natural-language interface that retrieves relevant context and returns answers grounded in the source material, with citations so users can verify the information.',
  },
  {
    number: '02',
    name: 'Intelligent Document Processing API',
    description:
      'An intelligent document processing application that extracts structured information from documents and validates the results against defined schemas.',
    techFocus: [
      'Python',
      'FastAPI',
      'Pydantic',
      'LLM APIs',
      'Structured Outputs',
    ],
    problem:
      'Manual data entry from unstructured documents is slow, error-prone and does not scale. This project aims to automate extraction of structured fields from documents while enforcing schema validation, so downstream systems receive clean, predictable data without human intervention.',
  },
  {
    number: '03',
    name: 'LLM Evaluation & Observability Platform',
    description:
      'An evaluation and monitoring platform for measuring LLM response quality, tracking latency and token usage, and identifying prompt or model regressions.',
    techFocus: [
      'Python',
      'LLM Evaluation',
      'LangSmith or Langfuse',
      'CI/CD',
      'Observability',
    ],
    problem:
      'As LLM-powered applications evolve, prompt changes and model updates can silently degrade output quality. Without structured evaluation and observability, regressions go unnoticed until they reach users. This project aims to provide a systematic way to score, track and alert on LLM performance over time.',
  },
  {
    number: '04',
    name: 'AI Incident Investigation Agent',
    description:
      'An AI-assisted incident investigation application that analyses application logs and incident information to identify potential causes and prepare investigation reports.',
    techFocus: [
      'Python',
      'LangGraph',
      'Agentic AI',
      'Tool Calling',
      'APIs',
    ],
    problem:
      'Incident investigation often requires correlating information across logs, alerts and monitoring tools, which is time-consuming under pressure. This project aims to assist engineers by automatically gathering and reasoning over incident data, surfacing likely causes and producing structured investigation reports.',
  },
  {
    number: '05',
    name: 'Multi-LLM Model Comparison Gateway',
    description:
      'A common API layer for interacting with multiple LLM providers and comparing their response quality, latency and usage costs.',
    techFocus: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'Anthropic API',
      'Gemini API',
      'Model Abstraction',
    ],
    problem:
      'Switching between LLM providers means adapting to different APIs, pricing models and performance characteristics. This project aims to abstract provider differences behind a single interface so teams can evaluate and route requests based on quality, latency and cost.',
  },
  {
    number: '06',
    name: 'AI Research Assistant',
    description:
      'An AI research assistant that gathers information from multiple sources, evaluates supporting evidence and produces structured research reports with citations.',
    techFocus: [
      'Python',
      'LangGraph',
      'Agentic AI',
      'Search APIs',
      'Tool Integration',
    ],
    problem:
      'Researching a topic across multiple sources is manual and time-consuming, and it is hard to assess the quality of evidence behind each finding. This project aims to automate information gathering, evaluate source credibility and produce structured reports with citations so users can trace conclusions back to their evidence.',
  },
];

function RoadmapCard({ project }: { project: RoadmapProject }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
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

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Problem statement */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
            <Compass size={16} className="text-blue-600 dark:text-blue-400" />
            Problem to Solve
          </h4>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {project.problem}
          </p>
        </div>

        {/* Planned technology focus */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Planned Technology Focus
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
            Exploring practical applications of Generative AI, LLM engineering,
            RAG, intelligent agents and production-ready AI systems.
          </p>
        </div>

        {/* Roadmap cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {roadmapProjects.map((project) => (
            <RoadmapCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
