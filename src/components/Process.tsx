import * as Icons from 'lucide-react';
import { processSteps } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Process() {
  const { ref, isVisible } = useIntersectionObserver();

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any;
    return Icon ? <Icon size={28} /> : <Icons.Code size={28} />;
  };

  return (
    <section id="process" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            My Process
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A proven methodology for delivering reliable automation solutions
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-500 to-blue-600 dark:from-blue-400 dark:via-emerald-400 dark:to-blue-400 transform -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-1000 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div
                    className={`md:flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="md:flex-1">
                      <div
                        className={`bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 ${
                          isEven ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <div
                          className={`inline-flex items-center gap-3 mb-4 ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <div className="p-3 bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 text-white rounded-lg">
                            {getIcon(step.icon)}
                          </div>
                          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block relative flex-shrink-0">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 rounded-full ring-4 ring-white dark:ring-slate-900" />
                    </div>

                    <div className="md:flex-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
