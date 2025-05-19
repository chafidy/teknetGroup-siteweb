
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-teknet-red text-white">
      <div className="teknet-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à sécuriser votre infrastructure informatique ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer des solutions adaptées à votre entreprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-teknet-red hover:bg-gray-200 rounded-md font-medium transition-colors"
              >
                Nous contacter
              </Link>
              <Link 
                to="/nos-metiers" 
                className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-teknet-red rounded-md font-medium transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Pourquoi choisir TeknetGroup ?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expertise de plus de 20 ans dans les solutions informatiques et de sécurité</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Solutions personnalisées adaptées à vos besoins spécifiques</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Service client réactif et support technique disponible</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Partenaires des leaders du marché pour des solutions de pointe</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
