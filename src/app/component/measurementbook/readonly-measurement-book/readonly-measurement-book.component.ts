import { Component,Input} from '@angular/core';

import {MeasurementBookService} from '../../../service/measurementbook/measurement-book.service';
import {MeasurementBookViewmodel} from '../../../viewmodel/measurementbook/measurement-book.viewmodel';

@Component({
  selector: 'app-readonly-measurement-book',
  templateUrl: './readonly-measurement-book.component.html',
  styleUrls: ['./readonly-measurement-book.component.css']
})
export class ReadonlyMeasurementBookComponent{

 constructor(private measurementBookService:MeasurementBookService) { }
 

  @Input() measurementBookID:number;
  measurementBook=new MeasurementBookViewmodel();

  getMeasurementBookByID(){
     this.measurementBookService.getMeasurementBook(this.measurementBookID)
     .subscribe(data => this.measurementBook = data as MeasurementBookViewmodel);
  }

}
