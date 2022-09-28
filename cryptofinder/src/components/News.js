import React, { useState, useEffect } from 'react'
import NewsData from './NewsData'
import classes from './News.module.css'
function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_11725c825253650dcaffc9ece84a723693775&country=au,de,ae&language=en&category=business`);
            const data = await response.json();
            setNews(data.results);

        }
        fetchNews();
    }, []);



    const ourNews = news.map((newsdata) =>
        <NewsData
            key={Math.random().toString()}
            id={Math.random().toString()}
            description={newsdata.description}
            date={newsdata.pubDate}
            url={newsdata.link}
            img={newsdata.image_url === "null" ? <p>No Image Available</p> : newsdata.image_url}
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
