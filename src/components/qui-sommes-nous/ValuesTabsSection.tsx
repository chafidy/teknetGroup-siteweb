
import { useState } from 'react';
import Image from '@/components/ui/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ValueCard, MissionCard } from './Cards';

export const ValuesTabsSection = () => {
  const [activeTab, setActiveTab] = useState('valeurs');

  return (
    <Tabs defaultValue="valeurs" value={activeTab} onValueChange={setActiveTab} className="w-full animate-fade-in animation-delay-500">
      <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
        <TabsTrigger value="valeurs">Nos Valeurs</TabsTrigger>
        <TabsTrigger value="mission">Notre Mission</TabsTrigger>
        <TabsTrigger value="equipe">Mot du DG</TabsTrigger>
      </TabsList>
      
      <TabsContent value="valeurs" className="space-y-4 animate-fade-in">
        <h3 className="text-2xl font-semibold text-teknet-gray-dark">Nos Valeurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Innovation", description: "Nous recherchons constamment de nouvelles idées et solutions pour anticiper les besoins de demain." },
            { title: "Intégrité", description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions professionnelles." },
            { title: "Excellence", description: "Nous visons l'excellence dans tous nos services et projets, avec un souci constant de la qualité." },
            { title: "Collaboration", description: "Nous croyons au pouvoir de la collaboration pour créer des solutions durables et efficaces." },
            { title: "Respect", description: "Nous valorisons la diversité des idées, des cultures et des expériences au sein de notre équipe et avec nos clients." },
            { title: "Responsabilité", description: "Nous assumons la responsabilité de nos actions et nous engageons à avoir un impact positif sur la société." }
          ].map((value, index) => (
            <ValueCard key={index} title={value.title} description={value.description} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="mission" className="space-y-4 animate-fade-in">
        <h3 className="text-2xl font-semibold text-teknet-gray-dark">Notre Mission</h3>
        <p className="text-gray-700 mb-6">
          Notre mission est d'aider les organisations à exploiter pleinement le potentiel 
          des technologies numériques, tout en garantissant leur sécurité et leur efficacité. 
          Nous nous engageons à:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Solutions Sur Mesure", description: "Développer des solutions technologiques adaptées aux besoins spécifiques de chaque client." },
            { title: "Sécurité Renforcée", description: "Assurer la protection des données et des systèmes face aux menaces cybernétiques en constante évolution." },
            { title: "Transformation Digitale", description: "Accompagner nos clients dans leur transition vers le numérique avec des stratégies efficaces et durables." },
            { title: "Formation Continue", description: "Partager notre expertise pour renforcer les compétences numériques au sein des organisations." }
          ].map((mission, index) => (
            <MissionCard key={index} title={mission.title} description={mission.description} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="equipe" className="space-y-4 animate-fade-in">
        <h3 className="text-2xl font-semibold text-teknet-gray-dark">Mot de la Directrice Générale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4">
              "Bienvenue chez TeknetGroup ! Depuis plus de 20 ans, notre entreprise s'est engagée à transformer 
              les défis numériques en opportunités pour nos clients. Notre mission est claire : accompagner 
              les organisations dans leur évolution technologique avec des solutions adaptées, sécurisées et innovantes.
            </p>
            <p className="text-gray-700 mb-4">
              À travers notre expertise en systèmes d'information, cybersécurité, sûreté, et solutions d'identification, 
              nous offrons un accompagnement complet qui répond aux enjeux technologiques d'aujourd'hui et anticipe 
              ceux de demain.
            </p>
            <p className="text-gray-700 mb-4">
              Ce qui fait notre force, c'est avant tout l'engagement et le talent de nos équipes, leur quête permanente 
              d'excellence et leur capacité à innover. Notre présence internationale nous permet également d'apporter 
              une vision globale aux problématiques locales.
            </p>
            <p className="text-gray-700 mb-4">
              Chez TeknetGroup, nous croyons fermement que la technologie doit être au service des personnes et des 
              organisations, jamais l'inverse. C'est pourquoi nous plaçons l'humain au cœur de notre approche, avec 
              une attention particulière à l'éthique et à la responsabilité sociale.
            </p>
            <p className="text-gray-700 font-semibold mt-6">
              Johanne Raharinosy<br />
              Directrice Générale, TeknetGroup
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="max-w-md transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/lovable-uploads/3ad00523-d179-4f80-ba57-d527c5282d47.png" 
                alt="Johanne Raharinosy, Directrice Générale" 
                className="rounded-lg shadow-xl"
              />
              <p className="text-center mt-4 text-teknet-red font-medium">Johanne Raharinosy</p>
              <p className="text-center text-gray-700">Directrice Générale</p>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
