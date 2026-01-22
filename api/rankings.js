const xlsx = require('xlsx');
const path = require('path');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'no-store');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Path to the Excel file - adjust this to where your file is located
        const RANKINGS_FILE = path.join(process.cwd(), 'server', 'UWO Poker Club Rankings - 2025-2026.xlsx');
        
        console.log('Reading rankings from:', RANKINGS_FILE);
        const workbook = xlsx.readFile(RANKINGS_FILE);

        const sheetName = 'Club Rankings';
        const worksheet = workbook.Sheets[sheetName];

        const rawData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        const rankings = [];
        for (let i = 3; i < rawData.length; i++) {
            const row = rawData[i];

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

        res.status(200).json(rankings);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        res.status(500).json({ error: 'Failed to load rankings', message: error.message });
    }
};
