import React from 'react';
import { Wifi, Monitor, Thermometer, Waves, Car, Home, Utensils, Bath, TreePine, MapPin } from 'lucide-react';
import { Typography } from '../atoms';

export const AmenitiesSection: React.FC = () => {
  const amenityCategories = [
    {
      icon: <Home size={28} />,
      title: '2 Unidades Totalmente Equipadas',
      items: [
        'Con capacidad para 4 personas cada una',
        'Estacionamiento techado propio para cada unidad',
        'Piscina al aire libre',
        'Mini cancha de fútbol',
        'Sombrillas fijas',
        'Wi-Fi en todo el predio',
        'DirecTV Prepago'
      ]
    },
    {
      icon: <Utensils size={28} />,
      title: 'Cocina Completa',
      items: [
        'Utensilios de cocina',
        'Vajilla completa',
        'Pava eléctrica',
        'Anafe doble',
        'Microondas',
        'Heladera',
        'Barra'
      ]
    },
    {
      icon: <Home size={28} />,
      title: 'Habitación',
      items: [
        'Cama de 2 plazas',
        'Ropa de cama',
        'Veladores en ambos lados de la cama',
        'Mesas de luz',
        'Ventilador de techo con luz',
        'Caja de seguridad',
        'Ropero y estantería',
        'Calefactor eléctrico empotrado'
      ]
    },
    {
      icon: <Bath size={28} />,
      title: 'Baño Completo',
      items: [
        'Espejo',
        'Lavatorio',
        'Baño privado',
        'Ducha',
        'Inodoro',
        'Bidet',
        'Secador de toallas eléctrico',
        'Tender ropa interior',
        'Estantes porta objetos'
      ]
    },
    {
      icon: <Utensils size={28} />,
      title: 'Comedor & Parrilla',
      items: [
        'Mesa y 4 sillas',
        '2 calefactores eléctricos empotrados',
        'T.V. 32 Pulgadas de pantalla plana',
        'DirecTV Prepago',
        '2 camas de 1 plaza',
        'Ropa de cama',
        'Luz de emergencia',
        'Turbo ventilador transportable',
        'Calefactor Vitrocerámico transportable'
      ]
    },
    {
      icon: <TreePine size={28} />,
      title: 'Espacios Exteriores',
      items: [
        'Zona techada',
        'Mesa y sillas de jardín blancas',
        'Banco doble de madera',
        'Parrilla',
        'Utensilios de parrilla'
      ]
    },
    {
      icon: <Waves size={28} />,
      title: 'Piscina & Recreación',
      items: [
        'Mini cancha de fútbol',
        'Sombrillas fijas',
        '4 Sillones y mesita plásticas negras, para cada unidad',
        'Zona para adultos',
        'Zona poco profunda para niños pequeños',
        'Vista a la piscina',
        'Vista al jardín',
        'Vista al lago y las sierras'
      ]
    },
    {
      icon: <MapPin size={28} />,
      title: 'Ubicación & Atracciones',
      items: [
        'Dique Los Molinos - 15 min',
        'Los Reartes - 20 min',
        'Alta Gracia - 35 min',
        'Villa General Belgrano - 30 min',
        'Santa Rosa de Calamuchita - 45 min',
        'Autódromo Oscar Cabalen - 45 min',
        'La Cumbrecita - 60 min',
        'Villa del Dique - 60 min',
        'Villa Carlos Paz - 70 min',
        'Parque Nacional el condorito - 70 min',
        'Córdoba Capital - 80 min',
        'Villa Alpina - 90 min',
        'Río Tercero - 90 min',
        'Mina Clavero - 120 min'
      ]
    }
  ];

  return (
    <section id="comodidades" className="amenities-section section bg-gradient-to-br from-earth-50 to-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6 text-gradient">
            Comodidades y Servicios
          </Typography>
          <Typography variant="subtitle" color="secondary" className="max-w-3xl mx-auto">
            Cada detalle pensado para tu comodidad. Descubrí todo lo que tenemos preparado 
            para hacer de tu estadía una experiencia inolvidable.
          </Typography>
        </div>

        {/* Icon Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
              <Wifi size={24} />
            </div>
            <Typography variant="caption" weight="medium">WiFi</Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
              <Monitor size={24} />
            </div>
            <Typography variant="caption" weight="medium">TV</Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
              <Thermometer size={24} />
            </div>
            <Typography variant="caption" weight="medium">Calefacción</Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
              <Waves size={24} />
            </div>
            <Typography variant="caption" weight="medium">Pileta</Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
              <Car size={24} />
            </div>
            <Typography variant="caption" weight="medium">Estacionamiento</Typography>
          </div>
        </div>

        {/* Detailed Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenityCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-forest-500 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <Typography variant="h6" weight="semibold" className="flex-1">
                  {category.title}
                </Typography>
              </div>
              
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="caption" color="secondary" className="leading-relaxed">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-forest-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Typography variant="h3" color="white" className="mb-4">
            Todo Incluido para tu Comodidad
          </Typography>
          <Typography variant="body" color="white" className="mb-6 max-w-2xl mx-auto opacity-90">
            No tenés que preocuparte por nada. Desde la ropa de cama hasta los utensilios de cocina, 
            todo está preparado para que solo disfrutes de tu estadía en el lago.
          </Typography>
        </div>
      </div>
    </section>
  );
};
