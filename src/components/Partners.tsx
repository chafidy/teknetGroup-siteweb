
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";

const partners = [
  { 
    id: 1, 
    name: "Hikvision", 
    logo: "/lovable-uploads/cb3f7f76-6db8-4760-a8cd-e340105714ee.png",
    description: "Leader mondial dans les solutions de vidéosurveillance et de sécurité",
    color: "text-red-500" 
  },
  { 
    id: 2, 
    name: "Dahua", 
    logo: "/lovable-uploads/d8f72635-5e4d-4a98-b496-70d161718a3f.png",
    description: "Fournisseur de solutions de sécurité vidéo et de services intelligents",
    color: "text-blue-500" 
  },
  { 
    id: 3, 
    name: "Bosch", 
    logo: "/lovable-uploads/12327beb-9811-4c1a-a706-5f22bcb7f7db.png",
    description: "Expert en systèmes de sécurité et solutions électroniques innovantes",
    color: "text-green-500" 
  },
  { 
    id: 4, 
    name: "Vivotek", 
    logo: "/lovable-uploads/7fdd023d-3371-4c0a-8841-e84ea85e040f.png",
    description: "Spécialiste des caméras IP et solutions de surveillance réseau",
    color: "text-blue-500" 
  },
  { 
    id: 5, 
    name: "Tiandy", 
    logo: "/lovable-uploads/a73b6c6a-0a19-41d2-8ff6-9e7d13469dd4.png",
    description: "Fabricant de systèmes de vidéosurveillance avancés",
    color: "text-green-500" 
  },
  { 
    id: 6, 
    name: "Kelio", 
    logo: "/lovable-uploads/8261325f-bd3a-46de-96c4-14de9c9a42a2.png",
    description: "Solutions de gestion des temps et contrôle d'accès",
    color: "text-yellow-500" 
  },
  { 
    id: 7, 
    name: "Risco", 
    logo: "/lovable-uploads/16a40816-a981-45df-a64a-5c2c435c8047.png",
    description: "Systèmes d'alarme et solutions de sécurité intégrées",
    color: "text-red-500" 
  },
  { 
    id: 8, 
    name: "Delta Dore", 
    logo: "/lovable-uploads/7b3be092-3911-4ce4-8de1-9d4e47d2c22b.png",
    description: "Solutions pour la maison connectée et la gestion énergétique",
    color: "text-green-500" 
  },
  { 
    id: 9, 
    name: "Paradox", 
    logo: "/lovable-uploads/396f6a1a-26e8-427f-857f-62cedd348a68.png",
    description: "Systèmes de sécurité et d'alarme haute performance",
    color: "text-pink-500" 
  },
  { 
    id: 10, 
    name: "Mavili", 
    logo: "/lovable-uploads/1e35b100-0a92-4410-994f-353253f649e0.png",
    description: "Systèmes de détection d'incendie et solutions de sécurité",
    color: "text-blue-500" 
  },
  { 
    id: 11, 
    name: "Aratek", 
    logo: "/lovable-uploads/5a3d36c3-16fd-485f-8732-c4d8f28b42a9.png",
    description: "Solutions biométriques et d'identification avancées",
    color: "text-red-500" 
  },
  { 
    id: 12, 
    name: "ZKTeco", 
    logo: "/lovable-uploads/fb409116-4209-4bdf-8c43-d7f923659a94.png",
    description: "Solutions de contrôle d'accès et biométrie",
    color: "text-green-500" 
  },
  { 
    id: 13, 
    name: "iStartek", 
    logo: "/lovable-uploads/e43a258a-ee8f-4df2-b715-97b3acbd092b.png",
    description: "Solutions de géolocalisation et suivi de flotte",
    color: "text-blue-500" 
  },
  { 
    id: 14, 
    name: "Garrett", 
    logo: "/lovable-uploads/7407e088-5b5d-4841-87a5-2e7c39fc56f8.png",
    description: "Équipements de détection de métaux et de sécurité",
    color: "text-yellow-500" 
  },
  // Nouveaux partenaires
  { 
    id: 15, 
    name: "Evolis", 
    logo: "/lovable-uploads/96cc53f0-4f1f-427c-a047-62f88e0fb9b1.png",
    description: "Solutions d'impression de cartes et badges de haute qualité",
    color: "text-red-500" 
  },
  { 
    id: 16, 
    name: "Microsoft", 
    logo: "/lovable-uploads/55b73058-367b-44b5-bf09-3d3e26b7ba58.png",
    description: "Solutions logicielles et cloud pour entreprises",
    color: "text-blue-500" 
  },
  { 
    id: 17, 
    name: "BSV", 
    logo: "/lovable-uploads/3f8467cd-4410-42c2-9360-dbf71c9ef617.png",
    description: "Solutions de vidéosurveillance et sécurité intelligente",
    color: "text-red-500" 
  },
  { 
    id: 18, 
    name: "Adobe", 
    logo: "/lovable-uploads/6b35fd3a-b533-467f-be4c-66101049dfd7.png",
    description: "Solutions créatives et d'édition numérique",
    color: "text-red-500" 
  },
  { 
    id: 19, 
    name: "Fortinet", 
    logo: "/lovable-uploads/508e9d83-7b3f-4133-87b3-0b8aa0a5fe4a.png",
    description: "Solutions de cybersécurité et protection des réseaux",
    color: "text-red-500" 
  },
  { 
    id: 20, 
    name: "Sophos", 
    logo: "/lovable-uploads/3f7bb085-a2d8-49d1-96a0-76510419fa6f.png",
    description: "Solutions de cybersécurité nouvelle génération",
    color: "text-blue-500" 
  },
  { 
    id: 21, 
    name: "Logitech", 
    logo: "/lovable-uploads/55fe7a7c-5775-4cd3-9b0f-111d4002be1c.png",
    description: "Périphériques et solutions de vidéoconférence",
    color: "text-black" 
  },
  { 
    id: 22, 
    name: "Lenovo", 
    logo: "/lovable-uploads/9bd464ee-1676-44aa-8d05-a830d25d7a8c.png",
    description: "Matériel informatique et solutions d'entreprise",
    color: "text-red-500" 
  },
  { 
    id: 23, 
    name: "Fujitsu", 
    logo: "/lovable-uploads/ff7ca6c4-0da7-4e46-b3e5-33d95df0c1ed.png",
    description: "Solutions informatiques et services numériques",
    color: "text-red-500" 
  },
  { 
    id: 24, 
    name: "HP", 
    logo: "/lovable-uploads/0c6a2dde-5e5a-437b-882e-55854fb8611c.png",
    description: "Matériel informatique et solutions d'impression",
    color: "text-blue-500" 
  },
  { 
    id: 25, 
    name: "Zedoc", 
    logo: "/lovable-uploads/b77c1afa-e7c7-466f-b98d-d0181866d9ca.png",
    description: "Solutions de gestion documentaire et GED",
    color: "text-red-500" 
  },
  { 
    id: 26, 
    name: "Automatic Systems", 
    logo: "/lovable-uploads/9df6ef52-8bd5-41d6-bda9-3c7e96c4cf90.png",
    description: "Solutions d'automatisation et de contrôle d'accès",
    color: "text-red-500" 
  },
  { 
    id: 27, 
    name: "Avtech Firmwares", 
    logo: "/lovable-uploads/664e8984-858a-4e4f-8932-ff08205e6d93.png",
    description: "Solutions de vidéosurveillance et mises à jour firmware",
    color: "text-blue-500" 
  },
  { 
    id: 28, 
    name: "Axis Communications", 
    logo: "/lovable-uploads/af64198e-fa1a-4e15-8cab-3cca99857da6.png",
    description: "Technologies de vidéosurveillance en réseau et solutions IoT",
    color: "text-black" 
  },
  { 
    id: 29, 
    name: "CardPresso", 
    logo: "/lovable-uploads/bfbc16ba-d61d-4ae9-a02d-d5cdf9f37981.png",
    description: "Logiciels d'impression de cartes et badges",
    color: "text-green-500" 
  },
  { 
    id: 30, 
    name: "MC3 Madagascar", 
    logo: "/lovable-uploads/a80be43b-3f7a-470e-aa76-dd869fa26a85.png",
    description: "Services informatiques et solutions d'intégration",
    color: "text-orange-500" 
  },
  { 
    id: 31, 
    name: "Ceia", 
    logo: "/lovable-uploads/ffcf4ed1-b1e2-4c47-ba35-61f0dcf5e55d.png",
    description: "Systèmes de détection de métaux et sécurité",
    color: "text-blue-500" 
  },
  { 
    id: 32, 
    name: "Entrust", 
    logo: "/lovable-uploads/ad605290-10a9-413d-84b1-c87b29195eb0.png",
    description: "Solutions de sécurité numérique et identité",
    color: "text-purple-500" 
  },
  { 
    id: 33, 
    name: "Sophos Gold Partner", 
    logo: "/lovable-uploads/991a92ca-95a7-4cfa-aad6-1fa219405b98.png",
    description: "Solutions de cybersécurité et protection réseau",
    color: "text-yellow-500" 
  },
  { 
    id: 34, 
    name: "FAAC", 
    logo: "/lovable-uploads/c2735063-2490-4c63-8f7e-e643f71913ef.png",
    description: "Automatismes et contrôles d'accès",
    color: "text-blue-500" 
  },
  { 
    id: 35, 
    name: "Hewlett Packard Enterprise", 
    logo: "/lovable-uploads/745d7e3f-c5c8-4694-bfd2-5c4978b2fb39.png",
    description: "Solutions d'infrastructure informatique et cloud",
    color: "text-green-500" 
  },
  { 
    id: 36, 
    name: "Hytera", 
    logo: "/lovable-uploads/cfeb727b-c531-4a5d-b8da-e2b78fe36fb8.png",
    description: "Systèmes de radiocommunication professionnelle",
    color: "text-gray-500" 
  },
  { 
    id: 37, 
    name: "IDCA", 
    logo: "/lovable-uploads/3240143f-8ff4-49a2-8b3a-c10665f797f4.png",
    description: "Standards et certifications de datacenters",
    color: "text-red-500" 
  },
  { 
    id: 38, 
    name: "Idemia", 
    logo: "/lovable-uploads/6d740b4c-d9b1-4020-8706-90054fb68b20.png",
    description: "Solutions d'identité biométrique et sécurité",
    color: "text-purple-500" 
  },
  { 
    id: 39, 
    name: "38 Cases of Success", 
    logo: "/lovable-uploads/4264483b-96bb-463e-adc1-13cc61fbf5d4.png",
    description: "Solutions technologiques et études de cas",
    color: "text-teal-500" 
  },
  { 
    id: 40, 
    name: "NetGuard", 
    logo: "/logos/netguard.png",
    description: "Surveillance réseau et protection des données",
    color: "text-blue-500" 
  },
  { 
    id: 41, 
    name: "GlobalTech", 
    logo: "/logos/globaltech.png",
    description: "Solutions informatiques globales pour entreprises",
    color: "text-gray-700" 
  },
  { 
    id: 42, 
    name: "UserSafe", 
    logo: "/logos/usersafe.png",
    description: "Protection des données utilisateurs et confidentialité",
    color: "text-green-600" 
  },
  { 
    id: 43, 
    name: "DataCore", 
    logo: "/logos/datacore.png",
    description: "Solutions de stockage et gestion de données",
    color: "text-blue-700" 
  }
];

const Partners = () => {
  // État pour contrôler le défilement automatique
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoScroll) {
      const carouselElement = document.querySelector("[data-carousel]");
      const api = (carouselElement as any)?.__embla;
      
      if (api) {
        // Défilement automatique lent toutes les 3.5 secondes
        interval = window.setInterval(() => {
          api.scrollNext();
        }, 3500);
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll]);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="teknet-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos partenaires</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders du marché pour vous offrir les meilleures solutions.
          </p>
        </div>
        
        <Carousel
          data-carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
        >
          <CarouselContent className="py-4">
            {partners.map((partner) => (
              <CarouselItem key={partner.id} className="basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex justify-center">
                <div className="group h-24 flex items-center justify-center px-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                    title={partner.description}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
