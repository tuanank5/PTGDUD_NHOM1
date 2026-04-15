import React from 'react';
import { getProducts } from "../../api/productsAPI";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductCategory from "../../components/ProductList/ProductCategory";

export default function ProductListPage() {
  return (
    <div className="product-list-page-wrapper">
      <Header />
      <Menu />
      <main style={{ minHeight: '80vh' }}> 
        <ProductCategory />
      </main>

    </div>
  );
}