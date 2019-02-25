import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/auth/token-storage/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.username = this.tokenStorage.getUsername();
  }

  hasRole(role: string){
    return this.tokenStorage.hasRole(role);
  }

}
