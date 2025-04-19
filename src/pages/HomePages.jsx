import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePages() {
  return (
    <div>
        <Header />
        <h1>BIENVENIDO AL INICIO</h1>
        <p>Este es el inicio de la pagina</p>
        <p>Para ver los integrantes del grupo, dirigete a la pestaña de nosotros</p>
        <p>Para agregar un nuevo integrante, dirigete a la pestaña de agregar miembro</p>
        <Footer/>
    </div>
  )
}
