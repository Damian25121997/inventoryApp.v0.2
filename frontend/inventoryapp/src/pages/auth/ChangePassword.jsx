import { RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { token } = useParams();

  // funcionalidad para validar token
  if (token !== "239846237426") {
    navigate("/");
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([password, confirmPassword].includes("")) {
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
      toast.error("Las contraseñas son diferentes", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }

    toast.success("Tu contraseña se cambio correctamente", {
      theme: "dark",
      position: "top-center",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl text-center uppercase font-bold">
          Actualizar Contraseña
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
            Restablecer Contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
