export default function Nosotros({ integrantes }) {
  return (
    <div className="nosotros">
      {integrantes.map((persona, index) => (
        <div key={index}>
          <img src={persona.foto} alt={persona.nombre} width={100} />
          <h2>{persona.nombre} {persona.apellido}</h2>
          <p>Legajo: {persona.legajo}</p>
          {persona.github && <a href={persona.github}>GitHub</a>}
        </div>
      ))}
    </div>
  );
}
