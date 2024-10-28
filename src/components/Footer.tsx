import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">iUtópica</h3>
            <p className="text-gray-600">
              Conectando servicios, ahorro y participación en una sola plataforma.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link">Términos y Condiciones</a></li>
              <li><a href="#" className="nav-link">Política de Privacidad</a></li>
              <li><a href="#" className="nav-link">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>soporte@iutopica.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+52 123 456 7890</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="nav-link hover:scale-110 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="nav-link hover:scale-110 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="nav-link hover:scale-110 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} iUtópica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;