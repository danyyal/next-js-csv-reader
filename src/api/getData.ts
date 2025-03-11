import fs from 'fs';
import path from 'path';

function getDataFromFile() {
    try {
        const filePath = path.join(process.cwd(), 'data.csv'); // Ensure this points to the correct CSV file
        console.log({ filePath });
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        console.log({ fileContent });
        const data = fileContent.split('\n').filter(line => line.trim() !== '').map(line => {
            const [date, fileName] = line.split(';'); // Use ',' for CSV
            return { date: date.trim(), fileName: fileName.trim() };
        });
        console.log({ data })

        return { success: true, data };
    } catch (error) {
        return { success: false, message: 'Error reading the CSV file' };
    }
}

export { getDataFromFile };