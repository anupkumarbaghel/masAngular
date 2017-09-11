import {MasterRegisterViewmodel} from "../master-register/master-register.viewmodel";

export class MeasurementBookTableViewmodel{
        id:number;
        serialNumber:string;
        description:string;
        quantity:number;
        unit:string;
       
        masterRegister:MasterRegisterViewmodel=new MasterRegisterViewmodel();
        isDelete:boolean=false;
        measurementBookID:number;
        sequence:number;
}