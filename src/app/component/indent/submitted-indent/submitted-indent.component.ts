import { Component,ViewChildren,QueryList,Input } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';
import {ReadonlyIndentComponent} from '../readonly-indent/readonly-indent.component';

import { StoreViewmodel } from "../../../viewmodel/store/store.viewmodel";

@Component({
  selector: 'app-submitted-indent',
  templateUrl: './submitted-indent.component.html',
  styleUrls: ['./submitted-indent.component.css']
})
export class SubmittedIndentComponent{
  constructor(private indentService:IndentService) { }

  indentArray:IndentViewmodel[]=[];
  @ViewChildren("sic")private childReadonly:QueryList<ReadonlyIndentComponent>;
  @Input() inputStore:StoreViewmodel;
  @Input() isSitework:boolean;
  

  getIndent():void{
    this.indentService.getAllIndentByStatus("s",this.inputStore.id,this.isSitework)
    .subscribe(data=>this.indentArray=data as IndentViewmodel[]
              ,error=>console.log('error: '+JSON.stringify(error))
    );
  }
  
  onExpandButtonClick(indentID):void{ 
    this.childReadonly.forEach(e=>{
     if(e.indentID==indentID)
      e.getIndentByID();
  });   
  }

  onDelIndent(indentID:number){
    this.indentService.DeleteIndent(indentID).subscribe(null,null,()=>this.getIndent());
 }

}
