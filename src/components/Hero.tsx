
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomCursor } from "@/components/ui/custom-cursor";

const Hero = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-r from-teknet-gray-dark to-gray-800 text-white flex items-center h-screen overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/bcaf0ef7-59bd-4628-b8a2-c71a48cfee0c.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        minHeight: '100vh'
      }}
    >
      <div className="absolute top-4 right-4 animate-[spin_10s_linear_infinite]">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge className="w-8 h-8 text-teknet-red" />
          </div>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="curve"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
              className="text-white/90"
            />
            <text className="text-[12px] font-semibold fill-teknet-gray-dark">
              <textPath href="#curve" startOffset="0%" className="animate-none">
                ISO 9001 Certified • ISO 9001 Certified •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="teknet-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="animate-fade-in text-left pl-4 md:pl-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Votre partenaire</span>
              <span className="block">Technologique et Numérique</span>
            </h1>
            <CustomCursor 
              cursorSize={40}
              cursorColor="rgba(204, 0, 0, 0.3)"
              hoverTextColor="#ffffff"
              defaultTextColor="rgba(255, 255, 255, 0.7)"
            >
              <p className="text-xl mb-8 max-w-xl">
                TeknetGroup accompagne votre transformation numérique avec des solutions innovantes en cybersécurité, badges, identification et systèmes d'information.
              </p>
            </CustomCursor>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 bg-teknet-red hover:bg-red-700 rounded-md font-medium transition-colors">
                Demander un audit
              </a>
              <a href="#services-section" onClick={scrollToServices} className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-teknet-gray-dark rounded-md font-medium transition-colors">
                Découvrir nos métiers
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
