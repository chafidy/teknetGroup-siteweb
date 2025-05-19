
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";
import { Code, Database, Globe, Server, Layout, Smartphone } from "lucide-react";

const DeveloppementInformatique = () => {
  return (
    <ServiceLayout
      title="Développement informatique"
      description="Conception et développement de solutions logicielles sur mesure pour répondre à vos besoins spécifiques."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/b2a34243-ea2c-4e05-b498-93022cdf955c.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/df9647ab-baf2-4bf6-a9a1-46f30f533741.png" alt="Développement informatique" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Développement informatique</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Des solutions logicielles sur mesure adaptées à vos enjeux métier</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en développement</h2>
              <p className="text-lg mb-4">
                TeknetGroup conçoit et développe des applications sur mesure pour répondre précisément à vos besoins métier, qu'il s'agisse d'applications web, mobiles ou de logiciels spécifiques.
              </p>
              <p className="text-lg mb-4">
                Notre équipe de développeurs expérimentés maîtrise les dernières technologies et méthodologies pour vous offrir des solutions performantes, évolutives et sécurisées.
              </p>
              <p className="text-lg">
                Nous vous accompagnons à chaque étape du projet, de la conception à la maintenance, en passant par le développement et le déploiement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions de développement</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Layout className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Applications web</span> - Interfaces modernes et responsives
                  </div>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Applications mobiles</span> - Développement natif et cross-platform
                  </div>
                </li>
                <li className="flex items-start">
                  <Database className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Systèmes d'information</span> - Solutions métier intégrées
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">API et interfaces</span> - Interconnexion de vos systèmes
                  </div>
                </li>
                <li className="flex items-start">
                  <Code className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Développement sur mesure</span> - Solutions adaptées à vos besoins spécifiques
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Notre méthodologie</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Analyse</h4>
                <p className="text-sm text-gray-600">Compréhension approfondie de vos besoins</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Conception</h4>
                <p className="text-sm text-gray-600">Architecture et design de la solution</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Développement</h4>
                <p className="text-sm text-gray-600">Codage agile et tests réguliers</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Déploiement</h4>
                <p className="text-sm text-gray-600">Mise en production sécurisée</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">5</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Maintenance</h4>
                <p className="text-sm text-gray-600">Support et évolutions continues</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Code className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Technologies front-end</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>React & Vue.js</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Angular</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>React Native</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Flutter</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Swift & Kotlin</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Server className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Technologies back-end</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>PHP & Laravel</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Java & Spring</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>.NET Core</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Python & Django</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Database className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Bases de données</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>MySQL & PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>SQL Server</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Redis</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Firebase</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Avantages d'une solution sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Parfaite adaptation</h4>
                <p className="text-gray-600">Solution entièrement adaptée à vos processus métier et à vos besoins spécifiques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Évolutivité</h4>
                <p className="text-gray-600">Capacité à faire évoluer votre application en fonction de la croissance de votre entreprise.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Intégration</h4>
                <p className="text-gray-600">Connexion transparente avec vos systèmes et logiciels existants.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Propriété intellectuelle</h4>
                <p className="text-gray-600">Vous êtes propriétaire de votre application et de son code source.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Avantage concurrentiel</h4>
                <p className="text-gray-600">Différenciation par rapport à vos concurrents avec des outils uniques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Support dédié</h4>
                <p className="text-gray-600">Équipe technique connaissant parfaitement votre application pour un support optimal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DeveloppementInformatique;
