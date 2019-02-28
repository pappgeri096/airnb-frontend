import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Lodging} from '../../models/lodging.model';
import {LodgingsService} from '../../services/lodgings/lodgings.service';
import {UsersService} from '../../services/users/users.service';
import {InviteForm} from '../../models/InviteForm';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  inviteForm: FormGroup;
  lodgings: Lodging[];
  added = false;

  constructor(private userService: UsersService, private lodgingsService: LodgingsService) { }

  ngOnInit() {
    this.inviteForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'lodgings': new FormControl(null, [Validators.required]),
    });

    this.userService.getLandlordLodgingsFromServer().subscribe(
      (response) => {
        this.lodgings = response;

      },
      (error) => {
        console.log(error);
      }
    );


  }

  onSubmit(){
    const data = this.inviteForm.value;
    const invite = new InviteForm(data['email'], data['lodgings']);
    this.lodgingsService.sendNewEnvite(invite).subscribe(
      (response) => {
        this.added = true;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
