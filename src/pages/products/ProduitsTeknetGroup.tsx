
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTA from "@/components/CTA";
import Image from "@/components/ui/image";

const ProduitsTeknetGroup = () => {
  return (
    <>
      <Helmet>
        <title>Nos Produits TeknetGroup | TeknetGroup</title>
        <meta name="description" content="Découvrez les solutions innovantes développées par TeknetGroup pour répondre aux besoins des entreprises en matière de sécurité, d'identification et de formation." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teknet-gray-light to-white py-16">
          <div className="teknet-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Produits TeknetGroup</h1>
              <p className="text-lg text-gray-700 mb-8">
                Des solutions innovantes développées par nos équipes pour répondre aux besoins spécifiques de nos clients
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="teknet-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Security Section */}
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teknet-red flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-teknet-gray-dark">Sécurité & Sûreté</h2>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Teknet ACI (Anywhere Clock ID)</CardTitle>
                    <CardDescription>Solution mobile de pointage du personnel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                        alt="Teknet ACI - Solution mobile de pointage"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Solution mobile intégrant des technologies telles que la reconnaissance faciale, 
                      les empreintes digitales, les QR codes et les badges RFID. Conçue pour les 
                      environnements extérieurs, cette mallette étanche (IP67) permet une identification 
                      rapide et sécurisée des employés en déplacement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Teknet Event Manager</CardTitle>
                    <CardDescription>Système de contrôle d'accès événementiel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                        alt="Teknet Event Manager - Contrôle d'accès événementiel"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Système de contrôle d'accès événementiel et de billetterie électronique, offrant 
                      une gestion efficace des entrées et sorties lors d'événements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vidéosurveillance intelligente</CardTitle>
                    <CardDescription>Solutions de surveillance en temps réel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                        alt="Vidéosurveillance intelligente - Solutions de surveillance"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Solutions de surveillance en temps réel, optimisées par la connectivité 5G, permettant 
                      une transmission rapide des images et une surveillance efficace des installations.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Other Categories Section */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-teknet-red flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-teknet-gray-dark">Identification & Cartes</h2>
                  </div>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Solutions d'identification personnalisées</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                          alt="Solutions d'identification personnalisées"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Émission de cartes pour diverses applications, incluant les cartes d'identité, 
                        les cartes bancaires, les badges d'accès et les cartes de fidélité.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-teknet-red flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-teknet-gray-dark">Systèmes d'Information</h2>
                  </div>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Équipements informatiques</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                          alt="Équipements informatiques"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Fourniture de matériel informatique de marques reconnues, incluant 
                        des ordinateurs portables, des imprimantes et des consommables.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Infrastructure réseau</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                          alt="Infrastructure réseau"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Conception et mise en place d'infrastructures réseau robustes, 
                        assurant la connectivité et la sécurité des données au sein des organisations.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Maintenance & support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                          alt="Maintenance & support"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Services de maintenance sur site ou en atelier, avec des contrats 
                        de maintenance personnalisés pour garantir la performance continue des systèmes informatiques.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-teknet-red flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8v4l3 3"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-teknet-gray-dark">Formation</h2>
                  </div>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Teknet Formation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                          alt="Teknet Formation"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Centre de formation agréé, proposant des modules de formation en bureautique, 
                        multimédia et techniques avancées, avec des certifications internationales telles que TOSA.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Classe virtuelle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                          alt="Classe virtuelle"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Plateforme de formation en ligne exploitant la connectivité 5G pour offrir 
                        des sessions interactives et accessibles à distance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default ProduitsTeknetGroup;
