import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Enterprise Solutions', message: '' });
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
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Please provide more details (min 10 characters)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Enterprise Solutions', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="space-y-2">
            <label className="font-label text-sm text-on-surface-variant ml-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-surface-container-low border-0 border-b ${errors.name ? 'border-red-500' : 'border-outline-variant/40'} focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 outline-none`}
              placeholder="John Doe"
              type="text"
            />
            {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="font-label text-sm text-on-surface-variant ml-1">Work Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-surface-container-low border-0 border-b ${errors.email ? 'border-red-500' : 'border-outline-variant/40'} focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 outline-none`}
              placeholder="john@company.com"
              type="email"
            />
            {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label text-sm text-on-surface-variant ml-1">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-surface-container-low border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface outline-none"
          >
            <option>Enterprise Solutions</option>
            <option>Academy Enrollment</option>
            <option>Career Opportunities</option>
            <option>Other Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-label text-sm text-on-surface-variant ml-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-surface-container-low border-0 border-b ${errors.message ? 'border-red-500' : 'border-outline-variant/40'} focus:border-primary focus:ring-0 transition-all px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 outline-none resize-none`}
            placeholder="Describe your requirements..."
            rows={5}
          />
          {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3 text-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm">Inquiry sent successfully. Our team will reach out shortly.</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span className="font-bold text-sm">{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          disabled={status === 'loading'}
          className="w-full lg:w-max text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,146,60,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {status === 'loading' ? (<>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>) : (<>Send Message <Send className="w-5 h-5" /></>)}
        </button>
      </form>
    </motion.div>
  );
};
