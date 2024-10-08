export default function getStudentsByLocation(studentsArray, city) {
  const newArr = studentsArray.filter((elem) => city === elem.location);

  return newArr;
}
