import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { IndentViewmodel } from '../../../viewmodel/indent/indent.viewmodel';
import { IndentService } from '../../../service/indent/indent.service';
import { IndentTableViewmodel } from '../../../viewmodel/indent/indent-table.viewmodel';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})
export class CreateIndentComponent implements OnInit {

  constructor(private indentService: IndentService,public dialog: MdDialog) { }
  ngOnInit() {
    this.InitilizeIndent();
  }
  @Output() onSelectedIndexChange = new EventEmitter<number>();

  indent = new IndentViewmodel();
  error: boolean;

  onSaveButtonClick(): void { this.indent.indentStatus = "o"; this.saveIndent(); }
  onDraftButtonClick(): void {this.indent.indentStatus = "d"; this.saveIndent();}
  onSubmitButtonClick(): void {this.openDialog();  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result=="confirm"){
           this.SubmitConfirmed();
      }
      else{
        //empty for any othere logic
      }
    });
  }
  SubmitConfirmed():void{this.indent.indentStatus = "s"; this.saveIndent();}

  onAddRowButtonClick(): void {
    this.indent.indentTableCollection.push(new IndentTableViewmodel());
  }

  onDelButtonClick(indentTable): void {
    indentTable.isDelete = true;
    if (this.indent.indentTableCollection.length <= 0) {
      this.indent.indentTableCollection.push(new IndentTableViewmodel());
    }
  }

  InitilizeIndent() {
    this.indentService.getOpenIndent()
      .subscribe(data => this.indent = data as IndentViewmodel
      , error => this.onError(error)
      //, () => this.indent.indentTableCollection.push(new IndentTableViewmodel())
      );
  }

  saveIndent(): void {
    this.indentService.createEditIndent(this.indent).subscribe(
      retrunIndent => this.indent = retrunIndent as IndentViewmodel
      , this.onError
      ,()=>{this.onSaveSuccess() } 
    );
  }

  onSaveSuccess() {
    let index = 0;
    switch (this.indent.indentStatus) {
      case 'o':
        index = 0;
        break;
      case 'd':
        index = 1;
        this.indent=new IndentViewmodel();
        break;
      case 's':
        index = 2;
        this.indent=new IndentViewmodel();
        break;
      default:
        index = 0;
        break;
    }
    this.onSelectedIndexChange.emit(index);
  }
  onError(errorMessage) {
    if (errorMessage.status == 404) {
      this.indent.indentTableCollection = [];
      this.indent.indentTableCollection.push(new IndentTableViewmodel());
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
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}