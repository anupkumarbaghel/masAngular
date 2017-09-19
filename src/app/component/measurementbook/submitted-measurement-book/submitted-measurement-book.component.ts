import { Component, ViewChildren, QueryList, Output, EventEmitter,Input } from '@angular/core';

import { MeasurementBookService } from '../../../service/measurementbook/measurement-book.service';
import { MeasurementBookViewmodel } from '../../../viewmodel/measurementbook/measurement-book.viewmodel';
import { ReadonlyMeasurementBookComponent } from '../readonly-measurement-book/readonly-measurement-book.component';

import { StoreViewmodel } from "../../../viewmodel/store/store.viewmodel";

@Component({
  selector: 'app-submitted-measurement-book',
  templateUrl: './submitted-measurement-book.component.html',
  styleUrls: ['./submitted-measurement-book.component.css']
})
export class SubmittedMeasurementBookComponent {

  constructor(private measurementBookService: MeasurementBookService) { }

  @Output() onSubmittedOpenSuccess = new EventEmitter<number>();
  @Input() inputStore:StoreViewmodel;

   measurementBookArray: MeasurementBookViewmodel[] = [];
   measurementBook: MeasurementBookViewmodel;

  @ViewChildren("smbc") private childReadonly: QueryList<ReadonlyMeasurementBookComponent>;



  getMeasurementBook(): void {

    this.measurementBookService.getAllMeasurementBookByStatus("s",this.inputStore.id)
      .subscribe(data => this.measurementBookArray = data as MeasurementBookViewmodel[]
      , error => console.log('error: ' + JSON.stringify(error))
      );
  }

  onExpandButtonClick(measurementBookID): void {
    this.childReadonly.forEach(e => {
      if (e.measurementBookID == measurementBookID)
        e.getMeasurementBookByID();
    });
  }
  onDelMeasurementBook(measurementBookID:number){
    this.measurementBookService.DeleteMeasurementBook(measurementBookID).subscribe(null,null,()=>this.getMeasurementBook());
 }
  

}
