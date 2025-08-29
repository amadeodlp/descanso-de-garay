import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { Button, Typography } from '../atoms';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cabañas', href: '#cabanas' },
    { label: 'Comodidades', href: '#comodidades' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`navigation fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="navigation__logo flex items-center gap-3">
            <Mountain className="text-white" size={32} />
            <Typography variant="h5" color="white" weight="bold">
              Complejo Costa Garay
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation__desktop hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="ghost" size="sm">
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navigation__toggle md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navigation__mobile md:hidden absolute top-full left-0 w-full glass border-t border-white/20">
            <div className="container py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="ghost" size="sm" className="mt-4 self-start">
                  Reservar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
