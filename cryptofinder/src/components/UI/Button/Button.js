import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sendCartData } from '../../../store/Actions/cartSend-actions'
import classes from './Button.module.css';
import { cartActions } from '../../../store/Slice/cart-slice'

const Button = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const price = +props.price.toFixed();
    const name = props.name;
    const id = props.id;
    const amount = 1;



    const clickHandler = () => {
        dispatch(cartActions.updateCart({ name, price, id, amount }));
        // console.log(items);
        dispatch(sendCartData([{ "hi": 1 }, { "bi": 2 }]));
    }



    //     useEffect(() => {
    //         dispatch(fetchCartData());
    // }, [dispatch]);








    return (
        <button className={classes.button} onClick={clickHandler}>
            {props.children}
        </button>
    );
};

export default Button;