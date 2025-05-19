
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './ui/image';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown('');
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="teknet-container">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image 
              src="/lovable-uploads/1d6483e9-b358-4c3d-99dd-f63933cee7c5.png" 
              alt="TeknetGroup Logo" 
              className="h-20 w-auto" 
              fallback="/placeholder.svg"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation 
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation 
          isMenuOpen={isMenuOpen}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </header>
  );
};

export default Header;
