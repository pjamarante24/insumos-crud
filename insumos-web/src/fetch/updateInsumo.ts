import type { Insumo } from "../types";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

type UpdateInsumoRequest = Partial<
  Omit<
    Insumo,
    "_id" | "clasificacionBienesServicios" | "clasificacionGastos"
  > & {
    clasificacionBienesServicios: string;
    clasificacionGastos: string;
  }
>;

export const updateInsumo = (id: string, payload: UpdateInsumoRequest) => {
  return fetch(`${BASE_URL}/insumos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => data);
};
