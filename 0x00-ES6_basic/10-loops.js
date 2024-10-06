export default function appendToEachArrayValue(array, appendString) {
  // const newArray = [];
  for (const value of array) {
    array.push(appendString + value);
  }

  return array;
}
