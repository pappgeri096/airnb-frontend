import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
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

  constructor(private todoService: TodosService, private lodgingService: LodgingsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['lodging_id']);
        this.lodgingId = +params['lodging_id'];
      }
    );
  }

  onSubmit(form: NgForm){
    const lodging = this.lodgingService.findById(this.lodgingId);
    console.log(lodging);
    console.log(form.value);
    const todo: Todo = new Todo(
      1,
      form.value['name'],
      lodging,
      form.value['date'],
      form.value['description'],
      form.value['price']);

    console.log(todo);
    this.todoService.addTodo(todo);
    this.router.navigate(['/todos']);
  }
}
