
import { SectionTitle } from "@/components/ui/typography";
import { SolutionCard } from "./Cards";

export const SolutionsSection = () => {
  return (
    <section className="mb-16 animate-fade-in animation-delay-300">
      <SectionTitle>Nos Solutions Globales</SectionTitle>
      <p className="text-gray-700 mb-6">
        Nos métiers s'articulent autour de trois (3) solutions globales :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SolutionCard 
          title="Solutions en système d'information et cybersécurité"
          description="Protection des données et renforcement de la sécurité informatique."
        />
        <SolutionCard 
          title="Solutions en sûreté, sécurité physique et infrastructure"
          description="Protection des biens, des personnes et des infrastructures."
        />
        <SolutionCard 
          title="Solutions en cartes et identification"
          description="Systèmes d'identification sécurisés et personnalisés."
        />
      </div>
    </section>
  );
};
