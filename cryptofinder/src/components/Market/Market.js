import React, { useEffect, useState } from "react";
import classes from "./Market.module.css"
import { fetchCartData } from "../../store/Actions/cart-actions";
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from "../../store/Slice/ui-slice";

const Market = () => {
    const dispatch = useDispatch();
    const crypto = useSelector(state => state.ui.crypto);
    const search = useSelector(state => state.ui.search);
    const notifications = useSelector(state => state.ui.notifications);
    const { message, status } = notifications;




    const inputSearchHandler = (event) => {
        dispatch(uiActions.setSearch(event.target.value));
    }


    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);



    if (status === "pending") {
        return <section className={classes.marketLoading}>
            <h1>{message}</h1>
        </section>
    }

    if (status === "error") {
        return <section className={classes.marketError}>
            <h1>{message}</h1>
        </section>
    }



    let filteredCrypto = crypto.filter((val) => {
        return val.name?.toLowerCase().includes(search.toLowerCase()) || '';
        // return val.name.toLowerCase().includes(search.toLowerCase());
    }).map((val, id) => {
        return (
            <tr id={id} key={id}>
                <td className={classes.rank}>{val.rank}</td>
                <td className={classes.logo}>
                    <a href={val.websiteUrl}>
                        <img src={val.icon} alt="logo" width="30px" />
                    </a>
                    <p>{val.name}</p>
                </td>
                <td className={classes.symbol}>{val.symbol}</td>
                <td>${val.marketCap}</td>
                <td>${val.price.toFixed(1)}</td>
                <td>{val.availableSupply}</td>
                <td>{val.volume}</td>
                <td >
                    <button className={classes.button}> Buy {val.symbol}</button>
                </td>
            </tr >
        );
    })




    const cryptoData = (search.length > 0 && filteredCrypto.length === 0) ? <tr>
        <td>
            <h4 className={classes.notFound}>
                We Can't Find this Crypto , Please google it!
            </h4>
        </td>
    </tr> : filteredCrypto;




    return (
        <div className={classes.App}>
            <h1>All Cryptocurrencies</h1>
            <input className={classes.searchBox} type="text" placeholder="Search Markets" onChange={inputSearchHandler} />
            <table>
                <thead>
                    <tr className={classes.header}>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Available Supply</td>
                        <td>24hr</td>
                        <td className={classes.buy}>Trade</td>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData}
                </tbody>
            </table>
        </div>
    );
}

export default Market;
