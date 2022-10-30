import { useNavigate } from "react-router-dom"
import secondsToDate from '../misc/secondsToDate'

export default function ArticleHeadline(props) {
    const navigate = useNavigate();
    return <div className="article headline" onClick={() => {
        navigate(`/article/${props.id}`)
    }}>
        <h3>{props.title}</h3>
        <p><cite className="authorName">{props.author}</cite>: {props.body}</p>
        <p>{secondsToDate(props.date)}</p>
    </div>
}