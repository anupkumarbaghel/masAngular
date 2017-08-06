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

 onLockOpen(store: StoreViewmodel) {
    this.store = store;
  }

 showIndent(){
   this.currentComponent="indent";
 }
 showMeasurement(){
    this.currentComponent="measurement";
 }
   








}
