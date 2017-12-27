import {IndentTableViewmodel} from "./indent-table.viewmodel";

export class IndentViewmodel{
  id:number;
  indentNumber:string;
  indentDate:Date;
  submittedDate:Date;
  providedBy:string;
  providedTo:string;
  providedOn:string;
  issuedBy:string;
  isDelete:boolean;
  isReceive:boolean=true;
  indentStatus:string;
  headOfAccount:string;
  storeID:number;
  indentTableCollection:IndentTableViewmodel[]=[new IndentTableViewmodel()];
  sequence:number;
  isSitework:boolean;
}