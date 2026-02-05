const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const excelFile = path.join(__dirname, '..', 'UWOPC Rankings Reference File.xlsx');
const outputFile = path.join(__dirname, 'excel_structure.txt');

try {
    const workbook = xlsx.readFile(excelFile);

    let output = '';
    output += '=== SHEET NAMES ===\n';
    output += JSON.stringify(workbook.SheetNames, null, 2) + '\n\n';

    // Read the first sheet
    const sheetName = workbook.SheetNames[0];
    output += `=== Reading Sheet: ${sheetName} ===\n\n`;
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    output += 'First 10 rows with column indices:\n';
    for (let i = 0; i < Math.min(10, data.length); i++) {
        output += `\nRow ${i}:\n`;
        if (data[i]) {
            data[i].forEach((cell, colIndex) => {
                output += `  [${colIndex}]: ${JSON.stringify(cell)}\n`;
            });
        }
    }

    fs.writeFileSync(outputFile, output);
    console.log('Output written to:', outputFile);
    console.log('\n' + output);
} catch (error) {
    console.error('Error:', error.message);
}
