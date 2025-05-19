
import { useState } from 'react';
import { SectionTitle } from "@/components/ui/typography";
import Image, { VideoThumbnail } from '@/components/ui/image';

interface HistorySectionProps {
  onPlayVideo: () => void;
}

export const HistorySection = ({ onPlayVideo }: HistorySectionProps) => {
  return (
    <section className="relative py-16 mb-16 animate-fade-in animation-delay-300">
      {/* Motif de points en arrière-plan */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image 
          src="/lovable-uploads/632b943e-3625-4bfa-8287-3b9ae37c1a19.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <SectionTitle>Notre Histoire</SectionTitle>
          <div className="text-gray-700 space-y-4">
            <p>
              Les années 2000 sont le témoin de la création de TeknetGroup et la démocratisation de l'informatique 
              à travers l'accès à Internet. Adresse phare en équipements informatiques et de la formation, 
              elle s'est imposée sur la scène de l'intégration de solutions de sécurisation, d'infrastructure 
              physique et en système d'information.
            </p>
            <p>
              Après plus de 20 ans d'expertise sur le secteur des Entreprises de Services Numériques à Madagascar, 
              TeknetGroup se distingue par son champ d'intervention à dimension internationale, en étant référencée 
              en Afrique, en Asie et en Europe.
            </p>
            <p>
              Faisant de l'innovation l'une des valeurs de son métier, TeknetGroup renforce les relations avec ses 
              partenaires internationaux à travers leur représentation. L'objectif étant de développer et fournir 
              des solutions globales et complémentaires pour répondre aux besoins de ses clients.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <VideoThumbnail 
            thumbnailSrc="/lovable-uploads/32fd74b5-5664-4fc3-9d7d-3cb8a8d626d8.png"
            alt="À propos de TeknetGroup"
            className="w-full h-full"
            onPlay={onPlayVideo}
          />
        </div>
      </div>
    </section>
  );
};
