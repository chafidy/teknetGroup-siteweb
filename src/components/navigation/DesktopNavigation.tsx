
import NavigationLink from './NavigationLink';
import DesktopDropdown from './DesktopDropdown';
import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';

type DesktopNavigationProps = {
  activeDropdown: string;
  toggleDropdown: (dropdown: string) => void;
};

const DesktopNavigation = ({ activeDropdown, toggleDropdown }: DesktopNavigationProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationData.map((item) => 
        item.type === 'dropdown' ? (
          <DesktopDropdown
            key={item.id}
            id={item.id}
            label={item.label}
            items={item.items}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />
        ) : null
      )}
      
      <NavigationLink to="/actualites">Actualités / Blog</NavigationLink>
      
      <Link to="/contact" className="btn-primary ml-4 transform hover:scale-105 transition-transform hover:shadow-md hover:bg-red-800">
        Nous contacter
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
