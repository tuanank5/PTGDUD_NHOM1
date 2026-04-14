import React, { useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../styles/AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      <Header />
      <Menu />

      <main className="about-content-area">
        {/* SECTION 1: BANNER CHÍNH */}
        <section className="about-hero-banner">
          <div className="hero-container">
            <div className="hero-info">
              <h1>Về Chúng Tôi – Thời Trang Cho Mọi Nhà</h1>
              <p className="hero-desc">
                Phong cách hiện đại, đa dạng. Phục vụ mọi thế hệ với những thiết kế túi xách tinh tế nhất.
              </p>
            </div>
            <div className="hero-visual">
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop" alt="Banner Bag" />
            </div>
          </div>
        </section>

        {/* SECTION 2: SỨ MỆNH (Bố cục chồng ảnh giống mẫu) */}
        <section className="about-mission">
          <div className="mission-container">
            <div className="mission-images-grid">
              <div className="image-stack-base">
                <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1976&auto=format&fit=crop" alt="Sketch Bag" />
              </div>
              <div className="image-stack-overlay">
                <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop" alt="Fashion Model" />
              </div>
            </div>
            <div className="mission-description">
              <span className="gold-label">CHUYỆN VỀ AAAAA</span>
              <h2>SỨ MỆNH CỦA CHÚNG TÔI</h2>
              <p>
                AAAAA ra đời từ niềm đam mê mang đến những chiếc túi xách thời thượng, 
                hiện đại và chất lượng cho mọi thành viên trong gia đình. Chúng tôi tin rằng 
                phong cách là sự tự tin, và sự đa dạng là chìa khóa mở ra vẻ đẹp riêng biệt.
              </p>
              <div className="about-quote">
                <p>"Lấy cảm hứng từ sự thanh lịch vượt thời gian, chúng tôi tạo ra những sản phẩm bền bỉ cùng năm tháng."</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PHONG CÁCH SỐNG (Grid ảnh nhỏ) */}
        <section className="about-lifestyle">
          <h2 className="section-title-center">PHONG CÁCH SỐNG</h2>
          <div className="lifestyle-grid">
             <div className="lifestyle-card main-card">
                <p>Phong cách sống là cách chúng ta chọn để tận hưởng từng khoảnh khắc. Mỗi chiếc túi không chỉ là phụ kiện, mà là người bạn đồng hành.</p>
             </div>
             <div className="lifestyle-img"><img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop" alt="Life 1" /></div>
             <div className="lifestyle-img"><img src="https://images.unsplash.com/photo-1566150905458-1bf1fd113f0d?q=80&w=2070&auto=format&fit=crop" alt="Life 2" /></div>
             <div className="lifestyle-img"><img src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop" alt="Life 3" /></div>
             <div className="lifestyle-img"><img src="https://images.unsplash.com/photo-1590739225287-bd31519780c3?q=80&w=1910&auto=format&fit=crop" alt="Life 4" /></div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AboutUs;