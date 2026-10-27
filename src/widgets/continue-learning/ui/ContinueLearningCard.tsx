import React from 'react';
import { Play } from 'lucide-react';
import { ContinueLearningData } from '@/shared/api';
import './continue-learning.css';

interface ContinueLearningCardProps {
  data: ContinueLearningData;
  onContinue?: () => void;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  data,
  onContinue,
}) => {
  return (
    <div className="langgo-continue-learning-section">
      <div className="langgo-section-header">
        <h3 className="langgo-section-title">Continue Learning</h3>
        <span className="langgo-section-link">View all</span>
      </div>
      <div className="langgo-section-sub">
        You last studied: {data.unitBadge} - {data.title}
      </div>

      <div className="langgo-continue-card">
        {/* Thumbnail with Unit badge */}
        <div className="langgo-continue-card__thumb-wrap">
          <img
            src={data.thumbnailUrl}
            alt={data.title}
            className="langgo-continue-card__img"
          />
          <span className="langgo-continue-card__unit-badge">{data.unitBadge}</span>
        </div>

        {/* Content & Action */}
        <div className="langgo-continue-card__body">
          <div>
            <div className="langgo-continue-card__title">{data.title}</div>
            <div className="langgo-continue-card__progress-row">
              <span className="langgo-continue-card__progress-label">Progress</span>
              <span className="langgo-continue-card__progress-text">{data.progressText}</span>
            </div>
            <div className="langgo-continue-card__progress-track">
              <div
                className="langgo-continue-card__progress-fill"
                style={{ width: `${data.progressPercent}%` }}
              />
            </div>
            <p className="langgo-continue-card__desc">{data.description}</p>
          </div>

          <button className="langgo-continue-card__btn" onClick={onContinue}>
            <Play size={12} fill="#FFFFFF" />
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
