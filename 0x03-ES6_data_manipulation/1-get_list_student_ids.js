export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) { return []; }

  const arrLength = arr.length
  
  const newArr = arr.map((elem) => elem.id);

  return newArr;
}
