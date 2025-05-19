
import { Link } from 'react-router-dom';
import MobileDropdown from './MobileDropdown';
import { navigationData } from './navigationData';

type MobileNavigationProps = {
  isMenuOpen: boolean;
  activeDropdown: string;
  toggleDropdown: (dropdown: string) => void;
};

const MobileNavigation = ({ isMenuOpen, activeDropdown, toggleDropdown }: MobileNavigationProps) => {
  return (
    <div
      className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
      }`}
    >
      <div className="flex flex-col space-y-4">
        {navigationData.map((item) =>
          item.type === 'dropdown' ? (
            <MobileDropdown
              key={item.id}
              id={`${item.id}-mobile`}
              label={item.label}
              items={item.items}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />
          ) : null
        )}

        <Link to="/actualites" className="block py-2 hover:text-teknet-red transition-colors duration-200">
          Actualités / Blog
        </Link>
        
        <Link to="/contact" className="btn-primary mt-2 text-center transform hover:scale-105 transition-transform hover:shadow-md hover:bg-red-800">
          Nous contacter
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
