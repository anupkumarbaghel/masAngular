import { Component,ViewChild } from '@angular/core';

import { CreateMeasurementBookComponent } from './create-measurement-book/create-measurement-book.component';
import { DraftMeasurementBookComponent } from './draft-measurement-book/draft-measurement-book.component';
import { SubmittedMeasurementBookComponent } from './submitted-measurement-book/submitted-measurement-book.component';

@Component({
  selector: 'app-measurementbook',
  templateUrl: './measurementbook.component.html',
  styleUrls: ['./measurementbook.component.css']
})
export class MeasurementbookComponent {

    constructor() { }

 
 selIndex: number;
  
  @ViewChild(CreateMeasurementBookComponent)
  private childCreate: CreateMeasurementBookComponent;

  @ViewChild(DraftMeasurementBookComponent)
  private childDraft: DraftMeasurementBookComponent;

  @ViewChild(SubmittedMeasurementBookComponent)
  private childSubmitted: SubmittedMeasurementBookComponent;

  onSelectedIndexChange(index: number) {
    this.selIndex = index;
  }
 
  onTabChange(val) {
    switch (val.index) {
      case 0:
        this.childCreate.InitilizeMeasurementBook();
        break;
      case 1:
        this.childDraft.getMeasurementBook();
        break;
      case 2:
        this.childSubmitted.getMeasurementBook();
      break;
    }
  }

}
