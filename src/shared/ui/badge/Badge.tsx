import React, { HTMLAttributes } from 'react';
import { cn } from '@/shared/lib';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'cyan' | 'lavender' | 'success' | 'warning';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'blue',
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <span className={cn('langgo-badge', `langgo-badge--${variant}`, className)} {...props}>
      {icon && <span className="langgo-badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
