
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    id: 1,
    content: "La mise en place du système de badges sécurisés par TeknetGroup a considérablement amélioré la gestion des accès au sein de notre entreprise.",
    author: "Marie Dupont",
    position: "Directrice RH, Enterprise SAS",
    avatar: "/lovable-uploads/3d05f4dd-a699-4fc9-808e-daaed32abc14.png",
  },
  {
    id: 2,
    content: "Grâce à l'audit de cybersécurité réalisé par TeknetGroup, nous avons pu identifier et corriger des failles critiques dans notre infrastructure IT.",
    author: "Jean Martin",
    position: "DSI, Groupe IndusTech",
    avatar: "/lovable-uploads/27b8f704-1631-4fb7-a007-069c73dc6169.png",
  },
  {
    id: 3,
    content: "La solution de numérisation et GED a transformé notre gestion documentaire. Un gain de temps considérable et une meilleure organisation.",
    author: "Sophie Leroy",
    position: "Responsable Administrative, Cabinet Juridique",
    avatar: "/lovable-uploads/533e20c4-6e4e-460e-9c34-a14afe4a21e5.png",
  },
];

const Testimonials = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 bg-white">
      <div className="teknet-container">
        <div className="relative text-center mb-12">
          {/* Badge certification - repositioned for mobile */}
          <div className={`${isMobile ? 'relative mb-6 flex justify-center' : 'absolute top-4 right-4'}`}>
            <div className="w-20 h-20 animate-spin" style={{ animationDuration: '10s' }}>
              <img 
                src="/lovable-uploads/11bab654-b3ad-467b-8e3d-18a5c2181b7e.png" 
                alt="ISO 9001:2015 Certification" 
                className="w-full h-full"
              />
            </div>
          </div>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui ont fait confiance à TeknetGroup pour leurs besoins en informatique et sécurité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <svg className="text-teknet-red h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="text-center">
                <p className="font-semibold text-teknet-gray-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
