import type { Insumo } from "../types";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

type CreateInsumoRequest = Partial<
  Omit<
    Insumo,
    "_id" | "clasificacionBienesServicios" | "clasificacionGastos"
  > & {
    clasificacionBienesServicios: string;
    clasificacionGastos: string;
  }
>;

export const createInsumo = (payload: CreateInsumoRequest) => {
  return fetch(`${BASE_URL}/insumos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => data);
};
