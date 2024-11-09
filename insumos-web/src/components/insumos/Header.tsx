import { Form, Link } from "react-router-dom";
import { ROUTES } from "../../contants/routes";

// Componente que renderiza el header de la pagina de insumos
// Contiene un formulario para buscar insumos y un boton para agregar un nuevo insumo
export const InsumosHeader = ({ query }: { query?: string }) => {
  return (
    <div className="root-header">
      <Form id="search-form" role="search">
        <input
          id="q"
          placeholder="Buscar insumos"
          type="search"
          name="q"
          defaultValue={query}
        />
        <button type="submit">Buscar</button>
      </Form>
      <Link to={ROUTES.newInsumo}>
        <button>Agregar Insumo</button>
      </Link>
    </div>
  );
};
