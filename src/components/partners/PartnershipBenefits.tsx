
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

interface PartnershipBenefitsProps {
  benefits: Benefit[];
}

const PartnershipBenefits = ({ benefits }: PartnershipBenefitsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-teknet-gray-dark mb-6">
        Notre programme de partenariat
      </h2>
      <p className="text-gray-700 max-w-3xl mb-8">
        TeknetGroup développe constamment son réseau de partenaires pour enrichir son offre 
        et répondre aux besoins évolutifs du marché. Notre programme de partenariat est conçu 
        pour créer des relations mutuellement bénéfiques et durables.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-teknet-red">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-teknet-gray-dark rounded-lg p-8 text-white">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Devenez partenaire</h3>
            <p>
              Vous souhaitez rejoindre notre écosystème de partenaires et développer des 
              opportunités business avec TeknetGroup ? Contactez-nous pour discuter des 
              possibilités de collaboration.
            </p>
          </div>
          <div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teknet-gray-dark">
              Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBenefits;
