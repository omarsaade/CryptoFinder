import React, { Fragment } from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWalletData } from "../../store/Actions/fetchcart-actions";
import { sendCartData } from '../../store/Actions/cartSend-actions';


function Cart(props) {

    const dispatch = useDispatch();
    const walletItems = useSelector(state => state.wallet.walletItems);
    const totalAmount = useSelector(state => state.wallet.totalAmount);


    const cartItemAddHandler = async (itemName, itemPrice, itemId, itemAmount) => {
        console.log(itemName);
        console.log(itemId);
        const name = itemName;
        const price = +itemPrice.toFixed();
        const id = itemId;
        const amount = itemAmount;
        const addedCoin = { name, price, id, amount }
        // dispatch(cartActions.updateCart(addedCoin));
        dispatch(sendCartData(addedCoin));
        dispatch(fetchWalletData());
    }


    const cartItemRemoveHandler = async (itemK) => {
        const existingCartItemIndex = walletItems.findIndex(
            (item) => item.id === itemK // -1 bcz no match found  m1=m1
        );

        const existingItem = walletItems[existingCartItemIndex];//{}
        console.log(existingItem);
        // const updatedTotalAmount = state.totalAmount - existingItem.price; // 44 - 22 = 22,99
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = walletItems.filter(item => item.id !== itemK);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...walletItems];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        // 
        return {
            items: updatedItems,
        };

    }






    const cartItems = (
        <ul className={classes['cart-items']}>
            {walletItems.map((item) => (
                <CartItem
                    key={item.id}
                    amount={item.amount}
                    name={item.name}
                    price={item.price}
                    onRemove={() => cartItemRemoveHandler(item.id)}
                    onAdd={() => cartItemAddHandler(item.name, item.price, item.id, 1)}
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
