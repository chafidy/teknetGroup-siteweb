
import React from 'react';
import { Shield } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface CybersecuriteCategoryProps {
  levelFilter?: LevelType;
}

const CybersecuriteCategory = ({ levelFilter = "all" }: CybersecuriteCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Shield} 
      title="CYBERSÉCURITÉ & INFORMATIQUE"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Initiation à l'informatique" 
        objectives={["Connaissance de base de Windows", "Stockage", "Navigation"]}
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      />
      <TrainingCard 
        title="Cybersécurité" 
        audience="Enfants (10-13 ans, 14-17 ans), grand public, managers"
        objectives={["Identifier les menaces", "Sécuriser les outils", "Bonnes pratiques"]}
        imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      />
      <TrainingCard 
        title="Sécurité informatique / Analyse Forensic" 
        objectives={["Sécuriser les SI", "Rédiger des rapports d'audit", "Utiliser des outils spécialisés"]}
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />
    </TrainingCategory>
  );
};

export default CybersecuriteCategory;
