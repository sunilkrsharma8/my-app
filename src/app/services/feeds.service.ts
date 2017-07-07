import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedsData } from '../model/FeedsData';

@Injectable()
export class FeedsService {

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIzYmEwMjU2NTA1OWY0ZWEwYTlkNGU3MjZlZGEzNmJjYiIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInRpbWVzZXJpZXMuem9uZXMuYzRlMGYwMTYtODkxNS00ZTkyLWE3OTktODI2ZGExMDQxNmZjLnVzZXIiXSwiY2xpZW50X2lkIjoiY2ctY2xpZW50MSIsImNpZCI6ImNnLWNsaWVudDEiLCJhenAiOiJjZy1jbGllbnQxIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiJjZmYwMWFjMCIsImlhdCI6MTQ5OTQwNDk0MywiZXhwIjoxNDk5NDQ4MTQzLCJpc3MiOiJodHRwczovL2QyNjRiYTliLWM4NTUtNDA0MS04NWQ0LTgyN2RiNTU0ODgxNy5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6ImQyNjRiYTliLWM4NTUtNDA0MS04NWQ0LTgyN2RiNTU0ODgxNyIsImF1ZCI6WyJjZy1jbGllbnQxIiwidGltZXNlcmllcy56b25lcy5jNGUwZjAxNi04OTE1LTRlOTItYTc5OS04MjZkYTEwNDE2ZmMiXX0.J_bO1oEAo3nTjoRCxpVxRWTEiXTUclm0WSOVMeW-2LxN2ucXxXzyDslJQ22CgnQkZUDOjwy7O-mVZMda7w5TYgz58aGvZazmS5NDZwB4HGeoLJiWkGTPKqjN_kpv4M6XIUPopsZU6he0_YEZqB4BCG4WPtcImJjZzP-kv8AYwjPEQWd0Bbrq-DJeRa2NbhOAMAeglOxBqVQDcT3QH2eZ20-_ks-vjUqTDnawDlC_CTc85rTrt5NjA4cPqXroQ48v0eSESX6zd-Ik-x3SOf-q992X8NjZ736_6Q0bGwnVAYqdlX92e76CkqV5eEhQcbEymDNVl8ZhwU3AjugMsXllsQ'
    });
    private getEmpUrl = 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/AssetDataVal';  // URL to web api


    constructor(private http: Http) { }

    getFeeds(): Promise<FeedsData[]> {
        return this.http.get(this.getEmpUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as FeedsData[])
            .catch(this.handleError);

    }

    likeClicked() : Promise <FeedsData[]> {
        return this.http.patch(this.getEmpUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as FeedsData[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}