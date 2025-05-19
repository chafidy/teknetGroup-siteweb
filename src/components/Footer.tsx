
import { Link } from 'react-router-dom';
import Image from './ui/image';

const Footer = () => {
  return (
    <footer className="bg-teknet-gray-dark text-white pt-12 pb-6">
      <div className="teknet-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos de TeknetGroup</h3>
            <p className="text-sm mb-4">
              Depuis plus de 20 ans, TeknetGroup accompagne les entreprises dans leur transformation numérique 
              et la sécurisation de leurs systèmes d'information.
            </p>
            <div className="flex items-center mt-4">
              <Image 
                src="/lovable-uploads/1d6483e9-b358-4c3d-99dd-f63933cee7c5.png" 
                alt="TeknetGroup Logo" 
                className="h-12 w-auto" 
                fallback="/placeholder.svg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos métiers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cybersecurite" className="hover:text-teknet-red transition-colors">Cybersécurité</Link></li>
              <li><Link to="/badges-cartes" className="hover:text-teknet-red transition-colors">Badges & Cartes</Link></li>
              <li><Link to="/systemes-information-reseaux" className="hover:text-teknet-red transition-colors">Systèmes d'information & Réseaux</Link></li>
              <li><Link to="/formation" className="hover:text-teknet-red transition-colors">Formation</Link></li>
              <li><Link to="/developpement-informatique" className="hover:text-teknet-red transition-colors">Développement informatique</Link></li>
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/qui-sommes-nous" className="hover:text-teknet-red transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/nos-partenaires" className="hover:text-teknet-red transition-colors">Nos partenaires</Link></li>
              <li><Link to="/actualites" className="hover:text-teknet-red transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="hover:text-teknet-red transition-colors">Contact</Link></li>
              <li><Link to="/politique-qualite-rgpd" className="hover:text-teknet-red transition-colors">Politique Qualité & RGPD</Link></li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-sm">
              <p className="mb-2">BP: 3914 - 3e Etage</p>
              <p className="mb-2">Immeuble Trade Tower Alarobia</p>
              <p className="mb-2">Antananarivo 101, Madagascar</p>
              <p className="mb-2">Email: info@teknetgroup.fr</p>
              <p className="mb-2">Tél: 020 23 33 445</p>
              <p className="mb-2">Horaires: Lundi-Vendredi 8h-18h</p>
            </address>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-white hover:text-teknet-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teknet-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teknet-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TeknetGroup. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-teknet-red transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-teknet-red transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-teknet-red transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
