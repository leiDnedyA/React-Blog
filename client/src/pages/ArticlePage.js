import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByID } from '../services/ArticleService'

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
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <Article articleData={currentArticle}/>
            </div>
        )
    }
}

export default ArticlePage