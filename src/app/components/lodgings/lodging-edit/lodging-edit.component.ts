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
    const lodging: Lodging = this.lodgingsService.findById(this.id);
    lodging.setCity(form.value['city'])
    lodging.setAddress(form.value['address'])
    lodging.setCleaningCost((<number>form.value['cleaning_cost']))
    lodging.setCountry(form.value['country'])
    lodging .setElectricityBill(<number>form.value['electricity_bill'])
    lodging .setGasBill(<number>form.value['gas_bill'])
    lodging .setLodgingsType(LodgingsType.APARTMENT)
    lodging.setName(form.value['lodging_name'])
    lodging.setPricePerDay(<number>form.value['daily_price'])
    lodging.setTelecommunicationBill(<number>form.value['telecommunication_bill'])
    lodging.setZipCode(form.value['zip_code']);
    this.lodgingsService.lodgingsUpdated();
    this.router.navigate(['lodgings']);
  }

}
