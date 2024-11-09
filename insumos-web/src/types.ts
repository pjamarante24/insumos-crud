export interface Insumo {
  _id: string;
  nombre: string;
  descripcion: string;
  unidad: string;
  costoUnitario: number;
  clasificacionBienesServicios: ClasificacionBienesServicios;
  clasificacionGastos: ClasificacionGastos;
}

export interface ClasificacionBienesServicios {
  _id: string;
  denominacion: string;
}

export interface ClasificacionGastos {
  _id: string;
  denominacion: string;
}
