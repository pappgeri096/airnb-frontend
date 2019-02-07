import {LodgingsType} from '../utils/lodgingsType.enum';
import {Todo} from './todo.model';
import {User} from './user.model';

export interface Lodging {
   id: number;
   name: string;
   LodgingsType: LodgingsType;
   country: string;
   city: string;
   zipCode: string;
   address: string;

   pricePerDay: number;
   electricityBill: number;
   gasBill: number;
   telecommunicationBill: number;
   cleaningCost: number;

   todos: Todo[];

   landlord: User;
   propertyManager: User;
   fullAddress: null;
}
