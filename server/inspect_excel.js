const xlsx = require('xlsx');
const path = require('path');

const excelFile = path.join(__dirname, 'UWO Poker Club Rankings - 2025-2026.xlsx');

console.log('Reading file from:', excelFile);

try {
    const workbook = xlsx.readFile(excelFile);

    console.log('\n=== WORKBOOK INFO ===');
    console.log('Sheet Names:', workbook.SheetNames);

    workbook.SheetNames.forEach((sheetName, index) => {
        console.log(`\n=== SHEET ${index + 1}: ${sheetName} ===`);
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        console.log(`Total rows: ${data.length}`);
        console.log('\nFirst 10 rows:');
        data.slice(0, 10).forEach((row, i) => {
            console.log(`Row ${i}:`, row);
        });
    });
} catch (error) {
    console.error('Error reading Excel file:', error);
}
