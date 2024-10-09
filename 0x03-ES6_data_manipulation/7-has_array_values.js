export default function hasValuesFromArray(set, array) {
  const booleanArray = array.map((elem) => {
    set.has(elem);
  });

  if (booleanArray.includes(false))
    return false;

  return true;
}
