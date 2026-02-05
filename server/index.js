require('dotenv').config();
const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Path to the Excel file
const RANKINGS_FILE = process.env.RANKINGS_FILE_PATH || path.join(__dirname, 'UWOPC Rankings Reference File.xlsx');

// Helper function to read Excel file
const readRankings = () => {
    try {
        console.log('Reading rankings from:', RANKINGS_FILE);
        const workbook = xlsx.readFile(RANKINGS_FILE);

        // Read from the first sheet (formerly "Club Rankings", now "Table1215")
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

// Subscription endpoint - submits to Microsoft Forms
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'Email is required'
        });
    }

    try {
        // Microsoft Forms submission URL and field ID
        const submissionUrl = "https://forms.office.com/formapi/api/ad93a64d-ad0d-4ecd-b2fd-e53ce15965be/users/116e6c7b-2922-4cbe-8194-8c65d3998298/forms('TaaTrQ2tzU6y_eU84VllvntsbhEiKb5MgZSMZdOZgphUQTRKM0hCOTEwVlVGOUtHMFZVUjhXMzFNQS4u')/responses";
        const emailFieldId = 'red34c0d891704e8aade2ea5a4c973052';

        // Build the form data using Microsoft Forms expected structure
        const now = new Date().toISOString();
        const answersArray = [{
            questionId: emailFieldId,
            answer1: email
        }];

        const formData = {
            startDate: now,
            submitDate: now,
            answers: JSON.stringify(answersArray)
        };

        console.log('========================================');
        console.log('Submitting to Microsoft Forms');
        console.log('Email:', email);
        console.log('URL:', submissionUrl);
        console.log('Data:', JSON.stringify(formData, null, 2));
        console.log('========================================');

        const response = await fetch(submissionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const responseText = await response.text();
        console.log('Response Status:', response.status);
        console.log('Response Body:', responseText);

        if (!response.ok) {
            console.error('❌ Submission failed:', response.status);
            console.error('Response:', responseText);
            throw new Error(`Microsoft Forms error: ${response.status}`);
        }

        console.log('✅ Successfully submitted to Microsoft Forms!');

        res.json({
            success: true,
            message: 'Subscription successful! Check your email for the calendar link.'
        });

    } catch (error) {
        console.error('❌ Subscription error:', error.message);
        console.error('Stack:', error.stack);
        res.status(500).json({
            success: false,
            message: 'Failed to process subscription. Please try again.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
