const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getInsumos = (request?: { search?: string }) => {
  let url = `${BASE_URL}/insumos`;

  if (request?.search) {
    url += `?search=${request.search}`;
  }

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
