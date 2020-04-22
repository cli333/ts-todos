"use strict";
// export interface Todo {
//   id: string;
//   text: string;
//   completed: boolean;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
        this.id = Math.random().toString();
    }
}
exports.Todo = Todo;
