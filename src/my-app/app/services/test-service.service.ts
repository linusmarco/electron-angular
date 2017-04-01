import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestResource {
    
    fakeData = [
        {
            "id" : 0,
            "name": "Data Element 1",
            "attr_1": "Value 1",
            "attr_2": 15
        },
        {
            "id" : 1,
            "name": "Data Element 2",
            "attr_1": "Value 2",
            "attr_2": 14
        },
        {
            "id" : 2,
            "name": "Data Element 3",
            "attr_1": "Value 3",
            "attr_2": 13
        },
        {
            "id" : 3,
            "name": "Data Element 4",
            "attr_1": "Value 4",
            "attr_2": 12
        }
    ]

    constructor(private _http: Http) { }

    public getData(): Promise<any[]> {
        return this._http.get('api/data')
            .toPromise()
            .then(response => response.json() as any[])
            //.catch(this.handleError);
            .catch(() => this.fakeData);
    };

    public getDatum(id: number): Promise<any> {
        return this._http.get('api/datum/' + id)
            .toPromise()
            .then(response => response.json() as any)
            //.catch(this.handleError);
            .catch(() => this.fakeData[0]);
    };

    protected handleError(error: any) {
        return Promise.reject(error.message || error);
    }

}
