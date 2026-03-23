import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";
import Menu from "../components/Menu";


export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <Menu />
            <button onClick={() => navigate("/login")}>
                Login
            </button>
            <Products />
        </div>
    )
}