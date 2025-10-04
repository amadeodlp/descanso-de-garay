import React from 'react';
import { Typography, Button } from '../atoms';
import { CabinCard } from '../molecules';

// Reference public images directly
const img01 = '/descanso-de-garay/images/01.jpg';
const img03 = '/descanso-de-garay/images/03.jpg';

export const CabinsSection: React.FC = () => {
  const cabins = [
    {
      title: 'Cabaña Vista Lago',
      description: 'A metros del Lago Los Molinos, esta cabaña ofrece acceso directo a nuestro extenso parque recreativo. Perfecta para parejas que buscan relajación con actividades acuáticas.',
      imageSrc: img01,
      capacity: 'Hasta 4 personas',
      amenities: ['Acceso al lago', 'Chimenea', 'Cocina completa', 'WiFi', 'Acceso al parque'],
    },
    {
      title: 'Cabaña del Mirador',
      description: 'Ubicación estratégica con vistas panorámicas del Lago Los Molinos. Ideal para familias que desean disfrutar de la pileta, fútbol y actividades del extenso parque.',
      imageSrc: img03,
      capacity: 'Hasta 4 personas',
      amenities: ['Vista panorámica', 'Acceso a pileta', 'Terraza amplia', 'Barbacoa', 'Acceso completo al parque'],
    },
  ];

  return (
    <section id="cabanas" className="cabins-section section bg-earth-50">
      <div className="container">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6 text-gradient">
            Nuestras Cabañas
          </Typography>
          <Typography
            variant="subtitle"
            color="secondary"
            className="max-w-3xl mx-auto"
          >
            Cada cabaña ha sido diseñada para ofrecer una experiencia única a
            metros del Lago Los Molinos, con nuestro extenso parque que cuenta
            con pileta, área de juegos y espacios de relajación.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cabins.map(cabin => (
            <CabinCard
              key={cabin.title}
              {...cabin}
              className="animate-slide-up"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Typography variant="body" color="secondary" className="mb-6">
            ¿Necesitás algo especial? Contactanos para opciones personalizadas.
          </Typography>
          <Button variant="primary" size="lg">
            Ver Todas las Cabañas
          </Button>
        </div>
      </div>
    </section>
  )
};
