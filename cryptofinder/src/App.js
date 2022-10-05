import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/NewsPage';
import MainHeader from './components/Layout/MainHeader';
import CartItem from './components/Cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/Slice/ui-slice';
import Cart from './components/Cart/Cart';
import AuthForm from './components/Auth/AuthForm';


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
        <Route path='/' element={<News />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/wallet" element={<CartItem />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  );
}


export default App;

