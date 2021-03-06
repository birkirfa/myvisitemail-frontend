import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../shared/services/user-service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService,
        private router: Router) { }

    canActivate() {
        if (this.userService.getUser().isAuth) {
            return true;
        }
        this.router.navigateByUrl('/login');

        return false;
    }
}
