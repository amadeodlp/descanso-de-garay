import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  lazy?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  lazy = true,
  objectFit = 'cover',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(false);
    }
  };

  const objectFitClass = `object-${objectFit}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-earth-200 to-earth-300 animate-pulse flex items-center justify-center">
          <div className="text-earth-500 text-sm">Cargando...</div>
        </div>
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full ${objectFitClass} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-earth-200 to-earth-300 flex items-center justify-center">
          <div className="text-earth-600 text-center p-4">
            <div className="text-lg mb-2">📸</div>
            <div className="text-sm">Imagen no disponible</div>
          </div>
        </div>
      )}
    </div>
  );
};
