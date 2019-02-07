import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {Lodging} from '../../models/lodging.model';
import {Subject} from 'rxjs';
import {LodgingsService} from '../lodgings/lodgings.service';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosChanged = new Subject<Todo[]>();

  constructor(private lodgingsService: LodgingsService, private http: HttpClient) { }

  getTodosFromServer(){
    return this.http.get<Todo[]>('http://localhost:8080/api/todos');
  }
}
