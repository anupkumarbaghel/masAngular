import { Component, OnInit } from '@angular/core';

import {Indent_VM} from '../../../ViewModel/indent/indent-vm';
import {IndentService} from '../../../Services/indent/indent.service';

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.css']
})


export class CreateIndentComponent {
  indent=new Indent_VM();

  constructor(private indentService:IndentService) { }


  onSubmit() {
    this.indentService.createIndent(this.indent)
    .subscribe(function(data){   },function(error){alert('Your data not saved please try again')});
  }

}
