import classes from './CartItem.module.css';
import Cart from './Cart';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    const price = `$${props.price}`;
    //     width: 778px;


    return (
        <li className={`${classes.walletItem} ${classes.liItem}`}>
            <div>
                <h2 className={classes.hname}>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>−</button>
                <button >+</button>
            </div>
            {/* <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div> */}
        </li>
    );
};

export default CartItem;