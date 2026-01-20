require('dotenv').config();
const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Path to the Excel file
const RANKINGS_FILE = process.env.RANKINGS_FILE_PATH || path.join(__dirname, 'UWO Poker Club Rankings - 2025-2026.xlsx');

// Helper function to read Excel file
const readRankings = () => {
    try {
        console.log('Reading rankings from:', RANKINGS_FILE);
        const workbook = xlsx.readFile(RANKINGS_FILE);

        // Read from the "Club Rankings" sheet which contains the player rankings
        const sheetName = 'Club Rankings';
        console.log('Reading from sheet:', sheetName);
        const worksheet = workbook.Sheets[sheetName];

        // Read all data from the Excel file
        const rawData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        // Row 2 has headers: Rank, Name, Points, GP, Average Performance...
        // Data starts at row 3 (index 3)
        const rankings = [];
        for (let i = 3; i < rawData.length; i++) {
            const row = rawData[i];

            // Skip empty rows or rows without a name
            if (!row || !row[2]) {
                continue;
            }

            rankings.push({
                Rank: row[1],
                Name: row[2],
                Points: row[3],
                GamesPlayed: row[4],
                AveragePerformance: typeof row[5] === 'number' ? row[5].toFixed(3) : row[5]
            });
        }

        return rankings;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        return [];
    }
};

app.get('/api/rankings', (req, res) => {
    // Disable caching so user sees updates immediately on refresh
    res.set('Cache-Control', 'no-store');
    const rankings = readRankings();
    res.json(rankings);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
