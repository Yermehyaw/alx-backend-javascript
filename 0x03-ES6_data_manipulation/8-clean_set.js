/*
 * returns a string of all the set values that start with a specific string (startString)
 * with the starting string excluded.
*/

export default function cleanSet(set, startString) {
  const stringLength = startString.length;

  // Slice from index till end of string
  return stringLength === 0 ? '' : [...set].map((elem) => elem.slice(stringLength)).join('-');
}
