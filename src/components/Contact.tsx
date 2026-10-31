import { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { contactInfo } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MeetingBooking } from './MeetingBooking';

let supabaseClient: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (supabaseClient) return supabaseClient;
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  supabaseClient = createClient(url, key);
  return supabaseClient;
}

const contactOptions = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: contactInfo.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: contactInfo.linkedin,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    external: false,
  },
];

export function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    const supabase = getSupabase();
    if (!supabase) {
      setSubmitError(
        'The contact form is temporarily unavailable. Please try again later or email directly.',
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setSubmitError(
        'Failed to send your message. Please try again or email directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              Let&rsquo;s Connect
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
              Interested in AI engineering, Generative AI applications,
              intelligent automation or collaboration? I&rsquo;d be happy to
              connect and discuss opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Contact options */}
            <div className="lg:col-span-2 space-y-4">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <a
                    key={option.label}
                    href={option.href}
                    {...(option.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {option.label}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {option.value}
                      </p>
                    </div>
                    {option.external && (
                      <ArrowUpRight
                        size={18}
                        className="flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      />
                    )}
                  </a>
                );
              })}

              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-500 dark:to-emerald-500 rounded-xl p-6 text-white">
                <p className="font-semibold mb-1">{contactInfo.availability}</p>
                <p className="text-sm text-blue-100">
                  {contactInfo.responseTime}
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700"
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thank you for reaching out. I&rsquo;ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${
                          errors.name
                            ? 'border-red-500'
                            : 'border-slate-300 dark:border-slate-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-slate-50 disabled:opacity-60`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-slate-300 dark:border-slate-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-slate-50 disabled:opacity-60`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${
                          errors.subject
                            ? 'border-red-500'
                            : 'border-slate-300 dark:border-slate-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-slate-50 disabled:opacity-60`}
                        placeholder="How can I help?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={6}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${
                          errors.message
                            ? 'border-red-500'
                            : 'border-slate-300 dark:border-slate-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-slate-50 resize-none disabled:opacity-60`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                        <AlertCircle
                          size={20}
                          className="flex-shrink-0 mt-0.5"
                        />
                        <p className="text-sm">{submitError}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <MeetingBooking />
          </div>
        </div>
      </div>
    </section>
  );
}
