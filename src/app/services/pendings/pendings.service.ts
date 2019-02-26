import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';
import {PendingUser} from '../../models/PendingUser';
import {Lodging} from '../../models/lodging.model';

@Injectable({
  providedIn: 'root'
})
export class PendingsService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  private baseUrl = 'http://localhost:8080/api/pending/';

  getAllPendingsByLandlordName(){
    return this.http.get<PendingUser[]>(this.baseUrl + this.tokenStorage.getUsername());
  }

  acceptUser(id: number) {
    return this.http.put(this.baseUrl + id + '/accept', {accepted: true});
  }

  sendPendingRequest(lodging: Lodging) {
    return this.http.post<boolean>(this.baseUrl + '/' + this.tokenStorage.getUsername(), lodging);
  }
}
