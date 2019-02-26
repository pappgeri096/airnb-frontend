import { Component, OnInit } from '@angular/core';
import {PendingUser} from '../../../models/PendingUser';
import {PendingsService} from '../../../services/pendings/pendings.service';
import {TokenStorageService} from '../../../services/auth/token-storage/token-storage.service';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {
  pendings: PendingUser[];

  constructor(private pendingsService: PendingsService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    console.log(11111)
    this.pendingsService.getAllPendingsByLandlordName().subscribe(
      (response) => {
        console.log(response);
        this.pendings = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }


  acceptUser(id: number) {
    this.pendingsService.acceptUser(id).subscribe(
      (result) => {
        if (result) { this.ngOnInit(); }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
