import "../../styles/home/Category.css";

export default function Category() {
  const data = [
    { name: "TÚI NỮ", img: "/images/home/category/tuinu.jpg" },
    { name: "TÚI NAM", img: "/images/home/category/tuinam.jpg" },
    { name: "TÚI TOTE", img: "/images/home/category/tuitote.jpg" },
    { name: "TÚI TRẺ EM", img: "/images/home/category/tuitreem.jpg" },
  ];

  return (
    <section className="category">
      <div className="category-container">
        {/* Tiêu đề có 2 vạch kẻ 2 bên giống trong thiết kế */}
        <div className="title-wrapper">
          <span className="title-line"></span>
          <h2 className="section-title">DANH MỤC NỔI BẬT</h2>
          <span className="title-line"></span>
        </div>

        <div className="category-grid">
          {data.map((item, i) => (
            <div className="cat-card" key={i}>
              <div className="cat-text">
                <h3>{item.name}</h3>
                <a href="#" className="cat-link">Khám phá ngay &rarr;</a>
              </div>

              <div className="cat-image-box">
                <img src={item.img} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}