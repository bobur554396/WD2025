export class Task {
  static autoINC: number = 1;
  id: number;
  name: string;
  isCompleted: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.isCompleted = false;
  }
}
