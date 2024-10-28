import React from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Usuario Verificado',
    comment: 'iUtópica ha simplificado completamente la forma en que recargo mi celular. ¡Los cupones son un gran plus!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Usuario Premium',
    comment: 'Ahorro tiempo y dinero con cada recarga. El sistema de recompensas hace que valga aún más la pena.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Miles de Usuarios ya Confían en <span className="gradient-text">iUtópica</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  comment: string;
  image: string;
}> = ({ name, role, comment, image }) => {
  return (
    <div className="feature-card flex flex-col md:flex-row items-center md:items-start gap-6 p-8">
      <img 
        src={image} 
        alt={name} 
        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
      />
      <div>
        <p className="text-gray-600 mb-4 italic">&ldquo;{comment}&rdquo;</p>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default SocialProof;