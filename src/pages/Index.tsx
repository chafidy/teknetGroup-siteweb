
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import HomeProjects from "@/components/home/HomeProjects";
import IntroSection from "@/components/home/IntroSection";
import ApproachSection from "@/components/home/ApproachSection";

const Index = () => {
  // État pour suivre si les chiffres clés sont visibles
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Observer l'entrée dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Déclencher l'animation quand 30% de la section est visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>TeknetGroup - Solutions informatiques et de sécurité</title>
        <meta name="description" content="Découvrez les solutions innovantes de TeknetGroup en sécurité informatique, badges, cybersécurité, réseaux, formation et développement." />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        
        {/* Section Introduction */}
        <IntroSection statsRef={statsRef} statsVisible={statsVisible} />
        
        <div id="services-section">
          <Services />
        </div>
        
        {/* Grands Projets Section */}
        <HomeProjects />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Notre Approche Section */}
        <ApproachSection />
        
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
