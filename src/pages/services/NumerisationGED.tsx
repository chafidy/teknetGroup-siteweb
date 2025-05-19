
import { FileText, Database, Search, BarChart, Share2, Upload } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Image from "../../components/ui/image";

const NumerisationGED = () => {
  return (
    <ServiceLayout
      title="Numérisation & GED"
      description="Dématérialisation de vos documents et gestion électronique pour optimiser vos processus."
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("/lovable-uploads/587d4a9b-148a-4ec2-ada3-90cc84faf380.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/lovable-uploads/7c2088c5-721e-4d6d-87f3-d01abc6fffd9.png" alt="Numérisation & GED" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Numérisation & GED</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">Transformez vos documents papier en ressources numériques exploitables</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Notre expertise en gestion documentaire</h2>
              <p className="text-lg mb-4">
                TeknetGroup vous accompagne dans la transformation numérique de vos processus documentaires, de la numérisation de vos archives papier à la mise en place d'une solution GED complète.
              </p>
              <p className="text-lg mb-4">
                Nos solutions permettent d'optimiser la gestion de vos documents, de faciliter leur recherche et leur partage, tout en garantissant leur sécurité et leur conformité réglementaire.
              </p>
              <p className="text-lg">
                Nous nous adaptons à vos besoins spécifiques pour vous offrir une solution sur mesure, qu'il s'agisse d'une intervention ponctuelle ou d'un projet global de dématérialisation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Nos solutions documentaires</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Upload className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Numérisation de documents</span> - Traitement haute qualité de tous types de documents
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">GED (Gestion Électronique de Documents)</span> - Solutions complètes et personnalisées
                  </div>
                </li>
                <li className="flex items-start">
                  <Search className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">LAD/RAD</span> - Lecture et reconnaissance automatique de documents
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Workflow documentaire</span> - Automatisation des processus de validation
                  </div>
                </li>
                <li className="flex items-start">
                  <Share2 className="h-6 w-6 mr-3 text-teknet-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Collaboratif</span> - Partage et co-édition de documents
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Processus de numérisation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Préparation</h4>
                <p className="text-sm text-gray-600">Tri, désagrafage et organisation des documents</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Numérisation</h4>
                <p className="text-sm text-gray-600">Capture haute qualité avec matériel professionnel</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Indexation</h4>
                <p className="text-sm text-gray-600">Ajout de métadonnées et classification</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Contrôle</h4>
                <p className="text-sm text-gray-600">Vérification de qualité et d'intégrité</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teknet-red text-white">
                  <span className="text-xl font-bold">5</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Intégration</h4>
                <p className="text-sm text-gray-600">Import dans votre système GED</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Numérisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Documents administratifs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Archives et documents historiques</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Factures et documents comptables</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Plans et documents grand format</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Livres et documentation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Database className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Solutions GED</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Stockage sécurisé et indexé</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Recherche avancée multicritères</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Gestion des versions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Contrôle des accès et droits</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Intégration avec vos logiciels métiers</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <BarChart className="h-12 w-12 text-teknet-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teknet-gray-dark">Bénéfices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Gain d'espace et de temps</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Sécurisation des documents</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Accès facilité à l'information</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Collaboration améliorée</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teknet-red mr-2"></div>
                  <span>Conformité règlementaire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark">Secteurs d'application</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Services financiers</h4>
                <p className="text-gray-600">Gestion des contrats, dossiers clients et documents réglementaires avec conformité légale renforcée.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Santé</h4>
                <p className="text-gray-600">Numérisation des dossiers médicaux, ordonnances et documents administratifs avec respect des normes de confidentialité.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Secteur public</h4>
                <p className="text-gray-600">Transformation numérique des administrations, archivage légal et simplification des démarches administratives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Juridique</h4>
                <p className="text-gray-600">Gestion des contrats, actes notariés et dossiers clients avec valeur probante et horodatage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Industrie</h4>
                <p className="text-gray-600">Documentation technique, plans, procédures et certificats avec intégration aux systèmes de production.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-teknet-gray-dark">Éducation</h4>
                <p className="text-gray-600">Numérisation des archives, bibliothèques et dossiers étudiants pour faciliter la consultation et préserver les documents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default NumerisationGED;
