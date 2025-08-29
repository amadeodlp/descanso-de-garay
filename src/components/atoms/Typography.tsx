import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'subtitle';
  className?: string;
  color?: 'primary' | 'secondary' | 'white' | 'inherit';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className = '',
  color = 'inherit',
  weight = 'normal',
}) => {
  const baseClasses = 'transition-colors duration-200';
  
  const variantClasses = {
    h1: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-serif leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-serif leading-tight',
    h4: 'text-xl md:text-2xl font-serif leading-tight',
    h5: 'text-lg md:text-xl font-serif leading-tight',
    h6: 'text-base md:text-lg font-serif leading-tight',
    body: 'text-base md:text-lg leading-relaxed',
    caption: 'text-sm leading-relaxed',
    subtitle: 'text-lg md:text-xl leading-relaxed',
  };

  const colorClasses = {
    primary: 'text-primary-600',
    secondary: 'text-earth-600',
    white: 'text-white',
    inherit: '',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';
  const classes = `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`;

  return React.createElement(Component, { className: classes }, children);
};
