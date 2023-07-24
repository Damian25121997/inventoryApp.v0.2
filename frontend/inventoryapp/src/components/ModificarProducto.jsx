import { useState } from "react";

const ProveedorModal = ({ proveedor, onClose, onSave }) => {
  const [nombre, setNombre] = useState(proveedor.nombre);
  const [telefono, setTelefono] = useState(proveedor.telefono);

  const handleSave = () => {
    onSave({
      ...proveedor,
      nombre: nombre,
      telefono: telefono,
    });
    onClose(); // Cerrar el modal después de guardar los cambios
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow">
        {/* Aquí puedes colocar los campos del formulario para modificar el proveedor */}
        <h2 className="text-xl font-bold mb-4">Modificar Proveedor</h2>
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Teléfono:
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        {/* Otros campos del proveedor */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSave}
          >
            Guardar
          </button>
          {/* Botón de Cerrar para cerrar el modal manualmente */}
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProveedorModal;
