// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { sendCartData } from '../../../store/Actions/cartSend-actions'
// import classes from './Button.module.css';

// const Button = (props) => {
//     const dispatch = useDispatch();
//     const price = +props.price.toFixed();
//     const name = props.name;
//     const id = props.id;
//     const amount = 1;


//     const clickHandler = () => {
//         dispatch(cartActions.updateCart({ name, price, id, amount }));
//     }



//     //     useEffect(() => {
//     //         dispatch(fetchCartData());
//     // }, [dispatch]);








//     return (

//         <button className={classes.button} onClick={clickHandler}>
//             {props.children}
//         </button>

//     );
// };

// export default Button;