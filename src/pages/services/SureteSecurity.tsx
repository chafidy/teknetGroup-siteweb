
import { Shield, Building2, Users, KeyRound, Eye } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const SureteSecurity = () => {
  return (
    <ServiceLayout
      title="Sûreté - Sécurité & Identification"
      description="Solutions complètes de sécurité physique et d'identification pour protéger vos infrastructures et contrôler les accès."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/95c7e7f4-8648-4c71-8d16-68b88ae1bd8e.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/a1aabdd8-e860-42aa-90c2-c52cf0f70cbd.png" alt="Sûreté - Sécurité & Identification" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Sûreté - Sécurité & Identification</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Des solutions complètes pour sécuriser vos accès et protéger vos infrastructures</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en sécurité</h2>
              <p className="text-lg mb-4">
                TeknetGroup vous accompagne dans la mise en place de solutions de sécurité physique et d'identification adaptées à vos besoins spécifiques.
              </p>
              <p className="text-lg mb-4">
                Notre approche globale permet de sécuriser vos locaux, contrôler les accès et protéger vos collaborateurs et vos biens contre les risques internes et externes.
              </p>
              <p className="text-lg">
                Nous intégrons les dernières technologies de sécurité pour vous offrir des solutions fiables, évolutives et conformes aux normes en vigueur.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions clés</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Contrôle d'accès avancé</span> - Systèmes flexibles et adaptés à vos locaux
                  </div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Sécurisation de sites</span> - Protection physique des infrastructures
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Gestion des identités</span> - Automatisation des processus d'identification
                  </div>
                </li>
                <li className="flex items-start">
                  <KeyRound className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Solutions d'authentification</span> - Multi-facteurs et biométrique
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Vidéosurveillance intelligente</span> - Analyse et détection automatisée
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Notre approche en 4 étapes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Analyse</h4>
                <p className="text-gray-600">Évaluation complète de vos besoins et de vos infrastructures existantes</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Conception</h4>
                <p className="text-gray-600">Élaboration d'une solution sur mesure adaptée à vos enjeux spécifiques</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Déploiement</h4>
                <p className="text-gray-600">Installation et configuration des équipements avec un minimum d'impact</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Support</h4>
                <p className="text-gray-600">Maintenance et assistance continue pour garantir la pérennité de votre solution</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions adaptées à vos secteurs d'activité</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Secteur bancaire</h4>
                <p className="text-gray-600">Protection des agences et sécurisation des accès aux zones sensibles avec traçabilité complète.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Santé et laboratoires</h4>
                <p className="text-gray-600">Contrôle d'accès aux zones sensibles et protection des données médicales confidentielles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Industrie</h4>
                <p className="text-gray-600">Sécurisation des sites de production et protection contre les intrusions et le vol.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Éducation</h4>
                <p className="text-gray-600">Gestion des accès aux établissements scolaires et universitaires pour la protection des étudiants.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Collectivités</h4>
                <p className="text-gray-600">Solutions adaptées aux contraintes spécifiques des bâtiments publics et administration.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Sites sensibles</h4>
                <p className="text-gray-600">Protection renforcée pour les infrastructures critiques et sites à haut risque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SureteSecurity;
