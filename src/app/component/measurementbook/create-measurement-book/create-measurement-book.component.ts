import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { MeasurementBookViewmodel } from '../../../viewmodel/measurementbook/measurement-book.viewmodel';
import { MeasurementBookService } from '../../../service/measurementbook/measurement-book.service';
import { MeasurementBookTableViewmodel } from '../../../viewmodel/measurementbook/measurement-book-table.viewmodel';
import { StoreViewmodel } from "../../../viewmodel/store/store.viewmodel";

import { MasterRegisterService } from '../../../service/master-register/master-register.service';
import { MasterRegisterViewmodel } from "../../../viewmodel/master-register/master-register.viewmodel";

import {IDatePickerConfig} from 'ng2-date-picker';

@Component({
  selector: 'app-create-measurement-book',
  templateUrl: './create-measurement-book.component.html',
  styleUrls: ['./create-measurement-book.component.css']
})
export class CreateMeasurementBookComponent implements OnInit {

  constructor(private masterRegisterService: MasterRegisterService,private measurementBookService: MeasurementBookService, public dialog: MdDialog) { }
  ngOnInit() { 
    this.InitilizeMeasurementBook();
    this.initilizeMasterRegisterForDropDown();
    // this.datePickerConfig={};
    // this.datePickerConfig.format="DD.MM.YYYY";
    // this.datePickerConfig.drops='down';
    // this.datePickerConfig.disableKeypress=true;
  }
  @Output() onSelectedIndexChange = new EventEmitter<number>();
  @Input() inputStore: StoreViewmodel;

  measurementBook = new MeasurementBookViewmodel();
  masterRegisterCollection: MasterRegisterViewmodel[] = [new MasterRegisterViewmodel()];
  error: boolean;
  submissionIsCorrect:boolean;
  datePickerConfig:IDatePickerConfig;
  headOfAccountRowSpan:number=1;

  onSaveButtonClick(): void { this.measurementBook.measurementBookStatus = "o"; this.saveMeasurementBook(); }
  onDraftButtonClick(): void { this.measurementBook.measurementBookStatus = "d"; this.saveMeasurementBook(); }
  onSubmitButtonClick(): void { this.validationOnSubmit(); if(this.submissionIsCorrect){ this.openDialog();} }

  validationOnSubmit(){
    this.submissionIsCorrect=true;
     let submissionValidateString="Please Fill : ";
     if(!this.measurementBook.nameOfContractor){ 
      this.submissionIsCorrect=false;
      submissionValidateString+=" Firm/Contractor,";
     } 
     if(!this.measurementBook.measurementDate){ 
      this.submissionIsCorrect=false;
      submissionValidateString+=" Measurement Date,";
     } 
     
     if(!this.submissionIsCorrect)
     alert(submissionValidateString);
  }


  openDialog() {
    let dialogRef = this.dialog.open(ConfirmMeasurementBookSubmittedDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "confirm") {
        this.SubmitConfirmed();
      }
      else {
        //empty for any othere logic
      }
    });
  }
  SubmitConfirmed(): void { this.measurementBook.measurementBookStatus = "s"; this.saveMeasurementBook(); }

  onAddRowButtonClick(): void {
    this.measurementBook.mbTable.push(new MeasurementBookTableViewmodel());
    this.headOfAccountRowSpan=this.measurementBook.mbTable.filter(e=>e.isDelete==false).length;
  }

  onDelButtonClick(measurementBookTable): void {
    measurementBookTable.isDelete = true;
    if (this.measurementBook.mbTable.length <= 0) {
      this.measurementBook.mbTable.push(new MeasurementBookTableViewmodel());
    }
    this.headOfAccountRowSpan=this.measurementBook.mbTable.filter(e=>e.isDelete==false).length;
  }

  InitilizeMeasurementBook() {
    this.measurementBookService.getOpenMeasurementBook(this.inputStore.id)
      .subscribe(data => this.measurementBook = data as MeasurementBookViewmodel
      , error => this.onError(error)
      //, () => this.indent.indentTableCollection.push(new MeasurementBookTableViewmodel())
      );
  }
  initilizeMasterRegisterForDropDown(){
    this.masterRegisterService.getAllMasterRegister(this.inputStore.id).subscribe(
      responseMasterRegisters => this.masterRegisterCollection = responseMasterRegisters as MasterRegisterViewmodel[]
      , error => alert(error)
    );
  }

  byId(item1: MasterRegisterViewmodel, item2: MasterRegisterViewmodel) {
    if(item1&&item2)
    return item1.id === item2.id;
    else
      return false;
  }

  saveMeasurementBook(): void {
    if (this.inputStore) {
      if (this.inputStore.id > 0) {
        this.measurementBook.storeID=this.inputStore.id;
        this.measurementBookService.createEditMeasurementBook(this.measurementBook).subscribe(
          retrunMB => this.measurementBook = retrunMB as MeasurementBookViewmodel
          , this.onError
          , () => { this.onSaveSuccess() }
        );
      }
    }
    else {
      this.onError("Store is not valid");
    }

  }

  onSaveSuccess() {
    let index = 0;
    switch (this.measurementBook.measurementBookStatus) {
      case 'o':
        index = 0;
        break;
      case 'd':
        index = 1;
        this.measurementBook = new MeasurementBookViewmodel();
        break;
      case 's':
        index = 2;
        this.measurementBook = new MeasurementBookViewmodel();
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
  selector: 'confirm-measurement-book-submitted-dialog',
  templateUrl: 'confirm-measurement-book-submitted-dialog.html',
})
export class ConfirmMeasurementBookSubmittedDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmMeasurementBookSubmittedDialog>) { }
}
