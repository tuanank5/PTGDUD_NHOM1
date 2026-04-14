import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductList from "../components/GiaAn/ProductList";
import ProductForm from "../components/GiaAn/ProductForm";
import { getProducts } from "../api/productsAPI";
import Slider from "../components/home/Slider";
import ProductSection from "../components/home/ProductSection";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import WhyUs from "../components/home/WhyUs";
import Review from "../components/home/Review";
export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <Header />
      <Menu />
<Slider />
<ProductSection />
<Banner />
      <Category />
      <WhyUs />
      <Review />

      
    </div>
  );
}