// script.js

// Mock rankings data - can be replaced with Excel import
const rankingsData = [
    { rank: 1, name: "Alex Johnson", points: 2450, tournaments: 12, winRate: "42%" },
    { rank: 2, name: "Sarah Chen", points: 2180, tournaments: 10, winRate: "38%" },
    { rank: 3, name: "Mike Rodriguez", points: 1950, tournaments: 11, winRate: "35%" },
    { rank: 4, name: "Emily Watson", points: 1820, tournaments: 9, winRate: "33%" },
    { rank: 5, name: "James Park", points: 1650, tournaments: 8, winRate: "31%" },
    { rank: 6, name: "Lisa Zhang", points: 1480, tournaments: 10, winRate: "28%" },
    { rank: 7, name: "Tom Bradley", points: 1320, tournaments: 7, winRate: "29%" },
    { rank: 8, name: "Anna Kim", points: 1150, tournaments: 9, winRate: "25%" },
];

// Navigation
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Page navigation
function navigateTo(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const pageId = pageName + 'Page';
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    mobileMenu.classList.remove('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Populate rankings table
function populateRankings() {
    const tbody = document.getElementById('rankingsTableBody');
    tbody.innerHTML = '';
    
    rankingsData.forEach((player, index) => {
        const row = document.createElement('tr');
        if (index < 3) {
            row.classList.add('podium');
        }
        
        let rankClass = 'rank-normal';
        let medal = '';
        if (index === 0) {
            rankClass = 'rank-gold';
            medal = '🥇';
        } else if (index === 1) {
            rankClass = 'rank-silver';
            medal = '🥈';
        } else if (index === 2) {
            rankClass = 'rank-bronze';
            medal = '🥉';
        }
        
        row.innerHTML = `
            <td class="rank-cell ${rankClass}">${player.rank}${medal}</td>
            <td class="player-name">${player.name}</td>
            <td class="points">${player.points.toLocaleString()}</td>
            <td class="tournaments">${player.tournaments}</td>
            <td class="win-rate">${player.winRate}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateRankings();
});