/*
 * returns a string of all the set values that start with a specific string (startString)
 * with the starting string excluded.
*/

export default function cleanSet(set, startString) {
  const stringLength = startString.length;
  if (stringLength === 0) {
    return '';
  }

  const newArray = [...set];

  return newArray
    .filter((elem) => startString === elem.slice(0, stringLength))
    .map((elem) => elem.slice(stringLength))
    .join('-');
}
