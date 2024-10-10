/*
 * returns a string of all the set values that start with a specific string (startString)
 * with the starting string excluded.
*/

export default function cleanSet(set, startString) {
  const stringLength = startString.length;
  if (stringLength === 0) {
    return '';
  }

  // convert set to array
  const newArray = [...set];

  const elemsWithStartString = newArray
    .map((elem) => {
      const stringWithoutStartString = elem.slice(stringLength); // slice from index till end of string

      return stringWithoutStartString;
    })
    .reduce((accumulator, currentValue) => accumulator + '-' + currentValue);

  return elemsWithStartString;
}
