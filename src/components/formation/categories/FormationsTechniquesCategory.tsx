
import React from 'react';
import { Database } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface FormationsTechniquesCategoryProps {
  levelFilter?: LevelType;
}

const FormationsTechniquesCategory = ({ levelFilter = "all" }: FormationsTechniquesCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Database} 
      title="FORMATIONS TECHNIQUES"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Oracle SQL" 
        imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      />
      <TrainingCard 
        title="Oracle PL/SQL" 
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
      />
      <TrainingCard 
        title="Administration Oracle" 
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      />
      <TrainingCard 
        title="Administration Système & Réseaux Linux" 
        levels="Niveaux 1 & 2"
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      />
      <TrainingCard 
        title="SIG (Systèmes d'Information Géographique)" 
        objectives={["Maîtrise des outils SIG", "Cartographie", "Données géographiques"]}
        imageSrc="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
      />
    </TrainingCategory>
  );
};

export default FormationsTechniquesCategory;
