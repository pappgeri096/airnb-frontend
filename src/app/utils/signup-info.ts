import {Address} from '../models/address';

export class SignUpInfo {
    username: string;
    firstname: string;
    surname: string;
    email: string;
    phoneNumber: string;
    addressBuilder: Address;
    role: string[];
    password: string;


  constructor(username: string, firstname: string, surname: string, email: string, phoneNumber: string, addressBuilder: Address, password: string) {
    this.username = username;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.addressBuilder = addressBuilder;
    this.role = ['user'];
    this.password = password;
  }
}
