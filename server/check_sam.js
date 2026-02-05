const xlsx = require('xlsx');
const path = require('path');

const excelFile = path.join(__dirname, '..', 'UWOPC Rankings Reference File.xlsx');

try {
    const workbook = xlsx.readFile(excelFile);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    console.log('Sam Ahn data (Row 1):');
    console.log('Row:', data[1]);
    console.log('\nColumn breakdown:');
    console.log('[0] Rank:', data[1][0]);
    console.log('[1] Name:', data[1][1]);
    console.log('[2] Points:', data[1][2]);
    console.log('[3] GP:', data[1][3]);
    console.log('[4] Average Performance:', data[1][4]);
    console.log('[4] formatted:', typeof data[1][4] === 'number' ? data[1][4].toFixed(3) : data[1][4]);
} catch (error) {
    console.error('Error:', error.message);
}
