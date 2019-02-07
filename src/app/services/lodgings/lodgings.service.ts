import { Injectable } from '@angular/core';
import {Lodging} from '../../models/lodging.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LodgingsService {

  lodgingsChanged = new Subject<Lodging[]>();

  constructor(private http: HttpClient) { }

  getLodgingsFromServer(): Observable<Lodging[]> {
    return this.http.get<Lodging[]>('http://localhost:8080/api/lodgings2');
  }

  getLodgingsById(id: number): Observable<Lodging> {
    return this.http.get<Lodging>('http://localhost:8080/api/lodgings/private-scoped' + id.toString());
  }

}
