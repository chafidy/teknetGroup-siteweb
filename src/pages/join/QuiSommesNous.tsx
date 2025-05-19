
import { useState } from 'react';
import JoinLayout from '@/components/JoinLayout';

// Import the new component sections
import { HistorySection } from '@/components/qui-sommes-nous/HistorySection';
import { ApproachSection } from '@/components/qui-sommes-nous/ApproachSection';
import { SolutionsSection } from '@/components/qui-sommes-nous/SolutionsSection';
import { ClientsSection } from '@/components/qui-sommes-nous/ClientsSection';
import { ValuesTabsSection } from '@/components/qui-sommes-nous/ValuesTabsSection';
import { VideoModal } from '@/components/qui-sommes-nous/VideoModal';

const QuiSommesNous = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handlePlayVideo = () => {
    setShowVideoModal(true);
  };

  return (
    <JoinLayout
      title="Qui Sommes-Nous"
      description="Découvrez l'histoire, les valeurs et la mission de TeknetGroup, expert en solutions technologiques et services numériques."
    >
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="teknet-container">
          <h1 className="text-4xl md:text-5xl font-bold text-teknet-gray-dark mb-6 animate-fade-in">
            Qui Sommes-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12 animate-fade-in animation-delay-200">
            TeknetGroup est une entreprise de technologies et de services numériques 
            qui accompagne les organisations dans leur transformation digitale depuis plus de 20 ans.
          </p>

          {/* Section: Notre Histoire */}
          <HistorySection onPlayVideo={handlePlayVideo} />

          {/* Section: Notre Méthodologie & Approche */}
          <ApproachSection />

          {/* Section: Nos Solutions Globales */}
          <SolutionsSection />

          {/* Section: Nos Clients */}
          <ClientsSection />

          {/* Section: Valeurs, Mission, et Mot du DG */}
          <ValuesTabsSection />
        </div>
      </div>
      
      {/* Modal pour la vidéo */}
      <VideoModal isOpen={showVideoModal} onOpenChange={setShowVideoModal} />
    </JoinLayout>
  );
};

export default QuiSommesNous;
