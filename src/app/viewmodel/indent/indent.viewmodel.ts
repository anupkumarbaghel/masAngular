import {IndentTableViewmodel} from "./indent-table.viewmodel"

export class IndentViewmodel{
  id:number;
  indentNumber:string;
  indentDate:Date;
  providedBy:string;
  providedTo:string;
  providedOn:string;
  issuedBy:string;
  isDelete:boolean;
  indentStatus:string;
  indentTableCollection:IndentTableViewmodel[];
}