import insumosController from "../../controllers/insumos/index.ts";
import type { Request, Response } from "express";

// Endpoint para eliminar un insumo
export const deleteInsumo = async (req: Request, res: Response) => {
  const id = req.params.id;

  // Valida que el ID este presente
  if (!id) {
    res.status(400).send({ message: "Falta ID" });
    return;
  }

  const error = await insumosController.deleteInsumo(id);
  if (error) {
    res.status(500).send({ message: error });
    return;
  }

  res.status(200).send({ message: "Insumo eliminado" });
};
