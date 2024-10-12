/// <reference path='./subjects/Subject.ts' />
// A single triple slash directive is sufficient to include sall other files
// where the file was manipulated

export const cpp = new Subjects.Cpp;
export const java = new Subjects.JavaClass;
export const react = new Subjects.ReactClass;

export const cTeacher = new Subjects.Subject;
cTeacher.teacher.firstName = 'Guilluame';
cTeacher.teacher.lastName = 'Salva';
cTeacher.teacher.experienceTeachingC = 10;

console.log('C++');
cpp.teacher = cTeacher.teacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher = cTeacher.teacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
java.teacher = cTeacher.teacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
