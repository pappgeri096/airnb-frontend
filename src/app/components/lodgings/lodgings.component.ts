import { Component, OnInit } from '@angular/core';
import {LodgingsService} from '../../services/lodgings/lodgings.service';
import {Lodging} from '../../models/lodging.model';
import {UsersService} from '../../services/users/users.service';
import {LodgingsBuilder} from '../../models/builders/lodgings.builder';

@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit {

  private _lodgings: Lodging[];

  constructor(private lodgingsService: LodgingsService, private userService: UsersService) { }

  ngOnInit() {
    // this._lodgings = this.lodgingsService.getAllLodgings();
    // this.lodgingsService.lodgingsChanged.subscribe(
    //   (lodgings: Lodging[]) => {
    //     this._lodgings = lodgings;
    // }
    // );

    this.lodgingsService.getLodgingsFromServer().subscribe((response) => {
      const lodgings: Lodging[] = [];
      const data = response.json();
      for (let i = 0; i < data.length; i++) {
        lodgings.push(new LodgingsBuilder(data[i]['id']).setName(data[i]['name']).build());
      }
      this._lodgings = lodgings;
    });
  }

  get lodgings(): Lodging[] {
    return this._lodgings;
  }

  public listLodgings(){
    console.log(this.userService.getUser());
  }
}
