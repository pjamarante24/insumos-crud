import clasificacionBienesServiciosController from "../../controllers/clasificacion_bienes_servicios/index.ts";
import type { Request, Response } from "express";

// Endpoint para obtener la clasificacion de bienes y servicios
export const getClasificacionBienesServicios = async (
  req: Request,
  res: Response
) => {
  const response =
    await clasificacionBienesServiciosController.getClasificacionBienesServicios(
      req.query
    );

  res.send(response);
};
