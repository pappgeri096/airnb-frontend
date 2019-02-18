import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage/token-storage.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardService implements CanActivate{

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService  , private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.tokenStorage.getToken();
    const decodeToken = decode(token);

    if (
      !this.auth.isLogedIn() ||
      decodeToken.role !== expectedRole
    ) {
      this.router.navigate(['/lodgings']);
      return false;
    }
    return true;
  }
}
