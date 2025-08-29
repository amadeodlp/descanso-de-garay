import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  'aria-label': ariaLabel,
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center gap-2';
  const variantClasses = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    ghost: 'btn--ghost',
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
