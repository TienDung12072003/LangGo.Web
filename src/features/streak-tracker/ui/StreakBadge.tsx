import React from 'react';
import { Flame } from 'lucide-react';
import './StreakBadge.css';

interface StreakBadgeProps {
  streakDays: number;
}

export const StreakBadge: React.FC<StreakBadgeProps> = ({ streakDays }) => {
  return (
    <div className="langgo-streak" title={`Chuỗi học tập liên tục: ${streakDays} ngày!`}>
      <div className="langgo-streak__icon-wrap">
        <Flame size={18} className="langgo-streak__fire" />
      </div>
      <div className="langgo-streak__text">
        <span className="langgo-streak__days">{streakDays}</span>
        <span className="langgo-streak__label">ngày streak</span>
      </div>
    </div>
  );
};
