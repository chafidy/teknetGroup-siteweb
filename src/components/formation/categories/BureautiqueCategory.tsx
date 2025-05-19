
import React from 'react';
import { FileSpreadsheet } from "lucide-react";
import TrainingCategory from "../TrainingCategory";
import TrainingCard from "../TrainingCard";
import { LevelType } from "../TrainingFilters";

interface BureautiqueCategoryProps {
  levelFilter?: LevelType;
}

const BureautiqueCategory = ({ levelFilter = "all" }: BureautiqueCategoryProps) => {
  return (
    <TrainingCategory 
      icon={FileSpreadsheet} 
      title="BUREAUTIQUE"
      levelFilter={levelFilter}
    >
      <TrainingCard 
        title="Excel" 
        levels="Initiation, Intermédiaire, Complexe, Avancé, Perfectionnement, VBA"
        objectives={["Concevoir des tableaux", "Automatiser les calculs", "Créer des graphiques", "Maîtriser les macros"]}
        tools={["Tableaux croisés dynamiques", "Fonctions conditionnelles", "Statistiques"]}
        imageSrc="https://images.unsplash.com/photo-1553484771-371a605b060b"
      />
      <TrainingCard 
        title="Word" 
        levels="Initiation, Intermédiaire, Perfectionnement"
        objectives={["Mise en page", "Publipostage", "Automatisation", "Création de formulaires"]}
        skills={["Sommaires", "Numérotation", "Correction grammaticale"]}
        imageSrc="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
      />
      <TrainingCard 
        title="PowerPoint" 
        levels="Tous niveaux"
        objectives={["Créer des présentations dynamiques et professionnelles"]}
        skills={["Masques de diapositives", "Effets", "Transitions", "Schémas"]}
        imageSrc="https://images.unsplash.com/photo-1516383274235-5f42d6c6412d"
      />
      <TrainingCard 
        title="Outlook" 
        objectives={["Gérer emails", "Calendrier", "Fichiers partagés", "Productivité"]}
        imageSrc="https://images.unsplash.com/photo-1554744512-5a8ef212982d"
      />
      <TrainingCard 
        title="Access" 
        levels="Initiation, Perfectionnement"
        objectives={["Créer base de données", "Formulaires", "Requêtes", "Macros"]}
        imageSrc="https://images.unsplash.com/photo-1542621334-a254cf47733d"
      />
      <TrainingCard 
        title="Power BI" 
        objectives={["Analyse de données", "Tableaux de bord", "Visualisation dynamique"]}
        imageSrc="https://images.unsplash.com/photo-1633412802994-5c058f151b66"
      />
      <TrainingCard 
        title="Power Query" 
        objectives={["Transformer", "Combiner et analyser des données"]}
        imageSrc="https://images.unsplash.com/photo-1520807947082-699dd4f7e317"
      />
      <TrainingCard 
        title="MS Project" 
        objectives={["Gérer les projets", "Diagrammes de Gantt/Pert", "Planification", "Ressources"]}
        imageSrc="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
      />
    </TrainingCategory>
  );
};

export default BureautiqueCategory;
