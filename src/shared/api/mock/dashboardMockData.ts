/**
 * Mock Data for LangGo Dashboard
 * Decoupled from UI components for clean data flow & easy API integration later
 */

export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  level: string;
  streakDays: number;
}

export interface StatMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  badgeText: string;
  badgeType: 'streak' | 'positive';
  color: 'purple' | 'teal' | 'blue' | 'yellow';
}

export interface ContinueLearningData {
  unitBadge: string;
  title: string;
  progressText: string;
  progressPercent: number;
  description: string;
  thumbnailUrl: string;
}

export interface WeeklyBarData {
  day: string;
  height: number;
  active: boolean;
}

export interface PopularLessonData {
  id: string;
  badge: 'Vocabulary' | 'Grammar' | 'Listening' | 'Speaking';
  title: string;
  duration: string;
  thumbnailUrl: string;
}

export interface VocabItemData {
  id: string;
  word: string;
  phonetic: string;
  cefr: 'A1' | 'A2' | 'B1' | 'B2';
}

export interface TopLearnerData {
  rank: number;
  name: string;
  hours: number;
  avatarUrl: string;
  crown?: string;
}

export interface DashboardData {
  user: DashboardUser;
  stats: StatMetric[];
  continueLearning: ContinueLearningData;
  weeklyActivity: {
    chart: WeeklyBarData[];
    lessonsCount: number;
    practicesCount: number;
    testsCount: number;
  };
  popularLessons: PopularLessonData[];
  vocabulary: VocabItemData[];
  topLearners: TopLearnerData[];
}

export const initialDashboardData: DashboardData = {
  user: {
    id: 'usr_001',
    name: 'Nguyễn Tiến Dũng',
    email: 'tiendung@example.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    level: 'Intermediate (B1)',
    streakDays: 12,
  },
  stats: [
    {
      id: 'stat_streak',
      label: 'Learning Streak',
      value: '12',
      unit: 'days',
      badgeText: '🔥 Keep it up!',
      badgeType: 'streak',
      color: 'purple',
    },
    {
      id: 'stat_time',
      label: 'Total Study Time',
      value: '18.5',
      unit: 'hours',
      badgeText: '+12% this week',
      badgeType: 'positive',
      color: 'teal',
    },
    {
      id: 'stat_lessons',
      label: 'Completed Lessons',
      value: '24',
      unit: 'lessons',
      badgeText: '+6 this week',
      badgeType: 'positive',
      color: 'blue',
    },
    {
      id: 'stat_vocab',
      label: 'Vocabulary Learned',
      value: '318',
      unit: 'words',
      badgeText: '+42 this week',
      badgeType: 'positive',
      color: 'yellow',
    },
  ],
  continueLearning: {
    unitBadge: 'Unit 3',
    title: 'Daily Life',
    progressText: '3/5 lessons',
    progressPercent: 60,
    description: 'Learn useful vocabulary and expressions for daily conversations.',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80',
  },
  weeklyActivity: {
    chart: [
      { day: 'Mon', height: 45, active: false },
      { day: 'Tue', height: 65, active: false },
      { day: 'Wed', height: 40, active: false },
      { day: 'Thu', height: 75, active: false },
      { day: 'Fri', height: 95, active: true },
      { day: 'Sat', height: 60, active: false },
      { day: 'Sun', height: 50, active: false },
    ],
    lessonsCount: 5,
    practicesCount: 3,
    testsCount: 1,
  },
  popularLessons: [
    {
      id: 'pl_1',
      badge: 'Vocabulary',
      title: 'Travel & Tourism',
      duration: '12 min',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=350&q=80',
    },
    {
      id: 'pl_2',
      badge: 'Grammar',
      title: 'Present Simple',
      duration: '15 min',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=350&q=80',
    },
    {
      id: 'pl_3',
      badge: 'Listening',
      title: 'Daily Conversations',
      duration: '18 min',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=350&q=80',
    },
    {
      id: 'pl_4',
      badge: 'Speaking',
      title: 'Work & Career',
      duration: '20 min',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=350&q=80',
    },
  ],
  vocabulary: [
    { id: 'voc_1', word: 'opportunity', phonetic: "/'ɑː.pər'tuː.nə.ti/", cefr: 'A1' },
    { id: 'voc_2', word: 'improve', phonetic: "/ɪm'pruːv/", cefr: 'A2' },
    { id: 'voc_3', word: 'communication', phonetic: "/kəˌmjuː.nɪ'keɪ.ʃn/", cefr: 'B1' },
    { id: 'voc_4', word: 'confidence', phonetic: "/'kɑːn.fɪ.dəns/", cefr: 'B1' },
  ],
  topLearners: [
    {
      rank: 1,
      name: 'Minh Anh',
      hours: 42.5,
      avatarUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      crown: '👑',
    },
    {
      rank: 2,
      name: 'Hoàng Nam',
      hours: 38.2,
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      crown: '👑',
    },
    {
      rank: 3,
      name: 'Lan Phương',
      hours: 36.7,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      crown: '👑',
    },
    {
      rank: 4,
      name: 'Tuấn Kiệt',
      hours: 32.1,
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    {
      rank: 5,
      name: 'Thảo Vy',
      hours: 28.4,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    },
  ],
};
