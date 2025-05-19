
import React from "react";
import { Filter } from "lucide-react";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type CategoryType = 
  | "all" 
  | "bureautique" 
  | "cybersecurite" 
  | "outils-collaboratifs" 
  | "graphisme-web" 
  | "gestion-pratique" 
  | "formations-techniques" 
  | "ateliers-numeriques";

export type LevelType = 
  | "all" 
  | "initiation" 
  | "intermediaire" 
  | "avance" 
  | "perfectionnement" 
  | "complexe";

interface TrainingFiltersProps {
  selectedCategory: CategoryType;
  selectedLevel: LevelType;
  onCategoryChange: (category: CategoryType) => void;
  onLevelChange: (level: LevelType) => void;
  onReset: () => void;
}

const TrainingFilters = ({
  selectedCategory,
  selectedLevel,
  onCategoryChange,
  onLevelChange,
  onReset
}: TrainingFiltersProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex items-center gap-2 text-lg font-medium">
          <Filter className="h-5 w-5" />
          <span>Filtres</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="space-y-1">
            <label className="text-sm font-medium">Catégorie</label>
            <Select value={selectedCategory} onValueChange={(value) => onCategoryChange(value as CategoryType)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Toutes les catégories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="bureautique">Bureautique</SelectItem>
                <SelectItem value="cybersecurite">Cybersécurité & Informatique</SelectItem>
                <SelectItem value="outils-collaboratifs">Outils Collaboratifs</SelectItem>
                <SelectItem value="graphisme-web">Graphisme & Web</SelectItem>
                <SelectItem value="gestion-pratique">Gestion Pratique</SelectItem>
                <SelectItem value="formations-techniques">Formations Techniques</SelectItem>
                <SelectItem value="ateliers-numeriques">Ateliers Numériques</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium">Niveau</label>
            <Select value={selectedLevel} onValueChange={(value) => onLevelChange(value as LevelType)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tous les niveaux" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="initiation">Initiation</SelectItem>
                <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                <SelectItem value="avance">Avancé</SelectItem>
                <SelectItem value="perfectionnement">Perfectionnement</SelectItem>
                <SelectItem value="complexe">Complexe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button variant="outline" onClick={onReset} className="w-full">
              Réinitialiser les filtres
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFilters;
