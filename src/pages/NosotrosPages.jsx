// src/pages/NosotrosPages.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function NosotrosPages({Integrantes}) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl mb-4">Conoce al equipo</h2>
        <Main Integrantes={Integrantes}/>
      </main>
      <Footer />
    </>
  );
}
