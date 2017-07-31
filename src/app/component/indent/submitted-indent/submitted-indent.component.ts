import { Component,ViewChildren,QueryList } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';
import {ReadonlyIndentComponent} from '../readonly-indent/readonly-indent.component';

@Component({
  selector: 'app-submitted-indent',
  templateUrl: './submitted-indent.component.html',
  styleUrls: ['./submitted-indent.component.css']
})
export class SubmittedIndentComponent{
  constructor(private indentService:IndentService) { }

  indentArray:IndentViewmodel[]=[];
  @ViewChildren("sic")private childReadonly:QueryList<ReadonlyIndentComponent>;

  getIndent():void{
    this.indentService.getAllIndentByStatus("s")
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
