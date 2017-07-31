import { Component,ViewChildren,QueryList } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';
import {ReadonlyIndentComponent} from '../readonly-indent/readonly-indent.component';

@Component({
  selector: 'app-draft-indent',
  templateUrl: './draft-indent.component.html',
  styleUrls: ['./draft-indent.component.css']
})
export class DraftIndentComponent{

  constructor(private indentService:IndentService) { }

  indentArray:IndentViewmodel[]=[];
 
   @ViewChildren("dic")private childReadonly:QueryList<ReadonlyIndentComponent>;



  getIndent():void{
    
    this.indentService.getAllIndentByStatus("d")
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

}
