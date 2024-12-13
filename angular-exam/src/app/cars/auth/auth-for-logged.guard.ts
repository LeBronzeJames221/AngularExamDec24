import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthForLogged implements CanActivate {
  constructor(private userService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}