import {LodgingsType} from '../utils/lodgingsType.enum';
import {Todo} from './todo.model';
import {User} from './user.model';
import {LodgingsBuilder} from './builders/lodgings.builder';

export class Lodging {
  private _id: number;
  private _name: string;
  private _lodgingsType: LodgingsType;
  private _country: string;
  private _city: string;
  private _zipCode: string;
  private _address: string;

  private _pricePerDay: number;
  private _electricityBill: number;
  private _gasBill: number;
  private _telecommunicationBill: number;
  private _cleaningCost: number;

  private _todos: Todo[];

  private _landLord: User;

  private _propertyManager: User;

  private _user: User;

  constructor(lodgingsBuilder: LodgingsBuilder) {
    this._id = lodgingsBuilder.id;
    this._name = lodgingsBuilder.name;
    this._lodgingsType = lodgingsBuilder.lodgingsType;
    this._country = lodgingsBuilder.country;
    this._city = lodgingsBuilder.city;
    this._zipCode = lodgingsBuilder.zipCode;
    this._address = lodgingsBuilder.address;
    this._pricePerDay = lodgingsBuilder.pricePerDay;
    this._electricityBill = lodgingsBuilder.electricityBill;
    this._gasBill = lodgingsBuilder.gasBill;
    this._telecommunicationBill = lodgingsBuilder.telecommunicationBill;
    this._cleaningCost = lodgingsBuilder.cleaningCost;
    this._todos = lodgingsBuilder.todos;
    this._landLord = lodgingsBuilder.landLord;
    this._propertyManager = lodgingsBuilder.propertyManager;
    this._user = lodgingsBuilder.user;
  }


  get id(): number {
    return this._id;
  }

  setId(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;
  }

  get lodgingsType(): LodgingsType {
    return this._lodgingsType;
  }

  setLodgingsType(value: LodgingsType) {
    this._lodgingsType = value;
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

  get pricePerDay(): number {
    return this._pricePerDay;
  }

  setPricePerDay(value: number) {
    this._pricePerDay = value;
  }

  get electricityBill(): number {
    return this._electricityBill;
  }

  setElectricityBill(value: number) {
    this._electricityBill = value;
  }

  get gasBill(): number {
    return this._gasBill;
  }

  setGasBill(value: number) {
    this._gasBill = value;
  }

  get telecommunicationBill(): number {
    return this._telecommunicationBill;
  }

  setTelecommunicationBill(value: number) {
    this._telecommunicationBill = value;
  }

  get cleaningCost(): number {
    return this._cleaningCost;
  }

  setCleaningCost(value: number) {
    this._cleaningCost = value;
  }

  get todos(): Todo[] {
    return this._todos;
  }

  setTodos(value: Todo[]) {
    this._todos = value;
  }

  get landLord(): User {
    return this._landLord;
  }

  setLandLord(value: User) {
    this._landLord = value;
  }

  get propertyManager(): User {
    return this._propertyManager;
  }

  setPropertyManager(value: User) {
    this._propertyManager = value;
  }
}
