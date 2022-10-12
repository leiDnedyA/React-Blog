import { Link } from 'react-router-dom'

/**
 * Component that generates a navbar based on links
 * 
 * props:
 * links: Array.<{address: String, label: String}>
 * 
 */
function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbarTitle">{props.title}</div>
            <div className="navbarLinks">
                {

                    //convert links 
                    props.links.map((v, i) => {


                        let classNames = ['navbarLink']

                        if (i === 0) {
                            classNames.push('navbarLinkLeft');
                        } else if (i === props.links.length - 1) {
                            classNames.push('navbarLinkRight')
                        }

                        let link = <Link
                            className={classNames.join(' ')}
                            to={v.address}
                        >
                            {v.label}
                        </Link>;


                        return link
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;