
import { GraduationCap, BookOpen, Users, Award, Calendar, Database, PenTool, Image, FileText, Terminal } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FormationLayout from "../../components/FormationLayout";

const FormationsProduitsPartenaires = () => {
  return (
    <FormationLayout
      title="Formations sur produits partenaires"
      description="Programmes de formation certifiés sur les solutions de nos partenaires technologiques"
    >
      <div className="bg-gray-100">
        <div className="relative py-16 md:py-24" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-teknet-gray-dark/75"></div>
          <div className="teknet-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Formations sur produits partenaires</h1>
              <p className="text-xl text-white/90 mb-8">Devenez expert sur les solutions de nos partenaires technologiques grâce à nos programmes de formation certifiants</p>
            </div>
          </div>
        </div>

        <div className="teknet-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Nos Formations sur Produits Partenaires</h2>
              <p className="text-lg mb-4">
                Chez Teknet Formation, nous proposons des modules spécialisés sur les logiciels les plus 
                utilisés en entreprise. Nos formations sont assurées par des formateurs certifiés et sont 
                éligibles à la certification internationale (TOSA, Microsoft, etc.).
              </p>
              <p className="text-lg">
                Que vous soyez débutant ou utilisateur avancé, développez vos compétences sur les produits 
                de nos partenaires officiels.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/fb409116-4209-4bdf-8c43-d7f923659a94.png"
                alt="Formation en groupe sur produits partenaires"
                className="rounded-lg shadow-lg w-full h-auto p-8 bg-white"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Nos programmes de formation</h3>
            
            <div className="space-y-8">
              {/* Microsoft Office - Suite Bureautique */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-teknet-red/10 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-teknet-red" />
                  </div>
                  <h4 className="text-2xl font-bold">Microsoft Office – Suite Bureautique</h4>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="excel">
                    <AccordionTrigger className="text-lg font-semibold">Excel – De l'initiation au perfectionnement</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Création de tableaux, formules simples à complexes</li>
                        <li>Tableaux croisés dynamiques, fonctions conditionnelles</li>
                        <li>Programmation avec VBA, automatisation de tâches</li>
                        <li>Certification TOSA ou Microsoft possible</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="word">
                    <AccordionTrigger className="text-lg font-semibold">Word</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mise en page avancée, styles, modèles, sommaires automatiques</li>
                        <li>Publipostage, formulaires, suivi des modifications</li>
                        <li>Optimisation de la productivité bureautique</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="powerpoint">
                    <AccordionTrigger className="text-lg font-semibold">PowerPoint</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Conception de présentations impactantes</li>
                        <li>Insertion de SmartArt, graphiques, animations, transitions</li>
                        <li>Création de modèles professionnels</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="outlook">
                    <AccordionTrigger className="text-lg font-semibold">Outlook</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Gestion des emails, calendrier, tâches et contacts</li>
                        <li>Collaboration avec OneDrive et Microsoft Teams</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="access">
                    <AccordionTrigger className="text-lg font-semibold">Access</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Création de bases de données relationnelles</li>
                        <li>Formulaires, états, requêtes, macros</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="powerbi">
                    <AccordionTrigger className="text-lg font-semibold">Power BI</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Analyse et visualisation de données</li>
                        <li>Création de rapports interactifs et tableaux de bord</li>
                        <li>Intégration avec Excel et sources de données multiples</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="powerquery">
                    <AccordionTrigger className="text-lg font-semibold">Power Query</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Importation, nettoyage, transformation de données</li>
                        <li>Préparation des données pour analyse avancée</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="msproject">
                    <AccordionTrigger className="text-lg font-semibold">MS Project</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Planification de projets, Gantt et Pert</li>
                        <li>Affectation des ressources, suivi d'avancement</li>
                        <li>Génération automatique de rapports de projet</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="teams">
                    <AccordionTrigger className="text-lg font-semibold">Teams / Zoom / Google Meet</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Maîtrise des outils de visioconférence</li>
                        <li>Organisation de réunions, formations à distance</li>
                        <li>Partage d'écran, enregistrement, outils collaboratifs</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* Adobe Creative Cloud - Design et Multimédia */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-teknet-red/10 rounded-full flex items-center justify-center">
                    <PenTool className="h-8 w-8 text-teknet-red" />
                  </div>
                  <h4 className="text-2xl font-bold">Adobe Creative Cloud – Design et Multimédia</h4>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="illustrator">
                    <AccordionTrigger className="text-lg font-semibold">Adobe Illustrator</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Création d'illustrations vectorielles professionnelles</li>
                        <li>Effets typographiques, dégradés, tracés, logos</li>
                        <li>Préparation à l'impression et au web</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="photoshop">
                    <AccordionTrigger className="text-lg font-semibold">Adobe Photoshop</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Retouche d'images, effets, calques, composition graphique</li>
                        <li>Outils de sélection, filtres, export multi-formats</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="indesign">
                    <AccordionTrigger className="text-lg font-semibold">Adobe InDesign</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mise en page avancée pour documents imprimés ou numériques</li>
                        <li>Utilisation de styles, gabarits, gestion des blocs</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="premiere">
                    <AccordionTrigger className="text-lg font-semibold">Adobe Premiere Pro</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Montage vidéo professionnel, transitions, effets</li>
                        <li>Export multi-supports (web, réseaux sociaux, TV)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="aftereffects">
                    <AccordionTrigger className="text-lg font-semibold">Adobe After Effects</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Animation, motion design, titrage vidéo</li>
                        <li>Intégration avec Illustrator & Premiere</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* Solutions Techniques - Base de Données & Systèmes */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-teknet-red/10 rounded-full flex items-center justify-center">
                    <Database className="h-8 w-8 text-teknet-red" />
                  </div>
                  <h4 className="text-2xl font-bold">Solutions Techniques – Base de Données & Systèmes</h4>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="oracle">
                    <AccordionTrigger className="text-lg font-semibold">Oracle SQL / PL-SQL / Administration Oracle</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Conception et gestion de bases de données professionnelles</li>
                        <li>Requêtes complexes, procédures stockées, sécurisation</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="linux">
                    <AccordionTrigger className="text-lg font-semibold">Linux Système & Réseau</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Administration systèmes Linux (niveaux 1 & 2)</li>
                        <li>Installation, configuration, gestion des services</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Certification Internationale</h3>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-lg">À l'issue de chaque formation, vous avez la possibilité de :</p>
              <ul className="list-disc pl-6 text-left inline-block mt-4 space-y-2">
                <li>Obtenir une attestation de formation</li>
                <li>Passer une certification officielle (Microsoft, TOSA...)</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Certification officielle</h4>
                <p className="text-gray-600">Reconnue mondialement</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Formateurs experts</h4>
                <p className="text-gray-600">Tous certifiés</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Supports détaillés</h4>
                <p className="text-gray-600">Documentation complète</p>
              </div>
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-teknet-red/10 text-teknet-red">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Suivi post-formation</h4>
                <p className="text-gray-600">1 mois d'assistance</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teknet-red/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-teknet-gray-dark text-center">Modalités de Formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-teknet-red/10 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-teknet-red" />
                  </div>
                  <h4 className="font-semibold text-xl">Formats disponibles</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Présentiel dans nos locaux</li>
                  <li>En ligne (Zoom / Teams)</li> 
                  <li>Sur site client</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-teknet-red/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-teknet-red" />
                  </div>
                  <h4 className="font-semibold text-xl">Notre engagement</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Support de cours complet</li>
                  <li>1 mois d'assistance post-formation</li>
                  <li>Groupes restreints pour un apprentissage optimal</li>
                  <li>Formateurs certifiés et expérimentés</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a href="/contact" className="btn-primary">
                Demander un devis personnalisé
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </FormationLayout>
  );
};

export default FormationsProduitsPartenaires;
