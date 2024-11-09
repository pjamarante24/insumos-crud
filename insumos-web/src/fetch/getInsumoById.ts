const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getInsumoById = ({ id }: { id: string }) => {
  return fetch(`${BASE_URL}/insumos/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
