import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { Eye, EyeOff, Lock, User, Loader2, ShieldCheck } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const { login, isAuthenticated, loading } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const result = await login(username, password);
    if (!result.success) setError(result.message);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-container to-background flex items-center justify-center px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23666' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0v1h40V0zM0 39v1h40v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo / Branding */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
            <ShieldCheck className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-headline font-bold tracking-tight">Admin Portal</h1>
          <p className="text-muted-foreground mt-2 text-sm">TechnoSpyre Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-background/80 backdrop-blur-xl border border-outline-variant rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold mb-6">Sign In to Dashboard</h2>

          {error && (
            <div className="mb-5 flex items-center gap-3 bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-lg text-sm">
              <Lock size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/80" htmlFor="admin-username">
                Username
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="admin-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  required
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/80" htmlFor="admin-password">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-11 py-3 rounded-lg border border-outline-variant bg-surface-container text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(var(--primary),0.3)] mt-2"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Signing In…
                </>
              ) : (
                <>
                  <ShieldCheck size={18} /> Sign In
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Restricted access. Authorised personnel only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
