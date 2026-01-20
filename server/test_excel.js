const xlsx = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join(__dirname, 'rankings.xlsx');

try {
    console.log('Reading file from:', EXCEL_FILE);
    const workbook = xlsx.readFile(EXCEL_FILE);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    console.log('Data read successfully:', JSON.stringify(data, null, 2));
} catch (error) {
    console.error('Error reading Excel file:', error);
    process.exit(1);
}
