import React from 'react';
import { Navigation, HeroSection, CabinsSection, AmenitiesSection, ImageGallerySection, ExperiencesSection, Footer } from '../organisms';
import { WhatsAppButton } from '../molecules';

export const LandingPageTemplate: React.FC = () => {
  return (
    <div className="landing-page">
      <Navigation />
      <main>
        <HeroSection />
        <CabinsSection />
        <AmenitiesSection />
        <ImageGallerySection />
        <ExperiencesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
