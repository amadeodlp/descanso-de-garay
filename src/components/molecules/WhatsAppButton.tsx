import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+541136073641'; // Updated WhatsApp number
  const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre las cabañas en Complejo Costa Garay.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};
