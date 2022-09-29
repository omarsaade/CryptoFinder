import React, { useState, useEffect } from 'react'
import NewsData from './NewsData'
import classes from './News.module.css'
function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`);
            const data = await response.json();
            const dataz = data.articles.slice(0, 13);
            setNews(dataz);
        }
        fetchNews();
    }, []);


    const ourNews = news.map((newsdata) =>
        <NewsData
            key={Math.random().toString()}
            id={Math.random().toString()}
            description={newsdata.description}
            date={newsdata.publishedAt}
            url={newsdata.url}
            img={newsdata.urlToImage === "null" ? <p>No Image Available</p> : newsdata.urlToImage}
            title={newsdata.title}

        />

    );



    return (
        <ul className={classes.modal}>
            {ourNews}
        </ul>
    )
}

export default News
