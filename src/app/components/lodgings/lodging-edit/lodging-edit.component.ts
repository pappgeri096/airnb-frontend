import { Component, OnInit } from '@angular/core';
import {Lodging} from '../../../models/lodging.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {NgForm} from '@angular/forms';
import {LodgingsType} from '../../../utils/lodgingsType.enum';

@Component({
  selector: 'app-lodging-edit',
  templateUrl: './lodging-edit.component.html',
  styleUrls: ['./lodging-edit.component.css']
})
export class LodgingEditComponent implements OnInit {

  private id: number;
  private _lodging: Lodging;

  constructor(private route: ActivatedRoute, private lodgingsService: LodgingsService, private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this._lodging = this.lodgingsService.findById(this.id);
      }
    );
  }


  get lodging(): Lodging {
    return this._lodging;
  }

  onSubmit(form: NgForm){
    this._lodging.setCity(form.value['city']);
    this._lodging.setAddress(form.value['address']);
    this._lodging.setCleaningCost((<number>form.value['cleaning_cost']));
    this._lodging.setCountry(form.value['country']);
    this._lodging.setElectricityBill(<number>form.value['electricity_bill']);
    this._lodging.setGasBill(<number>form.value['gas_bill']);
    this._lodging.setLodgingsType(LodgingsType.APARTMENT);
    this._lodging.setName(form.value['lodging_name']);
    this._lodging.setPricePerDay(<number>form.value['daily_price']);
    this._lodging.setTelecommunicationBill(<number>form.value['telecommunication_bill']);
    this._lodging.setZipCode(form.value['zip_code']);
    this.lodgingsService.lodgingsUpdated();
    this.router.navigate(['lodgings']);
  }

}
