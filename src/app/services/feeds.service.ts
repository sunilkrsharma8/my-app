import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedsData } from '../model/FeedsData';

@Injectable()
export class FeedsService {

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3YmZiNzgxNjY3NTA0NWQxOTUxNWQ0M2RiM2IwYWFmNyIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYudXNlciIsInRpbWVzZXJpZXMuem9uZXMuYzRlMGYwMTYtODkxNS00ZTkyLWE3OTktODI2ZGExMDQxNmZjLnVzZXIiXSwiY2xpZW50X2lkIjoiY2ctY2xpZW50MSIsImNpZCI6ImNnLWNsaWVudDEiLCJhenAiOiJjZy1jbGllbnQxIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiJjZmYwMWFjMCIsImlhdCI6MTQ5OTc1MTMzNCwiZXhwIjoxNDk5Nzk0NTM0LCJpc3MiOiJodHRwczovL2QyNjRiYTliLWM4NTUtNDA0MS04NWQ0LTgyN2RiNTU0ODgxNy5wcmVkaXgtdWFhLnJ1bi5hd3MtdXN3MDItcHIuaWNlLnByZWRpeC5pby9vYXV0aC90b2tlbiIsInppZCI6ImQyNjRiYTliLWM4NTUtNDA0MS04NWQ0LTgyN2RiNTU0ODgxNyIsImF1ZCI6WyJjZy1jbGllbnQxIiwicHJlZGl4LWFzc2V0LnpvbmVzLjI3MWFiYmY2LTE5MTgtNDcxYy1hNjc2LTlmZjJiYzA4ZGNiNiIsInRpbWVzZXJpZXMuem9uZXMuYzRlMGYwMTYtODkxNS00ZTkyLWE3OTktODI2ZGExMDQxNmZjIl19.eYPgIWUlL2bCmnE12495t8F8PIkBptQDAc2X5Vv9l1dz49LPsUajObduZjogQ2LWxjMks2bMcA8VTZZjw1SYVA3mKrUbZ8MBkdg5lsZ-gicVP2o77TkUY1CirJLt0FguHL0GZJEcvvIuJiu-pGdnwWTPqDNb0z2HLwwU6g2JdeuzkRP22ODIPlGYJkxVOMeN-UMLKVKMRhBMiLhZFqNOdLXsbpVdgDPcfAIsWHXtWSLKsusVS64UxkCpPDY6f7P0KZTpuI3oQbFTT_Fkml0gLNoQzoChSm-PxdUXErtqSr-x9KioKzpb79kt_J_DFnzRI3HZ7uEaI5wUQQ8vnmVE8w'
    });
    private getEmpUrl = 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/AssetDataVal';  // URL to web api

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