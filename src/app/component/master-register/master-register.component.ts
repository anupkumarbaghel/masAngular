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
  masterRegister: MasterRegisterViewmodel = new MasterRegisterViewmodel();


  onSaveButtonClick() {
    if (this.masterRegister.materialNameWithDescription) {
      this.masterRegister.storeID = this.inputStore.id;
      this.masterRegisterService.createMasterRegister(this.masterRegister)
        .subscribe(
        data => this.masterRegisterCollection.push(data as MasterRegisterViewmodel)
        , error => alert(JSON.stringify(error))
        , () => this.masterRegister = new MasterRegisterViewmodel()
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
        , () => alert("Update Successfully")
        );
    }
  }

  getAllMasterRegister() {
    this.masterRegisterService.getAllMasterRegister(this.inputStore.id).subscribe(
      responseMasterRegisters => this.masterRegisterCollection = responseMasterRegisters as MasterRegisterViewmodel[]
      , error => alert(error)
    );
  }

  onDelMasterRegister(masterRegisterID:number){
    this.masterRegisterService.DeleteMasterRegister(masterRegisterID).subscribe(null
      ,error=>alert("Material cannot be deleted as used in the Indent or Measurement")
      ,()=>this.getAllMasterRegister());
 }

}
