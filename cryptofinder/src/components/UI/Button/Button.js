import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/Slice/auth-slice';
import classes from './Button.module.css';
import { useNavigate } from 'react-router-dom';




function Button() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleClick = () => {
        dispatch(authActions.logout());
        navigate('/AuthForm');
    }

    return (
        <button className={classes.logoutBtn} onClick={handleClick}>Logout</button>
    )
}

export default Button
