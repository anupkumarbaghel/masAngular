import { Component, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { MeasurementBookService } from '../../../service/measurementbook/measurement-book.service';
import { MeasurementBookViewmodel } from '../../../viewmodel/measurementbook/measurement-book.viewmodel';
import { ReadonlyMeasurementBookComponent } from '../readonly-measurement-book/readonly-measurement-book.component';

@Component({
  selector: 'app-submitted-measurement-book',
  templateUrl: './submitted-measurement-book.component.html',
  styleUrls: ['./submitted-measurement-book.component.css']
})
export class SubmittedMeasurementBookComponent {

  constructor(private measurementBookService: MeasurementBookService) { }

  @Output() onSubmittedOpenSuccess = new EventEmitter<number>();

   measurementBookArray: MeasurementBookViewmodel[] = [];
   measurementBook: MeasurementBookViewmodel;

  @ViewChildren("smbc") private childReadonly: QueryList<ReadonlyMeasurementBookComponent>;



  getMeasurementBook(): void {

    this.measurementBookService.getAllMeasurementBookByStatus("s")
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

  

}
