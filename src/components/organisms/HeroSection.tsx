import React from 'react';
import { Button, Typography } from '../atoms';

// Import hero background image
import heroImg from '../../assets/images/06.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Real Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg}
          alt="Vista del Complejo Costa Garay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="hero-section__content relative z-20 container text-center">
        <div className="animate-fade-in">
          <Typography 
          variant="h1" 
          color="white" 
          weight="bold" 
          className="mb-6 text-shadow-lg animate-slide-up"
          >
          Complejo Costa Garay
          </Typography>
          
          <Typography 
          variant="subtitle" 
          color="white" 
          className="mb-8 max-w-2xl mx-auto text-shadow animate-slide-up opacity-90"
          style={{animationDelay: '0.2s'}}
          >
          Experiencia única a metros del Lago Los Molinos, Córdoba. Cabañas de lujo con extenso parque, 
          pileta y actividades para toda la familia, donde cada amanecer es una invitación a conectar con la naturaleza.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button variant="primary" size="lg" className="shadow-lg">
              Explorar Cabañas
            </Button>
            <Button variant="ghost" size="lg">
              Ver Experiencias
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
