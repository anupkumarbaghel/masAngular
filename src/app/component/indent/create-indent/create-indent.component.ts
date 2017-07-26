import { Component, OnInit } from '@angular/core';

import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';
import {IndentService} from '../../../service/indent/indent.service';
import {IndentTableViewmodel} from '../../../viewmodel/indent/indent-table.viewmodel';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})
export class CreateIndentComponent implements OnInit {

  ngOnInit(){
       this.onInitilizeIndent();
  }
  
  indent=new IndentViewmodel();
  indentTable = new IndentTableViewmodel();

  onInitilizeIndent(){
        this.indentService.getOpenIndent().subscribe(
      data=>this.indent=data as IndentViewmodel
      ,this.onError
    );
    
  }

  constructor(private indentService:IndentService) { }
  
  onSaveButtonClick():void{
        this.onSubmitIndentHeader();
        this.onSubmitIndentTableRow();
  }
  
   onDraftButtonClick():void{

   }

   onSubmitButtonClick():void{

   }
  
  onSubmitIndentTableRow():void{
    if(this.indent.id>0)
      {
          this.indentTable.IndentID=this.indent.id;
          this.indentService.createEditIndentTable(this.indentTable).subscribe(
            returnid=>this.indentTable.id=returnid as number
            ,this.onError
          );
      } 
  }
  
  onError(errorMessage){
    console.log("Error");
  }

  onSubmitIndentHeader():void {
    this.indentService.createEditIndent(this.indent).subscribe(
      returnid=>this.indent.id=returnid as number
      ,this.onError
    );

  }

}
