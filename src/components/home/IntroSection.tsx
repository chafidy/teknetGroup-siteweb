
import { Shield, Server, Database, Users } from "lucide-react";
import CountUp from "react-countup";
import { SectionTitle } from "@/components/ui/typography";

interface IntroSectionProps {
  statsRef: React.RefObject<HTMLDivElement>;
  statsVisible: boolean;
}

const IntroSection = ({ statsRef, statsVisible }: IntroSectionProps) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float-1 absolute top-10 left-10">
          <Shield size={40} />
        </div>
        <div className="animate-float-2 absolute top-20 right-20">
          <Server size={40} />
        </div>
        <div className="animate-float-3 absolute bottom-20 left-1/4">
          <Database size={40} />
        </div>
        <div className="animate-float-4 absolute bottom-10 right-1/4">
          <Users size={40} />
        </div>
      </div>
      
      <div className="teknet-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>Bienvenue chez TeknetGroup</SectionTitle>
            <p className="mb-4 text-lg text-gray-700">
              Depuis plus de 20 ans, TeknetGroup accompagne les entreprises dans leur transformation numérique et la sécurisation de leurs systèmes d'information.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Notre expertise couvre un large spectre de compétences allant de la cybersécurité au développement de solutions sur mesure, en passant par la gestion des identités et des accès.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Nos équipes d'experts vous accompagnent dans tous vos projets informatiques avec un objectif : répondre précisément à vos besoins tout en garantissant performance et sécurité.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg" ref={statsRef}>
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos chiffres clés</h3>
            <div className="grid grid-cols-2 gap-6">
              <StatCounter 
                value={20} 
                suffix="+" 
                label="Années d'expérience"
                visible={statsVisible}
              />
              <StatCounter 
                value={500} 
                suffix="+" 
                label="Clients satisfaits"
                visible={statsVisible}
              />
              <StatCounter 
                value={50} 
                suffix="+" 
                label="Experts"
                visible={statsVisible}
              />
              <StatCounter 
                value={1000} 
                suffix="+" 
                label="Projets réalisés"
                visible={statsVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  visible: boolean;
}

const StatCounter = ({ value, suffix = "", label, visible }: StatCounterProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-teknet-red mb-2">
        {visible ? (
          <CountUp end={value} suffix={suffix} duration={2.5} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default IntroSection;
