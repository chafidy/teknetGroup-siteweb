
import React from 'react';
import { Brain } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface AteliersNumeriquesCategoryProps {
  levelFilter?: LevelType;
}

const AteliersNumeriquesCategory = ({ levelFilter = "all" }: AteliersNumeriquesCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Brain} 
      title="ATELIERS NUMÉRIQUES"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Sur iPad / iPhone" 
        objectives={["Création", "Navigation", "Géolocalisation", "Communication numérique"]}
        imageSrc="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      />
      <TrainingCard 
        title="Scratch" 
        objectives={["Initiation à la programmation ludique"]}
        imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      />
    </TrainingCategory>
  );
};

export default AteliersNumeriquesCategory;
