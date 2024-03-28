import { Link, useRouteError } from "react-router-dom";
import Header from "../Header.jsx/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <Header></Header>
            <div className="flex justify-center my-16">
                <div className="text-center  space-y-4">
                    <h1 className="text-5xl">Oops!</h1>
                    <p className="text-4xl">
                        <i>{error.status}  Page {error.statusText || error.message}</i>
                    </p>
                    <p className="text-3xl">{error.data}</p>
                    <Link className="btn btn-success text-bold text-white" to='/'>Go Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;