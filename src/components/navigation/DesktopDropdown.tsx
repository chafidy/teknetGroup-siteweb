
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type DropdownItemProps = {
  to: string;
  label: string;
};

type DesktopDropdownProps = {
  label: string;
  items: DropdownItemProps[];
  activeDropdown: string;
  id: string;
  toggleDropdown: (dropdown: string) => void;
};

const DesktopDropdown = ({ label, items, activeDropdown, id, toggleDropdown }: DesktopDropdownProps) => {
  const isOpen = activeDropdown === id;
  
  return (
    <div className="relative group">
      <button
        onClick={() => toggleDropdown(id)}
        className="nav-link flex items-center font-medium hover:text-teknet-red transition-all duration-300 hover:scale-105"
      >
        {label} <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div 
        className={`absolute left-0 mt-2 w-60 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-md overflow-hidden transition-all duration-300 border border-gray-100 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {items.map((item) => (
          <Link 
            key={item.to} 
            to={item.to} 
            className="block px-4 py-2 hover:bg-teknet-red hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopDropdown;
