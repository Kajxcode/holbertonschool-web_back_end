import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        const sortedFields = Object.keys(students).sort();
        const responseText = sortedFields
          .map((field) => `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`)
          .join('\n');

        res.status(200).send(`This is the list of our students\n${responseText}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    return readDatabase(databaseFile).then((students) => {
      const list = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${list}`);
    }).catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
