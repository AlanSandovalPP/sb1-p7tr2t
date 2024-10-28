import React from 'react';
import { UserPlus, Smartphone, Gift } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Cómo <span className="gradient-text">Funciona</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Step
            icon={<UserPlus className="h-10 w-10 text-purple-600" />}
            number="1"
            title="Regístrate"
            description="Crea tu cuenta en minutos de forma segura y sencilla."
          />
          <Step
            icon={<Smartphone className="h-10 w-10 text-purple-600" />}
            number="2"
            title="Recarga"
            description="Recarga tu celular rápidamente desde la plataforma."
          />
          <Step
            icon={<Gift className="h-10 w-10 text-purple-600" />}
            number="3"
            title="Canjea Cupones"
            description="Obtén descuentos con cupones exclusivos."
          />
        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}> = ({ icon, number, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 
                    group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;