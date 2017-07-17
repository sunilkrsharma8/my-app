import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './../partials/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
         this.authenticationService.login(this.model.username, this.model.password)
             .subscribe(result => {
                 if (result === true) {
                     this.router.navigate(['/feed']);
                 } else {
                     this.error = 'Username or password is incorrect';
                 }
             });
    }


}
