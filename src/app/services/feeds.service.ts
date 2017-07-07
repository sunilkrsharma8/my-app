import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedsData } from '../model/FeedsData';

@Injectable()
export class FeedsService {

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Predix-Zone-Id': '271abbf6-1918-471c-a676-9ff2bc08dcb6',
        'Authorization': ' bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIwN2JiZmVjODk3NWI0M2RjYTI0MTk1OTBiY2FkM2I4NCIsInN1YiI6ImNnLWNsaWVudDEiLCJzY29wZSI6WyJ1YWEubm9uZSIsInByZWRpeC1hc3NldC56b25lcy4yNzFhYmJmNi0xOTE4LTQ3MWMtYTY3Ni05ZmYyYmMwOGRjYjYudXNlciJdLCJjbGllbnRfaWQiOiJjZy1jbGllbnQxIiwiY2lkIjoiY2ctY2xpZW50MSIsImF6cCI6ImNnLWNsaWVudDEiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNmZjAxYWMwIiwiaWF0IjoxNDk5NDA2NDA4LCJleHAiOjE0OTk0NDk2MDgsImlzcyI6Imh0dHBzOi8vZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiZDI2NGJhOWItYzg1NS00MDQxLTg1ZDQtODI3ZGI1NTQ4ODE3IiwiYXVkIjpbImNnLWNsaWVudDEiLCJwcmVkaXgtYXNzZXQuem9uZXMuMjcxYWJiZjYtMTkxOC00NzFjLWE2NzYtOWZmMmJjMDhkY2I2Il19.sL9bKzBn9SAcdpe3dbwCv_Quebf8-NT5PBFfJevFkuIg6M_n7SFkaD147hyuVKcegwBgIrld8V1wBEihgwNoTOE8Af49RggsK38M3qhXpj7N2N9uuUiC6nOb1GRlve16H2ySJ2xK2_2oSO2Bt4Zmi_AdHEpJzbmxPhKB7agTyb3PhrSjOlaL9j-QvTE_7-jfFt6rMWclKRjd34_VC-yEGBN5yA7ilQdg2KxWR6dM9pvni5GesCYZhaGmuuiNA8ghQDLF8Mtd7E97-Kxd-lhTwmfJdHN98__88LRaiEf9CpGPmdAhlJQhsfDBxBaD5u8BSYZ5MWk2MZu2x37i1OldEw'
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