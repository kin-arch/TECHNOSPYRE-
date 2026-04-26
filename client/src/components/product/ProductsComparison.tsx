import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const ComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative gradient */}
      {/* Flat structure background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-sm pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">The Technospyre Difference</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Our <span className="text-secondary">Products?</span></h3>
          <p className="text-lg text-muted-foreground">
            We don't just provide software. We provide resilient architectures tailored uniquely to your workflow, outperforming conventional market alternatives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-sm overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10 items-center">
                <div className="text-sm md:text-lg font-medium text-muted-foreground">Features & Capabilities</div>
                <div className="text-center text-base md:text-xl font-bold">Typical Providers</div>
                <div className="text-center text-base md:text-xl font-bold text-primary">Technospyre</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-primary/20">
            <ComparisonRow 
              feature="System Architecture" 
              competitor="Monolithic & Rigid" 
              us="Modular Microservices" 
              better="us" 
            />
            <ComparisonRow 
              feature="Integration Ecosystem" 
              competitor="Closed/Limited APIs" 
              us="Universal GraphQL/REST" 
              better="us" 
            />
            <ComparisonRow 
              feature="UI / UX Flow" 
              competitor="Outdated & Clunky" 
              us="Modern & Fluid Animations" 
              better="us" 
            />
            <ComparisonRow 
              feature="Data Privacy & Security" 
              competitor="Standard Encryption" 
              us="Military-grade Zero-Trust" 
              better="us" 
            />
            <ComparisonRow 
              feature="Customization Limits" 
              competitor="Pre-set Templates only" 
              us="100% Bespoke Logic" 
              better="us" 
            />
            <ComparisonRow 
              feature="Post-Launch Support" 
              competitor="Ticketing queues" 
              us="Dedicated AI & Human Reps" 
              better="us" 
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonRow = ({ feature, competitor, us, better }: { feature: string, competitor: string, us: string, better: 'us' | 'comp' | 'equal' }) => {
  return (
    <div className="grid grid-cols-3 p-6 items-center hover:bg-white/[0.02] transition-colors">
      <div className="font-medium">{feature}</div>
      <div className="flex flex-col items-center justify-center text-muted-foreground gap-2">
        <span className="text-sm text-center">{competitor}</span>
        <X size={20} className="text-red-500/70" />
      </div>
      <div className="flex flex-col items-center justify-center text-primary font-medium gap-2">
        <span className="text-sm text-center text-foreground">{us}</span>
        <CheckCircle2 size={20} className="text-green-500" />
      </div>
    </div>
  );
};



