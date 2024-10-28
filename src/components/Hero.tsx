import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Conéctate, Ahorra</span>
              <br />y Participa
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Recarga tu celular con tiempo aire y canjea cupones exclusivos. La forma más inteligente de ahorrar en tus servicios diarios.
            </p>
            <button className="btn-primary">
              Comienza Ahora
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="iUtópica App Dashboard"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;