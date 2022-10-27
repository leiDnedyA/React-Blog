import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import LoadingText from "./LoadingText";

export function ArticleHeadline(props) {
    const navigate = useNavigate();
    return <div className="article" onClick={()=>{
        navigate(`/article/${props.id}`)
    }}>
        <h3>{props.title}</h3>
        <p><cite className="authorName">{props.author}</cite>: {props.body}</p>
    </div>
}

export function Article(props){
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [articleData, setArticleData] = useState(null);

    useEffect(()=>{
        
    })

    if(!isLoaded){
        <LoadingText/>
    }else{
        return <div>
            {articleData}
        </div>
    }

}