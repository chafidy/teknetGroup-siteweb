
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Partner } from './PartnerCard';

interface PartnersEcosystemProps {
  partners: Partner[];
}

const PartnersEcosystem = ({ partners }: PartnersEcosystemProps) => {
  // Filtrer pour s'assurer qu'on n'affiche que des partenaires avec des logos valides
  const filteredPartners = partners.filter(partner => 
    partner.logoUrl && 
    !['netguard', 'globaltech', 'usersafe', 'datacore'].includes(partner.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotation des logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex + 1 >= Math.max(0, filteredPartners.length - 6) ? 0 : prevIndex + 1
      );
    }, 3500);
    
    return () => clearInterval(interval);
  }, [filteredPartners.length]);

  // Sélectionner 6 logos à afficher en fonction de l'index courant
  const visiblePartners = filteredPartners.length > 6 
    ? [...filteredPartners.slice(currentIndex, currentIndex + 6), 
        ...filteredPartners.slice(0, Math.max(0, 6 - (filteredPartners.length - currentIndex)))]
    : filteredPartners;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4">
            Un écosystème complet
          </h2>
          <p className="text-gray-600 mb-6">
            Notre réseau de partenaires technologiques comprend les acteurs majeurs de différents 
            secteurs de la technologie, nous permettant de vous proposer des solutions complètes 
            et adaptées à vos besoins spécifiques.
          </p>
          <Button variant="default" className="bg-teknet-red hover:bg-red-700">
            Découvrir nos solutions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-6">
            {visiblePartners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex items-center justify-center p-2 transition-opacity duration-500"
              >
                <img 
                  src={partner.logoUrl} 
                  alt={`Logo ${partner.name}`} 
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersEcosystem;
