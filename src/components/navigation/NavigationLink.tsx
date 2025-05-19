
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type NavigationLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

const NavigationLink = ({ to, children, className = '' }: NavigationLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`nav-link font-medium hover:text-teknet-red transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
