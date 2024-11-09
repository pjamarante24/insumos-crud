import insumosController from "../../controllers/insumos/index.ts";
import type { Request, Response } from "express";

// Endpoint para la creacion de insumos
export const createInsumo = async (req: Request, res: Response) => {
  const insumo = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    costoUnitario: parseFloat(req.body.costoUnitario || 0),
    unidad: req.body.unidad,
    clasificacionBienesServicios: req.body.clasificacionBienesServicios,
    clasificacionGastos: req.body.clasificacionGastos,
  };

  const error = await insumosController.createInsumo(insumo);
  if (error) {
    res.status(500).json({ message: error });
    return;
  }

  res.status(201).json({ message: "Insumo creado" });
};
