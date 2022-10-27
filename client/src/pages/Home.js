import React from 'react';
import {ArticleHeadline} from '../elements/Article';

function Home(props) {
    return (<div className="home">
        {props.articles.map(v => {
            console.log(v)
            return (<ArticleHeadline 
                title={v.title}
                body={v.body}
                author={v.author}
                id={v.id}
                />)
        })}
    </div>);
}

export default Home;