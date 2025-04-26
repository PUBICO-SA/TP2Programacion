import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; // Importa tu archivo CSS aquí
import { FaHome, FaUsers, FaBriefcase } from 'react-icons/fa';  // Asegúrate de importar FaUsers y FaBriefcase

export default function Header() {
  return (
    <header className="p-4 bg-gray-200 flex justify-between">
      <h1 className="text-xl font-bold">TRABAJO PRACTICO 2 REACT</h1>
      <nav className="space-x-4">
        <ul>
          <li>
            <Link to="/" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaHome />Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaUsers />Nosotros
            </Link>
          </li>
          <li>
            <Link to="/agregarmiembro" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaBriefcase />Sumate a nuestro equipo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
