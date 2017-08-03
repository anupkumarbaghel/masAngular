import { Component, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { MeasurementBookService } from '../../../service/measurementbook/measurement-book.service';
import { MeasurementBookViewmodel } from '../../../viewmodel/measurementbook/measurement-book.viewmodel';
import { ReadonlyMeasurementBookComponent } from '../readonly-measurement-book/readonly-measurement-book.component';

@Component({
  selector: 'app-draft-measurement-book',
  templateUrl: './draft-measurement-book.component.html',
  styleUrls: ['./draft-measurement-book.component.css']
})
export class DraftMeasurementBookComponent  {

   constructor(private measurementBookService: MeasurementBookService) { }

  @Output() onDraftOpenSuccess = new EventEmitter<number>();

   measurementBookArray: MeasurementBookViewmodel[] = [];
   measurementBook: MeasurementBookViewmodel;

  @ViewChildren("dmbc") private childReadonly: QueryList<ReadonlyMeasurementBookComponent>;



  getMeasurementBook(): void {

    this.measurementBookService.getAllMeasurementBookByStatus("d")
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

  onOpenMeasurementBook(measurementBookID:number) {
    this.measurementBookService.draftOpenMeasurementBook(measurementBookID).subscribe(e=>this.onDraftOpenSuccess.emit(0));
  }
 
  onDelMeasurementBook(measurementBookID:number){
     this.measurementBookService.DeleteMeasurementBook(measurementBookID).subscribe(null,null,()=>this.getMeasurementBook());
  }

 

}
