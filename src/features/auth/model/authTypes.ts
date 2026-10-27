export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  level: string;
  streakDays: number;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
