import React from 'react';
import { Smartphone, Gift } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué Puedes Hacer en <span className="gradient-text">iUtópica</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Smartphone className="h-12 w-12 text-purple-600" />}
            title="Recargas de Tiempo Aire"
            description="Recarga tu celular de manera rápida y sencilla desde cualquier lugar."
          />
          <FeatureCard
            icon={<Gift className="h-12 w-12 text-orange-500" />}
            title="Cupones Exclusivos"
            description="Canjea cupones y ahorra en tus compras favoritas con descuentos especiales."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Features;