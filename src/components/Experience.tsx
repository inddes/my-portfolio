import {
  Briefcase,
  Code2,
  Network,
  Workflow,
  GitBranch,
  ShieldCheck,
  Cloud,
  TrendingDown,
  Gauge,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceArea {
  title: string;
  icon: typeof Code2;
  points: string[];
}

const experienceAreas: ExperienceArea[] = [
  {
    title: 'Software Engineering & Enterprise Applications',
    icon: Code2,
    points: [
      'Built and maintained enterprise applications using Python and Java',
      'Delivered backend services supporting business-critical workflows',
      'Owned features end-to-end from design through deployment',
    ],
  },
  {
    title: 'API Integration & Microservices',
    icon: Network,
    points: [
      'Designed and developed REST APIs for internal and external consumers',
      'Built microservices architecture for modular, scalable systems',
      'Integrated disparate systems through API-driven communication',
    ],
  },
  {
    title: 'Automation Engineering & Test Automation',
    icon: Workflow,
    points: [
      'Developed automated test frameworks that reduced manual effort',
      'Built reusable automation tooling across multiple project teams',
      'Reduced API testing cycle time by 30%',
    ],
  },
  {
    title: 'CI/CD & Release Engineering',
    icon: GitBranch,
    points: [
      'Built and maintained CI/CD pipelines for reliable, repeatable releases',
      'Reduced pipeline failures by 90% through systematic improvements',
      'Automated build, test and deployment workflows',
    ],
  },
  {
    title: 'Software Quality & Reliability',
    icon: ShieldCheck,
    points: [
      'Owned software quality engineering across the delivery lifecycle',
      'Diagnosed and resolved production issues through structured troubleshooting',
      'Drove continuous improvement in reliability and maintainability',
    ],
  },
  {
    title: 'Cloud Technologies & Deployment',
    icon: Cloud,
    points: [
      'Deployed and managed applications on cloud platforms',
      'Used containerization and orchestration for consistent environments',
      'Implemented monitoring and observability for production systems',
    ],
  },
];

const keyAchievements = [
  {
    icon: Gauge,
    metric: '30%',
    label: 'Reduction in API testing cycle time',
  },
  {
    icon: TrendingDown,
    metric: '90%',
    label: 'Reduction in pipeline failures',
  },
];

function ExperienceCard({
  area,
  index,
}: {
  area: ExperienceArea;
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();
  const Icon = area.icon;

  return (
    <div
      ref={ref}
      className={`relative bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 p-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 leading-tight">
          {area.title}
        </h3>
      </div>
      <ul className="space-y-2.5">
        {area.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300"
          >
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase
              size={28}
              className="text-blue-600 dark:text-blue-400"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Professional Experience
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Twelve-plus years in software and automation engineering -- building
            enterprise applications, APIs, CI/CD pipelines and test automation
            frameworks. This foundation now drives my transition into AI
            Engineering, where the same principles of reliability, structured
            testing and continuous improvement apply directly to building and
            shipping LLM applications.
          </p>
        </div>

        {/* Key achievements highlight bar */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-500 dark:to-emerald-500 rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-100 mb-5">
              Key Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {keyAchievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.label}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 p-3 bg-white/15 rounded-xl">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-white">
                        {achievement.metric}
                      </div>
                      <p className="text-sm text-blue-100 mt-1">
                        {achievement.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience area cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {experienceAreas.map((area, index) => (
            <ExperienceCard key={area.title} area={area} index={index} />
          ))}
        </div>

        {/* Transition callout */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl">
              <Sparkles size={26} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                From Software Engineering to AI Engineering
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My background in backend engineering, automation and quality
                gives me a structural advantage in AI Engineering. Designing
                robust APIs, building evaluation pipelines, and ensuring
                reliability are the same problems -- now applied to LLM
                applications, RAG systems and AI agents. I am actively building
                personal projects across the Generative AI stack to deepen this
                expertise.
              </p>
            </div>
            <ArrowRight
              size={24}
              className="hidden sm:block flex-shrink-0 text-blue-600 dark:text-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
