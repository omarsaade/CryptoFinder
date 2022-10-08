import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/NewsPage';
import MainHeader from './components/Layout/MainHeader';
import CartItem from './components/Cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/Slice/ui-slice';
import Cart from './components/Cart/Cart';
import AuthForm from './components/Auth/AuthForm';
// import Logout from './pages/Logout';
import React, { useEffect } from 'react';
// import { authActions } from './store/Slice/auth-slice';



function App() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.ui.show);
  let userIsLoggedIn = useSelector(state => state.auth.userIsLoggedIn);




  // console.log(userIsLoggedIn); // false
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <div>
      <MainHeader />
      {show && <Cart onClose={toggleCartHandler} />}
      <Routes>
        <Route path='/' element={<AuthForm />} />
        {userIsLoggedIn && <Route path="/home" element={<Home />} />}
        <Route path="/news" element={<News />} />
        <Route path="/wallet" element={<CartItem />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/logout" element={<AuthForm />} />
        <Route path="/*" element={<AuthForm />} />

      </Routes>
    </div>
  );
}


export default App;

