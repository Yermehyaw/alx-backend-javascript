export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  array = newArray;
  return array;
}
