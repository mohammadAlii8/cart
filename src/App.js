import './App.css';
//Context
import ProductsContextProvider from './Context/ProductsContextProvider';

// Components
import Store from './Components/Store';
import ProductsDetails from './Components/ProductsDetails';
// RouterDom
import { Routes, Route, Navigate, } from 'react-router-dom';
function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path='/products/:id' element={<ProductsDetails />} />
        <Route path='/products' element={<Store />} />
        <Route path='/*' element={<Navigate to="/products" />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
