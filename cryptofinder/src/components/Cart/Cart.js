import React, { Fragment } from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';

function Cart(props) {




    const cartItems = (
        <ul className={classes['cart-items']}>
            <CartItem
                key={Math.random()}
                name="bitcoin"
                amount="4"
                price="40$"
            />
        </ul>
    );



    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    );



    const cartModelContent = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>1000$</span>
        </div>
    </Fragment>




    const isSubmittingModelContent = <p>Sending Order data...</p>;







    return (

        <Modal onClose={props.onClose}>
            {cartModelContent}
        </Modal>

    )
}

export default Cart
