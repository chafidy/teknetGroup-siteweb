
import React from 'react';
import { Pencil } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface GraphismeWebCategoryProps {
  levelFilter?: LevelType;
}

const GraphismeWebCategory = ({ levelFilter = "all" }: GraphismeWebCategoryProps) => {
  return (
    <TrainingCategory 
      icon={Pencil} 
      title="GRAPHISME & WEB"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Illustrator" 
        objectives={["Créer des illustrations vectorielles", "Effets de texte", "Mises en couleur"]}
        imageSrc="https://images.unsplash.com/photo-1536566482680-fca31930a0bd"
      />
      <TrainingCard 
        title="Photoshop" 
        objectives={["Retouche photo", "Calques", "Composition graphique"]}
        imageSrc="https://images.unsplash.com/photo-1572044162444-ad60f128bdea"
      />
      <TrainingCard 
        title="InDesign" 
        objectives={["Création de plaquettes", "Brochures", "Mise en page automatique"]}
        imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d"
      />
      <TrainingCard 
        title="Adobe Premiere / After Effects" 
        objectives={["Montage vidéo", "Ajout de titres", "Transitions", "Effets"]}
        imageSrc="https://images.unsplash.com/photo-1535016120720-40c646be5580"
      />
      <TrainingCard 
        title="Autocad" 
        objectives={["Dessin 2D", "Calques", "Impressions à échelle", "Gabarits"]}
        imageSrc="https://images.unsplash.com/photo-1621619856624-94ec7caa7924"
      />
      <TrainingCard 
        title="Photographie" 
        objectives={["Maîtriser l'appareil", "Techniques de prise de vue", "Comprendre le diaphragme"]}
        imageSrc="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
      />
    </TrainingCategory>
  );
};

export default GraphismeWebCategory;
