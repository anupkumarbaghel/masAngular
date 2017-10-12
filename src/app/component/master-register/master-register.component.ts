import { Component, OnInit, Input } from '@angular/core';

import { StoreViewmodel } from "../../viewmodel/store/store.viewmodel";
import { MasterRegisterViewmodel } from "../../viewmodel/master-register/master-register.viewmodel";

import { MasterRegisterService } from '../../service/master-register/master-register.service';



@Component({
  selector: 'app-master-register',
  templateUrl: './master-register.component.html',
  styleUrls: ['./master-register.component.css']
})
export class MasterRegisterComponent implements OnInit {

  constructor(private masterRegisterService: MasterRegisterService) { }

  ngOnInit() {
    this.getAllMasterRegister();
  }

  @Input() inputStore: StoreViewmodel;


  masterRegisterCollection: MasterRegisterViewmodel[] = [new MasterRegisterViewmodel()];
  masterRegisterCollectionAll:MasterRegisterViewmodel[] = [new MasterRegisterViewmodel()];
  masterRegister: MasterRegisterViewmodel = new MasterRegisterViewmodel();
  pageNumber:number=1;
  pageSize:number=10;


  onSaveButtonClick() {
    if (this.masterRegister.materialNameWithDescription) {
      this.masterRegister.storeID = this.inputStore.id;
      this.masterRegisterService.createMasterRegister(this.masterRegister)
        .subscribe(
        data => this.masterRegisterCollection.push(data as MasterRegisterViewmodel)
        , error => alert(JSON.stringify(error))
        , () =>{this.getAllMasterRegister();this.masterRegister = new MasterRegisterViewmodel();} 
        );
    }
  }

  onUpdateButtonClick(masterRegister: MasterRegisterViewmodel){
    if (masterRegister.materialNameWithDescription) {
      masterRegister.storeID = this.inputStore.id;
      this.masterRegisterService.createMasterRegister(masterRegister)
        .subscribe(
        data => masterRegister=data as MasterRegisterViewmodel
        , error => alert(JSON.stringify(error))
        , () =>{this.getAllMasterRegister();
            alert("Update Successfully")}
        );
       
    }
  }

  sortMasterRegister(){
    this.masterRegisterCollectionAll.sort((a, b) =>a.serialNumber-b.serialNumber);
  }


  getAllMasterRegister() {
    this.masterRegisterService.getAllMasterRegister(this.inputStore.id).subscribe(
      responseMasterRegisters => this.masterRegisterCollectionAll = responseMasterRegisters as MasterRegisterViewmodel[]
      , error => alert(error)
      ,()=>{ 
        this.sortMasterRegister(); 
        this.masterRegisterCollectionAll.splice(0,1);
        this.setPage();
        
      }
    );
   
  }

  onDelMasterRegister(masterRegisterID:number){
    this.masterRegisterService.DeleteMasterRegister(masterRegisterID).subscribe(null
      ,error=>alert("Material cannot be deleted as used in the Indent or Measurement")
      ,()=>this.getAllMasterRegister());
 }
 setPage(){
  this.masterRegisterCollection=this.masterRegisterCollectionAll.slice((this.pageNumber-1)*this.pageSize,this.pageNumber*this.pageSize)
 }
 maxPageNumber(){
  let totalItem= this.masterRegisterCollectionAll.length;
  let maxPageNumber=Math.ceil( totalItem/this.pageSize);
  return maxPageNumber;
 }
 plusPageNumber(){
 let maxPageNo=this.maxPageNumber();
  if(this.pageNumber<maxPageNo && this.pageNumber>=1) this.pageNumber=this.pageNumber+1;
  else this.pageNumber=maxPageNo;
 }
 minusPageNumber(){
  let maxPageNo=this.maxPageNumber();
    if(this.pageNumber>1&&this.pageNumber<=maxPageNo)  this.pageNumber=this.pageNumber-1;
    else this.pageNumber=1;
 }
 onPagePlusButtonClick(){
   this.plusPageNumber();
   this.setPage();
 }
 onPageMinusButtonClick(){
  this.minusPageNumber();
   this.setPage();
 }

}
