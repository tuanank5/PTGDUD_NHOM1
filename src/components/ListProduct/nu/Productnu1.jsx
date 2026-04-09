import React, { useState } from 'react';
import "../../../styles/ListProduct/nu/Productnu1.css";

export default function ProductDetail() {
  const [selectedImg, setSelectedImg] = useState("/images/products/main-bag.jpg");
  const [selectedColor, setSelectedColor] = useState("Beige");
  const [selectedSize, setSelectedSize] = useState("Nhỏ");

  const thumbnails = [
    "/images/products/thumb1.jpg",
    "/images/products/thumb2.jpg",
    "/images/products/thumb3.jpg",
    "/images/products/thumb4.jpg",
    "/images/products/thumb5.jpg",
  ];

  return (
    <div className="product-detail-container">
      <div className="detail-wrapper">
        
        <div className="product-images-section">
          <div className="main-image-box">
            <img src={selectedImg} alt="Main Product" />
          </div>
          <div className="thumbnail-list">
            {thumbnails.map((img, index) => (
              <div 
                key={index} 
                className={`thumb-item ${selectedImg === img ? 'active' : ''}`}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`thumb-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info-section">
          <h1 className="detail-name">Túi Xách Da Hapas Monogram - Beige</h1>
          <p className="detail-price">5.990.000₫</p>

          <div className="selection-group">
            <span className="label">Màu sắc:</span>
            <div className="color-options">
              <button 
                className={`color-btn beige ${selectedColor === 'Beige' ? 'active' : ''}`}
                onClick={() => setSelectedColor('Beige')}
              ><span>Beige</span></button>
              <button 
                className={`color-btn cream ${selectedColor === 'Cream' ? 'active' : ''}`}
                onClick={() => setSelectedColor('Cream')}
              ><span>Cream</span></button>
              <button 
                className={`color-btn rosegold ${selectedColor === 'Rose Gold' ? 'active' : ''}`}
                onClick={() => setSelectedColor('Rose Gold')}
              ><span>Rose Gold</span></button>
            </div>
          </div>

          <div className="selection-group">
            <span className="label">Kích thước:</span>
            <div className="size-options">
              {['Nhỏ', 'Trung', 'Lớn'].map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-add-cart">Thêm vào giỏ hàng</button>
            <button className="btn-buy-now-detail">Mua ngay</button>
          </div>

          <div className="product-specs">
            <div className="spec-tabs">
              <span className="tab-item active">Thông tin sản phẩm</span>
              <span className="tab-item">Đánh giá khách hàng (57)</span>
            </div>
            <div className="spec-content">
              <p><strong>Chất liệu:</strong> Da cao cấp với lớp hoàn thiện bóng nhẹ.</p>
              <p><strong>Kích thước:</strong> 25 x 18 x 10 cm.</p>
              <p><strong>Chi tiết:</strong> Phần cứng kim loại mạ vàng, khóa kéo chắc chắn, lớp lót vải mềm, nhiều ngăn tiện dụng.</p>
              <p><strong>Xuất xứ:</strong> Việt Nam.</p>
              <p><strong>Bảo hành:</strong> 1 năm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}