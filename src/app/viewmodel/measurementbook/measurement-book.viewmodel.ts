import {MeasurementBookTableViewmodel} from "./measurement-book-table.viewmodel"

export class MeasurementBookViewmodel{
  id:number;
  nameOfContractor:string;
  aggrementNumber:string;
  workOrderNumber:string;
  lUNOrderNo:string;
  mbNumber:string;
  pageNumber:string;
  measurementDate:Date;
  isDelete:boolean;
  measurementBookStatus:string;
  storeID:number;
  mbTable:MeasurementBookTableViewmodel[]=[new MeasurementBookTableViewmodel()];
  sequence:number;
}