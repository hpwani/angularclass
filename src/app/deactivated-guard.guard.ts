import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface canCompDeactive {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})
export class DeactivatedGuardGuard implements CanDeactivate<canCompDeactive> {
  canDeactivate():  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return window.confirm('Are you sure to navigate?');
  }
  
}
