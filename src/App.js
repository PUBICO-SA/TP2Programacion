/*
Jorge Sebastian Villagra        *Legajo: 123456*        
Thiago Benjamin Robles Cordoba  *Legajo: 61315*
Tomas Javier Jerez              *Legajo: 123456*
Nicolas Vladimir Gonzalez       *Legajo: 123456*
*/

//Componentes
import Main from './components/Main';

// Fotos de perfil (IMPORTACIÓN DIRECTA DE IMÁGENES)
import tito from './chavales/tito.png';
import nicolas from './chavales/nico.jpg';
import jorge from './chavales/joje.jpg';
import tomas from './chavales/tomi.png';

import './Styles/App.css';

function App() {

  const Integrantes = [
    {
      nombre: "Thiago",
      apellido: "Robles",
      legajo: 61315,
      github: "https://github.com/T1T0R",
      foto: tito
    },
    {
      nombre: "Nicolas",
      apellido: "Gonzalez",
      legajo: 123456,
      github: "",
      foto: nicolas
    },
    {
      nombre: "Tomas",
      apellido: "Jerez",
      legajo: 123456,
      github: "",
      foto: tomas
    },
    {
      nombre: "Jorge",
      apellido: "Villagra",
      legajo: 123456,
      github: "",
      foto: jorge
    }
  ];

  return (
    <div>
      <Main Integrantes={Integrantes} />
    </div>
  );
}

export default App;
