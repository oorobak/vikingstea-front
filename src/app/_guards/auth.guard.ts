import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../_services/security/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // logged in so return true

      // todo: analiza czy ścieżka user czy admin i czy token i uprawnienia pozwalaja userowi przejść na admin


      if (state.url.split('/')[1] === 'admin' && this.authenticationService.currentUserValue.roles !== 'ROLE_ADMIN') {
      } else if (state.url.split('/')[1] === 'user' && this.authenticationService.currentUserValue.roles !== 'ROLE_USER') {
      } else {
        return true;
      }
    }

    // not logged in so redirect to login page with the return url

    // todo: przeanalizować czy warto sprawdzać czy routing na jaki próbujemy przekierować istnieje
    this.router.navigate(['/' + state.url.split('/')[1] + '/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
