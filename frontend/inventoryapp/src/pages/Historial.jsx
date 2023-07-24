import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Historial = () => {
    const [open, setOpen] = useState(false);
  
    const handleToggleSidebar = () => {
      setOpen(!open);
    };
    return (
      <div className="flex bg-slate-200">
        <Sidebar isOpen={open} onClose={handleToggleSidebar} />
        <div
          className={`p-7 text-2xl font-semibold flex-1 h-screen ${
            open ? "ml-5" : "ml-5"
          }`}
        >
          </div>
      </div>
    );
  };

export default Historial;
