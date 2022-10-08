import React, { Fragment } from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
// import { fetchWalletData } from "../../store/Actions/fetchcart-actions";



function Cart(props) {

    const walletItems = useSelector(state => state.wallet.walletItems);
    const totalAmount = useSelector(state => state.wallet.totalAmount);
    const cartItems = (
        <ul className={classes['cart-items']}>
            {walletItems.map((item) => (
                <CartItem
                    key={item.id}
                    amount={item.amount}
                    name={item.name}
                    price={item.price}
                // onRemove={cartItemRemoveHandler.bind(null, item.id)}
                // onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))
            }
        </ul>
    );



    // const modalActions = (
    //     <div className={classes.actions}>
    //         <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    //         <button className={classes.button}>Order</button>
    //     </div>
    // );



    const cartModelContent = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}$</span>
        </div>
    </Fragment>




    // const isSubmittingModelContent = <p>Sending Order data...</p>;







    return (

        <Modal onClose={props.onClose}>
            {cartModelContent}
            {/* {cartItems} */}
        </Modal>

    )
}

export default Cart
