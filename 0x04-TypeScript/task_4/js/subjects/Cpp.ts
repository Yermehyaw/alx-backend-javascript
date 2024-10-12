/// <reference path='./Subject.ts' />

namespace Subjects {
  export interface Teacher { // declaration extension
    experienceTeachingC?: number,
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.hasOwnProperty('experienceTeachingC')) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }

      return 'No available teacher';
    }
  }
}