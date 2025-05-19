
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  specialties: string[];
  website: string;
}

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <Card key={partner.id} className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="h-24 flex items-center justify-center mb-6 bg-gray-50 rounded-md p-4 group-hover:bg-white transition-colors">
          <img 
            src={partner.logoUrl} 
            alt={`Logo ${partner.name}`} 
            className="h-16 object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-teknet-gray-dark mb-2">{partner.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{partner.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-teknet-gray-dark mb-2">Spécialités:</h4>
          <div className="flex flex-wrap gap-2">
            {partner.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <a 
          href={partner.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-teknet-red hover:text-red-700 transition-colors group-hover:underline"
        >
          <Globe className="h-4 w-4 mr-1" /> Visiter le site
        </a>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
