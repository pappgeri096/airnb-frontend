import {LodgingsComponent} from '../../components/lodgings/lodgings.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodosComponent} from '../../components/todos/todos.component';
import {LodgingAddComponent} from '../../components/lodgings/lodging-add/lodging-add.component';
import {UserLodgingsComponent} from '../../components/users/user-lodgings/user-lodgings.component';
import {UsersComponent} from '../../components/users/users.component';
import {LodgingDetailsComponent} from '../../components/lodgings/lodging-details/lodging-details.component';
import {LodgingEditComponent} from '../../components/lodgings/lodging-edit/lodging-edit.component';
import {UserEditComponent} from '../../components/users/user-edit/user-edit.component';

const appRoutes = [
  {path: '', redirectTo: '/lodgings', pathMatch: 'full'},
  {path: 'lodgings', component: LodgingsComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todos/:id/edit', component: TodosComponent},
  {path: 'todos/:lodging_id//add', component: TodosComponent},
  {path: 'lodgings/:id/add', component: LodgingAddComponent},
  {path: 'lodgings/:id/edit', component: LodgingEditComponent},
  {path: 'lodgings/:id', component: LodgingDetailsComponent},
  {path: 'user/lodgings', component: UserLodgingsComponent},
  {path: 'user', component: UsersComponent},
  {path: 'user/edit', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
