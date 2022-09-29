import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/NewsPage';
import MainHeader from './components/Layout/MainHeader';
import CartItem from './components/Cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/Slice/ui-slice';
import Cart from './components/Cart/Cart';
import Signup from './components/Config/Signup/Signup';



function App() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.ui.show);


  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <div>
      <MainHeader />
      {show && <Cart onClose={toggleCartHandler} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/wallet" element={<CartItem />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

