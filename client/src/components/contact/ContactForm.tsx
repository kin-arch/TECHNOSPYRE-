import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Send, Check, AlertCircle, Loader2, Sparkles, Mail, ChevronDown } from 'lucide-react';
import { RichTextEditor } from '../ui/RichTextEditor';
import { getAllProducts } from '../../data/product';
import { courseCategories } from '../../data/courses';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const CustomSelect = ({ 
  name, 
  value, 
  options, 
  onChange 
}: { 
  name: string, 
  value: string, 
  options: { value: string, label: string }[], 
  onChange: (e: { target: { name: string, value: string } }) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-surface-container-low border-0 border-b border-outline-variant/40 hover:border-primary/60 transition-all px-4 py-3 text-on-surface outline-none flex justify-between items-center cursor-pointer"
      >
        <span className={value ? "text-on-surface line-clamp-1 text-left" : "text-on-surface-variant/30 text-left"}>
          {options.find(o => o.value === value)?.label || "Select an option"}
        </span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-surface-container-high border border-outline-variant/20 shadow-xl rounded-sm max-h-60 overflow-y-auto top-full left-0 origin-top"
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange({ target: { name, value: opt.value } });
                  setIsOpen(false);
                }}
                className={`px-4 py-3 cursor-pointer hover:bg-primary/10 transition-colors text-left text-sm ${value === opt.value ? 'bg-primary/10 text-primary font-medium' : 'text-on-surface'}`}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');

  const products = getAllProducts();
  const allCourses = courseCategories.flatMap(c => c.courses);

  const defaultSubjects = ['Enterprise Solutions', 'Academy Enrollment', 'Career Opportunities', 'Other Inquiry'];

  const getRandomMessage = (name: string, type: 'course' | 'product') => {
    const courseTemplates = [
      `<p>I would like to enroll in the <strong>${name}</strong> program. Could you please provide me with more details regarding the schedule and next steps?</p>`,
      `<p>I'm interested in starting the <strong>${name}</strong> course. Please let me know how I can proceed with the enrollment process.</p>`,
      `<p>Hello, I want to sign up for <strong>${name}</strong>. What are the prerequisites and when does the next batch start?</p>`,
      `<p>I am reaching out to express my interest in enrolling in the <strong>${name}</strong>. Looking forward to hearing from you soon!</p>`
    ];

    const productTemplates = [
      `<p>I am interested in the <strong>${name}</strong> solution. Could we schedule a demo or a call to discuss how it fits our requirements?</p>`,
      `<p>We are looking into implementing <strong>${name}</strong> for our business operations. Please provide us with more information and pricing details.</p>`,
      `<p>Hello, I would like to learn more about the features and capabilities of <strong>${name}</strong>. Let me know when you are available to discuss.</p>`,
      `<p>I'm reaching out regarding the <strong>${name}</strong>. Can you share some use cases or a demonstration of how it works?</p>`
    ];

    const templates = type === 'course' ? courseTemplates : productTemplates;
    return templates[Math.floor(Math.random() * templates.length)];
  };

  const getInitialState = () => {
    let subject = 'Enterprise Solutions';
    let subSubject = products[0]?.name || '';
    let message = '';

    if (topicParam) {
      const isProduct = products.some(p => p.name === topicParam);
      const isCourse = allCourses.some(c => c.name === topicParam);
      
      if (isProduct) {
        subject = 'Enterprise Solutions';
        subSubject = topicParam;
        message = getRandomMessage(topicParam, 'product');
      } else if (isCourse) {
        subject = 'Academy Enrollment';
        subSubject = topicParam;
        message = getRandomMessage(topicParam, 'course');
      } else if (defaultSubjects.includes(topicParam)) {
        subject = topicParam;
        if (topicParam === 'Enterprise Solutions') subSubject = products[0]?.name || '';
        else if (topicParam === 'Academy Enrollment') subSubject = allCourses[0]?.name || '';
        else if (topicParam === 'Career Opportunities') subSubject = 'Job';
        else subSubject = '';
      } else {
        subject = topicParam;
        subSubject = '';
      }
    }
    return { subject, subSubject, message };
  };

  const [formData, setFormData] = useState(() => {
    const { subject, subSubject, message } = getInitialState();
    return { name: '', email: '', subject, subSubject, message };
  });

  const subjectOptions = formData.subject && !defaultSubjects.includes(formData.subject) 
    ? [formData.subject, ...defaultSubjects] 
    : defaultSubjects;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Work email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid work email';
    
    // Strip HTML to count actual text content from the rich text editor
    const cleanMessage = formData.message.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
    if (!cleanMessage) newErrors.message = 'Message is required';
    else if (cleanMessage.length < 50) newErrors.message = 'Please provide more details (min 50 characters)';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subSubject ? `${formData.subject} - ${formData.subSubject}` : formData.subject,
        message: formData.message,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok) {
        setFormData({ name: '', email: '', subject: 'Enterprise Solutions', subSubject: products[0]?.name || '', message: '' });
        setErrors({});
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { target: { name: string, value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === 'subject') {
        if (value === 'Enterprise Solutions') newData.subSubject = products[0]?.name || '';
        else if (value === 'Academy Enrollment') newData.subSubject = allCourses[0]?.name || '';
        else if (value === 'Career Opportunities') newData.subSubject = 'Job';
        else newData.subSubject = '';
      }
      return newData;
    });
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  return (
    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-1/2">
      <div className="mb-10">
        <span className="font-label text-primary uppercase tracking-[0.2em] font-bold text-xs mb-3 block">Inquiry Portal</span>
        <h2 className="font-headline text-4xl font-bold leading-tight text-on-surface">
          Tell us about your <br /><span className="text-primary">visionary project.</span>
        </h2>
      </div>

      <form className="space-y-7" onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {status !== 'success' && (
            <motion.div
              key="contact-fields"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-7"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label className="font-label text-sm text-on-surface-variant ml-1">Full Name <span className="text-red-500 ml-0.5">*</span></label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-surface-container-low border-0 border-b ${errors.name ? 'border-red-500' : 'border-outline-variant/40'} focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 outline-none`}
                    placeholder="Enter Your Name"
                    type="text"
                  />
                  {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm text-on-surface-variant ml-1">Work Email <span className="text-red-500 ml-0.5">*</span></label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-surface-container-low border-0 border-b ${errors.email ? 'border-red-500' : 'border-outline-variant/40'} focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 outline-none`}
                    placeholder="Enter Your Email"
                    type="email"
                  />
                  {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2 relative z-20">
                <label className="font-label text-sm text-on-surface-variant ml-1">Subject</label>
                <CustomSelect
                  name="subject"
                  value={formData.subject}
                  options={subjectOptions.map(opt => ({ value: opt, label: opt }))}
                  onChange={handleChange}
                />
              </div>

              {formData.subject === 'Enterprise Solutions' && (
                <div className="space-y-2 relative z-10">
                  <label className="font-label text-sm text-on-surface-variant ml-1">Product</label>
                  <CustomSelect
                    name="subSubject"
                    value={formData.subSubject || ''}
                    options={products.map(p => ({ value: p.name, label: p.name }))}
                    onChange={handleChange}
                  />
                </div>
              )}

              {formData.subject === 'Academy Enrollment' && (
                <div className="space-y-2 relative z-10">
                  <label className="font-label text-sm text-on-surface-variant ml-1">Course</label>
                  <CustomSelect
                    name="subSubject"
                    value={formData.subSubject || ''}
                    options={allCourses.map(c => ({ value: c.name, label: c.name }))}
                    onChange={handleChange}
                  />
                </div>
              )}

              {formData.subject === 'Career Opportunities' && (
                <div className="space-y-2 relative z-10">
                  <label className="font-label text-sm text-on-surface-variant ml-1">Opportunity Type</label>
                  <CustomSelect
                    name="subSubject"
                    value={formData.subSubject || ''}
                    options={[
                      { value: 'Job', label: 'Job' },
                      { value: 'Internship', label: 'Internship' }
                    ]}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="font-label text-sm text-on-surface-variant ml-1">Message <span className="text-red-500 ml-0.5">*</span></label>
                <RichTextEditor
                  value={formData.message}
                  onChange={(val) => {
                    setFormData((prev) => ({ ...prev, message: val }));
                    if (errors.message) setErrors((prev) => { const n = { ...prev }; delete n.message; return n; });
                  }}
                  className={errors.message ? 'border border-red-500 ring-1 ring-red-500/20' : ''}
                />
                {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    key="contact-error"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-sm border border-red-500/30 bg-red-500/10 p-5 text-red-300"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-headline font-bold text-on-surface">Could not send</p>
                        <p className="mt-1 text-sm text-on-surface-variant leading-relaxed">{errorMessage}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              key="contact-success"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative overflow-hidden rounded-sm border border-primary/25 bg-gradient-to-br from-primary/15 via-surface-container-low to-surface-container p-8 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_48px_-12px_rgba(0,0,0,0.45)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-sm bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-sm bg-secondary/15 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-8 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                  <motion.div
                    className="absolute inset-0 rounded-sm border-2 border-dashed border-primary/35"
                    initial={{ scale: 0.4, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.04 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-sm border-2 border-primary/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-sm bg-primary/25 shadow-lg shadow-primary/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22, delay: 0.1 }}
                  />
                  <motion.div
                    className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-sm bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg sm:h-[5rem] sm:w-[5rem]"
                    initial={{ scale: 0, rotate: -28 }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                      delay: 0.16,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 22, delay: 0.32 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          filter: [
                            'drop-shadow(0 0 0px transparent)',
                            'drop-shadow(0 0 10px rgba(255,255,255,0.55))',
                            'drop-shadow(0 0 0px transparent)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                      >
                        <Check className="h-10 w-10 sm:h-11 sm:w-11" strokeWidth={3} aria-hidden />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {[Sparkles, Mail].map((Icon, i) => (
                    <motion.span
                      key={i === 0 ? 'success-sparkles' : 'success-mail'}
                      className="absolute text-primary"
                      style={{
                        top: i === 0 ? '6%' : 'auto',
                        bottom: i === 1 ? '10%' : 'auto',
                        left: i === 0 ? '2%' : 'auto',
                        right: i === 1 ? '4%' : 'auto',
                      }}
                      initial={{ opacity: 0, scale: 0, rotate: -35 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: [0, -4, 0],
                      }}
                      transition={{
                        opacity: { delay: 0.42 + i * 0.07, duration: 0.35 },
                        scale: { delay: 0.42 + i * 0.07, type: 'spring', stiffness: 400, damping: 18 },
                        rotate: { delay: 0.42 + i * 0.07, duration: 0.45, ease: 'easeOut' },
                        y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.85 + i * 0.15 },
                      }}
                    >
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                    </motion.span>
                  ))}
                </div>

                <motion.h3
                  className="font-headline text-2xl font-bold text-on-surface sm:text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.4 }}
                >
                  Inquiry received
                </motion.h3>
                <motion.p
                  className="mt-3 max-w-md text-base leading-relaxed text-on-surface-variant sm:text-lg"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.45 }}
                >
                  Thank you for reaching out. Your message has been received. We will get back to you as soon as possible.
                </motion.p>

                <motion.div
                  className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: 'Enterprise Solutions', subSubject: products[0]?.name || '', message: '' });
                      setErrors({});
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-95 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    Send another message
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {status !== 'success' && (
          <button
            disabled={status === 'loading'}
            className="w-full lg:w-max text-primary-foreground bg-primary font-bold py-4 px-12 rounded-sm transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            type="submit"
          >
            {status === 'loading' ? (<>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>) : (<>Send Message <Send className="w-5 h-5" /></>)}
          </button>
        )}
      </form>
    </motion.div>
  );
};



