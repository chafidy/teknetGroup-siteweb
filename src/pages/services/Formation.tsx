
import { GraduationCap, Book, Users, Award, Calendar, PenTool } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const Formation = () => {
  return (
    <ServiceLayout
      title="Formation"
      description="Programmes de formation adaptés aux besoins de vos équipes sur nos solutions."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/0d79c946-7cb1-423b-8cc9-eefaa85289d0.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/b94573a2-91f6-4e3c-bc72-ad0024545dab.png" alt="Formation" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Formation</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Développez les compétences de vos équipes avec nos programmes de formation personnalisés</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre offre de formation</h2>
              <p className="text-lg mb-4">
                TeknetGroup propose des programmes de formation adaptés aux besoins spécifiques de vos équipes sur l'ensemble de nos solutions et technologies.
              </p>
              <p className="text-lg mb-4">
                Nos formateurs experts transmettent leur savoir-faire de manière pédagogique et pragmatique, avec un focus sur l'application concrète des compétences acquises.
              </p>
              <p className="text-lg">
                Qu'il s'agisse de formations techniques, utilisateurs ou administrateurs, nous veillons à ce que vos collaborateurs maîtrisent parfaitement les outils mis à leur disposition.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos domaines de formation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PenTool className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Formations sur mesure</span> - Programmes adaptés à vos besoins spécifiques
                  </div>
                </li>
                <li className="flex items-start">
                  <Book className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Formation produits</span> - Maîtrise des solutions TeknetGroup et partenaires
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Formations certifiantes</span> - Préparation aux certifications officielles
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Transfert de compétences</span> - Accompagnement des équipes internes
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Notre approche pédagogique</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <Book className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Expertise</h4>
                <p className="text-gray-600">Des formateurs certifiés avec une expérience terrain</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Personnalisation</h4>
                <p className="text-gray-600">Adaptation du contenu à votre contexte et vos objectifs</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <PenTool className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Pratique</h4>
                <p className="text-gray-600">Exercices concrets et mises en situation réelles</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Suivi</h4>
                <p className="text-gray-600">Évaluation des acquis et accompagnement post-formation</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos programmes de formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-teknet-gray-dark border-b border-gray-200 pb-2">Administration Système & Réseau</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Windows Server Administration</h5>
                    <p className="text-sm text-gray-600 mb-2">Installation, configuration et administration avancée</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>3 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Administrateurs IT</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Administration réseau Cisco</h5>
                    <p className="text-sm text-gray-600 mb-2">Configuration et sécurisation des infrastructures réseau</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>5 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Ingénieurs réseau</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Virtualisation VMware</h5>
                    <p className="text-sm text-gray-600 mb-2">Déploiement et gestion d'infrastructures virtualisées</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>4 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Administrateurs système</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-teknet-gray-dark border-b border-gray-200 pb-2">Cybersécurité</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Fondamentaux de la cybersécurité</h5>
                    <p className="text-sm text-gray-600 mb-2">Comprendre et appliquer les bonnes pratiques de sécurité</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>2 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Tout public IT</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Sécurité des infrastructures</h5>
                    <p className="text-sm text-gray-600 mb-2">Protection des réseaux et systèmes contre les intrusions</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>3 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Administrateurs sécurité</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Audit et tests d'intrusion</h5>
                    <p className="text-sm text-gray-600 mb-2">Méthodologies et outils pour évaluer la sécurité</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>5 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Experts sécurité</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-teknet-gray-dark border-b border-gray-200 pb-2">Solutions TeknetGroup</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Gestion des badges et contrôle d'accès</h5>
                    <p className="text-sm text-gray-600 mb-2">Administration et utilisation du système de contrôle d'accès</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>2 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Gestionnaires de sécurité</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Solutions GED et numérisation</h5>
                    <p className="text-sm text-gray-600 mb-2">Utilisation avancée des outils de gestion documentaire</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>2 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Utilisateurs et administrateurs</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Plateforme de géolocalisation</h5>
                    <p className="text-sm text-gray-600 mb-2">Maîtrise des fonctionnalités de tracking et gestion de flotte</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>1 jour</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Responsables logistique</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-teknet-gray-dark border-b border-gray-200 pb-2">Développement & Cloud</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Développement d'applications web</h5>
                    <p className="text-sm text-gray-600 mb-2">Création d'interfaces modernes et responsives</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>5 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Développeurs</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">Microsoft Azure</h5>
                    <p className="text-sm text-gray-600 mb-2">Déploiement et gestion d'infrastructures cloud</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>3 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Architectes cloud</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-semibold mb-1">DevOps et CI/CD</h5>
                    <p className="text-sm text-gray-600 mb-2">Automatisation des processus de développement et déploiement</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>4 jours</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>Développeurs et Ops</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teknet-red/10 p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-teknet-gray-dark">Formation sur mesure</h3>
                <p className="text-lg mb-4">
                  Vous avez des besoins spécifiques qui ne correspondent pas à nos programmes standards ?
                </p>
                <p className="text-lg mb-4">
                  Notre équipe pédagogique peut concevoir un programme de formation entièrement personnalisé, adapté à vos objectifs, votre contexte et vos contraintes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                    <span>Analyse préalable de vos besoins</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                    <span>Conception sur mesure du programme et des supports</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                    <span>Formation dans vos locaux ou dans nos centres</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                    <span>Évaluation et suivi post-formation</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <GraduationCap className="h-24 w-24 text-teknet-red mb-4" />
                  <a href="/contact" className="btn-primary">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Formation;
