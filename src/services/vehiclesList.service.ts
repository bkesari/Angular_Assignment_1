import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class VehiclesListService {

  constructor(public httpSvc:Http) { }

/*This method is used to get the vehicles list from JSON files*/
  getVehiclesListFromApi():Observable<any>{
    return this.httpSvc.get("listApi/VehicleList.json")
    .map((response)=>response.json())
    .catch((error)=>Observable.throw(error))    
  }

}
