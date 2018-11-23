import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LodgingsComponent } from './components/lodgings/lodgings.component';
import { LodgingComponent } from './components/lodgings/lodging/lodging.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { LodgingDetailsComponent } from './components/lodgings/lodging-details/lodging-details.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { TodoComponent } from './components/todos/todo/todo.component';
import { LodgingAddComponent } from './components/lodgings/lodging-add/lodging-add.component';
import { UserLodgingsComponent } from './components/users/user-lodgings/user-lodgings.component';
import {FormsModule} from '@angular/forms';
import { LodgingEditComponent } from './components/lodgings/lodging-edit/lodging-edit.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { TodoAddComponent } from './components/todos/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todos/todo-edit/todo-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LodgingsComponent,
    LodgingComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    TodosComponent,
    LodgingDetailsComponent,
    TodoComponent,
    LodgingAddComponent,
    UserLodgingsComponent,
    LodgingEditComponent,
    UserEditComponent,
    TodoAddComponent,
    TodoEditComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
