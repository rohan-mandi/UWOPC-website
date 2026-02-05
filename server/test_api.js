const fetch = require('node-fetch');

async function testRankings() {
    try {
        const response = await fetch('http://localhost:3001/api/rankings');
        const data = await response.json();

        console.log('Total rankings:', data.length);
        console.log('\nFirst 5 rankings:');
        data.slice(0, 5).forEach(player => {
            console.log(JSON.stringify(player, null, 2));
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testRankings();
