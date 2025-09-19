import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line !== '');
      if (lines.length === 0) {
        resolve({});
        return;
      }

      const studentData = {};
      const records = lines.slice(1); // Exclude the header

      records.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      });

      resolve(studentData);
    });
  });
}

export default readDatabase;
