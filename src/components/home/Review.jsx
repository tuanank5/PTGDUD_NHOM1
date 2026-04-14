import "../../styles/home/Review.css";

import ava1 from "/images/home/review/avt1.jpg"; 
import ava2 from "/images/home/review/avt2.jpg"; 
import ava3 from "/images/home/review/avt3.jpg"; 
import ava4 from "/images/home/review/avt4.jpg"; 

export default function Review() {
  const data = [
    { 
      text: "Sản phẩm rất đẹp, chất lượng vượt mong đợi. Đóng gói cẩn thận, giao hàng nhanh.", 
      name: "Thanh Hằng",
      avatar: ava1
    },
    { 
      text: "Mình đã mua 2 lần và rất hài lòng. Túi da mềm, mịn, form đẹp, dùng rất thích.", 
      name: "Minh Anh",
      avatar: ava2 
    },
    { 
      text: "Shop tư vấn rất nhiệt tình, sản phẩm giống hình, sẽ ủng hộ lâu dài.", 
      name: "Thu Trang",
      avatar: ava3 
    },
    { 
      text: "Thiết kế sang trọng, phù hợp với nhiều outfit. 10 điểm!", 
      name: "Quỳnh Như",
      avatar: ava4 
    },
  ];

  return (
    <section className="review">
      <div className="review-container">
        <div className="title-wrapper">
          <div className="title-line"></div>
          <h2 className="section-title">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</h2>
          <div className="title-line"></div>
        </div>

        <div className="review-grid">
          {data.map((item, i) => (
            <div className="review-card" key={i}>
              <div className="stars">★★★★★</div>
              <p className="review-text">"{item.text}"</p>
              <div className="user-info">
                <img src={item.avatar} alt={item.name} className="avatar" />
                <span className="user-name">— {item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}