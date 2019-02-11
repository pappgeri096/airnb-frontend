export class Address {
  private _country: string;
  private _city: string;
  private _zipCode: string;
  private _address: string;


  constructor(country: string, city: string, zipCode: string, address: string) {
    this._country = country;
    this._city = city;
    this._zipCode = zipCode;
    this._address = address;
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
}
