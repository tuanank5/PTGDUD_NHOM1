import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home/ProductSection.css";

export default function ProductSection() {
  const newProducts = [
    { name: "TÚI ĐEO VAI NỮ ALAYABOUCLE", price: "2.350.000 VND", img: "/images/home/ProductSection/TÚI ĐEO VAI NỮ ALAYABOUCLE_2350_1.jpg",link: "/product-detail-nu-1" },
    { name: "Túi ĐEO VAI HOBO", price: "983.000 VND", img: "/images/home/ProductSection/Túi Đeo Vai Hobo Đáy Vuông Love Charm Size 23_1.jpg" },
    { name: "Túi MINI QUILTED", price: "1.190.000 VND", img: "/images/home/ProductSection/Túi xách mini hình hộp Quilted_mautrang_1190_1.jpg" },
    { name: "TÚI XÁCH NỮ EVILILYA", price: "2.250.000 VND", img: "/images/home/ProductSection/TÚI XÁCH NỮ EVILILYA_2250.jpg" },
    { name: "TÚI XÁCH NỮ LORIFLORA", price: "2.350.000 VND", img: "/images/home/ProductSection/TÚI XÁCH NỮ LORIFLORA_.jpg" },
    { name: "VÍ NGẮN ĐAI NGANG JODY", price: "483.000 VND", img: "/images/home/ProductSection/Ví Ngắn Đai Ngang Jody Size 11_maudo_483_1.jpg"},
    { name: "TÚI XÁCH TAY CHARMY MINI MÀU TRẮNG", price: "683.000 VND", img: "/images/home/ProductSection/tuixachtay Charmy Mini Size 15_hapas_mautrang_683_1.jpg" },
    { name: "TÚI XÁCH TAY CHARMY MINI MÀU ĐỎ", price:"683.000 VND", img: "/images/home/ProductSection/tuixachtay Charmy Mini Size 15_hapas_maudo_683_3.jpg" },
    { name: "Túi XÁCH DA CAO CẤP SANG TRỌNG JM7063", price: "600.000 VND", img: "/images/home/ProductSection/Túi xách da thật cao cấp sang trọng JM7063_mauden_600_1.jpg" },
    { name: "VÍ NỮ ANASTASSIA MÀU HOA HỒNG ", price: "950.000 VND", img: "/images/home/ProductSection/VÍ NỮ ANASTASSIA_mauhonghoa_950_1.jpg" },
    { name: "VÍ NỮ CAILLOPE", price: "850.000 VND", img: "/images/home/ProductSection/VÍ NỮ CAILLOPE_850_1.jpg" },
  ];

  const bestSeller = [
    { name: "Túi A", price: "2.500.000 VND", img: "/images/products/p1.jpg", tag: "HOT" },
    { name: "Túi B", price: "2.200.000 VND", img: "/images/products/p2.jpg", tag: "MỚI" },
    { name: "Túi C", price: "1.900.000 VND", img: "/images/products/p3.jpg", tag: "HOT" },
    { name: "Túi D", price: "2.800.000 VND", img: "/images/products/p4.jpg", tag: "MỚI" },
    { name: "Túi E", price: "1.300.000 VND", img: "/images/products/p1.jpg", tag: "HOT" },
    { name: "Túi F", price: "2.600.000 VND", img: "/images/products/p2.jpg", tag: "MỚI" },
    { name: "Túi G", price: "1.750.000 VND", img: "/images/products/p3.jpg", tag: "HOT" },
    { name: "Túi H", price: "2.100.000 VND", img: "/images/products/p4.jpg", tag: "MỚI" },
    { name: "Túi I", price: "1.990.000 VND", img: "/images/products/p1.jpg", tag: "HOT" },
    { name: "Túi J", price: "2.400.000 VND", img: "/images/products/p2.jpg", tag: "MỚI" },
  ];

  const ProductSlider = ({ list, showTag }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
          if (sliderRef.current.scrollLeft >= maxScroll) {
            sliderRef.current.scrollLeft = 0;
          } else {
            sliderRef.current.scrollLeft += 260;
          }
        }
      }, 25000);
      return () => clearInterval(interval);
    }, []);

    const scroll = (dir) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += dir * 300;
      }
    };

    return (
      <div className="product-slider-wrapper">
        <button className="slide-btn left" onClick={() => scroll(-1)}>‹</button>
        <div className="product-slider" ref={sliderRef}>
          {list.map((item, index) => {
            const targetPath = item.link || `/product-detail/${index}`;
          
           return (
              <div className="product-card" key={index}>
                {showTag && item.tag && <span className="product-tag">{item.tag}</span>}
                
                {/* Click vào ảnh */}
                <Link to={targetPath}>
                  <img src={item.img} alt={item.name} />
                </Link>

                {/* Click vào tên */}
                <Link to={targetPath} className="product-name-link">
                  <h4>{item.name}</h4>
                </Link>

                <p>{item.price}</p>

                {/* Nút Mua ngay dẫn vào trang chi tiết */}
                <Link to={targetPath}>
                  <button className="btn-buy-now">Mua ngay</button>
                </Link>
              </div>
            );
          })}
        </div>
        <button className="slide-btn right" onClick={() => scroll(1)}>›</button>
      </div>
    );
  };

  return (
    <div className="product-section">
      <h2 className="section-title">BỘ SƯU TẬP MỚI</h2>
      <ProductSlider list={newProducts} />
      <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
      <ProductSlider list={bestSeller} showTag={true} />
    </div>
  );
}