import { Outlet } from "react-router-dom";
import Header from "../Header.jsx/Header";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
        </div>
    );
};

export default Root;