import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class DashboardService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': ' bearer ' + this.authenticationService.token        
    });

    private getTimeSeriesDataUrl = 'http://10.207.148.65:8080/schindlerData';  // URL to web api

    getTimeSeries(): Promise<any> {
        return this.http.get(this.getTimeSeriesDataUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}