import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import ProductForm from './components/ProductForm';
import ProductListPage from './pages/ProductList';

import Productnu1 from './pages/nu/Productnu1'; 

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/productForm", element: <ProductForm /> },
    { path: "/products", element: <ProductListPage /> },
    { path: "/product-detail-nu-1", element: <Productnu1 /> },
  ];

  return (
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
  );
}

export default App;