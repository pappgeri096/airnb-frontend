import { Injectable } from '@angular/core';
import {Lodging} from '../../models/lodging.model';
import {LodgingsBuilder} from '../../models/builders/lodgings.builder';
import {LodgingsType} from '../../utils/lodgingsType.enum';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LodgingsService {

  lodgingsAdded = new Subject<Lodging[]>();

  private lodgings: Lodging[] = [
    new LodgingsBuilder(1)
      .setName('sanyi')
      .setLodgingsType(LodgingsType.APARTMENT)
      .setCountry('Hungary')
      .setCity('Budapest')
      .build(),
    new LodgingsBuilder(2)
      .setName('laci')
      .setLodgingsType(LodgingsType.FAMILY_HOUSE)
      .setCountry('Hungary')
      .setCity('Szeged')
      .build(),
  ];

  constructor() { }

  getAllLodgings() {
    return this.lodgings.slice();
  }

  addLodgings(lodging: Lodging){
    this.lodgings.push(lodging);
    this.lodgingsAdded.next(this.getAllLodgings().slice());
  }
}
