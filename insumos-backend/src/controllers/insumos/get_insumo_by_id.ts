import { getDb } from "../../gateway/db.ts";
import { InsumosCollection, type Insumo } from "../../entity/insumos.ts";
import { ClasificacionGastosCollection } from "../../entity/clasificacion_gastos.ts";
import { ClasificacionBienesServiciosCollection } from "../../entity/clasificacion_bienes_servicios.ts";
import { ObjectId, type Document } from "mongodb";

// Obtiene un insumo por su id
export const getInsumoById = async (id: string) => {
  const db = getDb();

  const insumos = db.collection<Insumo>(InsumosCollection);
  const pipeline: Document[] = [
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
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

  const response = await insumos.aggregate<Insumo>(pipeline).toArray();
  return response[0];
};
