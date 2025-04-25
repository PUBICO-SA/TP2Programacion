
export default function Nosotros({ integrantes }) {
  return (
    <div className="integrantes-container">
      {integrantes.map((persona, index) => (
        <div key={index} className="card-integrante">
          <h3>{persona.nombre} {persona.apellido}</h3>
          <img src={persona.foto} alt={`${persona.nombre} ${persona.apellido}`} width={120} />
          <p>Legajo: {persona.legajo}</p>
          {persona.github && (
            <a href={persona.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
