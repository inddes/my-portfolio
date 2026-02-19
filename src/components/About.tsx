import { User, Heart, BookOpen, Users } from 'lucide-react';
import { aboutContent } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
  const { ref, isVisible } = useIntersectionObserver();

  const interests = [
    { icon: BookOpen, text: aboutContent.interests[0] },
    { icon: Heart, text: aboutContent.interests[1] },
    { icon: Users, text: aboutContent.interests[2] },
    { icon: User, text: aboutContent.interests[3] }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/hkhr-indu.webp"
                  alt="Indrani Deshmukh - AI Automation Expert"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 dark:from-blue-400/20 dark:to-emerald-400/20" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              {aboutContent.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {aboutContent.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="leading-relaxed">{aboutContent.background}</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Philosophy
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {aboutContent.philosophy}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  Beyond the Code
                </h3>
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                        <interest.icon size={20} />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 pt-1">
                        {interest.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/resume.pdf"
                download
                className="block w-full px-6 py-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg font-semibold text-center transition-colors shadow-lg hover:shadow-xl"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
