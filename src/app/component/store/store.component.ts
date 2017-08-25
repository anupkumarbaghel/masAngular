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
measurementActive:string;

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
 showMeasurement(){
    this.currentComponent="measurement";
     this.markActive(this.currentComponent);
 }
   
 markActive(choise:string){
   this.indentActive="";
   this.measurementActive="";
   this.masterActive="";
   let active="primary";
   switch(choise)
    {
      case "masterregister":
      this.masterActive=active;
      break;
      case "indent":
       this.indentActive=active;
       break;
       case "measurement":
       this.measurementActive=active;
       break;
    }

 }








}
