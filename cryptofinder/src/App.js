import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/crypto" element={<Products />} />
        <Route path='/crypto/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

