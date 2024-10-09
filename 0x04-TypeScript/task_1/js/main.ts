interface Teacher<T> {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  value: T;
}

let anyAttribute: Teacher<any>;
