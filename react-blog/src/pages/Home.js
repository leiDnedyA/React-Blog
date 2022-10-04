import React from 'react';
import Article from '../elements/Article';

function Home(props) {
    return (<div className="home">
        <h2>Posts</h2>
        {props.articles.map(v => {
            return (<Article 
                title={v.title}
                body={v.body}
                />)
        })}
    </div>);
}

export default Home;