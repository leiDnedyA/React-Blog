import { useNavigate } from "react-router-dom"
import secondsToDate from '../misc/secondsToDate'

export default function ArticleHeadline(props) {
    const navigate = useNavigate();
    return <article className="article headline" onClick={() => {
        navigate(`/article/${props.id}`)
    }}>
        <h3>{props.title}</h3>
        <div className="ellipsisOverflow headlineBody"><cite className="authorName">{props.author}</cite>: {props.body}</div>
        <p>{secondsToDate(props.date)}</p>
    </article>
}