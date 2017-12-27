import { Component, Input } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';

@Component({
  selector: 'app-readonly-indent',
  templateUrl: './readonly-indent.component.html',
  styleUrls: ['./readonly-indent.component.css']
})
export class ReadonlyIndentComponent  {
  constructor(private indentService:IndentService) { }
 

  @Input() indentID:number;
  indent=new IndentViewmodel();
  @Input() isSitework:boolean;
  

  getIndentByID(){
     this.indentService.GetIndent(this.indentID)
     .subscribe(data => this.indent = data as IndentViewmodel);
  }

}
