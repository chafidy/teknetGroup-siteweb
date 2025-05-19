
import Image from "@/components/ui/image";
import { SectionTitle } from "@/components/ui/typography";

export const ApproachSection = () => {
  return (
    <section className="py-24 mb-16 relative overflow-hidden">
      {/* Cercles animés et floutés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-float-1 top-10 -left-20 opacity-60"></div>
        <div className="absolute w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-float-2 bottom-10 -right-20 opacity-40"></div>
        <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-float-3 top-1/2 left-1/3 opacity-40"></div>
        <div className="absolute w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-float-4 top-1/4 right-1/4 opacity-30"></div>
        <div className="absolute w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float-2 bottom-1/4 left-1/2 opacity-30"></div>
      </div>

      <SectionTitle className="mb-10 animate-fade-in z-10 relative text-center">Notre Méthodologie & Approche</SectionTitle>
      
      <div className="w-full flex justify-center items-center relative z-10">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden p-6 transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
          <Image 
            src="/lovable-uploads/cc67e865-5ff7-4b6c-acfc-56753f95097b.png" 
            alt="Méthodologie et approche de TeknetGroup" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
