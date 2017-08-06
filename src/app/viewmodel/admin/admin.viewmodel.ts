import {StoreViewmodel} from "../store/store.viewmodel"

export class AdminViewModel{
        id:number;
        name:string;
        description:string;
        key:string;
        isDelete:boolean;
        isActive:boolean;
        storeCollection:StoreViewmodel[];
}