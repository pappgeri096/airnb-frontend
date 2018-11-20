import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-lodging-add',
  templateUrl: './lodging-add.component.html',
  styleUrls: ['./lodging-add.component.css']
})
export class LodgingAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value['address']);
  }

}
