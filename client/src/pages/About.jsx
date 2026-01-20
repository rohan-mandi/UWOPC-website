// Import team headshots - Leadership
import davidImg from '../../../images/UWOPC TEAM HEADSHOTS/David.jpg';
import mylesImg from '../../../images/UWOPC TEAM HEADSHOTS/Myles.jpg';
import nathanImg from '../../../images/UWOPC TEAM HEADSHOTS/Nathan.png';
import ryanImg from '../../../images/UWOPC TEAM HEADSHOTS/Ryan.jpg';
import jackieImg from '../../../images/UWOPC TEAM HEADSHOTS/Jackie.jpg';
import tylerImg from '../../../images/UWOPC TEAM HEADSHOTS/Tyler.jpg';

// Import director headshots - Events Team
import pavImg from '../../../images/UWOPC TEAM HEADSHOTS/Pav.jpg';
import kadenImg from '../../../images/UWOPC TEAM HEADSHOTS/Kaden (2).jpg';
import ritaImg from '../../../images/UWOPC TEAM HEADSHOTS/Rita.jpg';
import samImg from '../../../images/UWOPC TEAM HEADSHOTS/Sam.jpg';
import edwardImg from '../../../images/UWOPC TEAM HEADSHOTS/Edward.jpg';

// Import director headshots - Finance Team
import aidenImg from '../../../images/UWOPC TEAM HEADSHOTS/Aidan Randall Kwong.jpg';
import ethanImg from '../../../images/UWOPC TEAM HEADSHOTS/Ethan Kim.png';
import kylerImg from '../../../images/UWOPC TEAM HEADSHOTS/Kyler.jpg';

// Import director headshots - Communications Team
import ohemmaImg from '../../../images/UWOPC TEAM HEADSHOTS/Ohemma.jpg';
import eduardImg from '../../../images/UWOPC TEAM HEADSHOTS/IMG_7626_Eduard Zavedei.jpg';
import benImg from '../../../images/UWOPC TEAM HEADSHOTS/Ben.png';
import charlieImg from '../../../images/UWOPC TEAM HEADSHOTS/Charlie.jpg';

// Import director headshots - External Team
import leoImg from '../../../images/UWOPC TEAM HEADSHOTS/Leo.jpg';

// Import director headshots - Projects Team
import cyrusImg from '../../../images/UWOPC TEAM HEADSHOTS/Cyrus.png';
import brockImg from '../../../images/UWOPC TEAM HEADSHOTS/Brock.jpg';
import rohanImg from '../../../images/UWOPC TEAM HEADSHOTS/Rohan.png';
import jillianImg from '../../../images/UWOPC TEAM HEADSHOTS/Jillian.png';

const About = () => {
    return (
        <div id="aboutPage" className="page active">
            <div className="page-container">
                <h1 className="page-title">About <span className="text-purple">Us</span></h1>

                {/* Membership */}
                <section className="section">
                    <div className="membership-box">
                        <h2 className="section-heading">Membership</h2>
                        <div className="membership-info">
                            <p>🎯 <strong>Annual Fee:</strong> $15 per year</p>
                            <p>✨ <strong>Benefits:</strong> Access to all weekly games, tournament entry discounts, exclusive workshops, and social events</p>
                            <p>📝 <strong>How to Join:</strong> Visit us at any Thursday session or email us to get started</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <a href="https://westernusc.store/?add-to-cart=174971" target="_blank" rel="noopener noreferrer" className="cta-button">
                                <span>Buy Membership</span>
                                <svg className="cta-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section className="section">
                    <h2 className="section-heading center">Leadership Team</h2>

                    {/* President - Featured */}
                    <div className="president-card">
                        <img src={davidImg} alt="David Ribkoff" className="leader-photo president-photo" />
                        <h3 className="leader-role-title">President</h3>
                        <p className="leader-name-featured">David Ribkoff</p>
                    </div>

                    {/* Vice Presidents & Directors Grid */}
                    <h3 className="vp-section-title">Vice Presidents & Directors</h3>
                    <div className="leadership-grid">
                        {/* Finance Team Column */}
                        <div className="team-column">
                            <div className="leader-card vp-card">
                                <img src={nathanImg} alt="Nathan Fenske" className="leader-photo" />
                                <h3 className="leader-role-title">VP Finance</h3>
                                <p className="leader-name-text">Nathan Fenske</p>
                            </div>
                            <div className="director-card">
                                <img src={aidenImg} alt="Aiden" className="director-photo" id="director-aiden" />
                                <p className="director-name">Aiden Kwong</p>
                                <p className="director-title">Director of Finance</p>
                            </div>
                            <div className="director-card">
                                <img src={ethanImg} alt="Ethan" className="director-photo" id="director-ethan" />
                                <p className="director-name">Ethan Kim</p>
                                <p className="director-title">Director of Sponsorships</p>
                            </div>
                            <div className="director-card">
                                <img src={kylerImg} alt="Kyler" className="director-photo" id="director-kyler" />
                                <p className="director-name">Kyler See</p>
                                <p className="director-title">Director of Sponsorships</p>
                            </div>
                        </div>

                        {/* Communications Team Column */}
                        <div className="team-column">
                            <div className="leader-card vp-card">
                                <img src={ryanImg} alt="Ryan Chen" className="leader-photo" />
                                <h3 className="leader-role-title">VP Communications</h3>
                                <p className="leader-name-text">Ryan Chen</p>
                            </div>
                            <div className="director-card">
                                <img src={ohemmaImg} alt="Ohemaa" className="director-photo" id="director-ohemaa" />
                                <p className="director-name">Ohemaa Acheampong</p>
                                <p className="director-title">Director of Graphics</p>
                            </div>
                            <div className="director-card">
                                <img src={eduardImg} alt="Eduard" className="director-photo" id="director-eduard" />
                                <p className="director-name">Eduard Zavedei</p>
                                <p className="director-title">Director of Graphics</p>
                            </div>
                            <div className="director-card">
                                <img src={benImg} alt="Ben" className="director-photo" id="director-ben" />
                                <p className="director-name">Ben Bulyovsky</p>
                                <p className="director-title">Director of Productions</p>
                            </div>
                            <div className="director-card">
                                <img src={charlieImg} alt="Charlie" className="director-photo" id="director-charlie" />
                                <p className="director-name">Charlie Kernaghan</p>
                                <p className="director-title">Director of Productions</p>
                            </div>
                        </div>

                        {/* Events Team Column */}
                        <div className="team-column">
                            <div className="leader-card vp-card">
                                <img src={mylesImg} alt="Myles MacPherson" className="leader-photo" />
                                <h3 className="leader-role-title">VP Events</h3>
                                <p className="leader-name-text">Myles MacPherson</p>
                            </div>
                            <div className="director-card">
                                <img src={pavImg} alt="Pav" className="director-photo" id="director-pav" />
                                <p className="director-name">Pav Zykmund</p>
                            </div>
                            <div className="director-card">
                                <img src={kadenImg} alt="Kaden" className="director-photo" id="director-kaden" />
                                <p className="director-name">Kaden Ali</p>
                            </div>
                            <div className="director-card">
                                <img src={ritaImg} alt="Rita" className="director-photo" id="director-rita" />
                                <p className="director-name">Rita Shweihat</p>
                            </div>
                            <div className="director-card">
                                <img src={samImg} alt="Sam" className="director-photo" id="director-sam" />
                                <p className="director-name">Sam Ahn</p>
                            </div>
                            <div className="director-card">
                                <img src={edwardImg} alt="Edward" className="director-photo" id="director-edward" />
                                <p className="director-name">Edward Dong</p>
                            </div>
                        </div>

                        {/* Projects Team Column */}
                        <div className="team-column">
                            <div className="leader-card vp-card">
                                <img src={jackieImg} alt="Jackie Cai" className="leader-photo" />
                                <h3 className="leader-role-title">VP Projects</h3>
                                <p className="leader-name-text">Jackie Cai</p>
                            </div>
                            <div className="director-card">
                                <img src={cyrusImg} alt="Cyrus" className="director-photo" id="director-cyrus" />
                                <p className="director-name">Cyrus Bechtold</p>
                            </div>
                            <div className="director-card">
                                <img src={brockImg} alt="Brock" className="director-photo" id="director-brock" />
                                <p className="director-name">Brock Suidgeest</p>
                            </div>
                            <div className="director-card">
                                <img src={rohanImg} alt="Rohan" className="director-photo" id="director-rohan" />
                                <p className="director-name">Rohan Mandi</p>
                            </div>
                            <div className="director-card">
                                <img src={jillianImg} alt="Jillian" className="director-photo" id="director-jillian" />
                                <p className="director-name">Jillian Ouyang</p>
                            </div>
                        </div>

                        {/* External Team Column */}
                        <div className="team-column">
                            <div className="leader-card vp-card">
                                <img src={tylerImg} alt="Tyler Mah" className="leader-photo" />
                                <h3 className="leader-role-title">VP External</h3>
                                <p className="leader-name-text">Tyler Mah</p>
                            </div>
                            <div className="director-card">
                                <img src={leoImg} alt="Leo" className="director-photo" id="director-leo" />
                                <p className="director-name">Leo Panarello</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Previous Events */}
                <section className="section">
                    <h2 className="section-heading">Previous Events</h2>
                    <div className="events-list">
                        <div className="event-card">
                            <h3 className="event-title purple">Ontario University Poker League</h3>
                            <p className="event-desc">200 participants from universities across Ontario battled for the trophy and $2000 dollars worth of prizes</p>
                        </div>
                        <div className="event-card">
                            <h3 className="event-title purple">Poker Strategy Workshop</h3>
                            <p className="event-desc">Hosted both beginner and advanced workshops for members to improve their poker skills</p>
                        </div>
                        {/* <div className="event-card">
                            <h3 className="event-title purple">Girls night</h3>
                            <p className="event-desc">A night for female members to connect and play poker in a comfortable environment</p>
                        </div> */}
                    </div>
                </section>

                {/* Upcoming Events
                <section className="section">
                    <h2 className="section-heading">Upcoming Events</h2>
                    <div className="events-list">
                        <div className="event-card featured">
                            <h3 className="event-title white">🏆 Winter Championship - December 7th</h3>
                            <p className="event-desc">Our biggest tournament of the year! $1000 prize pool</p>
                        </div>
                        <div className="event-card featured">
                            <h3 className="event-title white">🎄 Holiday Mixer - December 14th</h3>
                            <p className="event-desc">Social event with casual games and refreshments</p>
                        </div>
                    </div>
                </section> */}

                {/* Socials */}
                <section className="section">
                    <div className="socials-box">
                        <h2 className="section-heading center">Connect With Us</h2>
                        <div className="socials-links">
                            <a href="https://www.instagram.com/uwopokerclub/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span>@uwopokerclub</span>
                            </a>
                            <a href="https://discord.com/invite/ujRuHQUqpG" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                                <span>Discord Server</span>
                            </a>
                            <a href="mailto:uwopoker@gmail.com" className="social-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>uwopoker@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
