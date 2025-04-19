// src/components/View.jsx
import React from 'react';

export default function View({ persona }) {
  return (
    <div className="border p-4 rounded">
      <img src={persona.foto} alt={persona.nombre} width={150} />
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Legajo: {persona.legajo}</p>
      {persona.github && <a href={persona.github}>GitHub</a>}
    </div>
  );
}
