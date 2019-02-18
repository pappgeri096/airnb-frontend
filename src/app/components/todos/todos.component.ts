import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos/todos.service';
import {Todo} from '../../models/todo.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private _todos: Todo[];

  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit() {
    this.todosService.getUserTodosFromServer().subscribe( response =>{

      console.log(response);
        this._todos = response;
    });


  }


  get todos(): Todo[] {
    return this._todos;
  }

  deleteTodo(id: number) {
    this.router.navigate(['todos']);
  }
}
