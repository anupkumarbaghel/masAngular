import {MasterRegisterViewmodel} from "../master-register/master-register.viewmodel";

export class IndentTableViewmodel{
  id:number;
  serialNo:string;
  description:string;
  quantity:number;
  unit:string;
  masterRegister:MasterRegisterViewmodel=new MasterRegisterViewmodel();
  isDelete:boolean=false;
  indentID:number;
  sequence:number;
}