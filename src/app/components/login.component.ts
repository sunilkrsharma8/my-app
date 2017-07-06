import { Component } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './../partials/login.component.html'
})
export class LoginComponent {
  constructor(
    private router: Router
  ) { }

  sub() {
      console.log("clicked");
      this.router.navigate(['/home']);
  }
 
}
