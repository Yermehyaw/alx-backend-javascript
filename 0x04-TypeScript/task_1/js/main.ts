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

interface Student {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  } 
}
