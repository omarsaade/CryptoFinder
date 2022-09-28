import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


function HeaderCartButton() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.ui.show);

    const showCartHandler = () => {
        console.log(show);
        dispatch(uiActions.toggleCart());
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