
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTA from "@/components/CTA";
import Image from "@/components/ui/image";

const ProduitsPartenaires = () => {
  return (
    <>
      <Helmet>
        <title>Produits Partenaires | TeknetGroup</title>
        <meta name="description" content="Découvrez les solutions et produits de nos partenaires technologiques distribués par TeknetGroup pour répondre à tous vos besoins en matière de sécurité et d'informatique." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teknet-gray-light to-white py-16">
          <div className="teknet-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Produits de nos partenaires technologiques</h1>
              <p className="text-lg text-gray-700 mb-8">
                TeknetGroup s'associe avec les meilleurs fournisseurs technologiques pour vous proposer des solutions complètes et adaptées à vos besoins
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
                    <CardTitle>Serrures électroniques Vanma</CardTitle>
                    <CardDescription>Gestion centralisée des accès</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/techsecure.png"
                        alt="Serrures électroniques Vanma"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Serrures intelligentes permettant une gestion centralisée des accès, idéales pour 
                      les institutions financières et les zones à haut niveau de sécurité.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Détecteurs de fumée Mavili Elektronik</CardTitle>
                    <CardDescription>Prévention des risques d'incendie</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                        alt="Détecteurs de fumée Mavili Elektronik"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Systèmes de détection avancés pour prévenir les risques d'incendie, assurant 
                      la sécurité des infrastructures critiques.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contrôle d'accès BioStation 3 de Suprema</CardTitle>
                    <CardDescription>Solution sans contact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/identitrust.png"
                        alt="Contrôle d'accès BioStation 3 de Suprema"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Solution de contrôle d'accès sans contact, intégrant des technologies telles que 
                      la reconnaissance faciale, les QR codes et les cartes RFID.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Solutions de communication Hytera</CardTitle>
                    <CardDescription>Communication professionnelle</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image 
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                        alt="Solutions de communication Hytera"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p>
                      Équipements de communication professionnels, incluant des terminaux radio DMR et des 
                      appareils Push-to-Talk over Cellular (PoC), adaptés aux environnements industriels exigeants.
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
                      <CardTitle>Imprimantes Evolis</CardTitle>
                      <CardDescription>Cartes plastiques sécurisées</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/datacore.png"
                          alt="Imprimantes Evolis"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Partenariat avec Evolis pour fournir des imprimantes de cartes plastiques hautement sécurisées, 
                        adaptées aux besoins des secteurs tels que le tourisme, la banque et l'éducation.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Solutions RFID Zebra Technologies</CardTitle>
                      <CardDescription>Gestion efficace des ressources</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/netguard.png"
                          alt="Solutions RFID Zebra Technologies"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Technologies de radio-identification permettant une gestion efficace des ressources 
                        et des opérations au sein des entreprises.
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
                      <CardTitle>Serveurs et solutions de stockage HPE</CardTitle>
                      <CardDescription>Solutions performantes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/globaltech.png"
                          alt="Serveurs et solutions de stockage HPE"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        TeknetGroup est reconnu comme le meilleur revendeur de la marque Hewlett Packard Enterprise (HPE) 
                        à Madagascar, fournissant des solutions de serveurs et de stockage performantes.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Solutions de cybersécurité Sophos</CardTitle>
                      <CardDescription>Protection contre les menaces</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/usersafe.png"
                          alt="Solutions de cybersécurité Sophos"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <p>
                        Fournisseur de solutions de cybersécurité, aidant à protéger les données 
                        et les systèmes contre les menaces numériques.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-12">
                  <div className="inline-block px-6 py-3 bg-teknet-gray-dark text-white rounded-lg">
                    <p className="text-center font-semibold">
                      Contactez-nous pour en savoir plus sur nos partenaires et leurs solutions
                    </p>
                  </div>
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

export default ProduitsPartenaires;
