import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedsData } from '../model/FeedsData';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class FeedsService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Predix-Zone-Id': this.authenticationService.predixZone,
        'Authorization': ' bearer ' + this.authenticationService.token
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
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}