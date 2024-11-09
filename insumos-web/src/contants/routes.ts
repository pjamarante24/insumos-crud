
// Lista de rutas de la aplicación
export const ROUTES = {
  home: "/",
  insumos: "/insumos",
  newInsumo: "/insumos/new",
  editInsumo: (id: string) => `/insumos/${id}/edit`,
  deleteInsumo: (id: string) => `/insumos/${id}/delete`,
};
