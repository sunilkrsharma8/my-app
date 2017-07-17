import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    public token: string;
    public predixZone: string = '271abbf6-1918-471c-a676-9ff2bc08dcb6';
    private authorization = 'Basic Y2ctY2xpZW50MTpjYXBnZW1pbmkyMDE3';
    private grantType : string ='client_credentials';//  'password';
    private loginUrl = 'https://4f2f9a9f-703f-47f1-9b70-6d73fdd98675.predix-uaa.run.aws-usw02-pr.ice.predix.io';  
    private tokenUrl = 'https://d264ba9b-c855-4041-85d4-827db5548817.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token';

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': this.predixZone,
        'Authorization': ' bearer ' + this.token
      });

      private tokenHeaders = new Headers({
         'Authorization' :  this.authorization,
         'Content-Type' : 'application/x-www-form-urlencoded'
       });

    
    constructor(private http: Http,private router: Router) {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    login(username: string, password: string): Observable<any> {
        let body = 'username='+username+'&password='+password+'&grant_type='+this.grantType;
        var self = this;
        return this.http.post(this.tokenUrl ,body, {headers: this.tokenHeaders})
            .map((response: Response) => {
                let token = response.json() && response.json().access_token;
                if (token) {
                    self.token = token;
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });          
           
    }
   
    logout(): void {
       // this.token = null;
        sessionStorage.removeItem('currentUser');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        console.error('An error occurred Message:', error.message);
        return Promise.reject(error.message || error);
    }
}