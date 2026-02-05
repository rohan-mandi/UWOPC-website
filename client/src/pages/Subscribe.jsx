import SubscribeForm from '../components/SubscribeForm';

const Subscribe = () => {
    return (
        <div id="subscribePage" className="page active">
            {/* Hero Section */}
            <section className="subscribe-hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>

                <div className="subscribe-hero-content">
                    <div className="subscribe-icon">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                            <circle cx="12" cy="16" r="2" fill="currentColor"></circle>
                        </svg>
                    </div>
                    <h1 className="subscribe-hero-title">
                        Stay <span className="text-purple">Connected</span>
                    </h1>
                    <p className="subscribe-hero-subtitle">
                        Subscribe to our calendar and never miss a tournament, weekly session, or special event
                    </p>
                </div>
            </section>

            {/* Subscribe Form Section */}
            <section className="subscribe-main-section">
                <div className="subscribe-form-container">
                    <h2 className="section-title">Subscribe to Our Calendar</h2>
                    <p className="subscribe-description">
                        Get instant notifications about all our upcoming events delivered straight to your email.
                        Stay in the loop with tournaments, practice sessions, strategy workshops, and exclusive club events.
                    </p>
                    <SubscribeForm />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="subscribe-benefits">
                <h2 className="section-title">What You'll Get</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <svg className="benefit-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h3 className="benefit-title">Event Reminders</h3>
                        <p className="benefit-text">
                            Receive timely notifications before every tournament and weekly session so you never miss out.
                        </p>
                    </div>

                    <div className="benefit-card">
                        <svg className="benefit-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                            <path d="M8 14h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 18h.01"></path>
                            <path d="M12 18h.01"></path>
                        </svg>
                        <h3 className="benefit-title">Outlook Calendar Integration</h3>
                        <p className="benefit-text">
                            Receive an email with a link to seamlessly add our event calendar directly to your Outlook.
                        </p>
                    </div>

                    <div className="benefit-card">
                        <svg className="benefit-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <h3 className="benefit-title">Privacy Protected</h3>
                        <p className="benefit-text">
                            Your email is safe with us. We only send event notifications and never share your information.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;
