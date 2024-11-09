import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { getInsumos } from "../fetch/getInsumos";
import { Insumo } from "../types";
import { deleteInsumo } from "../fetch/deleteInsumo";
import { InsumosHeader } from "../components/insumos/Header";
import { InsumosTable } from "../components/insumos/Table";
import { ROUTES } from "../contants/routes";

// Pagina principal de insumos
const Insumos = () => {
  const { insumos, query } = useLoaderData() as LoaderData;

  return (
    <>
      <InsumosHeader query={query} />
      <InsumosTable insumos={insumos} />
    </>
  );
};

type LoaderData = {
  insumos: Insumo[];
  query?: string;
};

// Obtiene una lista de insumos y la query de busqueda para mantener el search bar actualizado
export const loader: LoaderFunction<LoaderData> = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";

  const insumos = await getInsumos({ search: query });
  return { insumos, query };
};

// Elimina un insumo y redirige a la pagina principal
export const destroyAction: ActionFunction = async ({ params }) => {
  await deleteInsumo(params.id!);
  return redirect(ROUTES.home);
};

export default Insumos;
