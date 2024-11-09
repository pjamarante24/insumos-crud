import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Insumos, {
  destroyAction as insumoDestroyAction,
  loader as insumosLoader,
} from "./routes/insumos";
import Insumo, {
  createAction as createInsumoAction,
  editAction as editInsumoAction,
  loader as insumoLoader,
} from "./routes/insumo";
import ErrorPage from "./routes/error-page";
import "./index.css";

// Crea el router con las rutas de la aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Insumos />,
        loader: insumosLoader,
      },
      {
        path: "insumos/:id/edit",
        element: <Insumo />,
        loader: insumoLoader,
        action: editInsumoAction,
      },
      {
        path: "insumos/new",
        element: <Insumo />,
        loader: insumoLoader,
        action: createInsumoAction,
      },
      {
        path: "insumos/:id/delete",
        action: insumoDestroyAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
