import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import '../Styles/Nosotros.css'; // Importa tu CSS de estilos específicos

export default function NosotrosPages({ Integrantes }) {
  return (
    <>
      <Header />
      <main className="main-container">
        <section className="equipo-section fade-in"> {/* ← Animación agregada acá */}
          <h2 className="equipo-title">Conocé al equipo</h2>
          <Main Integrantes={Integrantes} />
        </section>
      </main>
      <Footer />
    </>
  );
}