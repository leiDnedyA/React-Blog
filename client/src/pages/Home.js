import React from 'react';
import Article from '../elements/Article';

function Home(props) {
    return (<div className="home">
        {props.articles.map(v => {
            return (<Article 
                title={v.title}
                body={v.body}
                author={v.author}
                />)
        })}
    </div>);
}

export default Home;