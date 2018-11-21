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

  setId(value: number) {
    this._id = value;
  }

  get longid(): string {
    return this._longid;
  }

  setLongid(value: string) {
    this._longid = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  setFirstName(value: string) {
    this._firstName = value;
  }

  get surname(): string {
    return this._surname;
  }

  setSurname(value: string) {
    this._surname = value;
  }

  get email(): string {
    return this._email;
  }

  setEmail(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  setPhoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get country(): string {
    return this._country;
  }

  setCountry(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  setCity(value: string) {
    this._city = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  setZipCode(value: string) {
    this._zipCode = value;
  }

  get address(): string {
    return this._address;
  }

  setAddress(value: string) {
    this._address = value;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  setPasswordHash(value: string) {
    this._passwordHash = value;
  }

  get propertyManagerLodgings(): object {
    return this._propertyManagerLodgings;
  }

  setPropertyManagerLodgings(value: object) {
    this._propertyManagerLodgings = value;
  }

  get landlordLodgings(): object {
    return this._landlordLodgings;
  }

  setLandlordLodgings(value: object) {
    this._landlordLodgings = value;
  }
}
