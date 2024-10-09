interface Teacher<T> {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  value: T;
}

interface Directors extends Teacher<any> {
  numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string  {
  return `${firstName[0]}. ${lastName}`;
}