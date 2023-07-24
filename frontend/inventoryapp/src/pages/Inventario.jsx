import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BsTrashFill } from "react-icons/bs";

const Inventario = () => {
  const [open, setOpen] = useState(false);
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cantidad de productos por página

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  // Función para agregar un nuevo producto
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  // Función para modificar el stock de un producto
  const modificarStock = (id, cantidad) => {
    const productosActualizados = productos.map((producto) =>
      producto.id === id ? { ...producto, cantidadEnStock: cantidad } : producto
    );
    setProductos(productosActualizados);
  };

  // Función para filtrar productos por nombre
  const filtrarProductos = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Resetear la página actual cuando se realiza una búsqueda
  };

  // Obtener los productos filtrados por nombre y paginados
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar los productos por nombre alfabéticamente
  productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));

  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productosFiltrados.slice(
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
      <div className="flex-1 p-7 text-2xl font-semibold min-w-0 overflow-y-auto bg-slate-100">
        <form
          className="flex justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const nuevoProducto = {
              id: Date.now(),
              nombre: e.target.nombre.value,
              descripcion: e.target.descripcion.value,
              precioPorUnidad: parseFloat(e.target.precioPorUnidad.value),
              cantidadEnStock: parseInt(e.target.cantidadEnStock.value),
              fechaCreacion: new Date().toLocaleDateString(),
              // Otros campos del producto
            };
            agregarProducto(nuevoProducto);
            e.target.reset();
          }}
        >
          <div className="w-auto h-12 border-2 bg-slate-400 border-black p-3 flex justify-center items-center rounded-xl">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del producto"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción del producto"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="number"
              name="precioPorUnidad"
              placeholder="Precio por unidad"
              step="0.01"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            <input
              type="number"
              name="cantidadEnStock"
              placeholder="Cantidad en stock"
              className="w-64 text-base mx-auto rounded-md mr-2"
              style={{ textIndent: "10px" }}
            />
            {/* Otros campos del formulario */}
            <button
              type="submit"
              className="bg-blue-500 text-orange-100 text-base p-1 rounded mx-auto"
            >
              Agregar Producto
            </button>
          </div>
        </form>
        <div className="border-black border-t-2 border-r-2 border-l-2 mt-5 rounded-md bg-slate-300">
          <div className="flex justify-center items-center p-3">
            <input
              type="text"
              placeholder="Buscar por nombre..."
              className="border rounded-md p-2 w-full md:w-96 text-sm"
              value={searchTerm}
              onChange={(e) => filtrarProductos(e.target.value)}
            />
          </div>
          <h1 className="text-xl font-bold text-center border-t-2 border-black bg-orange-200 p-2">
            Inventario de Productos
          </h1>
          <table className="w-full border-t-2 text-sm">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="p-3 border-b-2 border-r-2 border-black">ID</th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Producto
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Descripción
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Precio por Unidad
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Cantidad en Stock
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Modificar Stock
                </th>
                <th className="p-3 border-b-2 border-r-2 border-black">
                  Fecha
                </th>
                <th className="p-3 border-b-2 border-black">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((producto) => (
                <tr key={producto.id} className="border-b-2 border-black">
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {producto.id}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {producto.nombre}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {producto.descripcion}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {producto.precioPorUnidad.toFixed(2)}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    {producto.cantidadEnStock}
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black">
                    <input
                      type="number"
                      min="0"
                      value={producto.cantidadEnStock}
                      onChange={(e) =>
                        modificarStock(producto.id, parseInt(e.target.value))
                      }
                      className="w-20 px-2 py-1 border rounded-md"
                    />
                  </td>
                  <td className="p-3 border-b-2 border-r-2 border-black ">
                    {producto.fechaCreacion}
                  </td>
                  {/* Otros campos de la tabla */}
                  <td className="border-black pt-1 justify-center items-center flex">
                    {/* Botón para eliminar producto */}
                    <button
                      className="bg-red-600 p-2 text-black rounded-md justify-center"
                      onClick={() => eliminarProducto(producto.id)}
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

export default Inventario;
