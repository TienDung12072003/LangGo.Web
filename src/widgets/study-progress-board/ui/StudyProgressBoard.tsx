import React from 'react';
import { Target, Clock, Zap, BookCheck, Play } from 'lucide-react';
import { GlassCard, ProgressBar, Button } from '@/shared/ui';
import { User } from '@/entities/user';
import './progress-board.css';

interface StudyProgressBoardProps {
  user: User;
  onQuickPractice: () => void;
}

export const StudyProgressBoard: React.FC<StudyProgressBoardProps> = ({
  user,
  onQuickPractice,
}) => {
  const goalPercent = Math.min(
    Math.round((user.todayMinutesLearned / user.dailyGoalMinutes) * 100),
    100
  );

  return (
    <GlassCard padding="lg" className="progress-board">
      <div className="progress-board__banner">
        <div>
          <h2 className="progress-board__welcome-title">
            Chào buổi chiều, {user.name}! 👋
          </h2>
          <p className="progress-board__welcome-sub">
            Hôm nay bạn đã hoàn thành <strong>{user.todayMinutesLearned}</strong> /{' '}
            {user.dailyGoalMinutes} phút mục tiêu học tập. Tiếp tục duy trì phong độ nhé!
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={<Play size={16} />}
          onClick={onQuickPractice}
        >
          Luyện Flashcard Nhanh
        </Button>
      </div>

      {/* Progress to daily goal */}
      <div style={{ maxWidth: 640 }}>
        <ProgressBar
          value={user.todayMinutesLearned}
          max={user.dailyGoalMinutes}
          label="Tiến độ mục tiêu hôm nay"
          showPercentage
          variant="cyan"
          size="md"
        />
      </div>

      {/* 4 Stats Cards */}
      <div className="progress-board__stats-grid">
        <div className="progress-board__stat-card">
          <div
            className="progress-board__stat-icon"
            style={{ background: 'rgba(59, 130, 246, 0.12)', color: 'var(--color-primary-blue)' }}
          >
            <Clock size={22} />
          </div>
          <div>
            <div className="progress-board__stat-value">{user.todayMinutesLearned}p</div>
            <div className="progress-board__stat-label">Thời gian hôm nay</div>
          </div>
        </div>

        <div className="progress-board__stat-card">
          <div
            className="progress-board__stat-icon"
            style={{ background: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-cyan-hover)' }}
          >
            <BookCheck size={22} />
          </div>
          <div>
            <div className="progress-board__stat-value">128</div>
            <div className="progress-board__stat-label">Từ vựng đã thuộc</div>
          </div>
        </div>

        <div className="progress-board__stat-card">
          <div
            className="progress-board__stat-icon"
            style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--color-lavender)' }}
          >
            <Zap size={22} />
          </div>
          <div>
            <div className="progress-board__stat-value">{user.xp}</div>
            <div className="progress-board__stat-label">Tổng điểm XP</div>
          </div>
        </div>

        <div className="progress-board__stat-card">
          <div
            className="progress-board__stat-icon"
            style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--color-success)' }}
          >
            <Target size={22} />
          </div>
          <div>
            <div className="progress-board__stat-value">{goalPercent}%</div>
            <div className="progress-board__stat-label">Chỉ tiêu ngày</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
