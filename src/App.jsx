import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import ProductForm from './components/GiaAn/ProductForm';

import ProductListPage from './pages/ProductList';
import ProductList from './components/GiaAn/ProductList';

import FavoritesPage from "./pages/FavoritesPage";
import AboutUs from './pages/AboutUs';
import { AppProviders } from './context/AppProvider';
import { useEffect, useState } from 'react';
import { getProducts } from './api/productsAPI';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/productForm", element: <ProductForm /> },
    // { path: "/products", element: <ProductList products={products} /> }, cũ
    { path: "/products", element: <ProductListPage /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/favorites", element: <FavoritesPage /> }, 
  ];

  return (
    <AppProviders>
      <BrowserRouter>
        <div className="app-container">
          <div className="main-content">
            <Routes>
              {routes.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;