
import React from 'react';

const TrainingHero = () => {
  return (
    <div className="relative py-16 md:py-24" style={{
      backgroundImage: 'url("/lovable-uploads/a743027b-7ee5-4ca6-b29e-aedfc85b0731.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
      <div className="teknet-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Catalogue des Formations Teknet Formation</h1>
          <p className="text-xl text-white/90 mb-8">Explorer notre catalogue complet de formations pour développer vos compétences et celles de vos équipes</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
