
import { Server, Network, HardDrive, Cloud, Wifi, Cog } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const SystemesInformation = () => {
  return (
    <ServiceLayout
      title="Systèmes d'information & Réseaux"
      description="Infrastructure IT performante et sécurisée adaptée à vos besoins spécifiques."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/6484ad94-881d-443d-8a09-53aa497b8ced.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/b6df4348-19a7-48c2-a7ee-fe1d4eb925e9.png" alt="Systèmes d'information & Réseaux" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Systèmes d'information & Réseaux</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Une infrastructure IT robuste et évolutive pour soutenir votre croissance</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise IT</h2>
              <p className="text-lg mb-4">
                TeknetGroup conçoit, déploie et maintient des infrastructures informatiques performantes et sécurisées pour répondre aux besoins spécifiques de votre entreprise.
              </p>
              <p className="text-lg mb-4">
                Nos ingénieurs qualifiés vous accompagnent dans l'optimisation de vos systèmes d'information, en mettant l'accent sur la performance, la sécurité et la disponibilité.
              </p>
              <p className="text-lg">
                Qu'il s'agisse de solutions on-premise, cloud ou hybrides, nous vous proposons des architectures adaptées à vos enjeux métiers et à votre budget.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos domaines d'expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Server className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Infrastructure serveurs</span> - Virtualisation, clusters et haute disponibilité
                  </div>
                </li>
                <li className="flex items-start">
                  <Network className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Réseaux</span> - Conception, déploiement et sécurisation d'infrastructures réseau
                  </div>
                </li>
                <li className="flex items-start">
                  <HardDrive className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Stockage et sauvegarde</span> - Solutions performantes et sécurisées
                  </div>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Solutions Cloud</span> - Migration et gestion d'environnements cloud
                  </div>
                </li>
                <li className="flex items-start">
                  <Cog className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Infogérance</span> - Maintenance et supervision proactive de votre infrastructure
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center mb-6">
                <Server className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Infrastructure serveurs</h3>
              <p className="text-gray-700">
                Nous concevons et déployons des infrastructures serveurs robustes basées sur les dernières technologies (Windows Server, Linux, VMware, Hyper-V) pour garantir la performance et la disponibilité de vos systèmes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center mb-6">
                <Network className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Solutions réseaux</h3>
              <p className="text-gray-700">
                Notre équipe met en place des infrastructures réseau sécurisées et performantes pour garantir la communication fluide entre vos équipements et applications (LAN/WAN, SD-WAN, VPN, Wifi).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center mb-6">
                <Cloud className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Solutions Cloud</h3>
              <p className="text-gray-700">
                Nous vous accompagnons dans votre transition vers le cloud avec des solutions adaptées à vos besoins (Microsoft Azure, AWS, Google Cloud) ou la mise en place de clouds privés sécurisés.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Nos services IT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-teknet-gray-dark">Conseil et audit</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Audit de l'infrastructure existante</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Étude des besoins et recommandations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Optimisation des coûts IT</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Schéma directeur des systèmes d'information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-teknet-gray-dark">Intégration et déploiement</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Conception d'architecture IT</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Déploiement et configuration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Migration de systèmes existants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Tests et validation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-teknet-gray-dark">Support et maintenance</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Support technique tous niveaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Maintenance préventive et corrective</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Supervision proactive 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Gestion des incidents et problèmes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-teknet-gray-dark">Infogérance</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Gestion complète de l'infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Administration des systèmes et réseaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Reporting et tableaux de bord</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teknet-red/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teknet-red text-xs">✓</span>
                    </div>
                    <span>Plan d'évolution technologique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Technologies maîtrisées</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">Microsoft</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">VMware</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">Cisco</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">HPE</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">Dell</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">Linux</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">AWS</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-20">
                <span className="font-semibold">Azure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SystemesInformation;
