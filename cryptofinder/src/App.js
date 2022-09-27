import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crypto" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

