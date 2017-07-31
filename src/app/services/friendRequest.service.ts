import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { FriendRequestUser } from '../model/friendRequestUser';


@Injectable()
export class FriendReqService {

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3ODY2Nzg2OWM5Njk0NGM3OWEyY2VlYjk0ZWNiNDM4MSIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInRpbWVzZXJpZXMuem9uZXMuODQyNzZkYjMtYjFiNC00ZWI4LWIzODAtMzc0NGIzZDBlNWQ2LnF1ZXJ5IiwicHJlZGl4LWFzc2V0LnpvbmVzLjI3MWFiYmY2LTE5MTgtNDcxYy1hNjc2LTlmZjJiYzA4ZGNiNi51c2VyIiwidGltZXNlcmllcy56b25lcy5jNGUwZjAxNi04OTE1LTRlOTItYTc5OS04MjZkYTEwNDE2ZmMudXNlciJdLCJjbGllbnRfaWQiOiJjZy1jbGllbnQxIiwiY2lkIjoiY2ctY2xpZW50MSIsImF6cCI6ImNnLWNsaWVudDEiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNmZjAxYWMwIiwiaWF0IjoxNDk5OTI5NTY3LCJleHAiOjE0OTk5NzI3NjcsImlzcyI6Imh0dHBzOi8vZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3IiwiYXVkIjpbInRpbWVzZXJpZXMuem9uZXMuODQyNzZkYjMtYjFiNC00ZWI4LWIzODAtMzc0NGIzZDBlNWQ2IiwiY2ctY2xpZW50MSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYiLCJ0aW1lc2VyaWVzLnpvbmVzLmM0ZTBmMDE2LTg5MTUtNGU5Mi1hNzk5LTgyNmRhMTA0MTZmYyJdfQ.rfvFiLFgLDyS0avqLjkYZ21usD2amtwjHFxPgoItb2neDsEB7PUTcI6tc9qphG_ma0-ZTguo8CGGwEnA9jtsxm4sAdZXdJMnXhSU7fKe-8UspREOKVPMgBN04GI2j5Sv5fEE8lOn18kJwacnpaiMpyiVdkbmpvfF53EeaYMGGXE8Mp4tMfVUqQijUHK_M58K7MeIqzDkNalw-LLMsaq_hJgzKfzsa1d18Pcej1ol74ZD6jXmKyJPJRuUo8KpC300Gi8hX_CK-rzDIVZFu5a0Dq4htT8XRyj5QYggXAIUnndQfkwwiB9oXsUNeVyrDlZRpn5baTWRdoQqwn6cMlJtBw'
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