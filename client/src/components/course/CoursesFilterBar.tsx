import React from 'react';
import { motion } from 'motion/react';
import { Filter, X } from 'lucide-react';

interface FilterBarProps {
  categoryFilter: string;
  setCategoryFilter: (cat: string) => void;
  durationFilter: string;
  setDurationFilter: (dur: string) => void;
  categories: string[];
  durations: { label: string; value: string }[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  categoryFilter,
  setCategoryFilter,
  durationFilter,
  setDurationFilter,
  categories,
  durations,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-sm border border-white/5 flex flex-col md:flex-row gap-8 items-center justify-between"
    >
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Filter className="text-primary w-5 h-5" />
        <span className="font-bold uppercase tracking-widest text-xs text-on-surface-variant">Filter Courses</span>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
        <div className="flex flex-col gap-2 w-full md:w-48">
          <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Category</label>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-surface-container-low border border-white/10 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-48">
          <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Duration</label>
          <select 
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="bg-surface-container-low border border-white/10 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
          >
            {durations.map(dur => (
              <option key={dur.value} value={dur.value}>{dur.label}</option>
            ))}
          </select>
        </div>

        {(categoryFilter !== 'All' || durationFilter !== 'All') && (
          <button 
            onClick={() => { setCategoryFilter('All'); setDurationFilter('All'); }}
            className="mt-6 flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
          >
            <X className="w-4 h-4" /> Reset
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default FilterBar;



