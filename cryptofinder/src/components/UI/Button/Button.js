import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {



    const buttonHandler = () => {


    }



    return (
        <button className={classes.button} onClick={buttonHandler}>
            {props.children}
        </button>
    );
};

export default Button;