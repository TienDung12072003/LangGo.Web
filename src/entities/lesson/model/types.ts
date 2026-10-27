export type LessonStatus = 'completed' | 'in_progress' | 'locked';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  xpReward: number;
  progressPercent: number;
  status: LessonStatus;
  category: string;
  orderNumber: number;
}
