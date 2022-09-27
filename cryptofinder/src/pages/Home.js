import { useEffect, useState } from "react";
import classes from "./Home.module.css"

const Home = () => {

  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=50¤cy=USD`);
      const data = await response.json();
      setCrypto(data.coins);
    }
    fetchData();
  }, []);



  const cryptoData = crypto.filter((val) => {
    return val.name.toLowerCase().includes(search.toLowerCase());
  })
    .map((val, id) => {
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
        </tr>
      );
    })



  return (
    <div className={classes.App}>
      <h1>All Cryptocurrencies</h1>
      <input type="text" placeholder="Search Markets" onChange={(e) => { setSearch(e.target.value) }} />
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
          </tr>
        </thead>
        <tbody>
          {cryptoData}
        </tbody>
      </table>
    </div>
  );
}

export default Home;