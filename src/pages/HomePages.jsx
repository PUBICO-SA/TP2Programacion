import Header from "../components/Header"
import Footer from "../components/Footer"
import '../Styles/HomePages.css'; // Importa tu archivo CSS aquí


export default function HomePages() {
  return (
    <div className="page-container fade-in">
      <div className="content-wrap">
        <Header />
        <div className="conteiner2">
        <h1 id="home-title" className="fade-in fade-in-delay-1">BIENVENIDO AL INICIO</h1>
        <p className="fade-in fade-in-delay-2">Este es el inicio de la pagina</p>
        <p className="fade-in fade-in-delay-3">Para ver los integrantes del grupo, dirigete a la pestaña de nosotros</p>
        <p className="fade-in fade-in-delay-3">Para agregar un nuevo integrante, dirigete a la pestaña de agregar miembro</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}