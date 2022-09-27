import React, { useState, useEffect } from 'react'
import NewsData from './NewsData'
import classes from './News.module.css'
function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Key': 'c414129f88msh2c937c2194108e8p14852fjsnd8033c7e4aef',
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                }
            };
            const response = await fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options);
            const data = await response.json();


            setNews(data.value);
        }
        fetchNews();
    }, []);



    const ourNews = news.map((newsdata) =>

        <NewsData
            // img={newsdata.image.thumbnail.contentUrl !== "" ? newsdata.image.thumbnail.contentUrl : 'No Image Available'}
            title={newsdata.name}
            description={newsdata.description}
            date={newsdata.datePublished}
            url={newsdata.url}
        />

    );




    return (
        <ul className={classes.modal}>
            {ourNews}
        </ul>
    )
}

export default News
