
import { useEffect, useState } from 'react';
import JoinLayout from '@/components/JoinLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, Building, Globe, Home, Compass } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const NosImplantations = () => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("siege");

  return (
    <JoinLayout
      title="Nos Implantations | TeknetGroup"
      description="Découvrez les implantations de TeknetGroup à Madagascar. Notre présence nationale nous permet de vous accompagner au plus près de vos besoins."
    >
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="teknet-container">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-teknet-gray-dark mb-6">
              Nos Implantations
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Chez Teknet Group, nous croyons en la proximité avec nos clients. C'est pourquoi 
              nous avons développé une présence nationale à travers plusieurs antennes réparties 
              sur le territoire malgache, en plus de notre siège social à Antananarivo.
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs 
            defaultValue="siege" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full mb-16"
          >
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-10">
              <TabsTrigger value="siege" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Siège Social</span>
              </TabsTrigger>
              <TabsTrigger value="showroom" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Showroom</span>
              </TabsTrigger>
              <TabsTrigger value="antennes" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Antennes Régionales</span>
              </TabsTrigger>
            </TabsList>

            {/* Siège Social Content */}
            <TabsContent value="siege" className="animate-in fade-in-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative w-full h-full min-h-[350px]">
                    <Image 
                      src="/lovable-uploads/671b4a17-1649-418e-8ae4-cc5ef680aeaa.png" 
                      alt="Siège social Teknet Group - Trade Tower" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4 flex items-center gap-2">
                    <Building className="h-6 w-6 text-teknet-red" />
                    Siège social – Antananarivo
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-teknet-red shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Adresse :</p>
                        <p className="text-gray-600">Immeuble Trade Tower, 3ᵉ étage</p>
                        <p className="text-gray-600">Alarobia, Antananarivo 101, Madagascar</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-teknet-red shrink-0 mr-3" />
                      <span className="text-gray-600">+261 20 23 334 45</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-teknet-red shrink-0 mr-3" />
                      <span className="text-gray-600">contact@teknetgroup.com</span>
                    </div>

                    <Separator className="my-4" />
                    
                    <p className="text-gray-600">
                      Situé au cœur d'Antananarivo, notre siège centralise l'ensemble de nos pôles 
                      stratégiques, administratifs, techniques et commerciaux. Il abrite également 
                      notre centre de formation agréé.
                    </p>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsMapOpen(true);
                        setActiveTab("antennes");
                      }}
                      className="mt-2"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Voir sur la carte
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Showroom Content */}
            <TabsContent value="showroom" className="animate-in fade-in-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4 flex items-center gap-2">
                  <Home className="h-6 w-6 text-teknet-red" />
                  Showroom – Antananarivo
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teknet-red shrink-0 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Adresse :</p>
                      <p className="text-gray-600">Immeuble Trade Tower, 1ᵉʳ étage</p>
                      <p className="text-gray-600">Alarobia, Antananarivo 101</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <p className="text-gray-600">
                    Venez découvrir sur place nos équipements et solutions technologiques 
                    en démonstration dans notre showroom moderne.
                  </p>
                  
                  <div className="flex space-x-4 mt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsMapOpen(true);
                        setActiveTab("antennes");
                      }}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Voir sur la carte
                    </Button>
                    <Button 
                      variant="default"
                      className="bg-teknet-red hover:bg-red-700"
                      onClick={() => window.location.href = '/contact'}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Prendre rendez-vous
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Antennes Régionales Content */}
            <TabsContent value="antennes" className="animate-in fade-in-50">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4 flex items-center gap-2">
                    <Globe className="h-6 w-6 text-teknet-red" />
                    Antennes régionales
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Nous sommes également présents dans plusieurs grandes villes de Madagascar 
                    pour répondre efficacement aux besoins locaux. Chacune de nos antennes régionales 
                    est équipée pour offrir un support technique, une assistance rapide et des services 
                    adaptés à vos besoins.
                  </p>

                  {/* Carte interactive */}
                  <div className="mb-8 relative overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                      <div className="relative h-[500px]">
                        <Collapsible 
                          open={isMapOpen} 
                          onOpenChange={setIsMapOpen}
                          className="w-full h-full"
                        >
                          <CollapsibleTrigger className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 cursor-pointer">
                            <div className="text-white text-center p-6">
                              <Compass className="h-16 w-16 mx-auto mb-4 animate-pulse text-teknet-red" />
                              <h3 className="text-2xl font-semibold mb-2">Localisez nos implantations</h3>
                              <p className="mb-4">Grâce à cette carte interactive, localisez facilement le site Teknet Group le plus proche de chez vous.</p>
                              <span className="inline-block px-4 py-2 rounded-full bg-teknet-red text-white font-medium">
                                {isMapOpen ? 'Masquer la carte' : 'Afficher la carte'}
                              </span>
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="w-full h-full">
                            <iframe 
                              src="https://www.google.com/maps/d/viewer?mid=1sTlTOQSjFbypGAARJaz5LmLmMQ7yLLtN&ll=-21.368436510592364%2C49.3452244798234&z=6" 
                              width="100%" 
                              height="500" 
                              className="border-0" 
                              allowFullScreen
                              title="Implantations de TeknetGroup à Madagascar"
                            ></iframe>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Notre Engagement Section */}
          <div className="bg-teknet-gray-dark rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Une présence nationale, un engagement local</h2>
            <p className="mb-4">
              En étant présents dans toutes les régions stratégiques du pays, nous assurons 
              un accompagnement de proximité, une intervention rapide, et un suivi personnalisé 
              de nos prestations, quel que soit votre secteur d'activité.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button 
                className="bg-white text-teknet-gray-dark hover:bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Nous contacter
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/qui-sommes-nous'}
              >
                <Building className="mr-2 h-4 w-4" />
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </JoinLayout>
  );
};

export default NosImplantations;
