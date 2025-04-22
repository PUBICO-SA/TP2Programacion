// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
export default function Header() {
  return (
    <header className="p-4 bg-gray-200 flex justify-between">
      <h1 className="text-xl font-bold">TRABAJO PRACTICO 2 REACT</h1>
      <nav className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/agregarmiembro">Sumate a nuestro equipo</Link>

      </nav>
    </header>
  );
}
