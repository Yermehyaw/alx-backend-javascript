export default function appendToEachArrayValue(array, appendString) {
  // for (const value of array) {
  return array.map((value) => appendString + value);
  // }
}
