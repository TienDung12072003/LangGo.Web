import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/shared/lib';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'lavender' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'langgo-btn',
        `langgo-btn--${variant}`,
        `langgo-btn--${size}`,
        className
      )}
      {...props}
    >
      {icon && <span className="langgo-btn__icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
