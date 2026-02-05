const fetch = require('node-fetch');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

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

        res.status(200).json({
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
};
