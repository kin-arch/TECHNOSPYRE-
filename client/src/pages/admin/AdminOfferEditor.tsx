import React, { useState, useEffect, useCallback } from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';

import { Save, Loader2, CheckCircle2, AlertCircle, RefreshCw, ImageIcon, Tag, Type, DollarSign, List, BookOpen, Video, Award, Target, MessageSquare, Sparkles, Eye, EyeOff, Link as LinkIcon } from 'lucide-react';
import { getOffer, saveOffer, defaultOffer } from '@/data/offerStore';
import type { OfferData } from '@/data/offerStore';




const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; desc?: string }> = ({ icon, title, desc }) => (
  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-outline-variant">
    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold">{title}</h3>
      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
    </div>
  </div>
);

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
}> = ({ label, value, onChange, placeholder, type = 'text', hint }) => (
  <div>
    <label className="block text-sm font-semibold mb-1.5 text-foreground/80">{label}</label>
    {hint && <p className="text-xs text-muted-foreground mb-2">{hint}</p>}
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm"
    />
  </div>
);

const TextAreaField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}> = ({ label, value, onChange, placeholder, rows = 3, hint }) => (
  <div>
    <label className="block text-sm font-semibold mb-1.5 text-foreground/80">{label}</label>
    {hint && <p className="text-xs text-muted-foreground mb-2">{hint}</p>}
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm resize-none"
    />
  </div>
);

const AdminOfferEditor: React.FC = () => {
  useAdminAuth(); // ensures we're inside the auth context
  const [offer, setOffer] = useState<OfferData>(defaultOffer);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const fetchOffer = useCallback(() => {
    setLoading(true);
    try {
      const data = getOffer();
      const highlights    = [...(data.highlights    ?? []), '', '', '', ''].slice(0, 4);
      const requirements  = [...(data.requirements  ?? []), '', '', ''].slice(0, 3);
      const syllabus      = data.syllabus?.length ? data.syllabus : [{ week: 'Week 1-2', topic: '' }, { week: 'Week 3-4', topic: '' }];
      setOffer({ ...data, highlights, requirements, syllabus });
    } catch {
      setStatus('error');
      setStatusMsg('Could not load offer data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchOffer(); }, [fetchOffer]);

  const setField = (key: keyof OfferData, value: string) => {
    setOffer((prev) => ({ ...prev, [key]: value }));
  };

  const setHighlight = (index: number, value: string) => {
    setOffer((prev) => {
      const h = [...prev.highlights];
      h[index] = value;
      return { ...prev, highlights: h };
    });
  };

  const setRequirement = (index: number, value: string) => {
    setOffer((prev) => {
      const r = [...prev.requirements];
      r[index] = value;
      return { ...prev, requirements: r };
    });
  };

  const setSyllabusWeek = (index: number, value: string) => {
    setOffer((prev) => {
      const s = [...prev.syllabus];
      s[index] = { ...s[index], week: value };
      return { ...prev, syllabus: s };
    });
  };

  const setSyllabusTopic = (index: number, value: string) => {
    setOffer((prev) => {
      const s = [...prev.syllabus];
      s[index] = { ...s[index], topic: value };
      return { ...prev, syllabus: s };
    });
  };

  const addSyllabusItem = () => {
    setOffer((prev) => ({
      ...prev,
      syllabus: [...prev.syllabus, { week: '', topic: '' }],
    }));
  };

  const removeSyllabusItem = (index: number) => {
    setOffer((prev) => ({
      ...prev,
      syllabus: prev.syllabus.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    setSaving(true);
    setStatus('idle');
    try {
      const cleaned = {
        ...offer,
        highlights:   offer.highlights.filter(Boolean),
        requirements: offer.requirements.filter(Boolean),
        syllabus:     offer.syllabus.filter(s => s.week && s.topic),
      };
      const saved = saveOffer(cleaned);
      const savedHighlights    = [...(saved.highlights    ?? []), '', '', '', ''].slice(0, 4);
      const savedRequirements  = [...(saved.requirements  ?? []), '', '', ''].slice(0, 3);
      setOffer({ ...saved, highlights: savedHighlights, requirements: savedRequirements });
      setStatus('success');
      setStatusMsg('Offer updated successfully! Changes are now live.');
    } catch {
      setStatus('error');
      setStatusMsg('Failed to save. Please try again.');
    } finally {
      setSaving(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="animate-spin text-primary" size={36} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl space-y-6 pb-20 h-fit">
      {/* Page header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold">Offer Editor</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Edit the homepage offer section and offer detail page content.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchOffer}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant text-sm hover:bg-surface-container transition"
          >
            <RefreshCw size={15} /> Reload
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition disabled:opacity-60 shadow-[0_0_12px_rgba(var(--primary),0.25)]"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Status message */}
      {status !== 'idle' && (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm border ${
          status === 'success'
            ? 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400'
            : 'bg-destructive/10 border-destructive/30 text-destructive'
        }`}>
          {status === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          {statusMsg}
        </div>
      )}

      {/* ── SECTION: Visibility Control ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${offer.hidden ? 'bg-destructive/10 text-destructive' : 'bg-green-500/10 text-green-500'}`}>
              {offer.hidden ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
            <div>
              <h3 className="font-bold">Visibility Control</h3>
              <p className="text-xs text-muted-foreground">Toggle the entire offer section on/off across the site</p>
            </div>
          </div>
          <button
            onClick={() => setOffer(prev => ({ ...prev, hidden: !prev.hidden }))}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              offer.hidden 
                ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {offer.hidden ? 'Offer is HIDDEN' : 'Offer is VISIBLE'}
          </button>
        </div>
      </div>
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<Sparkles size={18} />} title="Homepage Special Offer" desc="Configure the content shown in the big offer section on the homepage" />
        <InputField 
          label="Offer Title" 
          value={offer.title} 
          onChange={(v) => setField('title', v)} 
          placeholder="e.g. Master {React.js} & Build the Future" 
          hint="Use curly braces { } to highlight text (e.g. {React.js})"
        />
        <TextAreaField label="Offer Description" value={offer.description} onChange={(v) => setField('description', v)} placeholder="A compelling description for the homepage section..." rows={3} />
        <div className="grid sm:grid-cols-3 gap-4">
          <InputField label="Original Price (PKR)" value={offer.originalPrice} onChange={(v) => setField('originalPrice', v)} placeholder="16,000" />
          <InputField label="Discounted Price (PKR)" value={offer.discountedPrice} onChange={(v) => setField('discountedPrice', v)} placeholder="7,999" />
          <InputField label="Discount Percentage" value={offer.discount} onChange={(v) => setField('discount', v)} placeholder="50%" />
        </div>
        <InputField label="Offer Image URL" value={offer.image1} onChange={(v) => setField('image1', v)} placeholder="https://images.unsplash.com/..." hint="The primary image shown on the homepage card" />
      </div>

      {/* ── SECTION: Hero Text ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<Type size={18} />} title="Course Hero Section" desc="Main headline, subtitle, and badge shown on the course detail page" />
        <InputField label="Hero Badge Text" value={offer.heroBadge} onChange={(v) => setField('heroBadge', v)} placeholder="e.g. Exclusive Masterclass" />
        <InputField label="Main Headline" value={offer.title} onChange={(v) => setField('title', v)} placeholder="e.g. Master React.js & Build the Future" />
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-foreground/80">Subtitle / Short Description</label>
          <textarea
            value={offer.subtitle}
            onChange={(e) => setField('subtitle', e.target.value)}
            rows={3}
            placeholder="A short description shown under the headline..."
            className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm resize-none"
          />
        </div>
        <TextAreaField
          label="Full Course Description"
          value={offer.description}
          onChange={(v) => setField('description', v)}
          placeholder="Detailed course description shown on the detail page..."
          rows={4}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField label="Duration" value={offer.duration} onChange={(v) => setField('duration', v)} placeholder="e.g. 08 Weeks" />
          <InputField label="Certification Label" value={offer.certification} onChange={(v) => setField('certification', v)} placeholder="e.g. Industry Recognized" />
        </div>
      </div>

      {/* ── SECTION: Course Stats ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<Target size={18} />} title="Course Statistics" desc="Number of videos and projects shown on the detail page" />
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField label="Videos Count" value={offer.videosCount} onChange={(v) => setField('videosCount', v)} placeholder="e.g. 100+ HD Videos" />
          <InputField label="Projects Count" value={offer.projectsCount} onChange={(v) => setField('projectsCount', v)} placeholder="e.g. 15+ Projects" />
        </div>
      </div>

      {/* ── SECTION: What You'll Learn ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<List size={18} />} title="Key Highlights / What You'll Learn" desc="Bullet points shown on the course detail page (max 4)" />
        <div className="grid sm:grid-cols-2 gap-4">
          {offer.highlights.map((h, i) => (
            <InputField
              key={i}
              label={`Highlight ${i + 1}`}
              value={h}
              onChange={(v) => setHighlight(i, v)}
              placeholder={`e.g. React Hooks & State Management`}
            />
          ))}
        </div>
      </div>

      {/* ── SECTION: Requirements ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<BookOpen size={18} />} title="Course Requirements" desc="Prerequisites shown on the course detail page (max 3)" />
        <div className="grid sm:grid-cols-1 gap-4">
          {offer.requirements.map((r, i) => (
            <InputField
              key={i}
              label={`Requirement ${i + 1}`}
              value={r}
              onChange={(v) => setRequirement(i, v)}
              placeholder={`e.g. Basic HTML, CSS, and JavaScript knowledge`}
            />
          ))}
        </div>
      </div>

      {/* ── SECTION: Syllabus ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<BookOpen size={18} />} title="Course Syllabus" desc="Week-by-week topics shown on the course detail page" />
        <div className="space-y-4">
          {offer.syllabus.map((item, i) => (
            <div key={i} className="grid sm:grid-cols-[1fr_2fr_auto] gap-4 items-end">
              <InputField
                label={`Week ${i + 1}`}
                value={item.week}
                onChange={(v) => setSyllabusWeek(i, v)}
                placeholder="e.g. Week 1-2"
              />
              <InputField
                label="Topic"
                value={item.topic}
                onChange={(v) => setSyllabusTopic(i, v)}
                placeholder="e.g. React Fundamentals & JSX"
              />
              <button
                onClick={() => removeSyllabusItem(i)}
                className="px-3 py-2.5 rounded-lg border border-destructive/30 text-destructive text-sm hover:bg-destructive/10 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addSyllabusItem}
            className="w-full py-2.5 rounded-lg border border-dashed border-outline-variant text-sm hover:border-primary hover:text-primary transition"
          >
            + Add Week
          </button>
        </div>
      </div>

      {/* ── SECTION: Course Guarantee ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<Award size={18} />} title="Course Guarantee" desc="Guarantee text shown on the detail page" />
        <TextAreaField
          label="Guarantee Text"
          value={offer.guarantee}
          onChange={(v) => setField('guarantee', v)}
          placeholder="e.g. 100% satisfaction guaranteed..."
          rows={3}
        />
      </div>

      {/* ── SECTION: Pricing ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<DollarSign size={18} />} title="Pricing" desc="All prices shown on the course detail page" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InputField label="Original Price (PKR)" value={offer.originalPrice} onChange={(v) => setField('originalPrice', v)} placeholder="16,000" />
          <InputField label="Discounted Price (PKR)" value={offer.discountedPrice} onChange={(v) => setField('discountedPrice', v)} placeholder="7,999" />
          <InputField label="Discount %" value={offer.discount} onChange={(v) => setField('discount', v)} placeholder="50%" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField label="Weekly Price (PKR)" value={offer.weeklyPrice} onChange={(v) => setField('weeklyPrice', v)} placeholder="1,999" hint="Shown on Weekly Plan card" />
          <InputField label="Monthly Price (PKR)" value={offer.monthlyPrice} onChange={(v) => setField('monthlyPrice', v)} placeholder="7,999" hint="Shown on Monthly Plan card" />
        </div>
      </div>

      {/* ── SECTION: Images ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<ImageIcon size={18} />} title="Course Images" desc="URLs for images used on the course detail page" />
        <div className="grid gap-6">
          <div className="space-y-3">
            <InputField
              label="Hero Image URL"
              value={offer.image2}
              onChange={(v) => setField('image2', v)}
              placeholder="https://images.unsplash.com/..."
              hint="Shown as hero image on the course detail page"
            />
            {offer.image2 && (
              <div className="relative rounded-xl overflow-hidden border border-outline-variant aspect-video max-w-sm">
                <img src={offer.image2} alt="Hero image preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute top-2 left-2 bg-background/80 text-xs px-2 py-0.5 rounded font-medium">Hero</div>
              </div>
            )}
          </div>
          <div className="space-y-3">
            <InputField
              label="Homepage Offer Image URL"
              value={offer.image1}
              onChange={(v) => setField('image1', v)}
              placeholder="https://images.unsplash.com/..."
              hint="Shown in the homepage hero offer section"
            />
            {offer.image1 && (
              <div className="relative rounded-xl overflow-hidden border border-outline-variant aspect-video max-w-sm">
                <img src={offer.image1} alt="Homepage image preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute top-2 left-2 bg-background/80 text-xs px-2 py-0.5 rounded font-medium">Homepage</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── SECTION: CTA Section ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<MessageSquare size={18} />} title="Call to Action Section" desc="Bottom CTA section text shown on the course detail page" />
        <InputField label="CTA Heading" value={offer.ctaHeading} onChange={(v) => setField('ctaHeading', v)} placeholder="e.g. Ready to Start Building?" />
        <TextAreaField label="CTA Description" value={offer.ctaDescription} onChange={(v) => setField('ctaDescription', v)} placeholder="e.g. Join thousands of developers..." rows={3} />
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField label="Primary Button Text" value={offer.ctaPrimaryBtn} onChange={(v) => setField('ctaPrimaryBtn', v)} placeholder="e.g. Claim Your Discount Now" />
          <InputField label="Secondary Button Text" value={offer.ctaSecondaryBtn} onChange={(v) => setField('ctaSecondaryBtn', v)} placeholder="e.g. Contact Sales" />
        </div>
      </div>

      {/* ── SECTION: Hero Badge (Discount) ── */}
      <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 space-y-4">
        <SectionHeader icon={<Tag size={18} />} title="Discount Badge" desc="The pill shown above the headline (e.g. '50% Off')" />
        <InputField
          label="Discount Badge Text"
          value={offer.discount}
          onChange={(v) => setField('discount', v)}
          placeholder="50%"
        />
      </div>

      {/* Save button (bottom) */}
      <div className="flex justify-end pb-8">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition disabled:opacity-60 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          {saving ? 'Saving Changes…' : 'Save All Changes'}
        </button>
      </div>
    </div>
  );
};

export default AdminOfferEditor;
