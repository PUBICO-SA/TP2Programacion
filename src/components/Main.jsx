

import Nosotros from '../components/Nosotros';

export default function Main({ Integrantes }) {

  //Desestructuracion del Array de Objetos
  const [thiago, nicolas, tomas, jorge] = Integrantes;

  return (
    <div>
      <Nosotros integrantes={Integrantes} />
    </div>
  );
}
