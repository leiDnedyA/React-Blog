import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByID } from '../services/ArticleService'
import Article from '../elements/Article'
import LoadingText from '../elements/LoadingText';

function ArticlePage(props) {
    
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getArticleByID(id)
            .then((res) => {
                setIsLoaded(true);
                setCurrentArticle(res);
            })
    }, []);

    if (!isLoaded) {
        return <LoadingText/>
    } else {
        return (
            <Article id={currentArticle.id} title={currentArticle.title} body={currentArticle.body} author={currentArticle.author} date={currentArticle.date}/>
        )
    }
}

export default ArticlePage