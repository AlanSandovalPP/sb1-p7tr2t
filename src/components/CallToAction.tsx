import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-90"></div>
          <div className="relative px-8 py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empieza a Recargar y Ahorrar Hoy
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Inscríbete ahora y comienza a disfrutar de descuentos exclusivos y recargas fáciles.
            </p>
            <button className="btn-secondary transform hover:scale-105 transition duration-300">
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;