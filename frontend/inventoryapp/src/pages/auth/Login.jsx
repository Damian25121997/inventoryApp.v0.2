import {
  RiMailAddLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe contener al menos 6 caracteres", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }

    navigate("/home", { replace: true });
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl text-center uppercase font-bold">
          Iniciar Sesión
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
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="text-right">
          <Link
            to="olvido-password"
            className="text-gray-500 hover:text-blue-600 transition-colors hover:underline"
          >
            ¿Olvidaste tu Contraseña?{" "}
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-6 py-2 px-7 bg-blue-500 font-medium text-white rounded-lg hover:scale-105  transition-all"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿No tienes una cuenta?{" "}
        <Link
          to="/registro"
          className="text-blue-600 font-medium hover:underline transition-all"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
