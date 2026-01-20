import { useState, useEffect } from 'react';
import logo from '../assets/uwo-logo.png';

const Navbar = ({ currentPage, navigateTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (page) => {
        navigateTo(page);
        setMobileMenuOpen(false);
    };

    return (
        <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => handleNavClick('home')}>
                    <img src={logo} alt="UWO Poker Club" className="logo-icon" />
                    <span className="logo-text">UWO <span className="logo-purple">POKER CLUB</span></span>
                </div>

                <div className="nav-links">
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('about')}
                        className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleNavClick('gallery')}
                        className={`nav-link ${currentPage === 'gallery' ? 'active' : ''}`}
                    >
                        Gallery
                    </button>
                    <button
                        onClick={() => handleNavClick('rankings')}
                        className={`nav-link ${currentPage === 'rankings' ? 'active' : ''}`}
                    >
                        Rankings
                    </button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="hamburger"></span>
                </button>
            </div>

            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <button onClick={() => handleNavClick('home')} className="mobile-link">Home</button>
                <button onClick={() => handleNavClick('about')} className="mobile-link">About</button>
                <button onClick={() => handleNavClick('gallery')} className="mobile-link">Gallery</button>
                <button onClick={() => handleNavClick('rankings')} className="mobile-link">Rankings</button>
            </div>
        </nav>
    );
};

export default Navbar;
