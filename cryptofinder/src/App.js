import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/NewsPage';
import MainHeader from './components/Layout/MainHeader';
import CartItem from './components/Cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/UI/Modal'
import { uiActions } from './store/ui-slice';


function App() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.ui.show);


  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <div>
      <MainHeader />
      {show && <Modal onClose={toggleCartHandler}><CartItem /></Modal>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/wallet" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;

