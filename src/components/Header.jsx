// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 bg-gray-200 flex justify-between">
      <center>
      <h1 className="text-xl font-bold">TRABAJO PRACTICO 2 REACT</h1>
      </center>
      <nav className="space-x-4">
        <center>
        <Link to="/">Inicio</Link>
        <p></p>
        <Link to="/nosotros">Nosotros</Link>
        <p></p>
        <Link to="/agregarmiembro">Sumate a nuestro equipo</Link>
        </center>
      </nav>
    </header>
  );
}
