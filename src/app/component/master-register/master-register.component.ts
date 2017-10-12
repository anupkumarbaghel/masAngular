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
    this.masterRegisterCollection.sort((a, b) =>a.serialNumber-b.serialNumber);
  }


  getAllMasterRegister() {
    this.masterRegisterService.getAllMasterRegister(this.inputStore.id).subscribe(
      responseMasterRegisters => this.masterRegisterCollectionAll = responseMasterRegisters as MasterRegisterViewmodel[]
      , error => alert(error)
      ,()=>{ 
        this.masterRegisterCollectionAll.splice(0,1);
        this.masterRegisterCollection=this.masterRegisterCollectionAll.slice((this.pageNumber-1)*100,this.pageNumber*100)
        this.sortMasterRegister(); 
      }
    );
   
  }

  onDelMasterRegister(masterRegisterID:number){
    this.masterRegisterService.DeleteMasterRegister(masterRegisterID).subscribe(null
      ,error=>alert("Material cannot be deleted as used in the Indent or Measurement")
      ,()=>this.getAllMasterRegister());
 }

 onPageButtonClick(){
  this.masterRegisterCollection=this.masterRegisterCollectionAll.slice((this.pageNumber-1)*100,this.pageNumber*100)
 }

}
