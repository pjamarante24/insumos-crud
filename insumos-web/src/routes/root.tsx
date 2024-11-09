import { Link, Outlet } from "react-router-dom";

// Root component
// Contiene el header de la aplicacion y el outlet para renderizar las rutas hijas
const Root = () => {
  return (
    <div className="container">
      <h1>
        <Link to="/">Gestor de Insumos</Link>
      </h1>
      <Outlet />
    </div>
  );
};

export default Root;
