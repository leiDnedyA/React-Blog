import React from 'react';
import ArticleHeadline from '../elements/ArticleHeadline';

function Home(props) {
    return (<div className="home">
        {props.articles.map(v => {
            return (<ArticleHeadline 
                title={v.title}
                body={v.body}
                author={v.author}
                id={v.id}
                key={v.id}
                />)
        })}
    </div>);
}

export default Home;