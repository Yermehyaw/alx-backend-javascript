/*
 * returns an array of students for a specific city with their new grade
 * students - an array of student objs
 * city - name of a city(str)
 * newGrades - an array of grades
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  const availableIds = newGrades.map((elem) => elem.studentId);

  const studentWithGrades = students
        .filter((elem) => elem.id in availableIds)
        .map((elem) => {
          gradeObjOfStudent = newGrades.find((gradeObj) => elem.id === gradeObj.studentId);
          try {
            elem.grade = gradeObjOfStudent.grade;
          } catch(error) {
            elem.grade = 'N/A';
          }
        });

  studentWithGrades.forEach((elem) => {  // task req; Display the obj with id of 1 in format of one prpty per line
    if (elem.id === 1) {
      JSON.stringify(elem, null, 2);
    }
  });

  return studentWithGrades;
}
