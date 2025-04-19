import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarMiembro({ setIntegrantes }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    legajo: '',
    github: '',
    foto: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.apellido || !formData.legajo) {
      alert('Por favor completá todos los campos obligatorios.');
      return;
    }

    // Agregar nuevo miembro
    setIntegrantes(prev => [...prev, formData]);

    // Redirigir a la página "Nosotros"
    navigate('/nosotros');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Sumate al equipo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
        <input type="number" name="legajo" placeholder="Legajo" onChange={handleChange} required />
        <input type="url" name="github" placeholder="URL de GitHub" onChange={handleChange} />
        <input type="url" name="foto" placeholder="URL de tu foto" onChange={handleChange} />
        <button type="file" className="bg-blue-500 text-white px-4 py-2 rounded">
          Unirme al team 🚀
        </button>
      </form>
    </div>
  );
}
