
import React from 'react';
import { GraduationCap, Book, School, Users } from "lucide-react";
import { SectionTitle, Paragraph } from "@/components/ui/typography";

const TrainingApproach = () => {
  return (
    <div className="mb-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <SectionTitle className="mb-6">Notre approche de la formation</SectionTitle>
        <Paragraph>
          TeknetGroup place l'apprentissage continu au cœur de son activité. Notre catalogue de formations est conçu pour répondre aux besoins en compétences des professionnels de tous niveaux, du débutant à l'expert.
        </Paragraph>
      </div>

      {/* Valeurs de notre approche formation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-teknet-red/10 rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-teknet-red" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Formations certifiantes</h3>
          <p className="text-gray-600">
            Préparez et obtenez des certifications reconnues par l'industrie pour valoriser vos compétences
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-teknet-red/10 rounded-full flex items-center justify-center mb-4">
            <Book className="h-8 w-8 text-teknet-red" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Formations sur mesure</h3>
          <p className="text-gray-600">
            Des programmes adaptés spécifiquement aux besoins et au contexte de votre organisation
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-teknet-red/10 rounded-full flex items-center justify-center mb-4">
            <School className="h-8 w-8 text-teknet-red" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Formations continues</h3>
          <p className="text-gray-600">
            Perfectionnez vos compétences et restez à jour avec les dernières évolutions technologiques
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-teknet-red/10 rounded-full flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-teknet-red" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Transfert de compétences</h3>
          <p className="text-gray-600">
            Accompagnement personnalisé pour assurer la montée en compétences de vos équipes
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingApproach;
