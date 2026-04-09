import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          
          {/* CỘT 1: GIỚI THIỆU THƯƠNG HIỆU */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">YOUR LOGO</h2>
            <p className="footer-desc">
              Tự hào mang đến những bộ sưu tập túi xách cao cấp, kết hợp hoàn hảo giữa thiết kế thanh lịch và chất lượng vượt trội. Dành riêng cho phái đẹp hiện đại.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">I</a>
              <a href="#" className="social-icon">Y</a>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div className="footer-col">
            <h4 className="footer-title">LIÊN KẾT NHANH</h4>
            <ul className="footer-links">
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Tất cả sản phẩm</a></li>
              <li><a href="#">Bộ sưu tập mới</a></li>
              <li><a href="#">Sản phẩm khuyến mãi</a></li>
              <li><a href="#">Bài viết - Blog</a></li>
            </ul>
          </div>

          {/* CỘT 3: CHÍNH SÁCH KHÁCH HÀNG */}
          <div className="footer-col">
            <h4 className="footer-title">CHÍNH SÁCH</h4>
            <ul className="footer-links">
              <li><a href="#">Chính sách giao hàng</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* CỘT 4: THÔNG TIN LIÊN HỆ & NEWSLETTER */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">THÔNG TIN LIÊN HỆ</h4>
            <ul className="footer-contact">
              <li>📍 123 Đường Fashion, Quận 1, TP. HCM</li>
              <li>📞 Hotline: 0123 456 789</li>
              <li>✉️ Email: cskh@yourbrand.com</li>
            </ul>
            <div className="newsletter">
              <p>Đăng ký nhận ưu đãi mới nhất</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Nhập email của bạn..." />
                <button type="submit">ĐĂNG KÝ</button>
              </div>
            </div>
          </div>

        </div>

        {/* DẢI BẢN QUYỀN PHÍA DƯỚI */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YOUR BRAND. Đã đăng ký bản quyền.</p>
          <img src="/images/home/pay.avif" alt="Thanh toán" className="payment-icons" />
        </div>
      </div>
    </footer>
  );
}