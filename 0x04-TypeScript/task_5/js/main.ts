export interface MajorCredits {
  credits: number,
  readonly __brand: "firstCredit",
}

export interface MinorCredits {
  credits: number,
  readonly __brand: "secondCredit",
}

export function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  const majorSum: MajorCredits = {
    credits: subject1 + subject2,
    __brand: 'firstCredit',
  }
  
  return majorSum;
}

export function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  const minorSum: MinorCredits = {
    credits: subject1 + subject2,
    __brand: 'secondCredit',
  }

  return minorSum;
}
