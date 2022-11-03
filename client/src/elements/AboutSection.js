import { FaGithub, FaInstagramSquare } from 'react-icons/fa';

export default () =>
    <div className="about about-grid-container">
        <h3 className="about-header">
            About Me
        </h3>
        <div className="about-social-links"><FaGithub /><FaInstagramSquare /></div>
        <div className="about-body">
            <p>I'm Ayden Diel, a CS undergrad student currently syudying at UMass Boston.</p>
            <p>I used the FERN stack (Firebase, Express, React, Node) to build this site, and used Heroku to deploy it.</p>
        </div>
    </div>
