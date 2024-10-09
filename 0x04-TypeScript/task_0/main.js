/**
 * Creating an interface for a student
 */
var student_1 = {
    firstName: 'Emmanuel',
    lastName: 'John',
    age: 20,
    location: 'Lagos',
};
var student_2 = {
    firstName: 'Samuel',
    lastName: 'John',
    age: 17,
    location: 'Abuja',
};
var studentList = [student_1, student_2];
// Render a table
var studentTable = document.createElement('table');
studentList.forEach(function (student) {
    var row = studentTable.insertRow();
    var firstNameCol = row.insertCell(0);
    var locationCol = row.insertCell(1);
    firstNameCol.textContent(student.firstName);
    locationCol.textContent(student.location);
});
// Add table to html doc
document.body.appendChild(studentTable);
