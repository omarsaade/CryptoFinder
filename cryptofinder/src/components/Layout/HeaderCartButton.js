import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/Slice/ui-slice';
// import { fetchWalletData } from '../../store/Actions/fetchcart-actions';

function HeaderCartButton() {
    const dispatch = useDispatch();
    // const show = useSelector(state => state.ui.show);
    const walletItems = useSelector(state => state.wallet.quantities);


    const showCartHandler = () => {
        dispatch(uiActions.toggleCart());
        // dispatch(fetchWalletData());
    }


    // useEffect(() => {
    //     dispatch(fetchWalletData());
    // }, [dispatch])


    return (

        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Crypto Wallet</span>
            <span className={classes.badge}>{walletItems}</span>
        </button>

    )
}

export default HeaderCartButton