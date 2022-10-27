import { useEffect } from 'react';
import { getArticleByID } from '../services/ArticleService'

function ArticlePage(props) {

    const [currentArticle, setCurrentArticle] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getArticleByIDTest(props.articleID)
            .then((res) => {
                setIsLoaded(true);
                setCurrentArticle(res);
            })
    }, []);

    if (!isLoaded) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <p> {JSON.stringify(currentArticle)} </p>
            </div>
        )
    }
}

export default ArticlePage