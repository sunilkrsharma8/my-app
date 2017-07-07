import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { LoginData } from '../model/loginData';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './../partials/login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

   username :string;
   password : string;
   loginCreds : LoginData;

  constructor(private router: Router, private loginService: LoginService) {
       
   }

//   ngOnInit() : void{
//     console.log("clicked",this.loginCreds);
//   }

  sub() {
     // console.log("clicked",this.loginCreds, this.username, this.password);
      var loginCreds = {
        'username' : '',
        'password' :''
      }
      loginCreds.username = this.username;
      loginCreds.password = this.password;

      this.loginService.login(loginCreds).then((value) => {
         console.log("success ", value);
         this.router.navigate(['/feed']);
      });

 }
 
}
