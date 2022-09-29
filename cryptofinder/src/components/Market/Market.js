import React, { useEffect, useState } from "react";
import classes from "./Market.module.css"

const Market = () => {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState()



    const inputSearchHandler = (event) => {
        setSearch(event.target.value);
    }




    useEffect(() => {
        const fetchCryptoData = async () => {
            const response = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=50¤cy=USD`);
            if (!response.ok) {
                //this is a constructor
                throw new Error('Something went wrong!')
            }

            const data = await response.json();
            if (data === null) {
                throw new Error('Check your URL');
            }

            setCrypto(data.coins);
            setIsLoading(false);
        }
        fetchCryptoData().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);


    if (isLoading) {
        return <section className={classes.marketLoading}>
            <p>Loading...</p>
        </section>
    }

    if (httpError) {
        return <section className={classes.marketError}>
            <p>{httpError}</p>
        </section>
    }






    let filteredCrypto = crypto.filter((val) => {
        return val.name.toLowerCase().includes(search.toLowerCase());
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





    const cryptoData = (search.length > 0 && filteredCrypto.length === 0) ? <tr><td className={classes.notFound}>We Can't Find this Crypto , Please google it!</td></tr> : filteredCrypto;




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