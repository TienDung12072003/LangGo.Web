import React from 'react';
import { ChevronDown, BookOpen, Target, FileText } from 'lucide-react';
import { WeeklyBarData } from '@/shared/api';
import './weekly-activity.css';

interface WeeklyActivityCardProps {
  chart: WeeklyBarData[];
  lessonsCount: number;
  practicesCount: number;
  testsCount: number;
}

export const WeeklyActivityCard: React.FC<WeeklyActivityCardProps> = ({
  chart,
  lessonsCount,
  practicesCount,
  testsCount,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="langgo-section-header" style={{ marginBottom: 12 }}>
        <h3 className="langgo-section-title">Weekly Activity</h3>
        <button className="langgo-weekly-card__dropdown-btn">
          <span>This week</span>
          <ChevronDown size={12} />
        </button>
      </div>

      <div className="langgo-weekly-card">
        {/* Bar Chart */}
        <div className="langgo-weekly-chart">
          {chart.map((item) => (
            <div key={item.day} className="langgo-weekly-bar-col">
              <div
                className={`langgo-weekly-bar ${
                  item.active ? 'langgo-weekly-bar--active' : ''
                }`}
                style={{ height: `${item.height}%` }}
              />
              <span className="langgo-weekly-day">{item.day}</span>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="langgo-weekly-stats">
          <div className="langgo-weekly-stat-item">
            <BookOpen size={15} color="#3B82F6" />
            <span>
              <strong>{lessonsCount}</strong> Lessons
            </span>
          </div>

          <div className="langgo-weekly-stat-item">
            <Target size={15} color="#EF4444" />
            <span>
              <strong>{practicesCount}</strong> Practices
            </span>
          </div>

          <div className="langgo-weekly-stat-item">
            <FileText size={15} color="#0D9488" />
            <span>
              <strong>{testsCount}</strong> Test
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
