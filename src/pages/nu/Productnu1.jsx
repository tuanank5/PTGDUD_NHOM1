import React, { useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import ProductDetailContent from "../../components/ListProduct/nu/Productnu1"; 

export default function Productnu1Page() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-page-wrapper">
      
      <Header />
      <Menu />

      <main style={{ minHeight: "80vh", padding: "20px 0" }}>
        <ProductDetailContent />
      </main>

    </div>
  );
}