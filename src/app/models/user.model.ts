import {UserType} from '../utils/userType.enum';
import {Lodging} from './lodging.model';


export interface User{
   address: string;
   city: string;
   country: string;
   email: string;
   firstName: string;
   phoneNumber: string;
   surname: string;
   zipCode: string;
}
