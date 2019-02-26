import { Component, OnInit } from '@angular/core';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PendingsService} from '../../../services/pendings/pendings.service';

@Component({
  selector: 'app-new-lodgings',
  templateUrl: './new-lodgings.component.html',
  styleUrls: ['./new-lodgings.component.css']
})
export class NewLodgingsComponent implements OnInit {

  lodgings: Lodging[];
  searchForm: FormGroup;

  constructor(private lodgingsService: LodgingsService, private pendingService: PendingsService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'keyword': new FormControl(null)
    });


    this.lodgingsService.getAllLodgings().subscribe(

      (response) => {
        console.log();
        this.lodgings = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSearchValue() {
    return this.searchForm.value['keyword'];
  }

  sendRequest(lodging: Lodging) {
    this.pendingService.sendPendingRequest(lodging).subscribe(
      (response) => {
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
