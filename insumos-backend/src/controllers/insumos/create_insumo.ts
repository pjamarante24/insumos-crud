import { getDb } from "../../gateway/db.ts";
import clasificacionBienesController from "../../controllers/clasificacion_bienes_servicios/index.ts";
import clasificacionGastosController from "../../controllers/clasificacion_gastos/index.ts";
import { InsumosCollection, type Insumo } from "../../entity/insumos.ts";

// Omite el campo _id de Insumo y agrega dos campos adicionales para el id de los foreign keys
type CreateInsumoRequest = Omit<
  Insumo & {
    clasificacionBienesServicios: string;
    clasificacionGastos: string;
  },
  "_id"
>;

// Crea un insumo
export const createInsumo = async (payload: CreateInsumoRequest) => {
  const db = getDb();
  const insumos = db.collection(InsumosCollection);

  // Valida el nombre
  if (!payload.nombre) {
    return { message: "Nombre es requerido" };
  }

  // Valida la clasificacion de bienes y servicios
  if (payload.clasificacionBienesServicios) {
    const clasificacionBienesExists =
      await clasificacionBienesController.getClasificacionBienesServiciosById(
        payload.clasificacionBienesServicios
      );

    if (!clasificacionBienesExists) {
      return { message: "Clasificación de bienes y servicios no encontrada" };
    }
  }

  // Valida la clasificacion de gastos
  if (payload.clasificacionGastos) {
    const clasificacionGastosExists =
      await clasificacionGastosController.getClasificacionGastosById(
        payload.clasificacionGastos
      );

    if (!clasificacionGastosExists) {
      return { message: "Clasificación de gastos no encontrada" };
    }
  }

  try {
    await insumos.insertOne(payload);
  } catch (error) {
    console.error(error);
    return error;
  }
};
