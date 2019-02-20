import {Address} from '../models/address';

export class UserInfo {
    username: string;
    firstname: string;
    surname: string;
    email: string;
    phoneNumber: string;
  address: Address;
    role: string[];
    password: string;


  constructor(username: string = null, firstname: string, surname: string, email: string, phoneNumber: string, addressBuilder: Address, password: string) {
    this.username = username;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = addressBuilder;
    this.role = ['user'];
    this.password = password;
  }
}
