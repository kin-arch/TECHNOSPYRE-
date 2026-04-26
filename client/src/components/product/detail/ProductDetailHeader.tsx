import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';

interface ProductDetailHeaderProps {
  productName: string;
  categoryLabel: string;
  shortDescription: string;
  longDetails: string;
  videoSrc: string;
  poster?: string;
}

export function ProductDetailHeader({
  productName,
  categoryLabel,
  shortDescription,
  longDetails,
  videoSrc,
  poster,
}: ProductDetailHeaderProps) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="lg:col-span-1 lg:order-2"
      >
        <div className="sticky top-10 space-y-6 rounded-sm border border-outline-variant bg-surface-container/70 p-8 shadow-xl backdrop-blur-xl inner-highlight">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div className="mb-4 flex items-center justify-between text-sm font-semibold text-on-surface">
              <PlayCircle size={18} className="text-primary" />
              <Link
                to={`/contact?topic=${encodeURIComponent(productName)}#contact-form`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95 text-center"
              >
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative h-[360px] w-full rounded-sm overflow-hidden border border-outline-variant bg-black shadow-2xl ring-1 ring-white/10">
              <VideoPlayer src={videoSrc} poster={poster} />
            </div>

            <p className="mt-3 text-xs text-on-surface-variant italic">
              Experience the {productName} interface.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="space-y-16 lg:col-span-2 lg:order-1"
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M11.467 22.36c-.296-.113-.687-.212-1.133-.212-3.274 0-9-3.851-9-8.548 0-4.697 5.726-8.548 9-8.548.446 0 .837.099 1.133.212" />
                <path d="M16.533 12.548c0-3.5-2.5-6-4.5-6-2 0-4.5 2.5-4.5 6" />
                <path d="M18.5 12.548c0 3.5 2.5 6 4.5 6 2 0 4.5-2.5 4.5-6" />
                <path d="M9.133 19.787c.593.298 1.15.513 1.567.513 3.274 0 9-3.851 9-8.548" />
                <path d="M12.133 18.548c.593.298 1.15.513 1.567.513 3.274 0 9-3.851 9-8.548" />
              </svg>
              {categoryLabel}
            </span>
          </div>
          <h1 className="relative mb-6 font-headline text-3xl font-bold leading-tight tracking-tighter text-on-surface md:text-4xl lg:text-4xl">
            {productName}
            <span className="absolute -inset-6 -z-10 rounded-sm bg-primary/15 opacity-40 blur-3xl" aria-hidden />
          </h1>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-on-surface-variant">{shortDescription}</p>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant/90">{longDetails}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


