import insumosController from "../../controllers/insumos/index.ts";
import type { Request, Response } from "express";

// Endpoint para actualizar un insumo
export const updateInsumo = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Valida que el ID este present
  if (!id) {
    res.status(400).send({ message: "ID de insumo requerido" });
    return;
  }

  const error = await insumosController.updateInsumo(id, req.body);
  if (error) {
    res.status(500).send({ message: error });
    return;
  }

  res.status(200).send({ message: "Insumo actualizado" });
};
