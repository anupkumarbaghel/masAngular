import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { IndentViewmodel } from '../../../viewmodel/indent/indent.viewmodel';
import { IndentService } from '../../../service/indent/indent.service';
import { IndentTableViewmodel } from '../../../viewmodel/indent/indent-table.viewmodel';

import { StoreViewmodel } from "../../../viewmodel/store/store.viewmodel";
import { MasterRegisterService } from '../../../service/master-register/master-register.service';
import { MasterRegisterViewmodel } from "../../../viewmodel/master-register/master-register.viewmodel";

import {IDatePickerConfig} from 'ng2-date-picker';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})
export class CreateIndentComponent implements OnInit {

  constructor(private masterRegisterService: MasterRegisterService,private indentService: IndentService, public dialog: MdDialog) { }
  ngOnInit() {
    this.initilizeMasterRegisterForDropDown();
    this.InitilizeIndent();
    // this.datePickerConfig={};
    // this.datePickerConfig.format="DD.MM.YYYY";
    // this.datePickerConfig.drops='up';
    // this.datePickerConfig.disableKeypress=true;
    
  }
  @Output() onSelectedIndexChange = new EventEmitter<number>();
  @Input() inputStore: StoreViewmodel;
  @Input() isSitework:boolean;

  indent = new IndentViewmodel();
  masterRegisterCollection: MasterRegisterViewmodel[] = [new MasterRegisterViewmodel()];
  error: boolean;
  nameContractorRowSpan:number=1;
  submissionIsCorrect:boolean;
  datePickerConfig:IDatePickerConfig;

  

  onSaveButtonClick(): void {this.indent.indentStatus = "o"; this.saveIndent(); }
  onDraftButtonClick(): void { this.indent.indentStatus = "d"; this.saveIndent(); }
  onSubmitButtonClick(): void {this.validationOnSubmit(); if(this.submissionIsCorrect){this.openDialog();}}
  onAddRowButtonClick(): void {
    this.indent.indentTableCollection.push(new IndentTableViewmodel());
    this.nameContractorRowSpan=this.indent.indentTableCollection.filter(e=>e.isDelete==false).length;
  }

  validationOnSubmit(){
    this.submissionIsCorrect=true;
     let submissionValidateString="Please Fill : ";
     if(!this.indent.indentNumber&&!this.isSitework){ 
      this.submissionIsCorrect=false;
      submissionValidateString+="Indent no.,";
     } 
     if(!this.indent.indentDate){
      this.submissionIsCorrect=false;
      submissionValidateString+=" Date,";
     }
     if(!this.indent.providedTo){
      this.submissionIsCorrect=false;
      submissionValidateString+=" To,";
     } 
     if(!this.indent.providedBy){
      this.submissionIsCorrect=false;
      submissionValidateString+=" By,";
     }
     if(!this.indent.submittedDate){
      this.submissionIsCorrect=false;
      submissionValidateString+=" Submitted Date,";
     } 
     if(!this.submissionIsCorrect)
     alert(submissionValidateString);
  }
  toggleButtonChanged(){
    this.indent.isReceive=this.indent.isReceive?false:true;
    
    if(this.indent.isReceive){
      this.indent.providedBy="";
      this.indent.providedTo=this.inputStore.name;      
     
      }
      else{
        this.indent.providedBy=this.inputStore.name;
        this.indent.providedTo="";
       
      }
    
  }
  openDialog() {
    let dialogRef = this.dialog.open(ConfirmIndentSubmittedDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "confirm") {
        this.SubmitConfirmed();
      }
      else {
        //empty for any othere logic
      }
    });
  }
  SubmitConfirmed(): void { this.indent.indentStatus = "s"; this.saveIndent(); }

  

  onDelButtonClick(indentTable): void {
    indentTable.isDelete = true;
    if (this.indent.indentTableCollection.length <= 0) {
      this.indent.indentTableCollection.push(new IndentTableViewmodel());
    }
    this.nameContractorRowSpan=this.indent.indentTableCollection.filter(e=>e.isDelete==false).length;
  }

  InitilizeIndent() {
    this.indent.providedTo=this.inputStore.name;
    this.indentService.getOpenIndent(this.inputStore.id,this.isSitework)
      .subscribe(data => this.indent = data as IndentViewmodel
      , error => this.onError(error)
      //, () => this.indent.indentTableCollection.push(new IndentTableViewmodel())
      ); 
  }
  sortMasterRegister(){
    this.masterRegisterCollection.sort((a, b) =>a.serialNumber-b.serialNumber);
  }
  initilizeMasterRegisterForDropDown(){
    this.masterRegisterService.getAllMasterRegister(this.inputStore.id).subscribe(
      responseMasterRegisters => this.masterRegisterCollection = responseMasterRegisters as MasterRegisterViewmodel[]
      , error => alert(error)
      ,()=>this.sortMasterRegister()
    );
  }

  saveIndent(): void {
    
    if (this.inputStore) {
      if (this.inputStore.id > 0) {
        this.indent.storeID=this.inputStore.id;
        this.indent.isSitework=this.isSitework;
        this.indentService.createEditIndent(this.indent).subscribe(
          retrunIndent => this.indent = retrunIndent as IndentViewmodel
          , this.onError
          , () => { this.onSaveSuccess() }
        );

      }
    }
    else{
      this.onError('Store is not valid');
    }

  }

  byId(item1: MasterRegisterViewmodel, item2: MasterRegisterViewmodel) {
    if(item1&&item2)
    return item1.id === item2.id;
    else
      return false;
  }

  onSaveSuccess() {
    let index = 0;
    switch (this.indent.indentStatus) {
      case 'o':
        index = 0;
        break;
      case 'd':
        index = 1;
        this.indent = new IndentViewmodel();
        break;
      case 's':
        index = 2;
        this.indent = new IndentViewmodel();
        break;
      default:
        index = 0;
        break;
    }
    this.onSelectedIndexChange.emit(index);
    alert("Saved successfully");
  }
  onError(errorMessage) {
    if (errorMessage.status == 404) {
      //if needed
    }
    else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }
  }



}



@Component({
  selector: 'confirm-indent-submitted-dialog',
  templateUrl: 'confirm-indent-submitted-dialog.html',
})
export class ConfirmIndentSubmittedDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmIndentSubmittedDialog>) { }
}