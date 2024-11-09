const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const deleteInsumo = (id: string) => {
  return fetch(`${BASE_URL}/insumos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
