
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type DropdownItemProps = {
  to: string;
  label: string;
};

type MobileDropdownProps = {
  label: string;
  items: DropdownItemProps[];
  activeDropdown: string;
  id: string;
  toggleDropdown: (dropdown: string) => void;
};

const MobileDropdown = ({ label, items, activeDropdown, id, toggleDropdown }: MobileDropdownProps) => {
  const isOpen = activeDropdown === id;
  
  return (
    <div>
      <button
        onClick={() => toggleDropdown(id)}
        className="flex items-center justify-between w-full py-2 hover:text-teknet-red transition-colors duration-200"
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      <div className={`pl-4 space-y-2 transition-all duration-300 ${activeDropdown === id ? 'max-h-screen py-2 bg-gray-50 rounded-md' : 'max-h-0 overflow-hidden'}`}>
        {items.map((item) => (
          <Link 
            key={item.to} 
            to={item.to} 
            className="block py-1 px-2 hover:text-teknet-red transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;
