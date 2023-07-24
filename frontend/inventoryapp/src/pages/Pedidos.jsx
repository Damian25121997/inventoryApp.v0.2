import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BsTrashFill } from "react-icons/bs";

const Pedidos = () => {
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cantidad de productos por página

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  // Función para agregar un nuevo pedido
  const agregarPedido = (nuevoPedido) => {
    setPedidos([...pedidos, nuevoPedido]);
  };

  // Función para eliminar un pedido
  const eliminarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  // Función para filtrar pedidos por producto
  const filtrarPedidos = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Resetear la página actual cuando se realiza una búsqueda
  };

  // Obtener los pedidos filtrados por producto y paginados
  const pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.tipoProducto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar los pedidos por fecha de creación (los más recientes primero)
  pedidosFiltrados.sort(
    (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
  );

  const totalPages = Math.ceil(pedidosFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pedidosFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <Sidebar isOpen={open} onClose={handleToggleSidebar} />
      <div className="flex-1 p-7 text-2xl font-semibold overflow-y-auto bg-slate-100">
        <form
          className="flex flex-col md:flex-row justify-center items-center mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            const nuevoPedido = {
              id: Date.now(),
              cantidad: parseInt(e.target.cantidad.value),
              tipoProducto: e.target.tipoProducto.value,
              fechaCreacion: new Date().toLocaleDateString(),
              proveedor: e.target.proveedor.value,
              // Otros campos del pedido
            };
            agregarPedido(nuevoPedido);
            e.target.reset();
          }}
        >
          <div className="w-auto h-12 border-2 bg-slate-400 border-black p-3 flex justify-center items-center rounded-xl">
            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="text"
              name="tipoProducto"
              placeholder="Tipo de Producto"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="text"
              name="proveedor"
              placeholder="Proveedor"
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
            <input
              type="text"
              placeholder="Buscar por producto..."
              className="border rounded-md p-2 w-full md:w-96 text-sm"
              value={searchTerm}
              onChange={(e) => filtrarPedidos(e.target.value)}
            />
          </div>
          <h1 className="text-xl font-bold text-center  border-t-2 border-black bg-orange-200 p-2">
            Pedidos Realizados
          </h1>
          <table className="w-full border-t-2 text-sm">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="p-3 border-b-2 border-r-2 border-black">ID</th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Cantidad
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Tipo de Producto
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Proveedor
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Fecha de Creación
                </th>
                <th className="p-3 border-b-2 border-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((pedido) => (
                <tr key={pedido.id} className="border-b-2 border-black">
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {pedido.id}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {pedido.cantidad}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {pedido.tipoProducto}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {pedido.proveedor}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black ">
                    {pedido.fechaCreacion}
                  </td>
                  <td className="border-black pt-1 justify-center items-center flex">
                    {/* Botón para eliminar pedido */}
                    <button
                      className="bg-red-600 p-2 text-black rounded-md justify-center"
                      onClick={() => eliminarPedido(pedido.id)}
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

export default Pedidos;
