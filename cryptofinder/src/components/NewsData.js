import React from 'react'
import classes from './NewsData.module.css';

function NewsData(props) {
    return (
        <li className={classes.header}>
            <a href={props.url}>
                <img src={props.img} alt="logo" />
            </a>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.date}</span>

        </li>
    )
}

export default NewsData
