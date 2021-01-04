import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const authenticated = this.authService.isAuthenticated();

    /**Alga */
    const temPermissao = this.authService.temQualquerPermissao(next.data.roles);

    if (authenticated && temPermissao) {
      return true;
    } else {
      if (!authenticated) {
        this.router.navigate(['/login'])
        return false;
      } else{
        this.router.navigate(['/nao_tem_permissao'])
        return false;
      }
    }

  }

}
