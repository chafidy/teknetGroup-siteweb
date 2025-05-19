
import JoinLayout from '@/components/JoinLayout';
import PartnerCard from '@/components/partners/PartnerCard';
import PartnerTestimonials from '@/components/partners/PartnerTestimonials';
import PartnershipBenefits from '@/components/partners/PartnershipBenefits';
import PartnersEcosystem from '@/components/partners/PartnersEcosystem';
import { partners, testimonials, partnershipBenefits } from '@/data/partners';

const NosPartenaires = () => {
  return (
    <JoinLayout
      title="Nos Partenaires"
      description="Découvrez les partenaires technologiques de TeknetGroup qui nous permettent de vous offrir des solutions complètes et innovantes."
    >
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="teknet-container">
          <h1 className="text-4xl md:text-5xl font-bold text-teknet-gray-dark mb-6">
            Nos Partenaires
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Chez TeknetGroup, nous croyons en la force des partenariats stratégiques pour offrir 
            à nos clients les solutions les plus complètes et innovantes. Découvrez notre écosystème 
            de partenaires technologiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>

          <PartnerTestimonials testimonials={testimonials} />
          <PartnershipBenefits benefits={partnershipBenefits} />
          <PartnersEcosystem partners={partners} />
        </div>
      </div>
    </JoinLayout>
  );
};

export default NosPartenaires;
