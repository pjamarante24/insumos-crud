import * as handlers from "./handlers/index.ts";
import type { Express } from "express";

// Configura las rutas del servidor
export const setupRoutes = (server: Express) => {
  server.get("/insumos", handlers.getInsumos);
  server.get("/insumos/:id", handlers.getInsumoById);
  server.get(
    "/clasificacion_bienes_servicios",
    handlers.getClasificacionBienesServicios
  );
  server.get("/clasificacion_gastos", handlers.getClasificacionGastos);
  server.post("/insumos", handlers.createInsumo);
  server.put("/insumos/:id", handlers.updateInsumo);
  server.delete("/insumos/:id", handlers.deleteInsumo);
};
