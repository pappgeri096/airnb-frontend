import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {TodosService} from '../../../services/todos/todos.service';
import {Todo} from '../../../models/todo.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  private lodgingId: number;
  addTodoForm: FormGroup;

  constructor(private todoService: TodosService, private lodgingService: LodgingsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['lodging_id']);
        this.lodgingId = +params['lodging_id'];
      }
    );

    this.addTodoForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    const data = this.addTodoForm.value;
    const todo = new Todo();
    this.router.navigate(['/todos']);
  }
}
