import { Component, OnInit } from '@angular/core';

import {IndentService} from '../../../Services/indent/indent.service';
import {Indent_VM} from '../../../ViewModel/indent/indent-vm';

@Component({
  selector: 'app-submitted-indent',
  templateUrl: './submitted-indent.component.html',
  styleUrls: ['./submitted-indent.component.css']
})


export class SubmittedIndentComponent implements OnInit {
  indentArray:Indent_VM[]=[];

  constructor(private indentService:IndentService) { }

  getIndent():void{
    this.indentService.getAllIndent()
    .subscribe(data=>this.indentArray=data as Indent_VM[])
              ,error=>console.log('error: '+JSON.stringify(error))
              ,()=>console.log('Indent records retrieved..');
  }

  ngOnInit() {
    this.getIndent();
  }

}
