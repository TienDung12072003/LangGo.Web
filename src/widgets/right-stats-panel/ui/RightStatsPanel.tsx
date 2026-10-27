import React from 'react';
import { Target, ChevronRight, Plus, ArrowRight } from 'lucide-react';
import { TopLearnerData } from '@/shared/api';
import './right-stats.css';

interface RightStatsPanelProps {
  streakDays: number;
  learners: TopLearnerData[];
  onSetNewGoal?: () => void;
}

export const RightStatsPanel: React.FC<RightStatsPanelProps> = ({
  streakDays,
  learners,
  onSetNewGoal,
}) => {
  return (
    <aside className="langgo-right-panel">
      {/* 1. Streak Ring Card */}
      <div className="langgo-streak-ring-card">
        {/* SVG Circular Progress Ring */}
        <div className="langgo-streak-ring-wrap">
          <svg width="130" height="130" viewBox="0 0 130 130">
            <defs>
              <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA07A" />
                <stop offset="50%" stopColor="#FF6B4A" />
                <stop offset="100%" stopColor="#F95738" />
              </linearGradient>
            </defs>
            {/* Background ring */}
            <circle
              cx="65"
              cy="65"
              r="52"
              fill="none"
              stroke="#FFE8DC"
              strokeWidth="9"
            />
            {/* Foreground gradient ring */}
            <circle
              cx="65"
              cy="65"
              r="52"
              fill="none"
              stroke="url(#streakGradient)"
              strokeWidth="9"
              strokeDasharray="326"
              strokeDashoffset="65"
              strokeLinecap="round"
              transform="rotate(-90 65 65)"
            />
          </svg>

          {/* Center Content */}
          <div className="langgo-streak-ring-center">
            <span className="langgo-streak-flame">🔥</span>
            <span className="langgo-streak-number">{streakDays}</span>
            <span className="langgo-streak-unit">Day Streak</span>
          </div>
        </div>

        {/* Motivational Quote */}
        <p className="langgo-streak-quote">
          "Consistency is the key to fluency."
        </p>

        {/* Action Button: Set a new goal */}
        <button className="langgo-set-goal-btn" onClick={onSetNewGoal}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Plus size={13} />
            <Target size={14} color="var(--color-primary-coral)" />
            <span>Set a new goal</span>
          </div>
          <ChevronRight size={14} />
        </button>

        {/* Landscape soft mountain graphic */}
        <div className="langgo-streak-mountain-bg" />
      </div>

      {/* 2. Top Learners Leaderboard Card */}
      <div className="langgo-top-learners-card">
        <div className="langgo-top-learners-header">
          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1E293B' }}>
            Top Learners
          </span>
          <span className="langgo-section-link">View all</span>
        </div>

        <div className="langgo-top-learners-list">
          {learners.map((learner) => (
            <div key={learner.rank} className="langgo-learner-row">
              <div className="langgo-learner-left">
                <span className="langgo-learner-rank">{learner.rank}</span>
                <img
                  src={learner.avatarUrl}
                  alt={learner.name}
                  className="langgo-learner-avatar"
                />
                <div className="langgo-learner-info">
                  <span className="langgo-learner-name">{learner.name}</span>
                  <span className="langgo-learner-hours">{learner.hours} hours</span>
                </div>
              </div>

              {learner.crown && (
                <span
                  className="langgo-learner-crown"
                  style={{
                    color:
                      learner.rank === 1
                        ? '#F59E0B'
                        : learner.rank === 2
                        ? '#94A3B8'
                        : '#CD7F32',
                  }}
                >
                  👑
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Fluency Inspiration Card */}
      <div className="langgo-fluency-card">
        <div className="langgo-fluency-text">
          Fluency is a journey, not a destination.
        </div>
        <button className="langgo-fluency-btn" aria-label="Khám phá tiếp">
          <ArrowRight size={14} />
        </button>
        <div className="langgo-fluency-deco" />
      </div>
    </aside>
  );
};
