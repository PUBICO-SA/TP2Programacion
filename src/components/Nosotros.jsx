export default function Nosotros({ integrantes }) {
  return (
    <div className="container">
      <div className="card__container">
        {integrantes.map((persona, index) => (
          <article key={index} className="card__article">
            <img src={persona.foto} alt={persona.nombre} className="card__img" />
            <div className="card__data">
              <h2 className="card__title">{persona.nombre} {persona.apellido}</h2>
              <span className="card__description">Legajo: {persona.legajo}</span>
              {persona.github && (
                <a href={persona.github} target="_blank" rel="noopener noreferrer" className="card__button">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
