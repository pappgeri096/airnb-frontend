import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {Lodging} from '../../models/lodging.model';
import {Observable, Subject} from 'rxjs';
import {LodgingsService} from '../lodgings/lodgings.service';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosChanged = new Subject<Todo[]>();

  constructor(private lodgingsService: LodgingsService, private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getUserTodosFromServer(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/api/user/' + this.tokenStorage.getUsername() + '/todos');
  }
}
