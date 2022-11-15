
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PsServiceService } from '../ps-service.service';


@Component({
  selector: 'app-ps-home',
  templateUrl: './ps-home.component.html',
  styleUrls: ['./ps-home.component.css']
})
export class PsHomeComponent implements OnInit {

  psList :any;
  show:boolean=false;
  @ViewChild('f') createForm: NgForm

  constructor(private psS:PsServiceService) { }
 ngOnInit() {
   this.psS.getData().subscribe(res => {
    this.psList= res.psList;
    console.log(res);

    // this.psData= psdata;
   })
 }

  onSubmit() {
    console.log(this.createForm);
  }
  onClick(){
    this.show=true;
  }
}

