/*
Jorge Sebastian Villagra        *Legajo: 123456*        
Thiago Benjamin Robles Cordoba  *Legajo: 61315*
Tomas Javier Jerez              *Legajo: 123456*
Nicolas Vladimir Gonzalez       *Legajo: 123456*
*/

//Componentes
import Main from './components/Main';

// Fotos de perfil (IMPORTACIÓN DIRECTA DE IMÁGENES)
import fototito from './chavales/tito.png';
import fotonicolas from './chavales/nico.jpg';
import fotojorge from './chavales/joje.jpg';
import fototomas from './chavales/tomi.png';

import './Styles/App.css';

function App() {

  const Integrantes = [
    {
      nombre: "Thiago",
      apellido: "Robles",
      legajo: 61315,
      github: "https://github.com/T1T0R",
      foto: fototito
    },
    {
      nombre: "Nicolas",
      apellido: "Gonzalez",
      legajo: 123456,
      github: "https://github.com/VladGlpz78",
      foto: fotonicolas
    },
    {
      nombre: "Tomas",
      apellido: "Jerez",
      legajo: 123456,
      github: "https://github.com/ElTommmy",
      foto: fototomas
    },
    {
      nombre: "Jorge",
      apellido: "Villagra",
      legajo: 123456,
      github: "https://github.com/JorgeVillagraa",
      foto: fotojorge
    }
  ];

  return (
    <div>
      <Main Integrantes={Integrantes} />
    </div>
  );
}

export default App;
