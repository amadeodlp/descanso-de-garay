import React from 'react';
import { MapPin, Phone, Mail, Clock, Mountain } from 'lucide-react';
import { Typography, Button, InstagramIcon, FacebookIcon } from '../atoms';

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-earth-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Mountain size={32} className="text-primary-400" />
              <Typography variant="h4" color="white" weight="bold">
                Complejo Costa Garay
              </Typography>
            </div>
            <Typography variant="body" className="text-earth-300 mb-6 max-w-md">
              Un refugio de tranquilidad a metros del Lago Los Molinos, Córdoba, donde cada momento 
              se convierte en un recuerdo inolvidable. Extenso parque con pileta, juegos y kayak para toda la familia.
            </Typography>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/complejo.costa.garay/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-earth-800 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-earth-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <Typography variant="h5" color="white" weight="semibold" className="mb-6">
              Contacto
            </Typography>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <Typography variant="body" className="text-earth-300">
                    Av. Central s/n<br />
                    X5189 Potrero de Garay<br />
                    Córdoba, Argentina
                  </Typography>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <Typography variant="body" className="text-earth-300">
                  +54 11-36073641
                </Typography>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <Typography variant="body" className="text-earth-300">
                  info@complejocostagaray.com
                </Typography>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <Typography variant="body" className="text-earth-300">
                    Check-in: 15:00 hs<br />
                    Check-out: 11:00 hs
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h5" color="white" weight="semibold" className="mb-6">
              Enlaces Rápidos
            </Typography>
            <div className="space-y-3">
              <a href="#cabanas" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Nuestras Cabañas
              </a>
              <a href="#experiencias" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Experiencias
              </a>
              <a href="#ubicacion" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Ubicación
              </a>
              <a href="#" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Reservas
              </a>
              <a href="#" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Políticas
              </a>
              <a href="#" className="block text-earth-300 hover:text-primary-400 transition-colors">
                Preguntas Frecuentes
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-earth-800 py-8">
          <div className="max-w-md mx-auto text-center">
            <Typography variant="h5" color="white" weight="semibold" className="mb-4">
              Mantenete Conectado
            </Typography>
            <Typography variant="body" className="text-earth-300 mb-6">
              Recibí ofertas exclusivas y novedades sobre nuestras experiencias serranas.
            </Typography>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-earth-800 text-white placeholder-earth-400 rounded-lg border border-earth-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="caption" className="text-earth-400">
              © 2025 Complejo Costa Garay. Todos los derechos reservados.
            </Typography>
            <div className="flex gap-6">
              <a href="#" className="text-earth-400 hover:text-primary-400 transition-colors text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-earth-400 hover:text-primary-400 transition-colors text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
