import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../../pages/home/HomePage';
import ProductDetailPage from '../../../pages/productDetail/ProductDetailPage';
import AboutPage from '../../../pages/about/AboutPage';

function Menus() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;