import { Component, OnInit } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';

@Component({
  selector: 'app-draft-indent',
  templateUrl: './draft-indent.component.html',
  styleUrls: ['./draft-indent.component.css']
})
export class DraftIndentComponent implements OnInit {
ngOnInit() {
    this.getIndent();
  }

  indentArray:IndentViewmodel[]=[];

  constructor(private indentService:IndentService) { }

  getIndent():void{
    this.indentService.getAllIndentByStatus("d")
    .subscribe(data=>this.indentArray=data as IndentViewmodel[]
              ,error=>console.log('error: '+JSON.stringify(error))
    );
  }

}
