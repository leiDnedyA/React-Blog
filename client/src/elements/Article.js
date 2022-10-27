
function Article(props) {
    return <div className="article" onClick={_=>{alert('article click')}}>
        <h3>{props.title}</h3>
        <p><cite className="authorName">{props.author}</cite>: {props.body}</p>
    </div>
}

export default Article;