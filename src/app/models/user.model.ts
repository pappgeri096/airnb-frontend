import {UserBuilder} from './builders/user.builder';

export class User{
  private _id: number;
  private _longid: string;
  private _firstName: string;
  private _surname: string;
  private _email: string;
  private _phoneNumber: string;
  private _country: string;
  private _city: string;
  private _zipCode: string;
  private _address: string;
  private _passwordHash: string;

  private _propertyManagerLodgings: object;
  private _landlordLodgings: object;


  constructor(userBuilder: UserBuilder) {
    this._id = userBuilder.id;
    this._firstName = userBuilder.firstName;
    this._surname = userBuilder.surname;
    this._email = userBuilder.email;
    this._phoneNumber = userBuilder.phoneNumber;
    this._country = userBuilder.country;
    this._city = userBuilder.city;
    this._zipCode = userBuilder.zipCode;
    this._address = userBuilder.address;
    this._passwordHash = userBuilder.passwordHash;
    this._propertyManagerLodgings = userBuilder.propertyManagerLodgings;
    this._landlordLodgings = userBuilder.landlordLodgings;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get longid(): string {
    return this._longid;
  }

  set longid(value: string) {
    this._longid = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  set passwordHash(value: string) {
    this._passwordHash = value;
  }

  get propertyManagerLodgings(): object {
    return this._propertyManagerLodgings;
  }

  set propertyManagerLodgings(value: object) {
    this._propertyManagerLodgings = value;
  }

  get landlordLodgings(): object {
    return this._landlordLodgings;
  }

  set landlordLodgings(value: object) {
    this._landlordLodgings = value;
  }
}
