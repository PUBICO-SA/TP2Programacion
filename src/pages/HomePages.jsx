import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Styles/HomePages.css'; // Importa tu archivo CSS aquí

export default function HomePages() {
  return (
    <div className="homepage-background">
      <div className="page-container fade-in">
        <Header />
        <div className="content-wrap">
          <div className="conteiner2">
            <h1 id="home-title" className="fade-in fade-in-delay-1">BIENVENIDO AL INICIO</h1>
            <p className="fade-in fade-in-delay-2">Este es el inicio de la página</p>
            <p className="fade-in fade-in-delay-3">Para ver los integrantes del grupo, dirígete a la pestaña de nosotros</p>
            <p className="fade-in fade-in-delay-3">Para agregar un nuevo integrante, dirígete a la pestaña de agregar miembro</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}


