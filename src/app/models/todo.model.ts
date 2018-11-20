import {Lodging} from './lodging.model';
import {Status} from '../utils/Status.enum';

export class Todo{
  private _id: number;
  private _name: string;
  private _lodgings: Lodging;
  private _deadline: string;
  private _description: string;
  private _price: number;
  private _status: Status = Status.NEW;


  constructor(id: number, name: string, lodgings: Lodging, deadline: string, description: string, price: number) {
    this._id = id;
    this._name = name;
    this._lodgings = lodgings;
    this._deadline = deadline;
    this._description = description;
    this._price = price;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lodgings(): Lodging {
    return this._lodgings;
  }

  set lodgings(value: Lodging) {
    this._lodgings = value;
  }

  get deadline(): string {
    return this._deadline;
  }

  set deadline(value: string) {
    this._deadline = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }


  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }
}
