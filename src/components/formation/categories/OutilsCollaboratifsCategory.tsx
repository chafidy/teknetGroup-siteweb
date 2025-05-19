
import React from 'react';
import { Users } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface OutilsCollaboratifsCategoryProps {
  levelFilter?: LevelType;
}

const OutilsCollaboratifsCategory = ({ levelFilter = "all" }: OutilsCollaboratifsCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Users} 
      title="OUTILS COLLABORATIFS"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Teams, Zoom, Google Meet" 
        objectives={["Réussir ses réunions/formations à distance"]}
        skills={["Partage de fichiers", "Organisation d'événements virtuels"]}
        imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
    </TrainingCategory>
  );
};

export default OutilsCollaboratifsCategory;
