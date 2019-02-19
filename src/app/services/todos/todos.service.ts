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
  private baseUrl = 'http://localhost:8080/api/user/';

  constructor(private lodgingsService: LodgingsService, private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getUserTodosFromServer(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + this.tokenStorage.getUsername() + '/todos');
  }
}
