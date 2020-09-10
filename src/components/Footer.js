import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Crafted just for you, with happiness in our mind!
                <span role="img" aria-label="emoji">🙂</span>
            </p>
            <div className="footer__nav">
                <span title="github">
                    <a href="https://github.com/nwaguvictor/pint.git" className="footer__link" rel="noopener noreferrer">
                        <i className="fab fa-github fa-fw"></i>View on github
                    </a>
                </span>
                <span title="twitter">
                    <a href="https://twitter.com/nwaguvictor100" target="_blank"
                        className="footer__link" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-fw"></i>Nwaguvictor
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;