import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { getInsumoById } from "../fetch/getInsumoById";
import type {
  ClasificacionBienesServicios,
  ClasificacionGastos,
  Insumo,
} from "../types";
import { getClasificacionBienesServicios } from "../fetch/getClasificacionBienesServicios";
import { getClasificacionGastos } from "../fetch/getClasificacionGastos";
import { updateInsumo } from "../fetch/updateInsumo";
import { createInsumo } from "../fetch/createInsumo";
import { InsumoForm } from "../components/insumo/Form";
import { ROUTES } from "../contants/routes";

// Pagina para crear o editar un insumo
const Insumo = () => {
  const { insumo, clasificacionBienes, clasificacionGastos } =
    useLoaderData() as LoaderData;

  return (
    <InsumoForm
      insumo={insumo}
      clasificacionBienes={clasificacionBienes}
      clasificacionGastos={clasificacionGastos}
    />
  );
};

type LoaderData = {
  insumo: Insumo;
  clasificacionBienes: ClasificacionBienesServicios[];
  clasificacionGastos: ClasificacionGastos[];
};

// Carga los datos necesarios para el formulario
// Si se recibe un id, se carga el insumo con ese id
// Se carga la lista de clasificacion de bienes y servicios
// Se carga la lista de clasificacion de gastos\
export const loader: LoaderFunction<LoaderData> = async ({ params }) => {
  const [insumo, clasificacionBienes, clasificacionGastos] = await Promise.all([
    params.id ? getInsumoById({ id: params.id }) : {},
    getClasificacionBienesServicios(),
    getClasificacionGastos(),
  ]);

  return { insumo, clasificacionBienes, clasificacionGastos };
};

// Accion para editar un insumo
export const editAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await updateInsumo(params.id!, {
    nombre: updates.nombre as string,
    descripcion: updates.descripcion as string,
    clasificacionBienesServicios:
      updates.clasificacionBienesServicios as string,
    clasificacionGastos: updates.clasificacionGastos as string,
    costoUnitario: parseFloat(updates.costoUnitario as string),
    unidad: updates.unidad as string,
  });

  return redirect(ROUTES.home);
};

// Accion para crear un insumo
export const createAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await createInsumo({
    nombre: updates.nombre as string,
    descripcion: updates.descripcion as string,
    clasificacionBienesServicios:
      updates.clasificacionBienesServicios as string,
    clasificacionGastos: updates.clasificacionGastos as string,
    costoUnitario: parseFloat(updates.costoUnitario as string),
    unidad: updates.unidad as string,
  });

  return redirect(ROUTES.home);
};

export default Insumo;
