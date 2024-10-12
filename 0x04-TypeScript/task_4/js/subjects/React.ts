/// <reference  path='./Subject.ts' />

namespace Subjects {
  export interface Teacher {
    exprienceTeachingReact?: number,
  }

  export class ReactClass extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
    if (this.teacher.hasOwnProperty('experienceTeachingReact'))  
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}