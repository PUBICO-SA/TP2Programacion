import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePages() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-content">
        <h1>Bienvenido al Inicio</h1>
        <p>Este es el inicio de la página.</p>
        <p>Para ver los integrantes del grupo, dirígete a la pestaña de "Nosotros".</p>
        <p>Para agregar un nuevo integrante, dirígete a la pestaña de "Sumate a nuestro equipo".</p>
      </main>
      <Footer />
    </div>
  );
}

