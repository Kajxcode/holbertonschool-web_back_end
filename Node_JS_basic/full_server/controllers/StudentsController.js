const path = require('path');
const readDatabase = require('../utils');

const dbPath = path.join(__dirname, '../database.csv'); // absolute path to database.csv

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbPath)
      .then((data) => {
        let responseString = 'This is the list of our students<br/>';
        for (const [field, names] of Object.entries(data)) {
          responseString += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}<br/>`;
        }
        response.status(200).send(responseString);
      })
      .catch((err) => { response.status(500).send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(dbPath)
      .then((data) => {
        response.status(200).send(`List: ${data[major].join(', ')}`);
      })
      .catch((err) => { response.status(500).send(err.message); });
  }
}

module.exports = StudentsController;
