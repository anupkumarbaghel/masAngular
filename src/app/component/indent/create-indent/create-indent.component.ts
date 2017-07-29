import { Component, OnInit } from '@angular/core';

import { IndentViewmodel } from '../../../viewmodel/indent/indent.viewmodel';
import { IndentService } from '../../../service/indent/indent.service';
import { IndentTableViewmodel } from '../../../viewmodel/indent/indent-table.viewmodel';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})
export class CreateIndentComponent implements OnInit {

  ngOnInit() {
    this.InitilizeIndent();
  }
  indent = new IndentViewmodel();
  error: boolean;
  constructor(private indentService: IndentService) { }
  onSaveButtonClick(): void { this.saveIndent(); }
  onDraftButtonClick(): void {}
  onSubmitButtonClick(): void {}
  onAddRowButtonClick(): void {
    this.indent.indentTableCollection.push(new IndentTableViewmodel());
  }
  onDelButtonClick(indentTable): void {
     indentTable.isDelete=true;
    if(this.indent.indentTableCollection.length<=0){  
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
    alert(JSON.stringify(this.indent));
    this.indentService.createEditIndent(this.indent).subscribe(
      retrunIndent => this.indent = retrunIndent as IndentViewmodel
      , this.onError
    );
  }

  onError(errorMessage) {
    if (errorMessage.status==404) {
      this.indent.indentTableCollection = [];
      this.indent.indentTableCollection.push(new IndentTableViewmodel());
    }
    else {
      this.error = true;
      setTimeout( ()=> {
        this.error = false;
      }, 5000);
    }
  }






}
