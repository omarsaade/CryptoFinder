import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/Slice/ui-slice';
import { walletActions } from '../../store/Slice/wallet-slice';
import { fetchWalletData } from '../../store/Actions/fetchcart-actions';

function HeaderCartButton() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.ui.show);
    const walletItems = useSelector(state => state.wallet.walletItems);

    const showCartHandler = () => {
        dispatch(uiActions.toggleCart());
        dispatch(fetchWalletData());
    }



    return (

        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Crypto Wallet</span>
            <span className={classes.badge}>2</span>
        </button>

    )
}

export default HeaderCartButton