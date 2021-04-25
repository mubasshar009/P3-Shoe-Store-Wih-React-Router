import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import ProductIndex from './components/ProductIndex';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />}>
            <Route path="/" element={<ProductIndex />} />
            <Route path=":productID" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div >
  )
}
export default App;
