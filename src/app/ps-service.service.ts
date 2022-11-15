import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PsServiceService {

  private url='http://poc.aquilasoftware.com/poclite/psapi/getPSList?jsonObj={"userId":1,"lowerBound":1,"upperBound":20,"psId":0,"psName":"","officeId":0,"ssn":0,"mrn":0,"city":"","stateId":"","zipCode":"","phone":"","psStatusId":"1","admissionStartDate":"","admissionEndDate":"","dischargeDate":"","caseManagerId":0,"coordinatorId":0,"serviceStartDate":"","serviceEndDate":"","serviceId":0,"authNumber":"","payorPlanId":"","authStatusId":"","accountNumber":"","dischargeStartDate":"","dischargeEndDate":""}';
  // public urlGet='http://poc.aquilasoftware.com/poclite/psapi/getPSList?jsonObj={"userId":1,"lowerBound":1,"upperBound":20}'
 private postUrl='http://poc.aquilasoftware.com/poclite/psapi/savePSDetails'
 private data='https://angular-demo-9d196-default-rtdb.firebaseio.com/posts.json'
  constructor(private http:HttpClient) { }
  getPersons():Observable<any>{
  return this.http.get(this.url);
  }
  addPersons(post){
    return this.http.post(this.postUrl,JSON.stringify(post)).subscribe(result=>{
      console.log(result);
    })
  }
  getData(){
  return this.http.get(this.data);
  }

}

