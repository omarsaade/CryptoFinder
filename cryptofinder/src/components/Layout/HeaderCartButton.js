import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/Slice/ui-slice';

function HeaderCartButton() {
    const dispatch = useDispatch();
    const userIsLoggedIn = useSelector(state => state.auth.userIsLoggedIn);
    const walletItems = useSelector(state => state.wallet.quantities);


    const showCartHandler = () => {
        if (!userIsLoggedIn) {
            return;
        }
        dispatch(uiActions.toggleCart());
    }



    return (

        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Crypto Wallet</span>
            <span className={classes.badge}>{userIsLoggedIn ? walletItems : 0}</span>
        </button>

    )
}

export default HeaderCartButton