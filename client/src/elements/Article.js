import secondsToDate from '../misc/secondsToDate'

/**
 * 
 * React Component <Article/>
 * 
 * props:
 *  id <String>
 *  title <String>
 *  author <String>
 *  date <Int> date in seconds
 * 
 */
export default function Article(props) {
    return <div className="articlePage">
        <div className="article">
            <h3>{props.title}</h3>
            <p>{secondsToDate(props.date)}</p>
            <p><cite className="authorName">{props.author}</cite>: {props.body}</p>
        </div>
    </div>

}