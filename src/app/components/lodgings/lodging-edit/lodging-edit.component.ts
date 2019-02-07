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
      }
    );
  }


  get lodging(): Lodging {
    return this._lodging;
  }

  onSubmit(form: NgForm){

    this.router.navigate(['lodgings']);
  }

}
