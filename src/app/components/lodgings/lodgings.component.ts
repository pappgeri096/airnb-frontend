import { Component, OnInit } from '@angular/core';
import {LodgingsService} from '../../services/lodgings/lodgings.service';
import {Lodging} from '../../models/lodging.model';
import {UsersService} from '../../services/users/users.service';


@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit {

  private _lodgings: Lodging[];

  constructor(private lodgingsService: LodgingsService, private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUserLodgingsFromServer().subscribe((response) => {
       this._lodgings = response;
    });
  }

  get lodgings(): Lodging[] {
    return this._lodgings;
  }
}
