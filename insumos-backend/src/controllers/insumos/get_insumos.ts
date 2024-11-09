import { getDb } from "../../gateway/db.ts";
import { InsumosCollection, type Insumo } from "../../entity/insumos.ts";
import { ClasificacionGastosCollection } from "../../entity/clasificacion_gastos.ts";
import { ClasificacionBienesServiciosCollection } from "../../entity/clasificacion_bienes_servicios.ts";
import type { Document } from "mongodb";

// Obtiene los insumos
export const getInsumos = async ({
  search,
  limit = 50,
  skip = 0,
}: {
  search?: string;
  limit?: number;
  skip?: number;
}) => {
  const db = getDb();

  const insumos = db.collection<Insumo>(InsumosCollection);
  const pipeline: Document[] = [
    { $limit: limit },
    { $skip: skip },
    {
      $lookup: {
        from: ClasificacionBienesServiciosCollection,
        localField: "clasificacionBienesServicios",
        foreignField: "_id",
        as: "clasificacionBienesServicios",
      },
    },
    {
      $lookup: {
        from: ClasificacionGastosCollection,
        localField: "clasificacionGastos",
        foreignField: "_id",
        as: "clasificacionGastos",
      },
    },
    {
      $unwind: {
        path: "$clasificacionBienesServicios",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unwind: {
        path: "$clasificacionGastos",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  if (search) {
    pipeline.unshift({
      $match: {
        nombre: new RegExp(search, "i"),
      },
    });
  }

  const response = await insumos.aggregate<Insumo>(pipeline).toArray();
  return response;
};
