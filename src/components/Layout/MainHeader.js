import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import logo from '../../assets/crypto.png';
import HeaderCartButton from './HeaderCartButton'
import { useSelector } from 'react-redux'
import Button from '../UI/Button/Button';
// import { authActions } from '../../store/Slice/auth-slice';



const MainHeader = () => {
  // const dispatch = useDispatch();
  const userIsLoggedIn = useSelector(state => state.auth.userIsLoggedIn);







  return (
    <div className={classes.headerBox}>
      <div className={classes.header}>
        {/* <NavLink className={classes.logo} to='/login'> */}
        <NavLink className={classes.logo} >
          <img src={logo} alt="Logo" width="150px" height='auto' />
        </NavLink>
        <div className={classes.headerRight}>
          {userIsLoggedIn && <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/home'>
            Market&nbsp;Cap
          </NavLink>
          }

          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/news'>
            News
          </NavLink>

          {!userIsLoggedIn && <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/login'>
            Login
          </NavLink>}
          {userIsLoggedIn && <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/login' >
            <Button />
          </NavLink>}
          <HeaderCartButton />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;




