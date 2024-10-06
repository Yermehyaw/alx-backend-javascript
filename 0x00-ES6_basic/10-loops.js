export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array.map(value => appendString + value);
  }

  return array;
}
