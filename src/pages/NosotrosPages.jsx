// src/pages/NosotrosPages.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function NosotrosPages({Integrantes}) {
  return (
    <>
      <Header />
      <main>
        <h2>Conoce al equipo</h2>
        <Main Integrantes={Integrantes}/>
      </main>
      <Footer />
    </>
  );
}
