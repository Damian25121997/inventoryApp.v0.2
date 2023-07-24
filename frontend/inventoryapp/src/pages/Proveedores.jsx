import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BsTrashFill } from "react-icons/bs";

const Proveedores = () => {
  const [open, setOpen] = useState(false);
  const [proveedores, setProveedores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cantidad de proveedores por página

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const agregarProveedor = (nuevoProveedor) => {
    setProveedores([...proveedores, nuevoProveedor]);
  };

  const eliminarProveedor = (id) => {
    setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Resetear la página actual cuando se realiza una búsqueda
  };

  const proveedoresFiltrados = proveedores.filter((proveedor) =>
    proveedor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  proveedoresFiltrados.sort(
    (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
  );

  const totalPages = Math.ceil(proveedoresFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = proveedoresFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <Sidebar isOpen={open} onClose={handleToggleSidebar} />
      <div className="flex-1 p-7 text-2xl font-semibold min-w-0 overflow-y-auto bg-slate-100">
        <form
          className="flex justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const nuevoProveedor = {
              id: Date.now(),
              nombre: e.target.nombre.value,
              telefono: e.target.telefono.value,
              email: e.target.email.value,
              fechaCreacion: new Date().toLocaleDateString(),
              // Otros campos del proveedor
            };
            agregarProveedor(nuevoProveedor);
            e.target.reset();
          }}
        >
          <div className="w-auto h-12 border-2 bg-slate-400 border-black p-3 flex justify-center items-center rounded-xl">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            {/* Otros campos del formulario */}
            <button
              type="submit"
              className="bg-blue-500 text-orange-100 text-base p-1 rounded mx-auto"
            >
              Agregar
            </button>
          </div>
        </form>
        <div className="border-black border-t-2 border-r-2 border-l-2 mt-5 rounded-md bg-slate-300">
          <div className="flex justify-center items-center p-3">
            {/* Barra de búsqueda */}
            <input
              type="text"
              placeholder="Buscar por nombre..."
              className="border rounded-md p-2 w-full md:w-96 text-sm"
              value={searchTerm}
              onChange={handleChangeSearch}
            />
          </div>
          <h1 className="text-xl font-bold text-center border-t-2 border-black bg-orange-200 p-2">
            Proveedores
          </h1>
          <table className="w-full border-t-2 text-sm">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="p-3 border-b-2 border-r-2 border-black">ID</th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Nombre
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Teléfono
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Email
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Fecha de Creación
                </th>
                <th className="p-3 border-b-2 border-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((proveedor) => (
                <tr key={proveedor.id} className="border-b-2 border-black">
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {proveedor.id}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {proveedor.nombre}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {proveedor.telefono}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {proveedor.email}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black ">
                    {proveedor.fechaCreacion}
                  </td>
                  <td className="border-black pt-1 justify-center items-center flex">
                    {/* Botón para eliminar proveedor */}
                    <button
                      className="bg-red-600 p-2 text-black rounded-md justify-center"
                      onClick={() => eliminarProveedor(proveedor.id)}
                    >
                      <BsTrashFill className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center p-3">
            <button
              className="bg-blue-500 text-orange-100 text-xs p-2 rounded cursor-pointer"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className="mx-4 text-lg">
              Página {currentPage} de {totalPages}
            </span>
            <button
              className="bg-blue-500 text-orange-100 text-xs p-2 rounded cursor-pointer"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
