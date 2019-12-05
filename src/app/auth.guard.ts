import { Injectable } from '@angular/core'; 
import { CanActivate, Router } from '@angular/router';

import { AppService } from './app.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    base_url: string;
    constructor(
        private appService: AppService,
        private router: Router
    ) { }
        
    canActivate() {
        if (!this.appService.isAuthenticated()) {
            this.router.navigate(['/acesso-negado']);
            return false;
        }
        return true;
    }
}
