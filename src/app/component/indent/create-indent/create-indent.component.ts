import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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
       this.InitilizeIndent();
  }
  
  indent=new IndentViewmodel();
  indentTable = new IndentTableViewmodel();
  error:boolean;

  InitilizeIndent(){
        this.indentService.getOpenIndent()
        .subscribe(
      data=>{
        this.indent=data as IndentViewmodel;
        this.indentTable=  data["indentTableCollection"][0] as IndentTableViewmodel;
      }
      ,this.onError
      
    );
    
  }

  constructor(private indentService:IndentService) { }
  
  onSaveButtonClick():void{
        this.onSubmitIndentHeader();
  }
  
   onDraftButtonClick():void{

   }

   onSubmitButtonClick():void{

   }
  
  onSubmitIndentTableRow(indentID:number):void{
    if(indentID>0)
      {
          this.indentTable.indentID=indentID;
          this.indentService.createEditIndentTable(this.indentTable).subscribe(
            returnid=>this.indentTable.id=returnid as number
            ,this.onError
          );
      } 
  }
  
  onError(errorMessage){
       this.error=true;
       setTimeout(function() {
         this.error=false;
       }, 5000);
  }
 

  onSubmitIndentHeader():void {
    this.indentService.createEditIndent(this.indent).subscribe(
      returnid=>this.indent.id=returnid as number
      ,this.onError
      ,()=>this.onSubmitIndentTableRow(this.indent.id)
    );

  }

}
