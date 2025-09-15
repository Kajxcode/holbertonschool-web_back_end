export default function updateStudentGradByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const filteredStudents = students.filter((student) => student.location === city);

  const updatedstudents = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((g) => g.studentId === student.id);

    return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
  return updatedstudents;
}