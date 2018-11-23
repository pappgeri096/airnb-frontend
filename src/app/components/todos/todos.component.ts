import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos/todos.service';
import {Todo} from '../../models/todo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LodgingsBuilder} from '../../models/builders/lodgings.builder';
import {LodgingsType} from '../../utils/lodgingsType.enum';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private _todos: Todo[];

  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit() {
    this._todos = this.todosService.getTodos();
    // this.todosService.todosChanged.subscribe((todos: Todo[]) => {
    //   this._todos = todos;
    // });
    this.todosService.getTodosFromServer().subscribe((response) =>{
      const todos: Todo[] = [];
      const data =  response.json();
      console.log(data);
      for (let i = 0; i < data.length ; i++) {
        todos.push(
          new Todo(
            data[i]['id'],
            data[i]['name'],
            new LodgingsBuilder(2)
              .setName('Sandor A Szakacs Szobaja')
              .setLodgingsType(LodgingsType.FAMILY_HOUSE)
              .setCountry('Hungary')
              .setCity('Szeged')
              .build(),
            data[i]['deadline'],
            data[i]['description'],
            data[i]['price'],
            )
        );
       }

      console.log( this._todos);
      console.log(data);

       this._todos = todos;
    });


  }


  get todos(): Todo[] {
    return this._todos;
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
    this.router.navigate(['todos']);
  }
}
