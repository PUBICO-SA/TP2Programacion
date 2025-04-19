/*
Jorge Sebastian Villagra        *Legajo: 123456*        
Thiago Benjamin Robles Cordoba  *Legajo: 61315*
Tomas Javier Jerez              *Legajo: 123456*
Nicolas Vladimir Gonzalez       *Legajo: 123456*
*/
//Dependencias
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';

//Components
import HomePages from './pages/HomePages';
import NosotrosPages from './pages/NosotrosPages';
import AgregarMiembro from './pages/AgregarMiembro';

// Fotos de perfil
import fototito from './chavales/tito.png';
import fotonicolas from './chavales/nico.jpg';
import fotojorge from './chavales/joje.jpg';
import fototomas from './chavales/tomi.png';

import './Styles/App.css';

function App() {
  
  const [Integrantes,setIntegrantes]=useState([
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
  ]);

  return (
    <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='/agregarmiembro' element={<AgregarMiembro/>} />
      <Route path='/nosotros' element={<NosotrosPages Integrantes={Integrantes} />} />
      
    </Routes>
  );
}

export default App;
