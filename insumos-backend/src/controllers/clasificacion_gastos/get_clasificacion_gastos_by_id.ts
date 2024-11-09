import { getDb } from "../../gateway/db.ts";
import {
  ClasificacionGastosCollection,
  type ClasificacionGastos,
} from "../../entity/clasificacion_gastos.ts";

// Obtiene una clasificación de gastos por su id
export const getClasificacionGastosById = async (id: string) => {
  const db = getDb();

  const clasificacion = db.collection<ClasificacionGastos>(
    ClasificacionGastosCollection
  );

  const response = await clasificacion.findOne({ _id: id });
  return response;
};
