import React from 'react';
import { Typography } from '../atoms';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`feature-card text-center group ${className}`}>
      <div className="feature-card__icon mb-6 flex justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-forest-500 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <Typography variant="h5" className="mb-4 group-hover:text-primary-600 transition-colors">
        {title}
      </Typography>
      
      <Typography variant="body" color="secondary">
        {description}
      </Typography>
    </div>
  );
};
