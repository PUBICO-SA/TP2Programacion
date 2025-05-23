import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Styles/AgregarMiembro.css';

export default function AgregarMiembro({ setIntegrantes }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    legajo: '',
    github: '',
    foto: ''
  });

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFile = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const urlTemp = URL.createObjectURL(archivo);
      setFormData(prev => ({
        ...prev,
        foto: urlTemp
      }));
      setPreview(urlTemp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.apellido || !formData.legajo) {
      alert('Por favor completá todos los campos obligatorios.');
      return;
    }
    setIntegrantes(prev => [...prev, formData]);
    navigate('/nosotros');
  };

  return (
    <div className="agregar-miembro">
      <Header />
      
      <div className="formulario-wrapper">
        <div className="formulario">
          <h2 className="titulo-formulario">Sumate al equipo 🚀</h2>
          <form onSubmit={handleSubmit} className="formulario-contenido">
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
            <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
            <input type="number" name="legajo" placeholder="Legajo" onChange={handleChange} required />
            <input type="url" name="github" placeholder="URL de GitHub" onChange={handleChange} />

            <label className="subtitulo">Agregar foto</label>
            <input type="file" accept="image/*" onChange={handleFile} />

            {preview && (
              <img
                src={preview}
                alt="Vista previa"
                className="preview-imagen"
              />
            )}

            <button type="submit" className="boton-submit">
              Unirme al team
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
