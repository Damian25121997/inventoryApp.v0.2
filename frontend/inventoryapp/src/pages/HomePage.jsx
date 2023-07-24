import { BiUserCircle, BiArchive } from "react-icons/bi";
import { HiUserGroup, HiShoppingBag } from "react-icons/hi";
import { MdOutlineInventory, MdOutlineHistory } from "react-icons/md";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="bg-slate-200">
      <header className="flex w-full h-11 justify-between items-center bg-slate-800 ">
        <BiArchive className="text-4xl ml-4 text-orange-100" />
        <div className="flex flex-row items-center">
          <h3 className="text-orange-100 text-lg font-normal p-2">User</h3>
          <BiUserCircle className="text-4xl mr-4 text-orange-100" />
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col justify-center items-center font-bold text-lg">
            <Link to="/proveedores">
              <HiUserGroup className="text-9xl mr-6 ml-6" />
              <p className="justify-center items-center flex">Proveedores</p>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center font-bold text-lg">
            <Link to="/pedidos">
              <HiShoppingBag className="text-9xl mr-6 ml-6" />
              <p className="justify-center items-center flex">Pedidos</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center font-bold text-lg">
            <Link to="/inventario">
              <MdOutlineInventory className="text-9xl mr-6 ml-6" />
              <p className="justify-center items-center flex">Inventario</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center font-bold text-lg">
            <Link to="/historial">
              <MdOutlineHistory className="text-9xl mr-6 ml-6" />
              <p className="justify-center items-center flex">Historial</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
