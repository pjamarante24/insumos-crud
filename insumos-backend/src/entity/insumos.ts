import type { ObjectId } from "mongodb";
import type { ClasificacionBienesServicios } from "./clasificacion_bienes_servicios";
import type { ClasificacionGastos } from "./clasificacion_gastos";

export const InsumosCollection = "insumos";

export interface Insumo {
  _id: ObjectId;
  nombre: string;
  descripcion: string;
  unidad: string;
  costoUnitario: number;
  clasificacionBienesServicios: ClasificacionBienesServicios;
  clasificacionGastos: ClasificacionGastos;
}
