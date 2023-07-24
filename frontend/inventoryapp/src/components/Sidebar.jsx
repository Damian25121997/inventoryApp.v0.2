import { BiArchive } from "react-icons/bi";
import { HiUserGroup, HiShoppingBag, HiArrowCircleLeft } from "react-icons/hi";
import { MdOutlineInventory, MdOutlineHistory, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`bg-slate-800 h-screen p-3 pt-5 relative duration-300 ${
        isOpen ? "w-56" : "w-20"
      }`}
    >
      <div className="flex items-center mb-4">
      <Link
          to="/home"
          className={
            "text-orange-100 flex items-center"
          }
        >
        <BiArchive
          className={`text-4xl text-orange-100 transform hover:text-orange-300 ${
            isOpen ? "rotate-[360deg]" : ""
          } transition-transform duration-500`}
        />
        <h1
          className={`text-orange-100 font-bold hover:text-orange-300 text-xl ml-2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          InventoryApp
        </h1>
        </Link>
      </div>
      <div
        className={`flex-col justify-between flex ${
          isOpen ? "items-start" : "items-center"
        }`}
      >
        <Link
          to="/proveedores"
          className={
            "text-orange-100  flex items-center gap-2 px-4 py-4 rounded-md"
          }
        >
          <HiUserGroup className="text-4xl text-orange-100 hover:text-orange-500" />
          <h1
            className={`text-orange-100 font-bold hover:text-orange-500 text-xl ml-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Proveedores
          </h1>
        </Link>
        <Link
          to="/pedidos"
          className={`text-orange-100 hover:text-white flex items-center gap-2 px-4 py-4 rounded-md ${
            isOpen ? "rotate-360" : ""
          }`}
        >
          <HiShoppingBag className="text-4xl text-orange-100 hover:text-orange-500" />
          <h1
            className={`text-orange-100 font-bold hover:text-orange-500 text-xl ml-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Pedidos
          </h1>
        </Link>
        <Link
          to="/inventario"
          className={`text-orange-100 hover:text-white flex items-center gap-2 px-4 py-4 rounded-md ${
            isOpen ? "rotate-360" : ""
          }`}
        >
          <MdOutlineInventory className="text-4xl text-orange-100 hover:text-orange-500" />
          <h1
            className={`text-orange-100 font-bold hover:text-orange-500 text-xl ml-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Inventario
          </h1>
        </Link>
        <Link
          to="/historial"
          className={`text-orange-100 hover:text-white flex items-center gap-2 px-4 py-4 rounded-md ${
            isOpen ? "rotate-360" : ""
          }`}
        >
          <MdOutlineHistory className="text-4xl text-orange-100 hover:text-orange-500" />
          <h1
            className={`text-orange-100 font-bold hover:text-orange-500 text-xl ml-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Historial
          </h1>
        </Link>
        <Link
          to="/settings"
          className={`text-orange-100 hover:text-white flex items-center gap-2 px-4 py-4 rounded-md ${
            isOpen ? "rotate-360" : ""
          }`}
        >
          <MdSettings className="text-4xl text-orange-100 hover:text-orange-500" />
          <h1
            className={`text-orange-100 font-bold hover:text-orange-500 text-xl ml-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Configuración
          </h1>
        </Link>
      </div>
      <HiArrowCircleLeft
        className={`absolute cursor-pointer right-0 top-6 text-3xl text-orange-100 hover:text-orange-500 transform ${
          isOpen ? "" : "rotate-180"
        }`}
        onClick={onClose}
      />
      <div
        className={`flex flex-col gap-4 mt-6 ${
          isOpen ? "items-start" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
