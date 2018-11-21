import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {Lodging} from '../../models/lodging.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosChanged = new Subject<Todo[]>();

  private _todos: Todo[] = [
    new Todo(1, 'Kill your neighbour', null, '1997', 'sadfasdfasdf', 244),
    new Todo(2, 'code code code', null, '192343297', '3242342342', 244)
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this._todos.slice();
  }

  private findById(id: number) {
    return this._todos.find((todo: Todo) => {
      return todo.id === id;
    });
  }

  deleteTodo(id: number) {
    const todoToRemove: Todo = this.findById(id);
    this._todos = this._todos.filter((todo: Todo) => {
      return todo !== todoToRemove;
    });
    this.todosChanged.next(this.getTodos().slice());
  }

  addTodo(todo: Todo) {
    this._todos.push(todo);
    this.todosChanged.next(this.getTodos().slice());
  }
}
