import { v1 } from 'uuid';

export class Task {
  readonly id: string;
  name: string;

  constructor({ name }) {
    this.id = v1();
    this.name = name;
  }
}
