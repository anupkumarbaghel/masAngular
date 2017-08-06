import { Component, ViewChildren, QueryList, Output, EventEmitter,Input } from '@angular/core';

import { IndentService } from '../../../service/indent/indent.service';
import { IndentViewmodel } from '../../../viewmodel/indent/indent.viewmodel';
import { ReadonlyIndentComponent } from '../readonly-indent/readonly-indent.component';

import { StoreViewmodel } from "../../../viewmodel/store/store.viewmodel";

@Component({
  selector: 'app-draft-indent',
  templateUrl: './draft-indent.component.html',
  styleUrls: ['./draft-indent.component.css']
})
export class DraftIndentComponent {
  

  constructor(private indentService: IndentService) { }

  @Output() onDraftOpenSuccess = new EventEmitter<number>();
  @Input() inputStore:StoreViewmodel;

   indentArray: IndentViewmodel[] = [];
   indent: IndentViewmodel;

  @ViewChildren("dic") private childReadonly: QueryList<ReadonlyIndentComponent>;



  getIndent(): void {

    this.indentService.getAllIndentByStatus("d",this.inputStore.id)
      .subscribe(data => this.indentArray = data as IndentViewmodel[]
      , error => console.log('error: ' + JSON.stringify(error))
      );
  }

  onExpandButtonClick(indentID): void {
    this.childReadonly.forEach(e => {
      if (e.indentID == indentID)
        e.getIndentByID();
    });
  }

  onOpenIndent(indent: IndentViewmodel) {
    indent.storeID=this.inputStore.id;
    this.indentService.draftOpenIndent(indent).subscribe(e=>this.onDraftOpenSuccess.emit(0));
  }
 
  onDelIndent(indentID:number){
     this.indentService.DeleteIndent(indentID).subscribe(null,null,()=>this.getIndent());
  }


}
