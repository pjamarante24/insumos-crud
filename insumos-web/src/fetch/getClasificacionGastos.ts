const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getClasificacionGastos = (request?: { search?: string }) => {
  let url = `${BASE_URL}/clasificacion_gastos`;

  if (request?.search) {
    url += `?search=${request.search}`;
  }

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
