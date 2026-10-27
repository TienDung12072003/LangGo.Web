import React, { useState } from 'react';
import { AppSidebar } from '@/widgets/app-sidebar';
import { AppHeader } from '@/widgets/app-header';
import { HeroBanner } from '@/widgets/hero-banner';
import { StatCards } from '@/widgets/stat-cards';
import { ContinueLearningCard } from '@/widgets/continue-learning';
import { WeeklyActivityCard } from '@/widgets/weekly-activity';
import { PopularLessons } from '@/widgets/popular-lessons';
import { VocabularyPreview } from '@/widgets/vocabulary-preview';
import { RightStatsPanel } from '@/widgets/right-stats-panel';
import { PracticeSessionModal } from '@/features/practice-vocabulary';
import { WordItem } from '@/entities/vocabulary';
import { initialDashboardData } from '@/shared/api';
import { useAuth } from '@/features/auth';
import './dashboard.css';

const practiceFlashcards: WordItem[] = [
  {
    id: 'w1',
    word: 'opportunity',
    phonetic: 'ɑː.pərˈtuː.nə.ti',
    partOfSpeech: 'noun',
    meaningVi: 'Cơ hội, thời cơ thuận lợi',
    exampleEn: 'Education provides an opportunity for personal growth.',
    exampleVi: 'Giáo dục mang đến cơ hội để phát triển bản thân.',
    masteryLevel: 4,
  },
  {
    id: 'w2',
    word: 'improve',
    phonetic: 'ɪmˈpruːv',
    partOfSpeech: 'verb',
    meaningVi: 'Cải thiện, nâng cao chất lượng',
    exampleEn: 'Practice every day to improve your pronunciation.',
    exampleVi: 'Luyện tập mỗi ngày để cải thiện phát âm của bạn.',
    masteryLevel: 3,
  },
  {
    id: 'w3',
    word: 'communication',
    phonetic: 'kəˌmjuː.nɪˈkeɪ.ʃn',
    partOfSpeech: 'noun',
    meaningVi: 'Giao tiếp, truyền đạt thông tin',
    exampleEn: 'Good communication is key to teamwork success.',
    exampleVi: 'Giao tiếp tốt là chìa khóa thành công của làm việc nhóm.',
    masteryLevel: 4,
  },
  {
    id: 'w4',
    word: 'confidence',
    phonetic: 'ˈkɑːn.fɪ.dəns',
    partOfSpeech: 'noun',
    meaningVi: 'Sự tự tin, lòng tin',
    exampleEn: 'Speaking English often helps build your confidence.',
    exampleVi: 'Nói tiếng Anh thường xuyên giúp bồi đắp sự tự tin.',
    masteryLevel: 5,
  },
];

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [data] = useState(initialDashboardData);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);

  const currentUser = user || data.user;

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        {/* 1. Left Sidebar Column */}
        <AppSidebar />

        {/* 2. Center Main Column */}
        <main className="dashboard-center">
          {/* Header */}
          <AppHeader
            userName={currentUser.name}
            userLevel={currentUser.level}
            avatarUrl={currentUser.avatarUrl}
          />

          {/* Hero Banner */}
          <HeroBanner
            userName={currentUser.name.split(' ').pop() || 'Dũng'}
            onContinueLearning={() => setIsPracticeOpen(true)}
          />

          {/* 4 Summary Stat Cards */}
          <StatCards stats={data.stats} />

          {/* Middle Row: Continue Learning + Weekly Activity */}
          <div className="dashboard-grid-row">
            <ContinueLearningCard
              data={data.continueLearning}
              onContinue={() => setIsPracticeOpen(true)}
            />
            <WeeklyActivityCard
              chart={data.weeklyActivity.chart}
              lessonsCount={data.weeklyActivity.lessonsCount}
              practicesCount={data.weeklyActivity.practicesCount}
              testsCount={data.weeklyActivity.testsCount}
            />
          </div>

          {/* Bottom Row: Popular Lessons + Your Vocabulary */}
          <div className="dashboard-grid-row" style={{ marginBottom: 0 }}>
            <PopularLessons lessons={data.popularLessons} />
            <VocabularyPreview
              words={data.vocabulary}
              onWordClick={() => setIsPracticeOpen(true)}
            />
          </div>
        </main>

        {/* 3. Right Stats Panel Column */}
        <RightStatsPanel
          streakDays={currentUser.streakDays}
          learners={data.topLearners}
          onSetNewGoal={() => setIsPracticeOpen(true)}
        />
      </div>

      {/* Interactive Practice Flashcard Modal */}
      <PracticeSessionModal
        words={practiceFlashcards}
        isOpen={isPracticeOpen}
        onClose={() => setIsPracticeOpen(false)}
      />
    </div>
  );
};
