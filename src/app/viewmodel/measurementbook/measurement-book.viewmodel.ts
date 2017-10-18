import {MeasurementBookTableViewmodel} from "./measurement-book-table.viewmodel"

export class MeasurementBookViewmodel{
  id:number;
  nameOfContractor:string;
  aggrementNumber:string;
  workOrderNumber:string;
  lunOrderNo:string;
  mbNumber:string;
  pageNumber:string;
  measurementDate:Date;
  isDelete:boolean;
  measurementBookStatus:string;
  headOfAccount:string;
  storeID:number;
  mbTable:MeasurementBookTableViewmodel[]=[new MeasurementBookTableViewmodel()];
  sequence:number;
  billNo:string;
  billMBNo:string;
  billPageNo:string;
  billDate:Date;
}