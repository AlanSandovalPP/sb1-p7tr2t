import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">iUtópica</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Inicio</a>
            <a href="#" className="nav-link">FAQ</a>
            <button className="flex items-center space-x-2 nav-link">
              <User className="h-5 w-5" />
              <span>Mi Cuenta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#" className="nav-link">Inicio</a>
              <a href="#" className="nav-link">FAQ</a>
              <button className="flex items-center space-x-2 nav-link">
                <User className="h-5 w-5" />
                <span>Mi Cuenta</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;