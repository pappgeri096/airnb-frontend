import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todos: Todo[] = [
    new Todo(1, 'Kill your neighbour', null, '1997', 'sadfasdfasdf', 244),
    new Todo(2, 'code code code', null, '192343297', '3242342342', 244)
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this._todos.slice();
  }
}
