import React from 'react';
import { Sparkles, Volume2 } from 'lucide-react';
import { LoginForm } from '@/features/auth';
import './login-page.css';

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const speak = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis?.speak(utterance);
  };

  return (
    <div className="langgo-login-wrapper">
      <div className="langgo-login-card">
        {/* Left Visual Column */}
        <div className="langgo-login-visual">
          {/* Brand */}
          <div className="langgo-login-brand">
            <div className="langgo-login-brand-icon">
              <Sparkles size={20} />
            </div>
            <span className="langgo-login-brand-title">LangGo</span>
          </div>

          {/* Headline */}
          <div className="langgo-login-headline-wrap">
            <h1 className="langgo-login-headline">
              Your next chapter in <span>English</span> starts here.
            </h1>
            <p className="langgo-login-subline">
              Small steps today. Brighter possibilities tomorrow.
            </p>
          </div>

          {/* Floating Vocabulary Chips & Student Illustration */}
          <div className="langgo-floating-chips-wrap">
            {/* 1. improve chip */}
            <div
              className="langgo-floating-chip langgo-floating-chip--improve"
              onClick={() => speak('improve')}
              title="Click to hear pronunciation"
            >
              <Volume2 size={13} className="langgo-chip-icon" />
              <div className="langgo-chip-text">
                <span className="langgo-chip-word">improve</span>
                <span className="langgo-chip-ipa">/ɪmˈpruːv/</span>
              </div>
            </div>

            {/* 2. confidence chip */}
            <div
              className="langgo-floating-chip langgo-floating-chip--confidence"
              onClick={() => speak('confidence')}
              title="Click to hear pronunciation"
            >
              <Volume2 size={13} className="langgo-chip-icon" />
              <div className="langgo-chip-text">
                <span className="langgo-chip-word">confidence</span>
                <span className="langgo-chip-ipa">/ˈkɑːn.fɪ.dəns/</span>
              </div>
            </div>

            {/* 3. progress chip */}
            <div
              className="langgo-floating-chip langgo-floating-chip--progress"
              onClick={() => speak('progress')}
              title="Click to hear pronunciation"
            >
              <Volume2 size={13} className="langgo-chip-icon" />
              <div className="langgo-chip-text">
                <span className="langgo-chip-word">progress</span>
                <span className="langgo-chip-ipa">/ˈprɑː.ɡres/</span>
              </div>
            </div>

            {/* Decorative sparkle accents from mockup */}
            <span className="langgo-sparkle-star langgo-sparkle-star--1">✨</span>
            <span className="langgo-sparkle-star langgo-sparkle-star--2">✦</span>

            {/* Exact Artwork Illustration of Studying Girl */}
            <img
              src="/images/student-illustration.png"
              alt="Student learning English"
              className="langgo-login-illustration"
            />
          </div>
        </div>

        {/* Right Form Column */}
        <div className="langgo-login-form-col">
          <LoginForm onSuccess={onLoginSuccess} />
        </div>
      </div>
    </div>
  );
};
