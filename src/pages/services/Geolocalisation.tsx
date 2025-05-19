
import { MapPin, Navigation, Map, Radio, Truck, BarChart } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const Geolocalisation = () => {
  return (
    <ServiceLayout
      title="Géolocalisation"
      description="Tracking et gestion de flotte pour optimiser les déplacements et la logistique de votre entreprise."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/b56b01cc-96d3-4b93-a874-6e8e16204f9d.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/3f7ddc5f-3898-4922-8d28-7e301ca11873.png" alt="Géolocalisation" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Géolocalisation</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Solutions avancées de tracking et gestion de flotte pour optimiser votre logistique</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en géolocalisation</h2>
              <p className="text-lg mb-4">
                TeknetGroup conçoit et déploie des solutions de géolocalisation adaptées aux besoins des entreprises de toute taille, permettant un suivi en temps réel des véhicules, équipements et personnels.
              </p>
              <p className="text-lg mb-4">
                Nos systèmes permettent d'optimiser vos opérations logistiques, d'améliorer la productivité de vos équipes mobiles et de réduire vos coûts d'exploitation grâce à une gestion intelligente des déplacements.
              </p>
              <p className="text-lg">
                Avec des interfaces intuitives et personnalisables, nous vous offrons une visibilité complète sur vos actifs mobiles pour une prise de décision éclairée et efficace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions clés</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Truck className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Gestion de flotte</span> - Suivi complet des véhicules avec analyses de performance
                  </div>
                </li>
                <li className="flex items-start">
                  <Map className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Tracking en temps réel</span> - Localisation précise et instantanée de vos actifs
                  </div>
                </li>
                <li className="flex items-start">
                  <Navigation className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Optimisation d'itinéraires</span> - Planification intelligente des trajets
                  </div>
                </li>
                <li className="flex items-start">
                  <Radio className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">IoT et tracking d'actifs</span> - Suivi des équipements et matériels
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Analyse et reporting</span> - Tableaux de bord et indicateurs de performance
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Fonctionnalités avancées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Suivi en temps réel</h4>
                  <p className="text-sm text-gray-600">Visualisation instantanée de la position et des mouvements de tous vos actifs</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Historique des trajets</h4>
                  <p className="text-sm text-gray-600">Consultation et analyse détaillée des déplacements passés</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Alertes personnalisées</h4>
                  <p className="text-sm text-gray-600">Notifications en cas d'événements spécifiques (arrêts, déviations, vitesse)</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Zones géographiques</h4>
                  <p className="text-sm text-gray-600">Définition de périmètres avec alertes d'entrée/sortie (geofencing)</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Diagnostic de véhicule</h4>
                  <p className="text-sm text-gray-600">Données techniques et alertes de maintenance préventive</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Application mobile</h4>
                  <p className="text-sm text-gray-600">Accès à la plateforme depuis n'importe quel appareil mobile</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Avantages pour votre entreprise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-teknet-red text-white text-sm mr-3 mt-0.5">1</div>
                  <div>
                    <span className="font-semibold">Réduction des coûts opérationnels</span>
                    <p className="text-gray-600 mt-1">Optimisation des trajets, réduction de la consommation de carburant et des coûts de maintenance grâce à une utilisation plus efficace des véhicules.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-teknet-red text-white text-sm mr-3 mt-0.5">2</div>
                  <div>
                    <span className="font-semibold">Augmentation de la productivité</span>
                    <p className="text-gray-600 mt-1">Planification optimisée des interventions, réduction des temps d'attente et amélioration de la réactivité face aux demandes clients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-teknet-red text-white text-sm mr-3 mt-0.5">3</div>
                  <div>
                    <span className="font-semibold">Amélioration du service client</span>
                    <p className="text-gray-600 mt-1">Information précise sur les délais d'intervention ou de livraison et réactivité accrue face aux demandes urgentes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-teknet-red text-white text-sm mr-3 mt-0.5">4</div>
                  <div>
                    <span className="font-semibold">Sécurisation des actifs</span>
                    <p className="text-gray-600 mt-1">Protection contre le vol, les utilisations non autorisées et localisation rapide en cas de besoin.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Notre approche</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Analyse</h4>
                <p className="text-gray-600">Étude de vos besoins spécifiques et de votre environnement opérationnel</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Conception</h4>
                <p className="text-gray-600">Élaboration d'une solution sur mesure adaptée à vos objectifs</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Déploiement</h4>
                <p className="text-gray-600">Installation des équipements et configuration de la plateforme</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Formation</h4>
                <p className="text-gray-600">Accompagnement et support pour une prise en main optimale</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Secteurs concernés</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Transport et logistique</h4>
                <p className="text-gray-600">Optimisation des tournées de livraison, suivi en temps réel des expéditions et gestion efficace des flottes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">BTP et construction</h4>
                <p className="text-gray-600">Suivi des véhicules, engins de chantier et matériels avec contrôle d'utilisation et sécurisation des actifs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Services techniques</h4>
                <p className="text-gray-600">Gestion optimisée des interventions, dispatching intelligent et amélioration des délais d'intervention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Commerce et distribution</h4>
                <p className="text-gray-600">Optimisation des livraisons, traçabilité des produits et amélioration du service client.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Collectivités territoriales</h4>
                <p className="text-gray-600">Gestion des véhicules de service, optimisation des tournées de collecte et suivi des interventions techniques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Services d'urgence</h4>
                <p className="text-gray-600">Dispatching efficace des véhicules d'intervention et optimisation des temps de réponse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Geolocalisation;
