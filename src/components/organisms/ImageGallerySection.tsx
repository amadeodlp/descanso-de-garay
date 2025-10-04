import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Typography, OptimizedImage } from '../atoms';

// Import all available images
const img01 = "/descanso-de-garay/images/01.jpg"
const img03 = "/descanso-de-garay/images/03.jpg"
const img05 = "/descanso-de-garay/images/05.jpg"
const img06 = "/descanso-de-garay/images/06.jpg"
const img08 = "/descanso-de-garay/images/08.jpg"
const img09 = "/descanso-de-garay/images/09.jpg"
const img13 = "/descanso-de-garay/images/13.jpg"
const img14 = "/descanso-de-garay/images/14.jpg"
const img15 = "/descanso-de-garay/images/15.jpg"
const img17 = "/descanso-de-garay/images/17.jpg"

export const ImageGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: img01, alt: 'Vista exterior del complejo' },
    { src: img03, alt: 'Área de piscina y recreación' },
    { src: img05, alt: 'Cabañas y jardines' },
    { src: img06, alt: 'Espacios exteriores' },
    { src: img08, alt: 'Zona de juegos y deportes' },
    { src: img09, alt: 'Vistas del lago Los Molinos' },
    { src: img13, alt: 'Instalaciones del complejo' },
    { src: img14, alt: 'Áreas comunes' },
    { src: img15, alt: 'Paisajes y naturaleza' },
    { src: img17, alt: 'Entorno natural' },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="galeria" className="gallery-section section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6 text-gradient">
            Galería de Imágenes
          </Typography>
          <Typography variant="subtitle" color="secondary" className="max-w-3xl mx-auto">
            Descubrí la belleza de nuestro complejo a metros del Lago Los Molinos. 
            Cada imagen cuenta la historia de momentos inolvidables esperándote.
          </Typography>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openModal(index)}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Ver imagen
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
                aria-label="Cerrar galería"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
