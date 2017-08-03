import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

import { MeasurementBookViewmodel } from '../../../viewmodel/measurementbook/measurement-book.viewmodel';
import { MeasurementBookService } from '../../../service/measurementbook/measurement-book.service';
import { MeasurementBookTableViewmodel } from '../../../viewmodel/measurementbook/measurement-book-table.viewmodel';

@Component({
  selector: 'app-create-measurement-book',
  templateUrl: './create-measurement-book.component.html',
  styleUrls: ['./create-measurement-book.component.css']
})
export class CreateMeasurementBookComponent implements OnInit {

  constructor(private measurementBookService: MeasurementBookService,public dialog: MdDialog) { }
  ngOnInit() {
    this.InitilizeMeasurementBook();
  }
  @Output() onSelectedIndexChange = new EventEmitter<number>();

  measurementBook = new MeasurementBookViewmodel();
  error: boolean;

  onSaveButtonClick(): void { this.measurementBook.measurementBookStatus = "o"; this.saveMeasurementBook(); }
  onDraftButtonClick(): void {this.measurementBook.measurementBookStatus = "d"; this.saveMeasurementBook();}
  onSubmitButtonClick(): void {this.openDialog();  }
  openDialog() {
    let dialogRef = this.dialog.open(ConfirmMeasurementBookSubmittedDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result=="confirm"){
           this.SubmitConfirmed();
      }
      else{
        //empty for any othere logic
      }
    });
  }
  SubmitConfirmed():void{this.measurementBook.measurementBookStatus = "s"; this.saveMeasurementBook();}

  onAddRowButtonClick(): void {
    this.measurementBook.mbTable.push(new MeasurementBookTableViewmodel());
  }

  onDelButtonClick(measurementBookTable): void {
    measurementBookTable.isDelete = true;
    if (this.measurementBook.mbTable.length <= 0) {
      this.measurementBook.mbTable.push(new MeasurementBookTableViewmodel());
    }
  }

  InitilizeMeasurementBook() {
    this.measurementBookService.getOpenMeasurementBook()
      .subscribe(data => this.measurementBook = data as MeasurementBookViewmodel
      , error => this.onError(error)
      //, () => this.indent.indentTableCollection.push(new MeasurementBookTableViewmodel())
      );
  }

  saveMeasurementBook(): void {
    this.measurementBookService.createEditMeasurementBook(this.measurementBook).subscribe(
      retrunMB => this.measurementBook = retrunMB as MeasurementBookViewmodel
      , this.onError
      ,()=>{this.onSaveSuccess() } 
    );
  }

  onSaveSuccess() {
    let index = 0;
    switch (this.measurementBook.measurementBookStatus) {
      case 'o':
        index = 0;
        break;
      case 'd':
        index = 1;
        this.measurementBook=new MeasurementBookViewmodel();
        break;
      case 's':
        index = 2;
        this.measurementBook=new MeasurementBookViewmodel();
        break;
      default:
        index = 0;
        break;
    }
    this.onSelectedIndexChange.emit(index);
  }
  onError(errorMessage) {
    if (errorMessage.status == 404) {
      this.measurementBook.mbTable = [];
      this.measurementBook.mbTable.push(new MeasurementBookTableViewmodel());
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
  constructor(public dialogRef: MdDialogRef<ConfirmMeasurementBookSubmittedDialog>) {}
}
