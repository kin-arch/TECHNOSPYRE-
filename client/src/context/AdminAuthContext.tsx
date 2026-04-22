import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:5000/api';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [username, setUsername] = useState<string | null>(() => localStorage.getItem('admin_username'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verify token on mount
  useEffect(() => {
    const verify = async () => {
      const storedToken = localStorage.getItem('admin_token');
      if (!storedToken) { setLoading(false); return; }
      try {
        const res = await fetch(`${API_BASE}/admin/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        if (res.ok) {
          setToken(storedToken);
          setUsername(localStorage.getItem('admin_username'));
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_username');
        }
      } catch {
        // server offline — still allow if token exists (offline-first)
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  const login = useCallback(async (u: string, p: string) => {
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: u, password: p }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('admin_token', data.token);
        localStorage.setItem('admin_username', data.username);
        setToken(data.token);
        setUsername(data.username);
        setIsAuthenticated(true);
        return { success: true, message: 'Login successful' };
      }
      return { success: false, message: data.message || 'Invalid credentials' };
    } catch {
      return { success: false, message: 'Cannot connect to server.' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    setToken(null);
    setUsername(null);
    setIsAuthenticated(false);
  }, []);

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
