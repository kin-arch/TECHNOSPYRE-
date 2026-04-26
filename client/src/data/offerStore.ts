/**
 * offerStore.ts
 * Replaces the server's offer.json + GET /api/offer + PUT /api/offer.
 * Data lives in localStorage under the key below.
 */

export interface SyllabusItem {
  week: string;
  topic: string;
}

export interface OfferData {
  hidden?: boolean; // New: To toggle visibility
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  certification: string;
  highlights: string[];
  requirements: string[];
  videosCount: string;
  projectsCount: string;
  syllabus: SyllabusItem[];
  guarantee: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  weeklyPrice: string;
  monthlyPrice: string;
  image1: string;
  image2: string;
  heroBadge: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaPrimaryBtn: string;
  ctaSecondaryBtn: string;
}

const STORAGE_KEY = 'technospyre_offer';

/** Default offer — mirrors server/data/offer.json */
export const defaultOffer: OfferData = {
  hidden: false,
  title: 'Master {React.js} & Build the Future',
  subtitle:
    'Transform your career with our comprehensive React development course. Learn modern hooks, advanced state management, and real-world project architecture from industry experts.',
  description:
    'Master React.js from fundamentals to advanced concepts. Build modern, interactive user interfaces with hooks, context API, and state management.',
  duration: '08 Weeks',
  certification: 'Industry Recognized',
  highlights: [
    'React Fundamentals & JSX',
    'Hooks (useState, useEffect, useContext)',
    'React Router Basics',
    'Component Architecture',
  ],
  requirements: [
    'Basic HTML, CSS, and JavaScript knowledge',
    'Understanding of ES6+ JavaScript features',
    'A computer with internet access',
  ],
  videosCount: '100+ HD Videos',
  projectsCount: '15+ Projects',
  syllabus: [
    { week: 'Week 1-2', topic: 'React Fundamentals & JSX' },
    { week: 'Week 3-4', topic: 'Hooks & State Management' },
    { week: 'Week 5-6', topic: 'React Router & Navigation' },
    { week: 'Week 7-8', topic: 'Real-world Projects' },
  ],
  guarantee:
    "100% satisfaction guaranteed. If you're not learning, let us know within the first 7 days for a full refund.",
  originalPrice: '16,000',
  discountedPrice: '7,999',
  discount: '50%',
  weeklyPrice: '1,999',
  monthlyPrice: '7,999',
  image1:
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
  image2:
    'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
  heroBadge: 'Exclusive Masterclass',
  ctaHeading: 'Ready to Start Building?',
  ctaDescription:
    "Join thousands of developers who have leveled up their careers. Don't miss out on this exclusive offer.",
  ctaPrimaryBtn: 'Claim Your Discount Now',
  ctaSecondaryBtn: 'Contact Sales',
};

/** Read the current offer (falls back to default if nothing saved yet). */
export function getOffer(): OfferData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultOffer;
    return { ...defaultOffer, ...JSON.parse(raw) } as OfferData;
  } catch {
    return defaultOffer;
  }
}

/** Persist an updated offer and return the merged result. */
export function saveOffer(updated: Partial<OfferData>): OfferData {
  const current = getOffer();
  const merged = { ...current, ...updated };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}
