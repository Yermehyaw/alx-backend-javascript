/*
 * returns an array of students for a specific city with their new grade
 * students - an array of student objs
 * city - name of a city(str)
 * newGrades - an array of grades
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  // const availableIds = newGrades.map((elem) => elem.studentId);

  const studentsWithGrades = students
    .filter((elem) => city === elem.location)
    .map((elem) => {
      const gradeObjOfStudent = newGrades.find((gradeObj) => elem.id === gradeObj.studentId);

      const studentsCopy = { ...elem };
      studentsCopy.grade = gradeObjOfStudent ? gradeObjOfStudent.grade : 'N/A';

      return studentsCopy;
    });

  return studentsWithGrades;
}
