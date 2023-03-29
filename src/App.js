
import './App.css';
//Context
import ProductsContextProvider from './Context/ProductsContextProvider';
// Components
import Store from './Components/Store';

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
