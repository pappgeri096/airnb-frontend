import {User} from './user.model';
import {Lodging} from './lodging.model';

export class PendingUser {
  id: number;
  user: User;
  lodgings: Lodging;
  accepted: boolean;


  constructor(id: number, user: User, lodgings: Lodging, accepted: boolean) {
    this.id = id;
    this.user = user;
    this.lodgings = lodgings;
    this.accepted = accepted;
  }
}
