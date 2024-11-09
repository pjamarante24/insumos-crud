import { Form, Link } from "react-router-dom";
import { currencyFormat } from "../../utils/currency";
import type { Insumo } from "../../types";
import { ROUTES } from "../../contants/routes";

// Tabla de insumos
// Muestra una tabla con los insumos
export const InsumosTable = ({ insumos }: { insumos: Insumo[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Unidad</th>
          <th scope="col">Costo Unitario</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {insumos.map((insumo) => (
          <InsumosTableItem insumo={insumo} />
        ))}
      </tbody>
    </table>
  );
};

// Item de la tabla de insumos
// Muestra un insumo en la tabla con sus acciones modificar o eliminar
const InsumosTableItem = ({ insumo }: { insumo: Insumo }) => {
  return (
    <tr key={insumo._id}>
      <th scope="row">{insumo.nombre}</th>
      <td>{insumo.unidad}</td>
      <td>{currencyFormat.format(insumo.costoUnitario)}</td>
      <td className="insumos-table-actions">
        <Link to={ROUTES.editInsumo(insumo._id)}>
          <button type="submit">Modificar</button>
        </Link>
        <Form
          method="post"
          action={ROUTES.deleteInsumo(insumo._id)}
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button className="delete" type="submit">
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};
