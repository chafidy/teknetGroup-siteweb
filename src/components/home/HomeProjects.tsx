
import { Card, CardContent } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/typography";

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const HomeProjects = () => {
  // Données des projets
  const projects: Project[] = [
    {
      id: 1,
      title: "Système de contrôle d'accès pour groupe bancaire",
      description: "Déploiement d'une solution complète de badges et de contrôle d'accès dans 50 agences bancaires avec intégration aux systèmes de sécurité existants.",
      image: "/lovable-uploads/23f05801-9817-43a1-965e-39c58b10572e.png",
      category: "Sûreté - Sécurité",
      year: "2023"
    },
    {
      id: 2,
      title: "Plateforme de gestion documentaire pour collectivité",
      description: "Développement et mise en place d'une solution GED pour une collectivité territoriale gérant plus de 100 000 documents annuels avec workflow d'approbation.",
      image: "/lovable-uploads/c49b7db0-f385-4365-9a1d-8d3e07d30512.png",
      category: "Numérisation & GED",
      year: "2022"
    },
    {
      id: 3,
      title: "Application mobile de suivi logistique",
      description: "Création d'une application mobile de géolocalisation et suivi en temps réel pour une flotte de 200 véhicules avec analyse de données et optimisation des parcours.",
      image: "/lovable-uploads/1c73368e-ccf0-4e95-840d-4b80513f3559.png",
      category: "Développement informatique",
      year: "2024"
    },
    {
      id: 4,
      title: "Infrastructure réseau sécurisée pour groupe hospitalier",
      description: "Conception et implémentation d'une architecture réseau haute disponibilité avec sécurisation des données médicales pour un groupe de 5 établissements.",
      image: "/lovable-uploads/f90032b0-2859-42ec-983e-30d418105abb.png",
      category: "Cybersécurité",
      year: "2023"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="teknet-container">
        <div className="text-center mb-12">
          <SectionTitle className="text-center">Nos grands projets</SectionTitle>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations majeures pour des clients de tous secteurs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/contact" className="btn-primary">
            Discuter de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Image 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-teknet-red text-white px-3 py-1 text-sm font-medium rounded">
          {project.category}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-teknet-gray-dark">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link 
          to="/contact" 
          className="text-teknet-red font-medium hover:text-red-700 transition-colors inline-flex items-center"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default HomeProjects;
