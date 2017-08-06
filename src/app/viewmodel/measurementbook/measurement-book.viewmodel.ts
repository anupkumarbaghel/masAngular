import {MeasurementBookTableViewmodel} from "./measurement-book-table.viewmodel"

export class MeasurementBookViewmodel{
  id:number;
  nameOfContractor:string;
  aggrementNumber:string;
  workOrderNumber:string;
  mbNumber:string;
  pageNumber:string;
  isDelete:boolean;
  measurementBookStatus:string;
  storeID:number;
  mbTable:MeasurementBookTableViewmodel[];
}