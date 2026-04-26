import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ─── Credentials (mirror of server env vars) ─────────────────────────────────
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin@technospyre2026';
const SESSION_KEY    = 'technospyre_admin_session';

interface AdminSession {
  username: string;
  expiresAt: number; // Unix ms
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  token: string | null;   // kept for API compatibility with existing UI code
  username: string | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername]               = useState<string | null>(null);
  const [loading, setLoading]                 = useState(true);

  // Restore session on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) {
        const session: AdminSession = JSON.parse(raw);
        if (Date.now() < session.expiresAt) {
          setUsername(session.username);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (u: string, p: string): Promise<{ success: boolean; message: string }> => {
    // Simulate slight async delay for UX
    await new Promise(r => setTimeout(r, 400));

    if (u !== ADMIN_USERNAME || p !== ADMIN_PASSWORD) {
      return { success: false, message: 'Invalid credentials.' };
    }

    const session: AdminSession = {
      username: u,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 h
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUsername(u);
    setIsAuthenticated(true);
    return { success: true, message: 'Login successful.' };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUsername(null);
    setIsAuthenticated(false);
  }, []);

  // token is a dummy string kept for interface compatibility
  const token = isAuthenticated ? 'local-session' : null;

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, token, username, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};
