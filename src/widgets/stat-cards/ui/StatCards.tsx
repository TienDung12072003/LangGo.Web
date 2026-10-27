import React from 'react';
import { Flame, Clock, CheckSquare, Star, ChevronRight, TrendingUp } from 'lucide-react';
import { StatMetric } from '@/shared/api';
import './stat-cards.css';

interface StatCardsProps {
  stats: StatMetric[];
}

export const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  const getIcon = (color: string) => {
    switch (color) {
      case 'purple':
        return <Flame size={20} />;
      case 'teal':
        return <Clock size={20} />;
      case 'blue':
        return <CheckSquare size={20} />;
      case 'yellow':
      default:
        return <Star size={20} />;
    }
  };

  return (
    <div className="langgo-stat-grid">
      {stats.map((metric) => (
        <div key={metric.id} className="langgo-stat-card">
          <div className="langgo-stat-card__top">
            <div
              className={`langgo-stat-card__icon-box langgo-stat-card__icon-box--${metric.color}`}
            >
              {getIcon(metric.color)}
            </div>
            <span className="langgo-stat-card__label">{metric.label}</span>
          </div>

          <div className="langgo-stat-card__value">
            {metric.value} <span>{metric.unit}</span>
          </div>

          <div className="langgo-stat-card__footer">
            <span
              className={`langgo-stat-card__badge langgo-stat-card__badge--${metric.badgeType}`}
            >
              {metric.badgeType === 'positive' && <TrendingUp size={12} />}
              {metric.badgeText}
            </span>
            <ChevronRight size={16} className="langgo-stat-card__arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};
