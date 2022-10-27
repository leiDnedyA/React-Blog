import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByID } from '../services/ArticleService'
import Article from '../elements/Article'

function ArticlePage(props) {
    
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getArticleByID(id)
            .then((res) => {
                setIsLoaded(true);
                setCurrentArticle(res);
                console.log(res)
            })
    }, []);

    if (!isLoaded) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <Article id={currentArticle.id} title={currentArticle.title} author={currentArticle.author}/>
            </div>
        )
    }
}

export default ArticlePage