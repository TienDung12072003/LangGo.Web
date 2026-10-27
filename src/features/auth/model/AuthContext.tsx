import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUser, AuthState } from './authTypes';

interface AuthContextValue extends AuthState {
  login: (email: string, pass: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
}

const STORAGE_KEY = 'langgo_auth_user';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string, pass: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    // Simulated network delay (ready to be replaced with apiClient('/auth/login', { body: ... }))
    await new Promise((r) => setTimeout(r, 600));

    if (!email || !pass) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
      setIsLoading(false);
      return false;
    }

    // Mock successful authentication
    const loggedInUser: AuthUser = {
      id: 'usr_001',
      name: email.split('@')[0].replace(/[._]/g, ' '),
      email: email,
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      level: 'Intermediate (B1)',
      streakDays: 12,
    };

    setUser(loggedInUser);
    setIsLoading(false);
    return true;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    // Simulated Google OAuth response
    await new Promise((r) => setTimeout(r, 500));

    const googleUser: AuthUser = {
      id: 'usr_google_01',
      name: 'Nguyễn Tiến Dũng',
      email: 'tiendung.nguyen@gmail.com',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      level: 'Intermediate (B1)',
      streakDays: 12,
    };

    setUser(googleUser);
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
