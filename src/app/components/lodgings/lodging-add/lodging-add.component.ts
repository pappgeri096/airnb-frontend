import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsBuilder} from '../../../models/builders/lodgings.builder';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';

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
    const lodging: Lodging = new LodgingsBuilder(1).setAddress('Kacs street').build();
    this.lodgingService.addLodgings(lodging);
    this.router.navigate(['lodgings']);
  }

}
