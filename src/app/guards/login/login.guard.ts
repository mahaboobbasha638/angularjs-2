import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable, Subject} from "rxjs/Rx";

import { LoginService } from '../../services/login/login.service'

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private route: Router){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      var thisView = this;
      return this.loginService.isLoggedIn()
        .map(result => {
          if (!result["status"]) {
            thisView.route.navigate(['/login']);
            return false;
          } else 
            return true;
        }).catch(() => {
            return Observable.of(false);
        });


  }
}
