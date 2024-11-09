import { getDb } from "../../gateway/db.ts";
import {
  ClasificacionGastosCollection,
  type ClasificacionGastos,
} from "../../entity/clasificacion_gastos.ts";
import type { Document } from "mongodb";

// Obtiene las clasificaciónes de gastos
export const getClasificacionGastos = async ({
  search,
  limit = 50,
  skip = 0,
}: {
  search?: string;
  limit?: number;
  skip?: number;
}) => {
  const db = getDb();

  const pipeline: Document[] = [
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ];

  if (search) {
    pipeline.unshift({
      $match: {
        denominacion: new RegExp(search, "i"),
      },
    });
  }

  const clasificacion = db.collection<ClasificacionGastos>(
    ClasificacionGastosCollection
  );

  const response = await clasificacion.aggregate(pipeline).toArray();
  return response;
};
