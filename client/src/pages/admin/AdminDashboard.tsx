import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { Tag, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; sub?: string }> = ({
  icon, label, value, sub
}) => (
  <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 flex items-start gap-4 shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
    </div>
  </div>
);

const AdminDashboard: React.FC = () => {
  const { username } = useAdminAuth();

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
          <ShieldCheck className="text-primary" size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-headline font-bold mb-1">
            Welcome back, <span className="text-primary">{username}</span>!
          </h2>
          <p className="text-muted-foreground">
            Manage your TechnoSpyre offer content from this dashboard. All changes are reflected live on the website.
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          icon={<Tag size={22} />}
          label="Active Offers"
          value="1"
          sub="React.js Course Offer"
        />
        <StatCard
          icon={<ExternalLink size={22} />}
          label="Offer Detail Page"
          value="Live"
          sub="/offers/react-course"
        />
        <StatCard
          icon={<ShieldCheck size={22} />}
          label="Admin Access"
          value="Secured"
          sub="JWT · 24h Session"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/admin/offer-editor"
            className="group flex items-center gap-4 p-5 bg-background rounded-xl border border-outline-variant hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Tag size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold">Edit Offer Content</p>
              <p className="text-sm text-muted-foreground">Update homepage & offer detail page</p>
            </div>
            <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
          </Link>

          <a
            href="/offers/react-course"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-5 bg-background rounded-xl border border-outline-variant hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
              <ExternalLink size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold">Preview Offer Page</p>
              <p className="text-sm text-muted-foreground">Open live offer detail page</p>
            </div>
            <ArrowRight size={18} className="text-muted-foreground group-hover:text-green-600 group-hover:translate-x-1 transition-all shrink-0" />
          </a>
        </div>
      </div>

      {/* Info card */}
      <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 text-sm text-amber-700 dark:text-amber-400">
        <strong>Tip:</strong> Changes you make in the Offer Editor update the live website instantly. Use the Preview link above to verify changes after saving.
      </div>
    </div>
  );
};

export default AdminDashboard;
