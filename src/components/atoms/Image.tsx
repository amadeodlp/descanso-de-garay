import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  lazy = true,
  objectFit = 'cover',
}) => {
  const objectFitClass = `object-${objectFit}`;
  
  return (
    <img
      src={src}
      alt={alt}
      className={`${objectFitClass} ${className}`}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};
