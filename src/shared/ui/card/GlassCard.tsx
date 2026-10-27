import React, { HTMLAttributes } from 'react';
import { cn } from '@/shared/lib';
import './GlassCard.css';

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  solid?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  padding = 'md',
  interactive = false,
  solid = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'langgo-card',
        `langgo-card--p-${padding}`,
        interactive && 'langgo-card--interactive',
        solid && 'langgo-card--solid',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
