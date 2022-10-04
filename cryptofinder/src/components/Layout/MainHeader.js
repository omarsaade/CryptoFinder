import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import logo from '../../assets/crypto.png';
import HeaderCartButton from './HeaderCartButton'

const MainHeader = () => {



  return (
    <div className={classes.headerBox}>
      <div className={classes.header}>
        <NavLink className={classes.logo} to='/home'>
          <img src={logo} alt="Logo" width="150px" height='auto' />
        </NavLink>
        <div className={classes.headerRight}>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/home'>
            Market&nbsp;Cap
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/news'>
            News
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/login'>
            Login
          </NavLink>
          <HeaderCartButton />
        </div>
      </div >
    </div>
  );
};

export default MainHeader;




