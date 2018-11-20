import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {UserBuilder} from '../../models/builders/user.builder';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [
    new UserBuilder(1).setCity('Budapest').builder()
  ];

  constructor() { }

  getUsers(): User[] {
    return this._users.slice();
  }

  getUserById(id: number): User {
    return this._users.find((user: User) => {
      return user.id === id;
    });
  }
}
