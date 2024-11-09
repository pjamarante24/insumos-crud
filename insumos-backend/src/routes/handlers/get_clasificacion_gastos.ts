import clasificacionGastosController from "../../controllers/clasificacion_gastos/index.ts";
import type { Request, Response } from "express";

// Endpoint para obtener la clasificacion de gastos
export const getClasificacionGastos = async (req: Request, res: Response) => {
  const response = await clasificacionGastosController.getClasificacionGastos(
    req.query
  );

  res.send(response);
};
