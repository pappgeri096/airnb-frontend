import { Injectable } from '@angular/core';
import {Lodging} from '../../models/lodging.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class LodgingsService {

  lodgingsChanged = new Subject<Lodging[]>();

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getUserLodgingsFromServer(): Observable<Lodging[]> {
    return this.http.get<Lodging[]>('http://localhost:8080/api/user/' + this.tokenStorage.getUsername() + '/lodgings');
  }

  getLodgingsById(id: number): Observable<Lodging> {
    return this.http.get<Lodging>('http://localhost:8080/api/lodgings/' + id.toString());
  }


  addLodgings(lodging: Lodging) {
    return this.http.post<Lodging>('http://localhost:8080/api/lodgings/' + this.tokenStorage.getUsername() + '/add', lodging);
  }

  updateLodgings(lodging: Lodging) {
    return this.http.put<Lodging>('http://localhost:8080/api/lodgings/' + lodging.id + '/update', lodging);
  }
}
