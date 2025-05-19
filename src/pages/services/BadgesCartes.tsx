
import { CreditCard, Key, Users, Fingerprint, Shield } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const BadgesCartes = () => {
  return (
    <ServiceLayout
      title="Badges & Cartes"
      description="Solutions d'identification et de contrôle d'accès pour sécuriser vos locaux."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/097e74a2-0298-4bc2-bedb-97f67c7d1faa.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/ae12ab6e-851a-4f93-af8e-13382d11fbad.png" alt="Badges & Cartes" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Badges & Cartes</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Solutions d'identification sécurisées pour le contrôle d'accès et la gestion des identités</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en cartes et badges</h2>
              <p className="text-lg mb-4">
                TeknetGroup propose des solutions complètes de badges et cartes d'identification adaptées à tous les secteurs d'activité, de l'entreprise aux établissements scolaires en passant par les collectivités.
              </p>
              <p className="text-lg mb-4">
                Nous concevons, imprimons et programmons vos badges et cartes sur mesure, intégrant les technologies de pointe en matière d'identification et de sécurité.
              </p>
              <p className="text-lg">
                Nos solutions s'intègrent parfaitement avec vos systèmes de contrôle d'accès existants ou peuvent être déployées dans le cadre d'une solution globale de sécurité.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions de badges et cartes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CreditCard className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Badges d'identification</span> - Personnalisation graphique et visuelle
                  </div>
                </li>
                <li className="flex items-start">
                  <Key className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Cartes de contrôle d'accès</span> - Technologies RFID, NFC et code-barres
                  </div>
                </li>
                <li className="flex items-start">
                  <Fingerprint className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Cartes multifonctions</span> - Identification, accès et paiement intégrés
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Gestion des identités</span> - Logiciels de création et d'administration des badges
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Solutions sécurisées</span> - Protections contre la contrefaçon et la copie
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

export default BadgesCartes;
