import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo__text">
                    <div className="logo__text--main">Pint <span role="img" aria-label="emoji">😅</span></div>
                    <span className="logo__text--sub">
                        Something you wanted
                    </span>
                </div>
            </div>
            <nav className="navbar">
                <Router>
                    <Link to="/about" className="navbar__link">About</Link>
                    <Link to="/support" className="navbar__link">Support</Link>
                    <Link to="/help" className="navbar__link">Contribute</Link>
                </Router>
            </nav>
        </header>
    )
}

export default Header;