import logo from '../assets/uwo-logo.png';

const Home = ({ navigateTo }) => {
    return (
        <div id="homePage" className="page active">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>

                <div className="hero-content">
                    <div className="hero-suits">
                        <img src={logo} alt="UWO Poker Club" className="hero-logo" />
                    </div>
                    <h1 className="hero-title">UWO POKER <span className="text-purple">CLUB</span></h1>
                    <p className="hero-subtitle">Where Strategy Meets Community</p>
                    <button className="cta-button" onClick={() => navigateTo('about')}>
                        <span>Join Us Today</span>
                        <svg className="cta-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </section>

            {/* Info Cards */}
            <section className="info-cards">
                <div className="card">
                    <svg className="card-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <h3 className="card-title">When We Meet</h3>
                    <p className="card-text">
                        <strong>Weekly Sessions:</strong><br />
                        Alternating Tuesdays and Thursdays, 6:00 PM - 10:00 PM<br />
                        <strong>Tournaments:</strong><br />
                        Stay tuned for tournament announcements!
                    </p>
                </div>

                <div className="card">
                    <svg className="card-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="card-title">What We Do</h3>
                    <p className="card-text">
                        Texas Hold'em tournaments, strategy workshops, and social events. All skill levels welcome!
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="home-about">
                <div className="about-box">
                    <h2 className="section-title">About Our Club</h2>
                    <p className="about-text">
                        The UWO Poker Club is Western's premier destination for poker enthusiasts. Whether you're a seasoned player
                        or just learning the ropes, our community welcomes everyone. We focus on developing strategic thinking,
                        building friendships, and hosting competitive tournaments throughout the year. Join us to improve your game,
                        meet fellow students, and compete for prizes and glory!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
