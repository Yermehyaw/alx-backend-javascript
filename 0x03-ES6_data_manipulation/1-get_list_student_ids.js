export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) { return []; }

  const newArr = arr.map((elem) => elem.id);

  return newArr;
}
