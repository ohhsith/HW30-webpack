import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(name, age, gender, interests, subject) {
    super(name, age, gender, interests);
    this.subject = subject;
  }
}
