import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center h-screen">
      <div className="w-[500px] p-8 h-fit border text-center space-y-2">
        <h1>Oops!!!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <Link className="text-blue-600 underline" to="/">
            Back to HOME
          </Link>
        </p>
      </div>
    </div>
  );
}
