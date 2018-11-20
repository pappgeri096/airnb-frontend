import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsBuilder} from '../../../models/builders/lodgings.builder';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {LodgingsType} from '../../../utils/lodgingsType.enum';

@Component({
  selector: 'app-lodging-add',
  templateUrl: './lodging-add.component.html',
  styleUrls: ['./lodging-add.component.css']
})
export class LodgingAddComponent implements OnInit {

  constructor(private router: Router, private lodgingService: LodgingsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value['address']);
    const lodging: Lodging = new LodgingsBuilder(1)
                              .setCity(form.value['city'])
                              .setAddress(form.value['address'])
                              .setCleaningCost((<number>form.value['cleaning_cost']))
                              .setCountry(form.value['country'])
                              .setElectricityBill(<number>form.value['electricity_bill'])
                              .setGasBill(<number>form.value['gas_bill'])
                              .setLodgingsType(LodgingsType.APARTMENT)
                              .setName(form.value['lodging_name'])
                              .setPricePerDay(<number>form.value['daily_price'])
                              .setTelecommunicationBill(<number>form.value['telecommunication_bill'])
                              .setZipCode(form.value['zip_code'])
      .build();
    this.lodgingService.addLodgings(lodging);
    this.router.navigate(['lodgings']);
  }

}
