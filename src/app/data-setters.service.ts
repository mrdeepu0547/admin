import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSettersService {

  constructor() { }
  setValue() {
    this.data.lastName=this.personForm.get('lastName')?.value;
    this.data.firstName=this.personForm.get('firstName')?.value;
    this.data.phoneTypeid=this.personForm.get('phoneType')?.value;
    this.data.languageId=this.personForm.get('language')?.value;
    this.data.maritalStatusID=this.personForm.get('maritialStatus')?.value;
    this.data.genderId=this.personForm.get('gender')?.value;
    this.data.saluationId=this.personForm.get('salutation')?.value;
    this.data.dob=this.personForm.get('dateOfBirth')?.value;
    this.data.raceId=this.personForm.get('race')?.value;
    this.data.ssn=this.personForm.get('ssn')?.value;
    this.data.phone=this.personForm.get('phone')?.value;
    this.data.zipcode=this.personForm.get('zipCode')?.value;
    this.data.addressLine=this.personForm.get('addressLine1')?.value;
    this.data.addressLine2=this.personForm.get('addressLine2')?.value;
  }
}
