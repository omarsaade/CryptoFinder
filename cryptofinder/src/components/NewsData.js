import React from 'react'
import classes from './NewsData.module.css';

function NewsData(props) {
    return (
        <li className={classes.header} >
            <h3>{props.title}</h3>
            {props.img === null ? <p className={classes.noImage}>No Image Available now</p> : <a href={props.url}>
                <img src={props.img} alt="logo" />
            </a>}

            <p>{props.description}</p>
            <span>{props.date}</span>

        </li>
    )
}

export default NewsData
