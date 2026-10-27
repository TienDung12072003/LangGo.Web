import React from 'react';
import { Play } from 'lucide-react';
import './hero-banner.css';

interface HeroBannerProps {
  userName?: string;
  onContinueLearning?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  userName = 'Dũng',
  onContinueLearning,
}) => {
  return (
    <div className="langgo-hero-banner">
      {/* Background soft hills */}
      <div className="langgo-hero-banner__hill-1" />
      <div className="langgo-hero-banner__hill-2" />

      {/* Content */}
      <div className="langgo-hero-banner__content">
        <h1 className="langgo-hero-banner__title">Good morning, {userName}! 👋</h1>
        <p className="langgo-hero-banner__desc">
          Today is a great day to improve your English skills. Keep going, you're doing amazing!
        </p>
        <button
          className="langgo-hero-banner__btn"
          onClick={onContinueLearning}
        >
          <Play size={14} fill="#FFFFFF" />
          <span>Continue Learning</span>
        </button>
      </div>

      {/* Right Graphic */}
      <div className="langgo-hero-banner__graphic">
        <span className="langgo-hero-banner__quote">Small steps Big dreams</span>
        {/* Exact Artwork Illustration of Studying Girl */}
        <img
          src="/images/student-illustration.png"
          alt="Student learning English"
          className="langgo-hero-banner__img"
        />
      </div>
    </div>
  );
};
