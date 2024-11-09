import insumosController from "../../controllers/insumos/index.ts";
import type { Request, Response } from "express";

// Endpoint para obtener los insumos
export const getInsumos = async (req: Request, res: Response) => {
  const request = {
    search: req.query.search as string,
    skip: 0,
    limit: 50,
  };

  if (req.query.skip) {
    request.skip = parseInt(req.query.skip as string);
  }

  if (req.query.limit) {
    request.limit = parseInt(req.query.limit as string);
  }

  const insumos = await insumosController.getInsumos(request);

  res.send(insumos);
};
