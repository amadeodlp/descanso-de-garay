import React from 'react';
import { Button, Typography, OptimizedImage } from '../atoms';

interface CabinCardProps {
  title: string;
  description: string;
  imageSrc: string;
  capacity: string;
  amenities: string[];
  className?: string;
}

export const CabinCard: React.FC<CabinCardProps> = ({
  title,
  description,
  imageSrc,
  capacity,
  amenities,
  className = '',
}) => {
  return (
    <div className={`cabin-card card hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}>
      <div className="cabin-card__image relative h-64 overflow-hidden">
        <OptimizedImage
          src={imageSrc}
          alt={title}
          fallbackSrc={imageSrc}
          className="w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="cabin-card__content p-6">
        <Typography variant="h4" className="mb-2">
          {title}
        </Typography>
        
        <Typography variant="caption" color="secondary" className="mb-3">
          {capacity}
        </Typography>
        
        <Typography variant="body" color="secondary" className="mb-4 line-clamp-3">
          {description}
        </Typography>
        
        <div className="cabin-card__amenities mb-6">
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="bg-earth-100 text-earth-700 text-xs px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="text-earth-500 text-xs">
                +{amenities.length - 3} más
              </span>
            )}
          </div>
        </div>
        
        <Button variant="primary" className="w-full">
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};
