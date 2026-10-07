import { ArrowLeft, FileText, Video } from 'lucide-react';

const caseStudySections = [
  'Problem & Use Case',
  'Solution Overview',
  'Architecture',
  'AI / LLM Components',
  'Prompt Engineering',
  'Engineering Decisions',
  'Testing & Evaluation',
  'Reliability & Output Validation',
  'Security Considerations',
  'Scalability & Production Considerations',
  'Trade-offs & Limitations',
  'Future Improvements',
];

export function TestCopilotCaseStudy() {
  const handleBack = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 mb-10 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg px-2 py-1"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        {/* Page header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <FileText size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Test Copilot
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Technical Case Study
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            An AI-powered software testing assistant that converts software
            requirements into structured testing assets, helping engineers
            accelerate test design while maintaining human review and engineering
            judgement.
          </p>
        </div>

        {/* Section list */}
        <div className="space-y-8">
          {caseStudySections.map((section) => (
            <section key={section}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                {section}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Detailed technical case study in progress.
              </p>
            </section>
          ))}
        </div>

        {/* Future demo video placeholder */}
        <div className="mt-16 p-8 rounded-xl bg-slate-50 dark:bg-slate-800/60 border-2 border-dashed border-slate-300 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
              <Video size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Demo Video
            </h3>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A short demo video will be added here when available.
          </p>
        </div>
      </div>
    </div>
  );
}
