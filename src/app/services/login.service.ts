import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoginService {

    
    constructor(private http: Http, private authenticationService: AuthenticationService) { } 

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': this.authenticationService.predixZone,
        'Authorization': ' bearer ' + this.authenticationService.token
    });


    private loginUrl = 'https://4f2f9a9f-703f-47f1-9b70-6d73fdd98675.predix-uaa.run.aws-usw02-pr.ice.predix.io';  // URL to web api


    login(userdata): Promise<User[]> {
        return this.http.post(this.loginUrl, { headers: this.headers, data : userdata })
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}