import { RiMailAddLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email].includes("")) {
      toast.error("El Correo Electrónico es obligatorio", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }

    // VERIFICAR QUE EL EMAIL EXISTA
    // ENVIAR INSTRUCCIONES DE RECUPERACION DE CONTRASENA

    toast.success("Se han enviado las instrucciones a tu Correo Electrónico", {
      theme: "dark",
      position: "top-center",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl text-center uppercase font-bold">
          Recuperar Contraseña
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiMailAddLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-6 py-2 px-7 bg-blue-500 font-medium text-white rounded-lg hover:scale-105  transition-all"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between">
        <div>
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/"
            className="text-blue-600 font-medium hover:underline transition-all"
          >
            Ingresa
          </Link>
        </div>
        <div className="text-right">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/registro"
            className="text-blue-600 font-medium hover:underline transition-all"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
