import React from 'react';
import { cn } from '@/shared/lib';
import './ProgressBar.css';

export interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'blue' | 'cyan' | 'lavender';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'cyan',
  size = 'md',
  className,
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  return (
    <div className={cn('langgo-progress', className)}>
      {(label || showPercentage) && (
        <div className="langgo-progress__labels">
          {label && <span>{label}</span>}
          {showPercentage && <span>{percentage}%</span>}
        </div>
      )}
      <div className={cn('langgo-progress__track', `langgo-progress__track--${size}`)}>
        <div
          className={cn('langgo-progress__bar', `langgo-progress__bar--${variant}`)}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};
