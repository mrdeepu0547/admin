import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
onSubmit() {
console.log('submited')
}
onCancel() {
this.personForm.reset();
}
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
