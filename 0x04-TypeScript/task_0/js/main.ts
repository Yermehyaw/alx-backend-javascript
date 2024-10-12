/**
 * Creating an interface for a student
 */

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student_1: Student = {
  firstName: 'Emmanuel',
  lastName: 'John',
  age: 20,
  location: 'Lagos',
};
const student_2: Student = {
  firstName: 'Samuel',
  lastName: 'John',
  age: 17,
  location: 'Abuja',
};

const studentList: Array<Student> = [student_1, student_2];

// Render a table
const studentTable = document.createElement('table');
studentList.forEach((student) => {
  const row = studentTable.insertRow();
  const firstNameCol = row.insertCell(0);
  const locationCol = row.insertCell(1);
  firstNameCol.textContent = student.firstName;
  locationCol.textContent = student.location;
});

// Add table to html doc
document.body.appendChild(studentTable);
