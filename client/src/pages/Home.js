import React, { useEffect, useState } from 'react';
import AboutSection from '../elements/AboutSection';
import ArticleHeadline from '../elements/ArticleHeadline';
import LoadingText from '../elements/LoadingText';
import { getRecentArticles } from '../services/ArticleService'

function Home() {

    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getRecentArticles(10)
            .then(res => {
                setIsLoaded(true);
                setArticles(res.recentArticles);
            })
    }, [])

    const loadMoreArticles = () => {
        getRecentArticles(10, articles.length)
            .then((newArticles) => {
                let a = newArticles.recentArticles;
                setArticles([...articles, ...a]);
                console.log(articles)
            });
    }

    if (!isLoaded) {
        return <LoadingText />
    } else {
        return (<div className="home">
            <div className="articles articles-grid-elem articles-flex-container">
                {articles.map(v => {
                    return (<ArticleHeadline
                        title={v.title}
                        body={v.body}
                        author={v.author}
                        id={v.id}
                        key={v.id}
                        date={v.date}
                    />)
                })}
                <div className="bigMarginTop">
                    <button className="lowkeyButton center" onClick={loadMoreArticles}>Load more...</button>
                </div>
            </div>
            
            <div className="about-grid-elem ">
                <AboutSection />
            </div>
            
        </div>);
    }


}

export default Home;