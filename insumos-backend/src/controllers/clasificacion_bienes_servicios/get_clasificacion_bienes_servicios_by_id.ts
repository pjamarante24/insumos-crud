import { getDb } from "../../gateway/db.ts";
import {
  ClasificacionBienesServiciosCollection,
  type ClasificacionBienesServicios,
} from "../../entity/clasificacion_bienes_servicios.ts";

// Obtiene una clasificación de bienes y servicios por su id
export const getClasificacionBienesServiciosById = async (id: string) => {
  const db = getDb();

  const clasificacion = db.collection<ClasificacionBienesServicios>(
    ClasificacionBienesServiciosCollection
  );

  const response = await clasificacion.findOne({ _id: id });
  return response;
};
