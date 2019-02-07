import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {LodgingsType} from '../../../utils/lodgingsType.enum';
import {UsersService} from '../../../services/users/users.service';

@Component({
  selector: 'app-lodging-add',
  templateUrl: './lodging-add.component.html',
  styleUrls: ['./lodging-add.component.css']
})
export class LodgingAddComponent implements OnInit {

  constructor(private router: Router, private lodgingService: LodgingsService, private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value['address']);
    this.router.navigate(['lodgings']);
  }

}
