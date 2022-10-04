import { Link } from 'react-router-dom'

/**
 * Component that generates a navbar based on links
 * 
 * props:
 * links: Array.<{address: String, label: String}>
 * 
 */
function NavBar(props) {
    return (
        <nav className="navBar">
            {
            //convert links 
            props.links.map(v => (
                <Link to={v.address}>
                    {v.label}
                </Link>
            ))
            }
        </nav>
    )
}

export default NavBar;