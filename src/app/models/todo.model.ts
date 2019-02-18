import {Lodging} from './lodging.model';
import {Status} from '../utils/status.enum';

  export class Todo{
     id: number;
     name: string;
     deadline: string;
     description: string;
     price: number;
     status: Status;
}
