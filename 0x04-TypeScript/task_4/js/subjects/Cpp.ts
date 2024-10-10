/// <reference-path='./Subjects.ts' />
import { Teacher } from './Teacher.ts';

namespace Subjects {
  export interface Teacher { // declaration extension
    experienceTeachingC: number,
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    
    getAvailableTeacher(): string {
      if (this.teacher.has(experienceTeachingC)) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      
      return 'No available teacher';
    }
  }
}