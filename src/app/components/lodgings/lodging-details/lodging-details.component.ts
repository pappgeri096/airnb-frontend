import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {Lodging} from '../../../models/lodging.model';

@Component({
  selector: 'app-lodging-details',
  templateUrl: './lodging-details.component.html',
  styleUrls: ['./lodging-details.component.css']
})
export class LodgingDetailsComponent implements OnInit {

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

  deleteLodgings(){
    this.lodgingsService.deleteLodgings(this.id);
    this.router.navigate(['lodgings']);
  }
}
