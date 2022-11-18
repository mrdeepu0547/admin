import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PsServiceService {

  private baseUrl = 'http://poc.aquilasoftware.com/poclite';
  private postUrl = 'http://poc.aquilasoftware.com/poclite/psapi/savePSDetails';
  private udata='http://poc.aquilasoftware.com/poclite/common/getLookupsData?lookupNames=gender,salutation,race,maritial_status,address_type,phone_type,language';

  constructor(private http: HttpClient){ }

  getPersons(jsonObj): Observable<any>{
    return this.http.get(this.baseUrl+'/psapi/getPSList?jsonObj='+jsonObj);
  }

  addPersons(post){
    return this.http.post(this.postUrl, JSON.stringify(post)).subscribe(result => {
      console.log(result);
    })
  }

  getData(){
    return this.http.get(this.udata);
  }
}

