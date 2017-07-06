import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { FriendRequestUser } from '../model/friendRequestUser';


@Injectable()
export class FriendReqService {

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI4YmVmNDkzMDNmOTA0ODNmOGQ4YmVkODM0NjMxMjMzNiIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYudXNlciJdLCJjbGllbnRfaWQiOiJjZy1jbGllbnQxIiwiY2lkIjoiY2ctY2xpZW50MSIsImF6cCI6ImNnLWNsaWVudDEiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNmZjAxYWMwIiwiaWF0IjoxNDk5MjMyNTE0LCJleHAiOjE0OTkyNzU3MTQsImlzcyI6Imh0dHBzOi8vZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3IiwiYXVkIjpbImNnLWNsaWVudDEiLCJwcmVkaXgtYXNzZXQuem9uZXMuMjcxYWJiZjYtMTkxOC00NzFjLWE2NzYtOWZmMmJjMDhkY2I2Il19.skKkFfzKyC4ZIy6cJKqHHFpEiQf8wmJo5tf2lUNa_F_xsLqXlVHW-SiTXUrshJohhjp6bA3-K4MIbGSlKzIMpOzPnpXKWnLJ6i1Hd-804-JLehqD0GDbJARtLiF_5yoFIxfaleNdeHEy4flDPHIJW8MzHIri85ctZYPqZxpVI8gCZPL920_As5VL_eLZB3tiC9rxb5pSdSBN71RsCbKXIzarpXdLuQuTIK0tK4pQ0P-hTqMnRoUFIBgUKgdzSNZXmRmPcvNUyqbIi6Tuw1dzvil6vn3OwolIoK2YBBx7Jwgr6bcx1LM3RPTqOLtG-iUa9opNoxDnC3MPTPTLZ9kUoQ'
    });
    private getEmpUrl = 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/FbUsers';  // URL to web api

    constructor(private http: Http) { }

    getFriendRequest(): Promise<FriendRequestUser[]> {
        return this.http.get(this.getEmpUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as FriendRequestUser[])
            .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}