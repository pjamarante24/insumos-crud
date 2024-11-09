import { Form } from "react-router-dom";
import type {
  Insumo,
  ClasificacionBienesServicios,
  ClasificacionGastos,
} from "../../types";

// Formulario de insumos
// Contiene los campos para crear o modificar un insumo
export const InsumoForm = ({
  insumo,
  clasificacionBienes,
  clasificacionGastos,
}: {
  insumo: Insumo;
  clasificacionBienes: ClasificacionBienesServicios[];
  clasificacionGastos: ClasificacionGastos[];
}) => {
  return (
    <Form method="post" className="insumos-form">
      <label>
        Nombre*
        <input name="nombre" defaultValue={insumo.nombre} required />
      </label>
      <label>
        Descripcion
        <textarea
          name="descripcion"
          defaultValue={insumo.descripcion}
          rows={5}
          cols={60}
        />
      </label>
      <label>
        Unidad
        <select name="unidad" defaultValue={insumo.unidad}>
          <option value="">Seleccione una unidad</option>
          <option value="unidad">Unidad</option>
        </select>
      </label>
      <label>
        Clasificacion de Bienes y Servicios (DGCP)
        <select
          name="clasificacionBienesServicios"
          defaultValue={insumo.clasificacionBienesServicios?._id}
        >
          <option value="">Seleccione una clasificacion</option>
          {clasificacionBienes?.map((clasificacion) => (
            <option key={clasificacion._id} value={clasificacion._id}>
              {clasificacion.denominacion}
            </option>
          ))}
        </select>
      </label>
      <label>
        Clasificacion de Gastos (DIGEPRES)
        <select
          name="clasificacionGastos"
          defaultValue={insumo?.clasificacionGastos?._id}
        >
          <option value="">Seleccione una clasificacion</option>
          {clasificacionGastos.map((clasificacion) => (
            <option key={clasificacion._id} value={clasificacion._id}>
              {clasificacion.denominacion}
            </option>
          ))}
        </select>
      </label>
      <label>
        Costo Unitario (RD$)
        <input
          type="number"
          name="costoUnitario"
          step="any"
          defaultValue={insumo.costoUnitario ?? 0}
        />
      </label>
      <button type="submit">{insumo._id ? "Guardar" : "Crear"}</button>
    </Form>
  );
};
