import { getDb } from "../../gateway/db.ts";
import {
  ClasificacionBienesServiciosCollection,
  type ClasificacionBienesServicios,
} from "../../entity/clasificacion_bienes_servicios.ts";
import type { Document } from "mongodb";

// Obtiene las clasificaciónes de bienes y servicios
export const getClasificacionBienesServicios = async ({
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

  const clasificacion = db.collection<ClasificacionBienesServicios>(
    ClasificacionBienesServiciosCollection
  );

  const response = await clasificacion.aggregate(pipeline).toArray();
  return response;
};
