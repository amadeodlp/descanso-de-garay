import React from 'react';
import { Mountain, Waves, Trees, Sun, Users, Utensils } from 'lucide-react';
import { Typography, Button } from '../atoms';
import { FeatureCard } from '../molecules';

export const ExperiencesSection: React.FC = () => {
  const experiences = [
    {
      icon: <Mountain size={28} />,
      title: 'Extenso Parque Recreativo',
      description: 'Nuestro extenso parque cuenta con pileta con área baja para niños, arcos para jugar al fútbol y dos sombrillas fijas para disfrutar del exterior en familia.',
    },
    {
      icon: <Waves size={28} />,
      title: 'Kayak en Lago Los Molinos',
      description: 'Disfrutá del Lago Los Molinos con kayak, nuestra actividad principal. Navega sus aguas cristalinas rodeado de un paisaje único, ideal para toda la familia.',
    },
    {
      icon: <Trees size={28} />,
      title: 'Observación de Flora y Fauna',
      description: 'Conocé la biodiversidad única de las sierras. Avistaje de aves autóctonas, plantas medicinales y la vida silvestre en su hábitat natural.',
    },
    {
      icon: <Sun size={28} />,
      title: 'Yoga y Meditación',
      description: 'Conectá con vos mismo en espacios diseñados para la relajación. Clases de yoga al amanecer y sesiones de meditación bajo las estrellas.',
    },
    {
      icon: <Users size={28} />,
      title: 'Experiencias Culturales',
      description: 'Conocé la cultura serrana auténtica. Talleres de artesanías locales, música folclórica y encuentros con artistas de la región.',
    },
    {
      icon: <Utensils size={28} />,
      title: 'Gastronomía Regional',
      description: 'Degustá sabores únicos de la región. Asados tradicionales, productos de la huerta orgánica y vinos de bodegas cordobesas.',
    },
  ];

  return (
    <section id="experiencias" className="experiences-section section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
          <pattern id="pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6">
            Experiencias Únicas
          </Typography>
          <Typography variant="subtitle" color="secondary" className="max-w-3xl mx-auto">
            Más que un lugar para descansar, Complejo Costa Garay es una puerta de entrada 
            a experiencias únicas a metros del Lago Los Molinos, con nuestro extenso parque y actividades para toda la familia.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <FeatureCard
              key={experience.title}
              {...experience}
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-forest-50 rounded-2xl p-8 md:p-12 text-center">
          <Typography variant="h3" className="mb-4 text-gradient">
            Experiencia Todo Incluido
          </Typography>
          <Typography variant="body" color="secondary" className="mb-6 max-w-2xl mx-auto">
            Creamos paquetes personalizados que combinan alojamiento, actividades y gastronomía 
            para que solo te preocupes por disfrutar cada momento.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Ver Paquetes
            </Button>
            <Button variant="secondary" size="lg">
              Personalizar Experiencia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
