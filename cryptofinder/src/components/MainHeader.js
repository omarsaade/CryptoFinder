import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import logo from '../image/crypto.png';

const MainHeader = () => {



  return (
    <div className={classes.header}>
      <NavLink className={classes.logo} to='/home'>
        <img src={logo} alt="Logo" width="150px" height='auto' />
      </NavLink>
      <div className={classes.headerRight}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/home'>
          Market&nbsp;Cap
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/crypto'>
          News
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/wallet'>
          Wallet
        </NavLink>
      </div>
    </div >
  );
};

export default MainHeader;




