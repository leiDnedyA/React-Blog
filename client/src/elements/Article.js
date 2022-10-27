import { useNavigate } from "react-router-dom"

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
    return <div>
        {props.articleData}
    </div>

}