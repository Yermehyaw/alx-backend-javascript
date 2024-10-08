export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentObj) => accumulator + currentObj.id, 0);
}
