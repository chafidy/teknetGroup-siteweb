
import { Shield, Lock, Eye, AlertTriangle, Database, FileText } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const Cybersecurite = () => {
  return (
    <ServiceLayout
      title="Cybersécurité"
      description="Protection de vos systèmes contre les menaces informatiques avec des solutions de pointe."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/09408479-68ce-475a-a20d-478e29a2a7e8.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/c0131f65-801c-47ad-b9a1-1df739a25cb4.png" alt="Cybersécurité" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Cybersécurité</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Des solutions complètes pour protéger vos données contre les cybermenaces</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en cybersécurité</h2>
              <p className="text-lg mb-4">
                TeknetGroup vous accompagne dans la protection de votre infrastructure informatique et de vos données sensibles contre les cybermenaces en constante évolution.
              </p>
              <p className="text-lg mb-4">
                Nos experts en sécurité conçoivent et mettent en place des stratégies de défense adaptées à vos enjeux spécifiques, combinant technologies de pointe et bonnes pratiques.
              </p>
              <p className="text-lg">
                De l'audit de sécurité à la mise en conformité réglementaire, en passant par la formation de vos équipes, nous vous proposons une approche globale de la cybersécurité.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions de cybersécurité</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Protection des systèmes</span> - Pare-feu nouvelle génération et détection des intrusions
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Sécurisation des données</span> - Chiffrement et contrôle d'accès avancé
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Surveillance et détection</span> - SOC et réponse aux incidents
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Tests d'intrusion</span> - Évaluation de vulnérabilités et audits de sécurité
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Conformité et gouvernance</span> - RGPD et normes sectorielles
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Cybersecurite;
