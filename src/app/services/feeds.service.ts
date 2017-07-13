import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedsData } from '../model/FeedsData';

@Injectable()
export class FeedsService {

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIyMTc3NDUyMmVhNmE0MjlhYmUzNjY0OTdhMzJjZjgxYyIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInRpbWVzZXJpZXMuem9uZXMuODQyNzZkYjMtYjFiNC00ZWI4LWIzODAtMzc0NGIzZDBlNWQ2LnF1ZXJ5IiwicHJlZGl4LWFzc2V0LnpvbmVzLjI3MWFiYmY2LTE5MTgtNDcxYy1hNjc2LTlmZjJiYzA4ZGNiNi51c2VyIiwidGltZXNlcmllcy56b25lcy5jNGUwZjAxNi04OTE1LTRlOTItYTc5OS04MjZkYTEwNDE2ZmMudXNlciJdLCJjbGllbnRfaWQiOiJjZy1jbGllbnQxIiwiY2lkIjoiY2ctY2xpZW50MSIsImF6cCI6ImNnLWNsaWVudDEiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNmZjAxYWMwIiwiaWF0IjoxNDk5ODMzMTQwLCJleHAiOjE0OTk4NzYzNDAsImlzcyI6Imh0dHBzOi8vZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3IiwiYXVkIjpbInRpbWVzZXJpZXMuem9uZXMuODQyNzZkYjMtYjFiNC00ZWI4LWIzODAtMzc0NGIzZDBlNWQ2IiwiY2ctY2xpZW50MSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYiLCJ0aW1lc2VyaWVzLnpvbmVzLmM0ZTBmMDE2LTg5MTUtNGU5Mi1hNzk5LTgyNmRhMTA0MTZmYyJdfQ.QY3hLtIeXAD8DNK3hsok0u3x982z5NJIdSocWqNQxpzZnz21tlX-TH2-pm66qWI8dofmpG5msF3tJZHDXwUV9DVZ9GiqdKvseKIcLfgd8aVen62s96RKLFXGu6UnKhe3rtiDKuqRsw1a3rzg8lVa_5QEqh0U26EvASlVatb7m_T9fBm6OmxdwiM3WvuwDmmQwCe8hze1uQwlANK6t9fIXnnODTKyq9alBZ-abX7Q7OEYo8vVC198utvDIPdXr9n7T9bojAfjWp8eil3HHEwPVfNbISehYD_tebFpzloy3y55KvYaqtWEEBVJ5qLcMIYGHsPfqN0faDTaUrSV14HS-w'
    });
    private getEmpUrl = 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/AssetDataVal';  // URL to web api

    //private getEmpUrl = 'http://localhost:3000/AssetData';  // URL to web api

    private getPatchUrl = 'https://predix-asset.run.aws-usw02-pr.ice.predix.io';  // URL to web api


    private patchLikeBody = [{
        "op": "add",
        "path": "/likedBy/",
        "value": {
            "id": "62",
            "name": "Sunil",
            "likedOn": "2011-07-10 00:00:01"
        }
    }];

   getpatchUnLikeBody(index:Number) :any {
      return [{
        "op": "remove",
        "path": "/likedBy/"+index
        
    }];   
   };
    private patchUnLikeBody = [{
        "op": "remove",
        "path": "/likedBy/"
        
    }];   

    constructor(private http: Http) { }

    getFeeds(): Promise<FeedsData[]> {
        return this.http.get(this.getEmpUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as FeedsData[])
            .catch(this.handleError);

    }
    getParticularRecord(id): Promise<FeedsData> {
        return this.http.get(this.getPatchUrl+id, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as FeedsData)
            .catch(this.handleError);
    }
    likeClicked(id: String): Promise<FeedsData[]> {
        const url = `${this.getPatchUrl}${id}`;
        return this.http.patch(url, JSON.stringify(this.patchLikeBody), { headers: this.headers })
            .toPromise()
            .then((response) => {
                console.log(response);
                response => response.json().likedBy as FeedsData[]
            })
            .catch(this.handleError);
    }

    unLikeClicked(req: FeedsData): Promise<FeedsData[]> {
         const  index = req.likedBy.findIndex(x => x['id']=="62");
        const url = `${this.getPatchUrl}${req.uri}`;
        return this.http.patch(url, JSON.stringify(this.getpatchUnLikeBody(index)), { headers: this.headers })
            .toPromise()
            .then((response) => {
                console.log(response);
                response => response.json().likedBy as FeedsData[]
            })
            .catch(this.handleError);
    }

    commentPost(id: String, post: String): Promise<FeedsData[]> {
        const url = `${this.getPatchUrl}${id}`;
        return this.http.patch(url, JSON.stringify([{
                                            "op": "add",
                                            "path": "/commentBy/",
                                            "value": {
                                                "id": "62",
                                                "name": "Sunil",
                                                "sharedOn": "2011-07-10 00:00:01",
                                                "comment": post
                                            }
                                        }]), { headers: this.headers })
            .toPromise()
            .then((response) => {
                console.log(response);
                response => response.json().commentBy as FeedsData[]
            })
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}