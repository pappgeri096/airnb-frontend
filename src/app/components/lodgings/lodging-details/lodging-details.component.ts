import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {Lodging} from '../../../models/lodging.model';
import {TodosService} from '../../../services/todos/todos.service';
import {LodgingsBuilder} from '../../../models/builders/lodgings.builder';

@Component({
  selector: 'app-lodging-details',
  templateUrl: './lodging-details.component.html',
  styleUrls: ['./lodging-details.component.css']
})
export class LodgingDetailsComponent implements OnInit {

  private id: number;
  private _lodging: Lodging;

  constructor(private route: ActivatedRoute, private lodgingsService: LodgingsService, private todosService: TodosService, private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );

    this.lodgingsService.getLodgingsById(this.id).subscribe((response) => {
      const data = response.json()['data'];
      const lodging: Lodging = new LodgingsBuilder(data['id'])
                                .setAddress(data['address'])
                                .setCity(data['city'])
                                .setCountry(data['country'])
                                .setAddress(data['address'])
                                .setPricePerDay(data['pricePerDay'])
                                .setTelecommunicationBill(data['telecommunicationBill'])
                                .setGasBill(data['gasBill'])
                                .setZipCode(data['zipCode'])
                                .setCleaningCost(data['cleaningCost'])
                                .setElectricityBill(data['electricityBill']).build();
      this._lodging = lodging;
    });
  }


  get lodging(): Lodging {
    return this._lodging;
  }

  deleteLodgings(){
    this.todosService.deleteLodgingsId(this.id);
    this.lodgingsService.deleteLodgings(this.id);
    this.router.navigate(['lodgings']);
  }
}
