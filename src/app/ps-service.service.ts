import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PsServiceService {
  private url="http://poc.aquilasoftware.com/poclite/psapi/savePSDetails ";
  public urlGet='http://poc.aquilasoftware.com/poclite/psapi/getPSList?jsonObj={"userId":1,"lowerBound":1,"upperBound":20}'
  // private url="https://angular-demo-9d196-default-rtdb.firebaseio.com/";
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
  return this.http.get(this.urlGet);
  }
}

