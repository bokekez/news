import { Routes, Route } from 'react-router-dom';
import Verify from '../components/Verify/Verify';
// import Products from '../views/Products/Products';
import Home from '../views/home/Home';
// import ProductDetails from '../views/ProductDetails/ProductDetails';
// import Cart from '../views/Cart/Cart';
// import AuthGuard from './AuthGuard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify/:token" element={<Verify />} />
      {/* <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route
        path="/cart"
        element={
          <AuthGuard>
            <Cart />
          </AuthGuard>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
