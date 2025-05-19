
import { Link } from "react-router-dom";
import Image from "./ui/image";

const services = [
  {
    id: 1,
    title: "Sûreté - Sécurité & Identification",
    description: "Solutions complètes de sécurité physique et d'identification pour protéger vos infrastructures et contrôler les accès.",
    icon: "/lovable-uploads/a1aabdd8-e860-42aa-90c2-c52cf0f70cbd.png",
    link: "/surete-securite-identification"
  },
  {
    id: 2,
    title: "Développement informatique",
    description: "Conception et développement de solutions logicielles sur mesure pour répondre à vos besoins spécifiques.",
    icon: "/lovable-uploads/df9647ab-baf2-4bf6-a9a1-46f30f533741.png",
    link: "/developpement-informatique"
  },
  {
    id: 3,
    title: "Badges & Cartes",
    description: "Solutions d'identification et de contrôle d'accès pour sécuriser vos locaux.",
    icon: "/lovable-uploads/ae12ab6e-851a-4f93-af8e-13382d11fbad.png",
    link: "/badges-cartes"
  },
  {
    id: 4,
    title: "Cybersécurité",
    description: "Protection de vos systèmes contre les menaces informatiques avec des solutions de pointe.",
    icon: "/lovable-uploads/c0131f65-801c-47ad-b9a1-1df739a25cb4.png",
    link: "/cybersecurite"
  },
  {
    id: 5,
    title: "Systèmes d'information & Réseaux",
    description: "Infrastructure IT performante et sécurisée adaptée à vos besoins.",
    icon: "/lovable-uploads/b6df4348-19a7-48c2-a7ee-fe1d4eb925e9.png",
    link: "/systemes-information-reseaux"
  },
  {
    id: 6,
    title: "Numérisation & GED",
    description: "Dématérialisation de vos documents et gestion électronique pour optimiser vos processus.",
    icon: "/lovable-uploads/7c2088c5-721e-4d6d-87f3-d01abc6fffd9.png",
    link: "/numerisation-ged"
  },
  {
    id: 7,
    title: "Géolocalisation",
    description: "Tracking et gestion de flotte pour optimiser les déplacements et la logistique.",
    icon: "/lovable-uploads/3f7ddc5f-3898-4922-8d28-7e301ca11873.png",
    link: "/geolocalisation"
  },
  {
    id: 8,
    title: "Formation",
    description: "Programmes de formation adaptés aux besoins de vos équipes sur nos solutions.",
    icon: "/lovable-uploads/b94573a2-91f6-4e3c-bc72-ad0024545dab.png",
    link: "/formation"
  },
];

const Services = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-teknet-gray-dark/80" />
      
      <div className="teknet-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Nos métiers</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Découvrez notre expertise dans différents domaines pour répondre à tous vos besoins informatiques et de sécurité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card backdrop-blur-sm bg-white/95 group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-teknet-gray-dark group-hover:text-teknet-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-teknet-red font-medium hover:text-red-700 transition-colors inline-flex items-center"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-secondary">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
