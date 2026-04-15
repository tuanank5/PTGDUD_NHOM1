import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/user/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import ProductForm from './pages/admin/ProductForm';

import ProductListPage from './pages/user/ProductList';
import ProductList from './components/GiaAn/ProductList';

import FavoritesPage from "./pages/user/FavoritesPage";
import AboutUs from './pages/user/AboutUs';
import { AppProviders } from './context/AppProvider';
import { useEffect, useState } from 'react';
import { getProducts } from './api/productsAPI';
import Dashboard from './pages/admin/Dashboard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: user !== null ? <Navigate to="/" replace /> : <Login /> },
    // { path: "/products", element: <ProductList products={products} /> }, cũ
    { path: "/products", element: <ProductListPage /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/favorites", element: <FavoritesPage /> }, 

    //admin
    { path: "/admin/dashboard", element: user?.role === "admin" ? <Dashboard /> : <Navigate to="/" replace /> }, 
    { path: "/admin/productForm", element: user?.role === "admin" ? <ProductForm /> : <Navigate to="/" replace /> },
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