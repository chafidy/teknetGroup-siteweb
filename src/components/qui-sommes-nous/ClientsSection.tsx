
import Image from '@/components/ui/image';
import { SectionTitle } from "@/components/ui/typography";
import { ClientSectorCard } from "./Cards";

export const ClientsSection = () => {
  return (
    <section className="mb-16 animate-fade-in animation-delay-400">
      <SectionTitle>Nos Clients</SectionTitle>
      <p className="text-gray-700 mb-6">
        TEKNETGROUP accompagne plus de 500 clients dans l'intégration de solutions numériques et technologiques, 
        répartis dans différents secteurs :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientSectorCard
          title="Secteur privé"
          sectors={[
            "Aéroportuaire", "Assurances", "BTP", "Banques-finances", 
            "Écoles et universités", "Énergies", "Industries",
            "Informatique et télécommunication", "Mines et pétroliers", 
            "Centres médicaux", "Transport et logistique"
          ]}
        />
        <ClientSectorCard
          title="Secteur public"
          sectors={[
            "Douanes", "Présidence", "Ambassades", 
            "Institutions et organismes internationaux", 
            "Institutions et organismes étatiques"
          ]}
        />
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-teknet-gray-dark mb-6">Ils nous font confiance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/lovable-uploads/0256da3c-d07a-48ff-ba64-a1c09c12bcef.png" 
              alt="Nos clients" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/lovable-uploads/d145bbc9-545e-4157-8e30-da457cf9d1bb.png" 
              alt="Nos clients" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
