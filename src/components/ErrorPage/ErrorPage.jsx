import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1 className="text-5xl">Oops!</h1>
            <p className="text-4xl">
                <i>{error.status} {error.statusText || error.message}</i>
            </p>
            <p className="text-3xl">{error.data}</p>
            <Link className="btn btn-success text-bold text-white" to='/'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;