
import React from 'react';
import { Calculator } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface GestionPratiqueCategoryProps {
  levelFilter?: LevelType;
}

const GestionPratiqueCategory = ({ levelFilter = "all" }: GestionPratiqueCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Calculator} 
      title="GESTION PRATIQUE"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Gestion du personnel" 
        objectives={["Planning", "Gestion des congés"]}
        imageSrc="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
      />
      <TrainingCard 
        title="Gestion des stocks" 
        objectives={["Suivi des niveaux", "Optimisation des stocks"]}
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      />
      <TrainingCard 
        title="Gestion de performances" 
        objectives={["Suivi de tâches", "Indicateurs graphiques"]}
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      />
      <TrainingCard 
        title="Facturation & Tableaux" 
        objectives={["Création de factures automatiques", "Consolidation mensuelle", "Macros"]}
        imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      />
    </TrainingCategory>
  );
};

export default GestionPratiqueCategory;
