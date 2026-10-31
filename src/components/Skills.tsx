import {
  Code2,
  Server,
  Network,
  Boxes,
  Layers,
  Terminal,
  Brain,
  MessageSquare,
  Sparkles,
  Bot,
  Workflow,
  Braces,
  Database,
  Search,
  Target,
  Wrench,
  Gauge,
  ShieldCheck,
  Cloud,
  GitBranch,
  Container,
  TestTube2,
  Activity,
  BadgeCheck,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type SkillLevel = 'established' | 'developing';

interface SkillItem {
  name: string;
  icon: typeof Code2;
}

interface SkillCategory {
  title: string;
  level: SkillLevel;
  levelLabel: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Backend Engineering',
    level: 'established',
    levelLabel: 'Established Experience',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'Java', icon: Terminal },
      { name: 'REST API Development', icon: Network },
      { name: 'FastAPI', icon: Server },
      { name: 'Microservices', icon: Boxes },
      { name: 'Backend Engineering', icon: Layers },
    ],
  },
  {
    title: 'Generative AI & LLM Engineering',
    level: 'developing',
    levelLabel: 'Developing through personal projects',
    skills: [
      { name: 'Generative AI', icon: Sparkles },
      { name: 'Large Language Models (LLMs)', icon: Brain },
      { name: 'Prompt Engineering', icon: MessageSquare },
      { name: 'Conversational AI', icon: Bot },
      { name: 'LLM Application Development', icon: Workflow },
      { name: 'Structured Outputs', icon: Braces },
    ],
  },
  {
    title: 'AI Engineering Concepts',
    level: 'developing',
    levelLabel: 'Developing through personal projects',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', icon: Search },
      { name: 'Embeddings & Vector Search', icon: Search },
      { name: 'Vector Databases', icon: Database },
      { name: 'AI Agents & Tool Calling', icon: Bot },
      { name: 'LLM Evaluation', icon: Gauge },
      { name: 'AI Guardrails', icon: ShieldCheck },
    ],
  },
  {
    title: 'Cloud & Engineering Practices',
    level: 'established',
    levelLabel: 'Established Experience',
    skills: [
      { name: 'Cloud Platforms', icon: Cloud },
      { name: 'CI/CD', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: Boxes },
      { name: 'Automated Testing', icon: TestTube2 },
      { name: 'Monitoring & Observability', icon: Activity },
      { name: 'Software Quality Engineering', icon: BadgeCheck },
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const isEstablished = category.level === 'established';

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
          {category.title}
        </h3>
        <span
          className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border whitespace-nowrap ${
            isEstablished
              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/40'
              : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/40'
          }`}
        >
          {isEstablished ? <BadgeCheck size={12} /> : <Wrench size={12} />}
          {isEstablished ? 'Established' : 'Developing'}
        </span>
      </div>

      {/* Skills list */}
      <div className="space-y-3">
        {category.skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                  isEstablished
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                }`}
              >
                <Icon size={18} />
              </div>
              <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Target size={28} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Technical Skills
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Twelve-plus years building enterprise software, APIs and automation
            systems, now applied to Generative AI and AI engineering. Blue
            indicates established engineering experience; amber indicates AI
            technologies I am actively developing through personal projects.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
