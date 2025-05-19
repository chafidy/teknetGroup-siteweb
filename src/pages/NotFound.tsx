
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page non trouvée - TeknetGroup</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </Helmet>
      
      <Header />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-teknet-red mb-4">404</h1>
          <p className="text-2xl text-teknet-gray-dark mb-8">Oups ! Page non trouvée</p>
          <p className="text-lg text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
