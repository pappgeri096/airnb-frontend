import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {Lodging} from '../../../models/lodging.model';
import {TodosService} from '../../../services/todos/todos.service';

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
        console.log(params['id']);
        this.id = +params['id'];
      }
    );

    this.lodgingsService.getLodgingsById(this.id).subscribe((response) => {
      console.log(response);
      this._lodging = response;
    });

    console.log(this._lodging);
  }


  get lodging(): Lodging {
    return this._lodging;
  }

  deleteLodgings(){
    this.lodgingsService.deleteLodgings(this._lodging.id).subscribe(
      (response) => {
        if (response) {this.router.navigate(['lodgings']); }
      },
      (error) => {
        console.log(error);
      }
    );


  }


  addTodo() {
    this.router.navigate(['/todos', this._lodging.id, 'add']);
  }
}
