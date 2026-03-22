import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Cột 1: Thông tin thương hiệu  */}
        <div className="footer-col brand-info">
          <h1 className="footer-logo">TÚI XÁCH </h1>
          <p className="slogan">Leading the trend</p>
          
          <div className="company-details">
            <h4 className="no-wrap">CÔNG TY CỔ PHẦN THỜI TRANG QUỐC TẾ </h4>
            <p><strong>VPGD:</strong>Số 12 Nguyễn Văn Bảo, Phường Hạnh Thông, Quận Gò Vấp, Thành phố Hồ Chí Minh </p>
            <p><strong>Số GCN ĐKKD:</strong> 000000000 - <strong>Ngày cấp:</strong> 24/03/2016</p>
            
            <div className="hotline-box">
              <p className="no-wrap">NHƯỢNG QUYỀN / ĐẶT QUÀ TẶNG: <span className="white-text">0000.000.000</span></p>
              <p className="main-hotline no-wrap">TỔNG ĐÀI BÁN HÀNG (08H - 17H): <span>0000.000.000</span></p>
            </div>
            
            <p className="no-wrap"><strong>Email:</strong> cskh@.vn - <strong>Website:</strong> https://.vn</p>
          </div>
          
          <div className="bct-badge">
             <img src="/icons/da-thong-bao.png" alt="Bộ Công Thương" />
          </div>
        </div>

        {/* Cột 2: Chính sách */}
        <div className="footer-col">
          <h3>CHÍNH SÁCH & QUY ĐỊNH</h3>
          <ul className="footer-links">
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách thanh toán</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách khách hàng VIP</a></li>
            <li><a href="#">Tuyển đại lý nhượng quyền</a></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin chung */}
        <div className="footer-col">
          <h3>THÔNG TIN CHUNG</h3>
          <ul className="footer-links">
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tin tức thời trang</a></li>
            <li><a href="#">Hệ thống Showroom</a></li>
            <li><a href="#">Quà tặng doanh nghiệp</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div className="footer-col">
          <h3>THEO DÕI CHÚNG TÔI</h3>
          <ul className="social-links">
            <li><a href="#"><img src="/img/icons/fb.png" className="custom-icon" /> Fanpage </a></li>
            <li><a href="#"><img src="/img/icons/shopee.png" className="custom-icon" /> Shopee </a></li>
            <li><a href="#"><img src="/img/icons/tiktok.png" className="custom-icon" /> Tiktok </a></li>
            <li><a href="#"><img src="/img/icons/insta.png" className="custom-icon" /> Instagram </a></li>
            <li><a href="#"><img src="/img/icons/zalo.png" className="custom-icon" /> Zalo Official</a></li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© 2026 ELLY - Bản quyền thuộc về Nhóm 1. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;