import { Component, OnInit } from '@angular/core';

import { LockComponent } from '../lock/lock.component';
import { StoreViewmodel } from '../../viewmodel/store/store.viewmodel';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  myName:string="store";
  store:StoreViewmodel;
  currentComponent:string="indent";
  masterActive:string;
  indentActive:string="primary";
  siteworkActive:string;
measurementActive:string;
masaccountActive:string;
reportsActive:string;

 onLockOpen(store: StoreViewmodel) {
    this.store = store;
  }

  showMasterregister(){
    this.currentComponent="masterregister";
    this.markActive(this.currentComponent);
  }
 showIndent(){
   this.currentComponent="indent";
   this.markActive(this.currentComponent);
 }
 showSitework(){
  this.currentComponent="sitework";
  this.markActive(this.currentComponent);
}
 showMeasurement(){
    this.currentComponent="measurement";
     this.markActive(this.currentComponent);
 }
 showMasaccount(){
  this.currentComponent="masaccount";
   this.markActive(this.currentComponent);
}
showReports(){
  this.currentComponent="reports";
   this.markActive(this.currentComponent);
}
 
   
 markActive(choise:string){
   this.indentActive="";
   this.measurementActive="";
   this.masterActive="";
   this.masaccountActive="";
   this.reportsActive="";
   this.siteworkActive="";
   let active="primary";
   switch(choise)
    {
      case "masterregister":
      this.masterActive=active;
      break;
      case "indent":
       this.indentActive=active;
       break;
       case "sitework":
       this.siteworkActive=active;
       break;
       case "measurement":
       this.measurementActive=active;
       break;
       case "masaccount":
       this.masaccountActive=active;
       break;
       case "reports":
       this.reportsActive=active;
       break;
    }

 }








}
