import { Component, OnInit } from '@angular/core';

import {IndentService} from '../../../service/indent/indent.service';
import {IndentViewmodel} from '../../../viewmodel/indent/indent.viewmodel';

@Component({
  selector: 'app-submitted-indent',
  templateUrl: './submitted-indent.component.html',
  styleUrls: ['./submitted-indent.component.css']
})


export class SubmittedIndentComponent implements OnInit {
  ngOnInit() {
    //this.getIndent();
  }

  indentArray:IndentViewmodel[]=[];

  constructor(private indentService:IndentService) { }

  getIndent():void{
    this.indentService.getAllIndent()
    .subscribe(data=>this.indentArray=data as IndentViewmodel[])
              ,error=>console.log('error: '+JSON.stringify(error))
              ,()=>console.log('Indent records retrieved..');
  }

  

}
