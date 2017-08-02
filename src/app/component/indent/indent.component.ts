import { Component, ViewChild } from '@angular/core';

import { CreateIndentComponent } from './create-indent/create-indent.component';
import { DraftIndentComponent } from './draft-indent/draft-indent.component';
import { SubmittedIndentComponent } from './submitted-indent/submitted-indent.component';

@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrls: ['./indent.component.css']
})
export class IndentComponent  {

  constructor() { }

 
  private selIndex: number;
  
  @ViewChild(CreateIndentComponent)
  private childCreate: CreateIndentComponent;

  @ViewChild(DraftIndentComponent)
  private childDraft: DraftIndentComponent;

  @ViewChild(SubmittedIndentComponent)
  private childSubmitted: SubmittedIndentComponent;

  onSelectedIndexChange(index: number) {
    this.selIndex = index;
  }
 
  onTabChange(val) {
    switch (val.index) {
      case 0:
        this.childCreate.InitilizeIndent();
        break;
      case 1:
        this.childDraft.getIndent();
        break;
      case 2:
        this.childSubmitted.getIndent();
      break;
    }



  }


}
