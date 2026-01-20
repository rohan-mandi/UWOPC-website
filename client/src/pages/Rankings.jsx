import { useState, useEffect } from 'react';

const Rankings = () => {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/rankings')
            .then(res => res.json())
            .then(data => {
                setRankings(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching rankings:', err);
                setError('Failed to load rankings.');
                setLoading(false);
            });
    }, []);

    const getRankStyle = (index) => {
        if (index === 0) return { className: 'rank-gold', medal: '🥇' };
        if (index === 1) return { className: 'rank-silver', medal: '🥈' };
        if (index === 2) return { className: 'rank-bronze', medal: '🥉' };
        return { className: 'rank-normal', medal: '' };
    };

    return (
        <div id="rankingsPage" className="page active">
            <div className="page-container">
                <div className="rankings-header">
                    <svg className="trophy-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <h1 className="page-title">Player <span className="text-purple">Rankings</span></h1>
                    <p className="rankings-season">Season 2025-2026</p>
                </div>

                <div className="rankings-table-container">
                    <table className="rankings-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Points</th>
                                <th>Games Played</th>
                                <th>Avg Performance</th>
                            </tr>
                        </thead>
                        <tbody id="rankingsTableBody">
                            {loading && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>Loading rankings...</td>
                                </tr>
                            )}
                            {error && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>{error}</td>
                                </tr>
                            )}
                            {!loading && !error && rankings.map((player, index) => {
                                const { className, medal } = getRankStyle(index);
                                return (
                                    <tr key={index} className={index < 3 ? 'podium' : ''}>
                                        <td className={`rank-cell ${className}`}>{player.Rank}{medal}</td>
                                        <td className="player-name">{player.Name}</td>
                                        <td className="points">{player.Points?.toLocaleString()}</td>
                                        <td className="tournaments">{player.GamesPlayed}</td>
                                        <td className="win-rate">{(player.AveragePerformance * 100).toFixed(1)}%</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="rankings-info">
                    <h3 className="info-title">About Rankings</h3>
                    <p className="info-text">
                        Rankings display each player's rank, name, total points, games played (GP), and average performance.
                        Points are awarded based on tournament placement and performance.
                        Average performance reflects consistency across all games played this season.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rankings;
