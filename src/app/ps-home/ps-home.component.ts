
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

  public lowerBound:number=0;
  public upperBound:number=20;
  lookUpsData:any=[];
  public psList = [];
  show:boolean=false;
  public searchText = '';
  public viewtable = false

  personForm = new FormGroup({
    psId:new FormControl(0),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    salutation: new FormControl('', [Validators.required]),
    maritialStatus: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    ssn: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    language: new FormControl(null, [Validators.required]),
    addressType: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    addressLine2: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneType:new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    state: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    timeZone: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
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
  "updatedUserId": 1, //hard code,
  // "isEdit":false
}
  constructor(private psService:PsServiceService,private http:HttpClient) { }
  ngOnInit() {

    this. getAllLookupsData();
  }
  onCancel(){
    this.personForm.reset();
    this.show=false;
  }
  getAllPersons() {

    let jsonObj={"userId":1,
    "lowerBound":this.lowerBound,
    "upperBound":this.upperBound,
    "psId":0,
    "psName":"",
    "officeId":0,"ssn":0,
    "mrn":0,
    "city":"",
    "stateId":"",
    "zipCode":"",
    "phone":"",
    "psStatusId":"1",
    "admissionStartDate":"",
    "admissionEndDate":"",
    "dischargeDate":"",
    "caseManagerId":0,
    "coordinatorId":0,
    "serviceStartDate":"",
    "serviceEndDate":"",
    "serviceId":0,
    "authNumber":"",
    "payorPlanId":"",
    "authStatusId":"",
    "accountNumber":"",
    "dischargeStartDate":"",
    "dischargeEndDate":""};
    this.psService.getPersons(JSON.stringify(jsonObj)).subscribe(result => {
      this.psList = result.psList;
      console.log(result);
    })
  }
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
  getAllLookupsData() {
    this.psService.getData().subscribe(result => {
      this.lookUpsData = result;
      console.log(result);
    })
  }
  onPrevieous(){
    this.lowerBound=this.lowerBound-20;
    this.upperBound=this.upperBound-20;
    this.getAllPersons();
  }
  onNext(){
    this.lowerBound=this.lowerBound+20;
    this.upperBound=this.upperBound+20;
    this.getAllPersons();
  }
  onEdit(data){
    console.log(data);
    console.log(data.PSId);
    console.log(this.personForm);
    this.show=true;
    // this.personForm.setValue({

    // })
  }
  onClickedMe(){
    this.viewtable=true;
    this.getAllPersons();
   }
   onClicked(){
    this.show=true;
   }
   onClose(){
    this.viewtable=false;
   }
    onDelete(data){
     this.http.delete('http://poc.aquilasoftware.com/poclite/'+data.PSId+'.json').subscribe();
    }
    onDeleteAll(){
      this.http.delete('http://poc.aquilasoftware.com/poclite.json').subscribe();
     }
    onSubmit() {
      this.setValue();
      this.http.post('https://angular-demo-9d196-default-rtdb.firebaseio.com/posts.json',this.data).subscribe((result)=> {
        console.log(result);
      })
      console.log(this.data);
      this.personForm.reset();
    }
    // form getters
    get lastName(){
      return this.personForm.get('lastName');
     }

     get firstName(){
      return this.personForm.get('firstName');
     }

     get gender(){
      return this.personForm.get('gender');
     }

     get salutation(){
      return this.personForm.get('salutation');
     }

     get maritialStatus(){
      return this.personForm.get('maritialStatus');
     }

     get dateOfBirth(){
      return this.personForm.get('dateOfBirth');
     }

     get race(){
      return this.personForm.get('race');
     }

     get ssn(){
      return this.personForm.get('ssn');
     }

     get language(){
      return this.personForm.get('language');
     }

     get addressType(){
      return this.personForm.get('addressType');
     }

     get addressLine1(){
      return this.personForm.get('addressLine1');
     }

     get addressLine2(){
      return this.personForm.get('addressLine2');
     }

     get zipCode(){
      return this.personForm.get('zipCode');
     }

     get phoneType(){
      return this.personForm.get('phoneType');
     }

     get phone(){
      return this.personForm.get('phone');
     }

     get city(){
      return this.personForm.get('city');
     }

     get state(){
      return this.personForm.get('state');
     }

     get timeZone(){
      return this.personForm.get('timeZone');
     }

     get country(){
      return this.personForm.get('country');
     }
}
