import NavBar from "../components/navBar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}