import { useNavigate } from "react-router-dom";
import "../../styles/home/Banner.css";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section className="banner">
      
      <img 
        src="/images/home/banner.png" 
        alt="banner" 
        className="banner-img"
      />

      <div className="banner-content">
        <h2>SALE UP TO 50%</h2>
        <p>Bộ sưu tập mới</p>
        <button onClick={() => navigate('/products')}>Mua ngay</button>
      </div>

    </section>
  );
}