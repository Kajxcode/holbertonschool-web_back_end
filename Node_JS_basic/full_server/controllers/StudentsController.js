import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort();

        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        return res.status(200).send(responseText.trim());
      })
      .catch(() => {
        return res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(databaseFile)
      .then((students) => {
        if (!students[major]) {
          return res.status(200).send('List:');
        }
        return res.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        return res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
