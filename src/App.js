import './App.css';
//Context
import ProductsContextProvider from './Context/ProductsContextProvider';

// Components
import Store from './Components/Store';
import ProductsDetails from './Components/ProductsDetails';
// RouterDom
import { Routes, Route, Navigate, } from 'react-router-dom';
import CartContextProvider from './Context/CartContextProvider';
import Navbar from './Components/Shared/Navbar';
import ShopCart from './Components/ShopCart';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductsDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/*' element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
