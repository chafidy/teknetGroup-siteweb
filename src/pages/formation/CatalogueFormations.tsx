
import { useState } from "react";
import FormationLayout from "../../components/FormationLayout";
import TrainingHero from "../../components/formation/TrainingHero";
import TrainingApproach from "../../components/formation/TrainingApproach";
import BureautiqueCategory from "../../components/formation/categories/BureautiqueCategory";
import CybersecuriteCategory from "../../components/formation/categories/CybersecuriteCategory";
import OutilsCollaboratifsCategory from "../../components/formation/categories/OutilsCollaboratifsCategory";
import GraphismeWebCategory from "../../components/formation/categories/GraphismeWebCategory";
import GestionPratiqueCategory from "../../components/formation/categories/GestionPratiqueCategory";
import FormationsTechniquesCategory from "../../components/formation/categories/FormationsTechniquesCategory";
import AteliersNumeriquesCategory from "../../components/formation/categories/AteliersNumeriquesCategory";
import TrainingCertification from "../../components/formation/TrainingCertification";
import TrainingCTA from "../../components/formation/TrainingCTA";
import TrainingFilters, { CategoryType, LevelType } from "../../components/formation/TrainingFilters";

const CatalogueFormations = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [selectedLevel, setSelectedLevel] = useState<LevelType>("all");

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const handleLevelChange = (level: LevelType) => {
    setSelectedLevel(level);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedLevel("all");
  };

  // Helper function to determine if a category should be displayed based on filters
  const shouldShowCategory = (categoryId: CategoryType): boolean => {
    if (selectedCategory === "all") return true;
    return selectedCategory === categoryId;
  };

  return (
    <FormationLayout
      title="Catalogue des formations"
      description="Découvrez l'ensemble des formations proposées par TeknetGroup pour développer vos compétences techniques"
    >
      <div className="bg-gray-100">
        <TrainingHero />

        <div className="teknet-container py-12">
          <TrainingFilters
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
            onReset={handleResetFilters}
          />

          <TrainingApproach />

          {/* Categories - conditionally displayed based on filters */}
          {shouldShowCategory("bureautique") && (
            <BureautiqueCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("cybersecurite") && (
            <CybersecuriteCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("outils-collaboratifs") && (
            <OutilsCollaboratifsCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("graphisme-web") && (
            <GraphismeWebCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("gestion-pratique") && (
            <GestionPratiqueCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("formations-techniques") && (
            <FormationsTechniquesCategory levelFilter={selectedLevel} />
          )}
          {shouldShowCategory("ateliers-numeriques") && (
            <AteliersNumeriquesCategory levelFilter={selectedLevel} />
          )}
          
          {selectedCategory === "all" && <TrainingCertification />}

          {/* CTA Section */}
          <TrainingCTA />
        </div>
      </div>
    </FormationLayout>
  );
};

export default CatalogueFormations;
