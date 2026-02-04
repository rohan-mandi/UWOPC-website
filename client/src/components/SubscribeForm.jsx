import { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address');
            return;
        }

        try {
            // Call our backend API which will forward to Microsoft Forms
            const response = await fetch('http://localhost:3001/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setMessage(data.message || 'Thank you for subscribing! You\'ll receive calendar updates soon.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
            }

        } catch (error) {
            setStatus('error');
            setMessage('Unable to connect to server. Please try again later.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <div className="subscribe-form-wrapper">
            <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <div className="input-button-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@uwo.ca"
                            className="email-input"
                            disabled={status === 'loading'}
                            required
                        />
                        <button
                            type="submit"
                            className="subscribe-button"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <span className="loading-spinner">
                                    <svg className="spinner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" opacity="0.25" />
                                        <path d="M12 2a10 10 0 0 1 10 10" opacity="0.75">
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 12 12"
                                                to="360 12 12"
                                                dur="1s"
                                                repeatCount="indefinite"
                                            />
                                        </path>
                                    </svg>
                                </span>
                            ) : (
                                <>
                                    Subscribe
                                    <svg className="subscribe-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {status === 'success' && (
                    <div className="form-message success-message">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {message}
                    </div>
                )}

                {status === 'error' && (
                    <div className="form-message error-message">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        {message}
                    </div>
                )}
            </form>

            <p className="privacy-note">
                We respect your privacy. Your email will only be used for calendar event notifications.
            </p>
        </div>
    );
};

export default SubscribeForm;
