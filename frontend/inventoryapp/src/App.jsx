import { Routes, Route, Navigate } from "react-router-dom";
// Layouts
import AuthLayout from "./layout/auth/AuthLayout";

// Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/404";
import HomePage from "./pages/HomePage";

function App() {
  // Verificar si el usuario tiene acceso a la ruta /home
  const isAuthenticated = true; // Aquí deberías tener la lógica para verificar si el usuario está autenticado

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="olvido-password" element={<ForgetPassword />} />
        <Route
          path="restablecer-password/:token"
          element={<ChangePassword />}
        />
        {isAuthenticated ? (
          <Route path="home" element={<HomePage />} />
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
