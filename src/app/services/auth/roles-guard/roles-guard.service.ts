import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardService implements CanActivate{

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService  , private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = route.data.expectedRole;

    console.log(this.auth.isLogedIn());
    console.log(this.tokenStorage.hasRole(expectedRole));

    if (
      !this.auth.isLogedIn() ||
      !this.tokenStorage.hasRole(expectedRole)
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
