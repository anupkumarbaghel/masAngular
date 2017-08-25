import {MasterRegisterViewmodel} from "../master-register/master-register.viewmodel";

export class MeasurementBookTableViewmodel{
        id:number;
        serialNumber:string;
        description:string;
        quantity:number;
        unit:string;
        headOfAccount:string;
        masterRegister:MasterRegisterViewmodel=new MasterRegisterViewmodel();
        isDelete:boolean;
        measurementBookID:number;
        sequence:number;
}