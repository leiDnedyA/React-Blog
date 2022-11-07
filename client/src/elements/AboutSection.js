import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default () =>
    <div className="about about-grid-container">
        <h3 className="about-header">
            About Me
        </h3>
        <div className="about-social-links">
            <a href="https://github.com/leiDnedyA" className="socials-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ayden-diel-9b0972191/" className="socials-link"><FaLinkedin /></a>
            </div>
        <div className="about-body">
            <p>I'm Ayden Diel, a CS undergrad student currently syudying at UMass Boston.</p>
            <p>You might be wondering what's up with all of the random article names. They're like that because this project is a WIP, but I still want this homepage to give a sense of how the project will look when it's finished.</p>
        </div>
    </div>
