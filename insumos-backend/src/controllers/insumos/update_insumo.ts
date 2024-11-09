import { getDb } from "../../gateway/db.ts";
import clasificacionBienesController from "../../controllers/clasificacion_bienes_servicios/index.ts";
import clasificacionGastosController from "../../controllers/clasificacion_gastos/index.ts";
import { InsumosCollection, type Insumo } from "../../entity/insumos.ts";
import { ObjectId } from "mongodb";

type UpdateInsumoRequest = Partial<
  Omit<
    Insumo & {
      clasificacionBienesServicios: string;
      clasificacionGastos: string;
    },
    "_id"
  >
>;

// Actualiza un insumo
export const updateInsumo = async (
  id: string,
  payload: UpdateInsumoRequest
) => {
  const db = getDb();
  const insumos = db.collection<Insumo>(InsumosCollection);

  const updateInsumoRequest: UpdateInsumoRequest = {};

  // Solo actualiza los campos que se envíen en el body
  if (payload.nombre) updateInsumoRequest.nombre = payload.nombre;
  if (payload.descripcion)
    updateInsumoRequest.descripcion = payload.descripcion;
  if (payload.unidad) updateInsumoRequest.unidad = payload.unidad;
  if (payload.costoUnitario)
    updateInsumoRequest.costoUnitario = payload.costoUnitario;

  if (payload.clasificacionBienesServicios) {
    const clasificacionBienesExists =
      await clasificacionBienesController.getClasificacionBienesServiciosById(
        payload.clasificacionBienesServicios
      );

    if (!clasificacionBienesExists) {
      return { message: "Clasificación de bienes y servicios no encontrada" };
    }

    updateInsumoRequest.clasificacionBienesServicios =
      payload.clasificacionBienesServicios;
  }

  if (payload.clasificacionGastos) {
    const clasificacionGastosExists =
      await clasificacionGastosController.getClasificacionGastosById(
        payload.clasificacionGastos
      );

    if (!clasificacionGastosExists) {
      return { message: "Clasificación de gastos no encontrada" };
    }

    updateInsumoRequest.clasificacionGastos = payload.clasificacionGastos;
  }

  const { matchedCount } = await insumos.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateInsumoRequest }
  );

  if (matchedCount === 0) {
    return { message: "Insumo no encontrado" };
  }
};
