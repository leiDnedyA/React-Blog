
function Article(props) {
    return <div className="article">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
}

export default Article;