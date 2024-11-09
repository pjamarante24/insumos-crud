import insumosController from "../../controllers/insumos/index.ts";
import type { Request, Response } from "express";

// Endpoint para obtener un insumo por ID
export const getInsumoById = async (req: Request, res: Response) => {
  const id = req.params.id;

  // Valida que el ID este presente
  if (!id) {
    res.status(400).send({ message: "Falta ID" });
    return;
  }

  const response = await insumosController.getInsumoById(id);
  res.send(response);
};
