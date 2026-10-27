export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  level: string; // e.g. "B2 Upper-Intermediate"
  xp: number;
  streakDays: number;
  dailyGoalMinutes: number;
  todayMinutesLearned: number;
}
