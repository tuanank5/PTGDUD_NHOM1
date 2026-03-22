import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <button onClick={() => navigate("/login")}>
                Login
            </button>
            <Products />
        </div>
    )
}