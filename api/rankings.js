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
        // Path to the Excel file in the root directory for Vercel deployment
        const RANKINGS_FILE = path.join(process.cwd(), 'UWOPC Rankings Reference File.xlsx');

        console.log('Reading rankings from:', RANKINGS_FILE);
        const workbook = xlsx.readFile(RANKINGS_FILE);

        // Read from the first sheet (now "Table1215")
        const sheetName = workbook.SheetNames[0];
        console.log('Reading from sheet:', sheetName);
        const worksheet = workbook.Sheets[sheetName];

        // Read all data from the Excel file
        const rawData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        // Row 0 has headers: Rank, Name, Points, GP, Average Performance...
        // Data starts at row 1 (index 1)
        const rankings = [];
        for (let i = 1; i < rawData.length; i++) {
            const row = rawData[i];

            // Skip empty rows or rows without a name
            if (!row || !row[1]) {
                continue;
            }

            rankings.push({
                Rank: row[0],
                Name: row[1],
                Points: row[2],
                GamesPlayed: row[3],
                AveragePerformance: typeof row[4] === 'number' ? row[4].toFixed(3) : row[4]
            });
        }

        res.status(200).json(rankings);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        res.status(500).json({ error: 'Failed to load rankings', message: error.message });
    }
};
