// export interface Todo {
//   id: string;
//   text: string;
//   completed: boolean;
// }

export class Todo {
  id: string;

  constructor(public text: string, public completed = false) {
    this.id = Math.random().toString();
  }
}
