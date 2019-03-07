import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsService} from '../../../services/lodgings/lodgings.service';
import {UsersService} from '../../../services/users/users.service';
import {InviteForm} from '../../../models/InviteForm';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  inviteForm: FormGroup;
  lodgingsId: number;
  added = false;

  constructor(private userService: UsersService, private lodgingsService: LodgingsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inviteForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });

    this.route.params.
    subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.lodgingsId = +params['id'];
      }
    );

  }

  onSubmit(){
    const data = this.inviteForm.value;
    const invite = new InviteForm(data['email'], this.lodgingsId);
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
