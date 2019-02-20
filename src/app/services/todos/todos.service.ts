import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {Observable} from 'rxjs';
import {LodgingsService} from '../lodgings/lodgings.service';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private baseUrl = 'http://localhost:8080/api/todos/';

  constructor(private lodgingsService: LodgingsService, private http: HttpClient) { }

  addNewTodo(lodgingsId: number, todo: Todo) {
    return this.http.post<string>(this.baseUrl + lodgingsId + '/add', todo);
  }
}
