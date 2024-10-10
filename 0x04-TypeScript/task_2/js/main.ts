interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,   
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,  
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }  
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


// part 2
function isDirector(employee: Director): boolean {
  if (typeof employee === typeof Director ) {
    return true;
  }

  return false;
}

function executeWork(employee: Director): string {
  if (employee instanceof Director ) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher){
    return employee.workTeacherTasks();
  }
}


// part 3
type Subjects = 'Math' | 'History'; // only Math and History can be init to Subjects obj

function teachClass(todayClass): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

