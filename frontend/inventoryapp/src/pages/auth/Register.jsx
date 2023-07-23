import {
  RiMailAddLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if ([name, lastName, email, password, confirmPassword].includes("")) {
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
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no son iguales", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }
    // VALIDAR QUE EL EMAIL O EXISTA EN LA BASE DE DATOS
    // ENVIAR EMAIL DE VERIFICACION PARA VALIDAR CUENTA
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[500px]">
      <div className="mb-10">
        <h1 className="text-3xl text-center uppercase font-bold">
          Registrarse
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg"
            placeholder="Nombre(s)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg"
            placeholder="Apellidos"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <div>
          <button
            type="submit"
            className="w-full mt-6 py-2 px-7 bg-blue-500 font-medium text-white rounded-lg hover:scale-105  transition-all"
          >
            Crear Cuenta
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
          <Link
            to="/olvido-password"
            className="text-gray-500 font-medium hover:underline transition-all"
          >
            ¿Olvidaste tu Contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
