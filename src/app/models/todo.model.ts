import {Status} from '../utils/status.enum';

export class Todo{
     id: number;
     name: string;
     deadline: string;
     description: string;
     price: number;
     status: Status = Status.NEW;


  constructor(name: string, deadline: string, description: string, price: number) {
    this.name = name;
    this.deadline = deadline;
    this.description = description;
    this.price = price;
  }
}
