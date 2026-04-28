import "../../styles/home/WhyUs.css"; 

export default function WhyUs() {
  const data = [
    { icon: "🚚", title: "GIAO HÀNG TOÀN QUỐC", desc: "Miễn phí cho đơn từ 1.000.000đ" },
    { icon: "🛡️", title: "HÀNG CHÍNH HÃNG", desc: "Cam kết 100% chính hãng" },
    { icon: "🔄", title: "ĐỔI TRẢ 7 NGÀY", desc: "Hỗ trợ đổi trả dễ dàng" },
    { icon: "💳", title: "THANH TOÁN LINH HOẠT", desc: "COD, Thẻ, Ví điện tử" },
  ];

  return (
    <section className="whyus">
      <div className="whyus-container">
        <div className="whyus-inner"> 
          {data.map((item, i) => (
            <div className="why-item" key={i}>
              <div className="why-icon-box">
                <span className="why-icon">{item.icon}</span>
              </div>
              <div className="why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}