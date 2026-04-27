//sự kiện chuyển sang trang /products lọc tương ứng
import { Link } from "react-router-dom";
import "../../styles/home/Category.css";

export default function Category() {
  const data = [
    { name: "TÚI NỮ", img: "/images/home/category/tuinu.jpg" , type:"nu"},
    { name: "TÚI NAM", img: "/images/home/category/tuinam.jpg" , type:"nam"},
    { name: "TÚI TOTE", img: "/images/home/category/tuitote.jpg" , type:"tote"},
    { name: "TÚI DU LỊCH", img: "/images/home/category/tuidulich.jpg" , type:"dulich"},
  ];

  return (
    <section className="home-category">
      <div className="category-container">
        <div className="title-wrapper">
          <span className="title-line"></span>
          <h2 className="section-title">DANH MỤC NỔI BẬT</h2>
          <span className="title-line"></span>
        </div>

        <div className="category-grid">
          {data.map((item, i) => (
            <Link 
              to={`/products?category=${item.type}`} 
              key={i} 
           className="cat-card"
            >
              <div className="cat-text">
                <h3>{item.name}</h3>
                <a href="#" className="cat-link">Khám phá ngay &rarr;</a>
              </div>

              <div className="cat-image-box">
                <img src={item.img} alt={item.name}  />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}