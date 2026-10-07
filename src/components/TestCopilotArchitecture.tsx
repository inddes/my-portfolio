import { Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function TestCopilotArchitecture() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="test-copilot-architecture"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Layers size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Test Copilot — Architecture
            </h2>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            This section will provide the technical architecture walkthrough of
            the application, covering the system design, component
            interactions, and data flow that power Test Copilot.
          </p>

          <div className="mt-8 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Detailed architecture documentation in progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
