import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    public token: string;

      private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOTg0MmY2OGUwZTY0YzZiOTRlNWRlYzQ5NzM2NWRkZCIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYudXNlciJdLCJjbGllbnRfaWQiOiJjZy1jbGllbnQxIiwiY2lkIjoiY2ctY2xpZW50MSIsImF6cCI6ImNnLWNsaWVudDEiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNmZjAxYWMwIiwiaWF0IjoxNDk5MzE5MTA2LCJleHAiOjE0OTkzNjIzMDYsImlzcyI6Imh0dHBzOi8vZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3IiwiYXVkIjpbImNnLWNsaWVudDEiLCJwcmVkaXgtYXNzZXQuem9uZXMuMjcxYWJiZjYtMTkxOC00NzFjLWE2NzYtOWZmMmJjMDhkY2I2Il19.QdmAtTijYa3bcLEgqKtptDPVt0ciCZ88vBpt2vs5ULhgkONbHxDhed_UKuLVd7dNnXOSoEVmkXT5WufsaQf6yLM_TQjZ2d0olwO49-WVMI_H35bBOLxIEVU7GO2cqqGMfLVhL1EynNYKhmJOW15bo2E53nsjg0SukaZM4Eic_3U-6rM_O72znOGLUgTQ9Q5mU-dDY-8SlKfulSofnPIwbxKovopHSaNmrosMwxZvkmFh3AXiZORl2Uy0FT6RozxlvWdgYyxE-ZXWJ9g0WTTj1z9pI7KdkktzdO08pfII77aUw6iwyI-LS9vCyMuYohWBkftU2-at9UV-KhWi6X07Ww'
      });

    private loginUrl = 'https://4f2f9a9f-703f-47f1-9b70-6d73fdd98675.predix-uaa.run.aws-usw02-pr.ice.predix.io';  // URL to web api

    constructor(private http: Http,private router: Router) {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
       /* return this.http.post(this.loginUrl, { headers: this.headers, data : { username: username, password: password } })
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });*/

                if (username=='test' && password==='test') {
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: username }));
                    return  Observable.of(true);}
              else {
                    return  Observable.of(false);;
                }
               
           
    }

    logout(): void {
        this.token = null;
        sessionStorage.removeItem('currentUser');
    }
}