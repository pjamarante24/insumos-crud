import { useRouteError } from "react-router-dom";

// Pagina de error
export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
