import { Component, OnInit } from '@angular/core';
import {LodgingsService} from '../../services/lodgings/lodgings.service';
import {Lodging} from '../../models/lodging.model';

@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit {

  private _lodgings: Lodging[];

  constructor(private lodgingsService: LodgingsService) { }

  ngOnInit() {
    this._lodgings = this.lodgingsService.getAllLodgings();
    this.lodgingsService.lodgingsChanged.subscribe(
      (lodgings: Lodging[]) => {
        this._lodgings = lodgings;
    }
    );
  }

  get lodgings(): Lodging[] {
    return this._lodgings;
  }
}
