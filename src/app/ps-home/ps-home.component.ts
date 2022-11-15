
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PsServiceService } from '../ps-service.service';

@Component({
  selector: 'app-ps-home',
  templateUrl: './ps-home.component.html',
  styleUrls: ['./ps-home.component.css']
})
export class PsHomeComponent implements OnInit {
  lookUpsData:any=[];
  public psList = [];
  show:boolean=false;
  @ViewChild('f') createForm: NgForm
  personForm = new FormGroup({
    psId:new FormControl(0),
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    salutation: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required),
    ssn: new FormControl('', Validators.required),
    primaryLanguage: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    addressLine1: new FormControl('', Validators.required),
    addressLine2: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    timeZone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  })
public data={
  "psId": 0,
  "saluationId":'Mr',
  "genderId": "U",
  "lastName": "1-louisville",
  "firstName": " l",
  "raceId": "O",
  "maritalStatusID": "U",
  "dob": "01/01/1998",
  "ssn": "",
  "languageId": 1,
  "locationId": "Home111",
  "city": "Antioch",
  "addressLine": "5-10/1/1/10/N/P",
  "addressLine2": "",
  "zipcode": "37011",
  "phoneTypeid": "Home",
  "phone": "7896325410",
  "stateId": 43,
  "countyId": 751,
  "timeZoneId": 1,
  "countryId": "USA",
  "officeId": 140,
  "mappedOfficeIds": "140",
  "updatedUserId": 1 //hard code
}
public viewtable:boolean=false
  constructor(private psService:PsServiceService,private http:HttpClient) { }
 onClickedMe(){
  this.viewtable=true;
 }
 onClicked(){
  this.show=true;
 }
 onClose(){
  this.viewtable=false;
 }

  onSubmit() {
    this.setValue();
    this.http.post('https://angular-demo-9d196-default-rtdb.firebaseio.com/posts.json',this.data).subscribe((result)=> {
      console.log(result);
    })

    console.log(this.data);
    this.personForm.reset();
  }
  ngOnInit() {
    this.getAllPersons();
  }
  onCancel(){
    this.personForm.reset();
    this.show=false;
  }
  getAllPersons() {
    this.psService.getPersons().subscribe(result => {
      this.psList = result.psList;
      console.log(result);
    })
  }

  // addPerson() {
  //   this.http.post('http://poc.aquilasoftware.com/poclite/psapi/savePSDetails',this.data).subscribe((result)=> {
  //     console.log(result);
  //   })
  // }
  setValue() {
    this.data.firstName=this.personForm.get('firstName')?.value;
    // this.data.lastName=this.personForm.get('lastName')?.value;
    // this.data.genderId=this.personForm.get('gender')?.value;
    // this.data.saluationId=this.personForm.get('salutation')?.value;
    // this.data.maritalStatusID=this.personForm.get('maritalStatus')?.value;
    // this.data.dob=this.personForm.get('dateOfBirth')?.value;
    // this.data.raceId=this.personForm.get('race')?.value;
    // this.data.ssn=this.personForm.get('ssn')?.value;
    // this.data.phone=this.personForm.get('phone')?.value;
    // this.data.zipcode=this.personForm.get('zipCode')?.value;
    // this.data.addressLine=this.personForm.get('addressLine1')?.value;
    // this.data.addressLine2=this.personForm.get('addressLine2')?.value;
  }
  getAllLookupsData() {
    this.psService.getData().subscribe(result => {
      this.lookUpsData = result;
      console.log(result);
    })
  }
}
